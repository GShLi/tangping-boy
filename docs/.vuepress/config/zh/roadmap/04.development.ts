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
      children: [],
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
      text: "Spring 教程",
      children: [],
    },
    {
      text: "Spring 源码",
      children: [
        "02.code/00.Intro.md",
        "02.code/01.【手写Spring】实现一个简单的SpringBean容器.md",
        "02.code/02.【手写Spring】实现Bean对象的定义、注册和获取.md",
        "02.code/03.【手写Spring】基于Cglib实现含构造函数的类实例化策略.md",
        "02.code/04.【手写Spring】注入属性和依赖对象.md",
        "02.code/05.【手写Spring】资源加载器解析文件注册对象.md",
        "02.code/06.【手写Spring】实现应用上下文.md",
        "02.code/07.【手写Spring】Bean对象的初始化和销毁.md",
        "02.code/08.【手写Spring】感知容器对象.md",
        "02.code/09.【手写Spring】对象作用域和FactoryBean.md",
        "02.code/10.【手写Spring】容器事件和事件监听器.md",
        "02.code/11.【手写Spring】基于JDK、Cglib实现AOP切面.md",
        "02.code/12.【手写Spring】把AOP融入Bean的生命周期.md",
        "02.code/13.【手写Spring】自动扫描注册Bean对象.md",
        "02.code/14.【手写Spring】通过注解注入属性信息.md",
        "02.code/15.【手写Spring】给代理对象设置属性注入.md",
        "02.code/16.【手写Spring】通过三级缓存解决循环依赖.md",
        "02.code/17.【手写Spring】数据类型转换.md",
        "02.code/18.【手写Spring】JDBC功能整合.md",
        "02.code/19.【手写Spring】事务处理.md",
        "02.code/20.【手写Spring】ORM框架实现.md",
        "02.code/21.【手写Spring】将ORM框架整合到SpringBean容器中.md",
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
        "01.course/05.Java API.md",
        "01.course/06.SQL 语句构建器.md",
        "01.course/07.日志.md",
      ],
    },
    {
      text: "MyBatis源码分析",
      children: [
        "02.code/01.core_architecture_initialization/README.md",
        "02.code/02.sql_execution_engine/README.md",
        "02.code/02.sql_execution_engine/01.Executor:SQL执行的心脏.md",
        "02.code/02.sql_execution_engine/02.StatementHandler:SQL的雕刻家.md",
        "02.code/02.sql_execution_engine/03.ResultSetHandler:结果映射的炼金术.md",
        "02.code/03.extensibility_mechanisms/README.md",
        "02.code/04.advanced_optimization_techniques/README.md",
      ],
    },
  ];
}

export function genRelationDatabase() {
  return [
    {
      text: "MySQL",
      collapsible: true,
      children: [],
    },
    {
      text: "PostgreSQL",
      collapsible: true,
      children: [],
    },
    {
      text: "Oracle",
      collapsible: true,
      children: [],
    },
  ];
}

export function genDataSource() {
  return [
    {
      text: "genDataSource",
      children: [],
    },
  ];
}
export function genShardingsphere() {
  return [
    {
      text: "genShardingsphere",
      children: [],
    },
  ];
}
export function genDataSync() {
  return [
    {
      text: "genDataSync",
      children: [],
    },
  ];
}
export function genMQ() {
  return [
    {
      text: "genMQ",
      children: [],
    },
  ];
}
export function genTaskSchedule() {
  return [
    {
      text: "genTaskSchedule",
      children: [],
    },
  ];
}
export function genSearchEngine() {
  return [
    {
      text: "genSearchEngine",
      children: [],
    },
  ];
}
export function genOSS() {
  return [
    {
      text: "genOSS",
      children: [],
    },
  ];
}
export function genGraphStore() {
  return [
    {
      text: "genGraphStore",
      children: [],
    },
  ];
}
export function genNoSql() {
  return [
    {
      text: "genNoSql",
      children: [],
    },
  ];
}
export function genBigData() {
  return [
    {
      text: "genBigData",
      children: [],
    },
  ];
}
export function genReisterCenter() {
  return [
    {
      text: "genReisterCenter",
      children: [],
    },
  ];
}
export function genGateway() {
  return [
    {
      text: "genGateway",
      children: [],
    },
  ];
}
export function genRpc() {
  return [
    {
      text: "genRpc",
      children: [],
    },
  ];
}
