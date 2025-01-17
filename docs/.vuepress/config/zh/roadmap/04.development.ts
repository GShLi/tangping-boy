export function genDevelopment() {
  return [
    {
      text: "技术框架",
      collapsible: true,
      children: genFramework()
    },
    {
      text: "关系型数据库",
      collapsible: true,
      children: genRelationDatabase()
    },
    {
      text: "数据源",
      collapsible: true,
      children: []
    },
    {
      text: "分库分表",
      collapsible: true,
      children: []
    },
    {
      text: "数据同步",
      collapsible: true,
      children: []
    },
    {
      text: "消息队列",
      collapsible: true,
      children: []
    },
    {
      text: "任务调度",
      collapsible: true,
      children: []
    },
    {
      text: "搜索引擎",
      collapsible: true,
      children: []
    },
    {
      text: "对象存储",
      collapsible: true,
      children: []
    },
    {
      text: "图形存储",
      collapsible: true,
      children: []
    },
    {
      text: "NoSQL",
      collapsible: true,
      children: []
    },
    {
      text: "大数据",
      collapsible: true,
      children: []
    },
    {
      text: "注册中心",
      collapsible: true,
      children: []
    },
    {
      text: "网关",
      collapsible: true,
      children: []
    },
    {
      text: "RPC",
      collapsible: true,
      children: []
    },
  ]
}

export function genFramework() {
  return [
    {
      text: "Spring",
      collapsible: true,
      children: genSpring()
    },
    {
      text: "Spring MVC",
      collapsible: true,
      children: []
    },
    {
      text: "Spring Boot",
      collapsible: true,
      children: []
    },
    {
      text: "MyBatis",
      collapsible: true,
      children: []
    },
  ]
}

export function genSpring() {
  return [
    "01.spring/00.Intro.md",
    "01.spring/01.【手写Spring】实现一个简单的SpringBean容器.md",
    "01.spring/02.【手写Spring】实现Bean对象的定义、注册和获取.md",
    "01.spring/03.【手写Spring】基于Cglib实现含构造函数的类实例化策略.md",
    "01.spring/04.【手写Spring】注入属性和依赖对象.md",
    "01.spring/05.【手写Spring】资源加载器解析文件注册对象.md",
    "01.spring/06.【手写Spring】实现应用上下文.md",
    "01.spring/07.【手写Spring】Bean对象的初始化和销毁.md",
    "01.spring/08.【手写Spring】感知容器对象.md",
    "01.spring/09.【手写Spring】对象作用域和FactoryBean.md",
    "01.spring/10.【手写Spring】容器事件和事件监听器.md",
    "01.spring/11.【手写Spring】基于JDK、Cglib实现AOP切面.md",
    "01.spring/12.【手写Spring】把AOP融入Bean的生命周期.md",
    "01.spring/13.【手写Spring】自动扫描注册Bean对象.md",
    "01.spring/14.【手写Spring】通过注解注入属性信息.md",
    "01.spring/15.【手写Spring】给代理对象设置属性注入.md",
    "01.spring/16.【手写Spring】通过三级缓存解决循环依赖.md",
    "01.spring/17.【手写Spring】数据类型转换.md",
    "01.spring/18.【手写Spring】JDBC功能整合.md",
    "01.spring/19.【手写Spring】事务处理.md",
    "01.spring/20.【手写Spring】ORM框架实现.md",
    "01.spring/21.【手写Spring】将ORM框架整合到SpringBean容器中.md",
  ]
}

function genRelationDatabase() {
  return [
    {
      text: "MySQL",
      collapsible: true,
      children: []
    },
    {
      text: "PostgreSQL",
      collapsible: true,
      children: []
    },
    {
      text: "Oracle",
      collapsible: true,
      children: []
    },
  ]
}
