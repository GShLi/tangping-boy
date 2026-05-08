export function genDevelopment() {
  return [
    {
      text: "技术框架",
      collapsible: true,
      children: genFramework(),
    },
    {
      text: "关系型数据库",
      collapsible: true,
      children: genRelationDatabase(),
    },
    {
      text: "数据源",
      collapsible: true,
      children: [],
    },
    {
      text: "分库分表",
      collapsible: true,
      children: [],
    },
    {
      text: "数据同步",
      collapsible: true,
      children: [],
    },
    {
      text: "消息队列",
      collapsible: true,
      children: [],
    },
    {
      text: "任务调度",
      collapsible: true,
      children: [],
    },
    {
      text: "搜索引擎",
      collapsible: true,
      children: [],
    },
    {
      text: "对象存储",
      collapsible: true,
      children: [],
    },
    {
      text: "图形存储",
      collapsible: true,
      children: [],
    },
    {
      text: "NoSQL",
      collapsible: true,
      children: [
        {
          text: "Redis",
        },
      ],
    },
    {
      text: "大数据",
      collapsible: true,
      children: [],
    },
    {
      text: "注册中心",
      collapsible: true,
      children: [],
    },
    {
      text: "网关",
      collapsible: true,
      children: [],
    },
    {
      text: "RPC",
      collapsible: true,
      children: [],
    },
  ];
}

export function genFramework() {
  return [
    {
      text: "Spring",
      collapsible: true,
      children: genSpring(),
    },
    {
      text: "Spring MVC",
      collapsible: true,
      children: [],
    },
    {
      text: "Spring Boot",
      collapsible: true,
      children: [],
    },
    {
      text: "MyBatis",
      collapsible: true,
      children: [],
    },
  ];
}

export function genSpring() {
  return [
    {
      text: "Spring 源码",
      children: [
        "02.code/01.【手写Spring】实现一个简单的SpringBean容器.md",
        "02.code/02.【手写Spring】实现Bean对象的定义、注册和获取.md",
      ],
    },
  ];
}

export function genMyBatis() {
  return [
    {
      text: "MyBatis使用教程",
      collapsible: false,
      children: [
        "01.course/01.MyBatis入门.md",
        "01.course/02.XML配置.md",
        "01.course/03.XML映射文件.md",
        "01.course/04.动态SQL.md",
        "01.course/07.日志.md",
      ],
    },
    {
      text: "MyBatis源码分析",
      children: [
        "02.code/01.core_architecture_initialization/README.md",
        "02.code/02.sql_execution_engine/02.StatementHandler-SQL的雕刻家.md",
      ],
    },
  ];
}

export function genRelationDatabase() {
  return [
    {
      text: "MySQL",
      collapsible: true,
      children: [
        "mysql/01.basic/01.MySQL基础架构.md",
        "mysql/01.basic/02.MySQL事务.md",
      ],
    },
    // {
    //   text: "PostgreSQL",
    //   collapsible: true,
    //   children: [],
    // },
    // {
    //   text: "Oracle",
    //   collapsible: true,
    //   children: [],
    // },
  ];
}

export function genDataSource() {
  return [
    {
      text: "数据源",
      children: [],
    },
  ];
}
export function genShardingsphere() {
  return [
    {
      text: "分库分表",
      children: [],
    },
  ];
}
export function genDataSync() {
  return [
    {
      text: "数据同步",
      children: [],
    },
  ];
}
export function genMQ() {
  return [
    {
      text: "消息队列",
      children: [],
    },
  ];
}
export function genTaskSchedule() {
  return [
    {
      text: "任务调度",
      children: [],
    },
  ];
}
export function genSearchEngine() {
  return [
    {
      text: "搜索引擎",
      children: [],
    },
  ];
}
export function genOSS() {
  return [
    {
      text: "对象存储",
      children: [],
    },
  ];
}
export function genGraphStore() {
  return [
    {
      text: "图形存储",
      children: [],
    },
  ];
}

export function genRedis() {
  return [
    {
      text: "Redis基础",
      children: [
        "s1/01.Redis命令执行流程.md",
        "s1/02.Redis基础架构-数据模型和操作接口.md",
        "s1/03.Redis中使用的数据结构.md",
        "s1/04.Redis单机数据库的实现.md",
        "s1/05.Redis多机数据库(集群)的实现.md",
        "s1/06.Redis其他模块.md",
      ],
    },
  ];
}

export function genBigData() {
  return [
    {
      text: "大数据",
      children: [],
    },
  ];
}
export function genRegisterCenter() {
  return [
    {
      text: "注册中心",
      children: [],
    },
  ];
}
export function genGateway() {
  return [
    {
      text: "网关",
      children: [],
    },
  ];
}
export function genRpc() {
  return [
    {
      text: "RPC",
      children: [],
    },
  ];
}
