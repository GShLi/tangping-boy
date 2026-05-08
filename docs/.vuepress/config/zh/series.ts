// 格物 - 侧边栏配置

function genJavaLanguage() {
  return [
    {
      text: "并发 (JUC)",
      collapsible: true,
      children: [
        "juc/README.md",
        "juc/JUC-线程的基础概念.md",
        "juc/如何创建线程.md",
        "juc/如何停止线程.md",
        "juc/线程的状态转换.md",
        "juc/JUC-并发编程的三大特性.md",
        "juc/并发编程Bug的源头.md",
        "juc/JUC-锁.md",
        "juc/阻塞队列与生产者消费者.md",
        "juc/并发工具类.md",
        "juc/并发设计模式.md",
      ],
    },
    {
      text: "IO",
      collapsible: true,
      children: [
        "io/README.md",
        "io/IO基础知识总结.md",
      ],
    },
    {
      text: "JVM",
      collapsible: true,
      children: [
        "jvm/README.md",
        "jvm/类加载器.md",
        "jvm/运行时数据区域.md",
        "jvm/执行引擎.md",
      ],
    },
  ];
}

function genSpring() {
  return [
    {
      text: "Spring 源码",
      children: [
        "02.code/实现一个简单的SpringBean容器.md",
        "02.code/实现Bean对象的定义、注册和获取.md",
      ],
    },
  ];
}

function genMyBatis() {
  return [
    {
      text: "MyBatis 使用教程",
      collapsible: false,
      children: [
        "01.course/MyBatis入门.md",
        "01.course/XML配置.md",
        "01.course/XML映射文件.md",
        "01.course/动态SQL.md",
        "01.course/日志.md",
      ],
    },
    {
      text: "MyBatis 源码分析",
      children: [
        "02.code/01.core_architecture_initialization/README.md",
        "02.code/02.sql_execution_engine/StatementHandler-SQL的雕刻家.md",
      ],
    },
  ];
}

function genMySQL() {
  return [
    {
      text: "MySQL 基础",
      children: [
        "01.basic/MySQL基础架构.md",
        "01.basic/MySQL事务.md",
      ],
    },
  ];
}

function genRedis() {
  return [
    {
      text: "Redis 基础",
      children: [
        "s1/Redis命令执行流程.md",
        "s1/Redis基础架构-数据模型和操作接口.md",
        "s1/Redis中使用的数据结构.md",
        "s1/Redis单机数据库的实现.md",
        "s1/Redis多机数据库(集群)的实现.md",
        "s1/Redis其他模块.md",
      ],
    },
  ];
}

export const series = {
  // Java 生态 — 语言层面统一入口，侧边栏分组显示 JUC / IO / JVM
  "/series/java/language/": genJavaLanguage(),
  "/series/java/language/juc/": genJavaLanguage(),
  "/series/java/language/io/": genJavaLanguage(),
  "/series/java/language/jvm/": genJavaLanguage(),
  // Spring / MyBatis
  "/series/java/spring/": genSpring(),
  "/series/java/mybatis/": genMyBatis(),
  // 数据与中间件
  "/series/data-infra/mysql/": genMySQL(),
  "/series/data-infra/redis/": genRedis(),
};
