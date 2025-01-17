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

function genFramework() {
  return [
    {
      text: "Spring",
      collapsible: true,
      children: []
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
