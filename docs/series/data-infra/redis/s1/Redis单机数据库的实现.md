# Redis 单机数据库的实现

## 1. 数据库

### Redis 数据库基本数据结构

Redis 服务器的信息保存在 `redisServer` 的数据结构中。

`server.h` 文件：

```c
struct redisServer {
    /* General */
    pid_t pid;                  /* Main process pid. */
    redisDb *db;
    /* Configuration */
    int dbnum;                      /* Total number of configured DBs */
}
```

db 是一个指向数组的指针，该数据保存了 Redis 服务器所有的数据库信息。

dbnum 则表示当前 Redis 服务器有多少个数据库。

`server.h` 文件：

```c
/* Redis database representation. There are multiple databases identified
 * by integers from 0 (the default database) up to the max configured
 * database. The database number is the 'id' field in the structure. */
typedef struct redisDb {
    kvstore *keys;              /* The keyspace for this DB */
    kvstore *expires;           /* Timeout of keys with a timeout set */
    ebuckets hexpires;          /* Hash expiration DS. Single TTL per hash (of next min field to expire) */
    dict *blocking_keys;        /* Keys with clients waiting for data (BLPOP)*/
    dict *blocking_keys_unblock_on_nokey;   /* Keys with clients waiting for
                                             * data, and should be unblocked if key is deleted (XREADEDGROUP).
                                             * This is a subset of blocking_keys*/
    dict *ready_keys;           /* Blocked keys that received a PUSH */
    dict *watched_keys;         /* WATCHED keys for MULTI/EXEC CAS */
    int id;                     /* Database ID */
    long long avg_ttl;          /* Average TTL, just for stats */
    unsigned long expires_cursor; /* Cursor of the active expire cycle. */
    list *defrag_later;         /* List of key names to attempt to defrag one by one, gradually. */
} redisDb;
```

Redis 服务器中的每一个数据库都由一个 `redisDb` 表示。

redisDb 记录了数据库中所有键值对的地址信息 (keys), 键值对的过期事件 (expires), 数据库 ID(id) 等信息。

其中 `keys` 指向的 `kvstore` 存储了当前数据库所有的键值对信息。

`kvstore.h` 文件：

```c
typedef struct _kvstore kvstore;
```

`kvstore.c` 文件：

```c
struct _kvstore {
    int flags;
    dictType dtype;
    dict **dicts;
    long long num_dicts;
    long long num_dicts_bits;
    list *rehashing;                       /* List of dictionaries in this kvstore that are currently rehashing. */
    int resize_cursor;                     /* Cron job uses this cursor to gradually resize dictionaries (only used if num_dicts > 1). */
    int allocated_dicts;                   /* The number of allocated dicts. */
    int non_empty_dicts;                   /* The number of non-empty dicts. */
    unsigned long long key_count;          /* Total number of keys in this kvstore. */
    unsigned long long bucket_count;       /* Total number of buckets in this kvstore across dictionaries. */
    unsigned long long *dict_size_index;   /* Binary indexed tree (BIT) that describes cumulative key frequencies up until given dict-index. */
    size_t overhead_hashtable_lut;         /* The overhead of all dictionaries. */
    size_t overhead_hashtable_rehashing;   /* The overhead of dictionaries rehashing. */
};
```

![alt text](../images/1cc8eaed5d1ca4e3cdbaa5a3d48dfb5f.jpg)

### 添加键

向 Redis 数据库中添加键，即向 kvstore 新增一个键值对。

### 删除键

从 Redis 数据库中删除键，即从 kvstore 删除一个键值对。

### 修改键

修改 Redis 数据库中的键值对，即修改 kvstore 中的键值对。

### 查询键

### 键过期时间

```c
/* Return values for expireIfNeeded */
typedef enum {
    KEY_VALID = 0, /* Could be volatile and not yet expired, non-volatile, or even non-existing key. */
    KEY_EXPIRED, /* Logically expired but not yet deleted. */
    KEY_DELETED /* The key was deleted now. */
} keyStatus;
```

在 `redisDb` 中除了 `keys` 外还存储了另外一个字典 `expires`, 该字典的 key 同 `keys` 一样，存储着键值对的键，而值存储的是该键所对应键值对的过期时间，因此该字典也被称为 `过期字典`。

