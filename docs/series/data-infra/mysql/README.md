# MySQL

## 问题

1. MySQL 有哪些存储引擎，其特点分别是什么？
2. MySQL InnoDB 有哪些索引类型，其实现原理是什么？

## MySQL 有哪些存储引擎，其特点分别是什么

存储引擎：

1. InnoDB
2. MyISAM
3. NDB
4. Memory
5. Archive
6. Federated
7. Maria

### InnoDB

MySQL 5.5.8 之后的默认存储引擎。

特点

* 支持事务

使用多版本并发控制(MVCC)获得高并发性。

### MyISAM

MySQL 5.5.8 之前的默认存储引擎。

特点：

* 不支持事务。

### NDB

特点：

* 集群存储引擎，提供更高可用性。
* 数据全部存放在内存中。

### Memory

特点：

* 数据存储在内存中，断电数据会丢失。
* 采用哈希索引。
* 只支持表锁，并发性较差。

### Archive

特点：

* 只支持 Insert 和 Select 操作。
* 采用 Zlib 算法进行压缩存储。
* 支持行锁。

### Federated

特点：

* 不存储数据，其指向一台远程 MySQL 数据库服务器上的表。

## MySQL InnoDB 有哪些索引类型，其实现原理是什么

索引类型

* B+ 树索引
* 全文索引
* 哈希索引

### B+ 树索引

### 全文索引

### 哈希索引