过期时间是一个毫秒精度的 UNIX 时间戳。

#### 过期键的删除策略

过期键的删除策略：

* 定时删除
* 惰性删除
* 定期删除

#### 定时删除

通过定时器，当键过期时会立即从内存中删除并释放内存空间。

优点：

* 节省内存空间，避免过期的键值对长期占用内存。

缺点：

* 浪费 CPU 时间

#### 惰性删除

当对键访问时判断键是否已经过期，如果过期就删除并释放内存空间。

有点：

* 对 CPU 是友好的。

缺点：

* 当键值对永远不访问时，会一直占用内存空间不会释放。

实现方式，再执行读写操作的 Redis 命令前都会执行 `expireIfNeeded` 函数对键进行检查。

`(db.c) 文件`：

```c
keyStatus expireIfNeeded(redisDb *db, robj *key, int flags) {
    if (server.lazy_expire_disabled) return KEY_VALID;
    if (!keyIsExpired(db,key)) return KEY_VALID;

    /* If we are running in the context of a replica, instead of
     * evicting the expired key from the database, we return ASAP:
     * the replica key expiration is controlled by the master that will
     * send us synthesized DEL operations for expired keys. The
     * exception is when write operations are performed on writable
     * replicas.
     *
     * Still we try to return the right information to the caller,
     * that is, KEY_VALID if we think the key should still be valid,
     * KEY_EXPIRED if we think the key is expired but don't want to delete it at this time.
     *
     * When replicating commands from the master, keys are never considered
     * expired. */
    if (server.masterhost != NULL) {
        if (server.current_client && (server.current_client->flags & CLIENT_MASTER)) return KEY_VALID;
        if (!(flags & EXPIRE_FORCE_DELETE_EXPIRED)) return KEY_EXPIRED;
    }

    /* In some cases we're explicitly instructed to return an indication of a
     * missing key without actually deleting it, even on masters. */
    if (flags & EXPIRE_AVOID_DELETE_EXPIRED)
        return KEY_EXPIRED;

    /* If 'expire' action is paused, for whatever reason, then don't expire any key.
     * Typically, at the end of the pause we will properly expire the key OR we
     * will have failed over and the new primary will send us the expire. */
    if (isPausedActionsWithUpdate(PAUSE_ACTION_EXPIRE)) return KEY_EXPIRED;

    /* The key needs to be converted from static to heap before deleted */
    int static_key = key->refcount == OBJ_STATIC_REFCOUNT;
    if (static_key) {
        key = createStringObject(key->ptr, sdslen(key->ptr));
    }
    /* Delete the key */
    deleteExpiredKeyAndPropagate(db,key);
    if (static_key) {
        decrRefCount(key);
    }
    return KEY_DELETED;
}
```

#### 定期删除

定期删除每隔一段时间会清理一次过期键，可以设置定期删除的执行时常和执行间隔。

`expire.c` 文件：

```c
void activeExpireCycle(int type) {
    /* Adjust the running parameters according to the configured expire
     * effort. The default effort is 1, and the maximum configurable effort
     * is 10. */
    unsigned long
    effort = server.active_expire_effort-1, /* Rescale from 0 to 9. */
    config_keys_per_loop = ACTIVE_EXPIRE_CYCLE_KEYS_PER_LOOP +
                           ACTIVE_EXPIRE_CYCLE_KEYS_PER_LOOP/4*effort,
    config_cycle_fast_duration = ACTIVE_EXPIRE_CYCLE_FAST_DURATION +
                                 ACTIVE_EXPIRE_CYCLE_FAST_DURATION/4*effort,
    config_cycle_slow_time_perc = ACTIVE_EXPIRE_CYCLE_SLOW_TIME_PERC +
                                  2*effort,
    config_cycle_acceptable_stale = ACTIVE_EXPIRE_CYCLE_ACCEPTABLE_STALE-
                                    effort;

    /* This function has some global state in order to continue the work
     * incrementally across calls. */
    static unsigned int current_db = 0; /* Next DB to test. */
    static int timelimit_exit = 0;      /* Time limit hit in previous call? */
    static long long last_fast_cycle = 0; /* When last fast cycle ran. */

    int j, iteration = 0;
    int dbs_per_call = CRON_DBS_PER_CALL;
    int dbs_performed = 0;
    long long start = ustime(), timelimit, elapsed;

    /* If 'expire' action is paused, for whatever reason, then don't expire any key.
     * Typically, at the end of the pause we will properly expire the key OR we
     * will have failed over and the new primary will send us the expire. */
    if (isPausedActionsWithUpdate(PAUSE_ACTION_EXPIRE)) return;

    if (type == ACTIVE_EXPIRE_CYCLE_FAST) {
        /* Don't start a fast cycle if the previous cycle did not exit
         * for time limit, unless the percentage of estimated stale keys is
         * too high. Also never repeat a fast cycle for the same period
         * as the fast cycle total duration itself. */
        if (!timelimit_exit &&
            server.stat_expired_stale_perc < config_cycle_acceptable_stale)
            return;

        if (start < last_fast_cycle + (long long)config_cycle_fast_duration*2)
            return;

        last_fast_cycle = start;
    }

    /* We usually should test CRON_DBS_PER_CALL per iteration, with
     * two exceptions:
     *
     * 1) Don't test more DBs than we have.
     * 2) If last time we hit the time limit, we want to scan all DBs
     * in this iteration, as there is work to do in some DB and we don't want
     * expired keys to use memory for too much time. */
    if (dbs_per_call > server.dbnum || timelimit_exit)
        dbs_per_call = server.dbnum;

    /* We can use at max 'config_cycle_slow_time_perc' percentage of CPU
     * time per iteration. Since this function gets called with a frequency of
     * server.hz times per second, the following is the max amount of
     * microseconds we can spend in this function. */
    timelimit = config_cycle_slow_time_perc*1000000/server.hz/100;
    timelimit_exit = 0;
    if (timelimit <= 0) timelimit = 1;

    if (type == ACTIVE_EXPIRE_CYCLE_FAST)
        timelimit = config_cycle_fast_duration; /* in microseconds. */

    /* Accumulate some global stats as we expire keys, to have some idea
     * about the number of keys that are already logically expired, but still
     * existing inside the database. */
    long total_sampled = 0;
    long total_expired = 0;

    /* Try to smoke-out bugs (server.also_propagate should be empty here) */
    serverAssert(server.also_propagate.numops == 0);

    /* Stop iteration when one of the following conditions is met:
     *
     * 1) We have checked a sufficient number of databases with expiration time.
     * 2) The time limit has been exceeded.
     * 3) All databases have been traversed. */
    for (j = 0; dbs_performed < dbs_per_call && timelimit_exit == 0 && j < server.dbnum; j++) {
        /* Scan callback data including expired and checked count per iteration. */
        expireScanData data;
        data.ttl_sum = 0;
        data.ttl_samples = 0;

        redisDb *db = server.db+(current_db % server.dbnum);
        data.db = db;

        int db_done = 0; /* The scan of the current DB is done? */
        int update_avg_ttl_times = 0, repeat = 0;

        /* Increment the DB now so we are sure if we run out of time
         * in the current DB we'll restart from the next. This allows to
         * distribute the time evenly across DBs. */
        current_db++;

        /* Interleaving hash-field expiration with key expiration. Better
         * call it before handling expired keys because HFE DS is optimized for
         * active expiration */
        activeExpireHashFieldCycle(type);

        if (kvstoreSize(db->expires))
            dbs_performed++;

        /* Continue to expire if at the end of the cycle there are still
         * a big percentage of keys to expire, compared to the number of keys
         * we scanned. The percentage, stored in config_cycle_acceptable_stale
         * is not fixed, but depends on the Redis configured "expire effort". */
        do {
            unsigned long num;
            iteration++;

            /* If there is nothing to expire try next DB ASAP. */
            if ((num = kvstoreSize(db->expires)) == 0) {
                db->avg_ttl = 0;
                break;
            }
            data.now = mstime();

            /* The main collection cycle. Scan through keys among keys
             * with an expire set, checking for expired ones. */
            data.sampled = 0;
            data.expired = 0;

            if (num > config_keys_per_loop)
                num = config_keys_per_loop;

            /* Here we access the low level representation of the hash table
             * for speed concerns: this makes this code coupled with dict.c,
             * but it hardly changed in ten years.
             *
             * Note that certain places of the hash table may be empty,
             * so we want also a stop condition about the number of
             * buckets that we scanned. However scanning for free buckets
             * is very fast: we are in the cache line scanning a sequential
             * array of NULL pointers, so we can scan a lot more buckets
             * than keys in the same time. */
            long max_buckets = num*20;
            long checked_buckets = 0;

            int origin_ttl_samples = data.ttl_samples;

            while (data.sampled < num && checked_buckets < max_buckets) {
                db->expires_cursor = kvstoreScan(db->expires, db->expires_cursor, -1, expireScanCallback, isExpiryDictValidForSamplingCb, &data);
                if (db->expires_cursor == 0) {
                    db_done = 1;
                    break;
                }
                checked_buckets++;
            }
            total_expired += data.expired;
            total_sampled += data.sampled;

            /* If find keys with ttl not yet expired, we need to update the average TTL stats once. */
            if (data.ttl_samples - origin_ttl_samples > 0) update_avg_ttl_times++;

            /* We don't repeat the cycle for the current database if the db is done
             * for scanning or an acceptable number of stale keys (logically expired
             * but yet not reclaimed). */
            repeat = db_done ? 0 : (data.sampled == 0 || (data.expired * 100 / data.sampled) > config_cycle_acceptable_stale);

            /* We can't block forever here even if there are many keys to
             * expire. So after a given amount of microseconds return to the
             * caller waiting for the other active expire cycle. */
            if ((iteration & 0xf) == 0 || !repeat) { /* Update the average TTL stats every 16 iterations or about to exit. */
                /* Update the average TTL stats for this database,
                 * because this may reach the time limit. */
                if (data.ttl_samples) {
                    long long avg_ttl = data.ttl_sum / data.ttl_samples;

                    /* Do a simple running average with a few samples.
                     * We just use the current estimate with a weight of 2%
                     * and the previous estimate with a weight of 98%. */
                    if (db->avg_ttl == 0) {
                        db->avg_ttl = avg_ttl;
                    } else {
                        /* The origin code is as follow.
                         * for (int i = 0; i < update_avg_ttl_times; i++) {
                         *   db->avg_ttl = (db->avg_ttl/50)*49 + (avg_ttl/50);
                         * }
                         * We can convert the loop into a sum of a geometric progression.
                         * db->avg_ttl = db->avg_ttl * pow(0.98, update_avg_ttl_times) +
                         *                  avg_ttl / 50 * (pow(0.98, update_avg_ttl_times - 1) + ... + 1)
                         *             = db->avg_ttl * pow(0.98, update_avg_ttl_times) +
                         *                  avg_ttl * (1 - pow(0.98, update_avg_ttl_times))
                         *             = avg_ttl +  (db->avg_ttl - avg_ttl) * pow(0.98, update_avg_ttl_times)
                         * Notice that update_avg_ttl_times is between 1 and 16, we use a constant table
                         * to accelerate the calculation of pow(0.98, update_avg_ttl_times).*/
                        db->avg_ttl = avg_ttl + (db->avg_ttl - avg_ttl) * avg_ttl_factor[update_avg_ttl_times - 1] ;
                    }
                    update_avg_ttl_times = 0;
                    data.ttl_sum = 0;
                    data.ttl_samples = 0;
                }
                if ((iteration & 0xf) == 0) { /* check time limit every 16 iterations. */
                    elapsed = ustime()-start;
                    if (elapsed > timelimit) {
                        timelimit_exit = 1;
                        server.stat_expired_time_cap_reached_count++;
                        break;
                    }
                }
            }
        } while (repeat);
    }

    elapsed = ustime()-start;
    server.stat_expire_cycle_time_used += elapsed;
    latencyAddSampleIfNeeded("expire-cycle",elapsed/1000);

    /* Update our estimate of keys existing but yet to be expired.
     * Running average with this sample accounting for 5%. */
    double current_perc;
    if (total_sampled) {
        current_perc = (double)total_expired/total_sampled;
    } else
        current_perc = 0;
    server.stat_expired_stale_perc = (current_perc*0.05)+
                                     (server.stat_expired_stale_perc*0.95);
}
```

## 2. 客户端

切换数据库

`db.c` 文件：

```c
int selectDb(client *c, int id) {
    if (id < 0 || id >= server.dbnum)
        return C_ERR;
    c->db = &server.db[id];
    return C_OK;
}
```

## 3. RDB 持久化

数据库状态：服务器中所有非空数据库及其键值对统称为数据库状态。

RDB 持久化：将 `数据库状态` 写入磁盘的操作。

解决的问题：Redis 的数据库状态是存储在内存中的，为避免 Redis 服务器进程退出导致内存中的状态丢失。

### 持久化策略

* 手动保存
* 自动间隔保存

### 手动保存

* `SAVE`
* `BGSAVE`

上面两条命令都可以创建 RDB 文件，不同的是 `SAVE` 由 Redis 主进程执行，会阻塞服务器。`BGSAVE` 由子进程执行不会阻塞服务器。

### 自动间隔保存

自动间隔保存则是当 RDB 保存条件满足时自动执行 `BGSAVE`。

在 `redisServer` 结构中的 `saveparams` 存储了自动保存的条件。

`server.h` 文件：

```c
struct saveparam {
    time_t seconds;
    int changes;
};

struct redisServer {
    // others
    /* RDB persistence */
    long long dirty;                /* Changes to DB from the last save */
    time_t lastsave;                /* Unix time of last successful save */
    struct saveparam *saveparams;   /* Save points array for RDB */
    // others
}
```

::: tip
dirty: 自上次保存后数据库进行了多少次修改。

lastsave: 上次执行 `SAVE` 和 `BGSAVE` 的时间。
:::

```bash
save 360 1
save 300 100
save 60 10000
```

上述的配置表示：

* 360 秒内数据库至少修改了 1 次
* 300 秒内数据库至少修改了 100 次
* 60 秒内数据库至少修改了 10000 次

当三个条件的任意一个满足时都会触发自动保存 RDB。

`server.c` 文件中的 `serverCron` 函数中包含了定期检查的逻辑。

```c
for (j = 0; j < server.saveparamslen; j++) {
    struct saveparam *sp = server.saveparams+j;
    /* Save if we reached the given amount of changes,
     * the given amount of seconds, and if the latest bgsave was
     * successful or if, in case of an error, at least
     * CONFIG_BGSAVE_RETRY_DELAY seconds already elapsed. */
    if (server.dirty >= sp->changes &&
        server.unixtime-server.lastsave > sp->seconds &&
        (server.unixtime-server.lastbgsave_try >
         CONFIG_BGSAVE_RETRY_DELAY ||
         server.lastbgsave_status == C_OK))
    {
        serverLog(LL_NOTICE,"%d changes in %d seconds. Saving...",
            sp->changes, (int)sp->seconds);
        rdbSaveInfo rsi, *rsiptr;
        rsiptr = rdbPopulateSaveInfo(&rsi);
        rdbSaveBackground(SLAVE_REQ_NONE,server.rdb_filename,rsiptr,RDBFLAGS_NONE);
        break;
    }
}
```

## 4. AOF 持久化

```c
/* Trigger an AOF rewrite if needed. */
if (server.aof_state == AOF_ON &&
    !hasActiveChildProcess() &&
    server.aof_rewrite_perc &&
    server.aof_current_size > server.aof_rewrite_min_size)
{
    long long base = server.aof_rewrite_base_size ?
        server.aof_rewrite_base_size : 1;
    long long growth = (server.aof_current_size*100/base) - 100;
    if (growth >= server.aof_rewrite_perc && !aofRewriteLimited()) {
        serverLog(LL_NOTICE,"Starting automatic rewriting of AOF on %lld%% growth",growth);
        rewriteAppendOnlyFileBackground();
    }
}
```

## 5. 事件

## 6. 客户端

## 7. 服务器
