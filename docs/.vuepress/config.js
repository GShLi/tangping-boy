module.exports = {
  title: "躺平男孩",
  description: "Just for TangPing!",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      {
        text: "UI设计",
        link: "/ui/",
      },
      {
        text: "前端",
        items: [
          {
            text: "HTML",
            link: "/frontend/html/",
          },
          {
            text: "CSS",
            link: "/frontend/css/",
          },
          {
            text: "JavaScript",
            link: "/frontend/javascript/",
          },
          {
            text: "TypeScript",
            link: "/frontend/typescript/",
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "Web",
            link: "/backend/web/",
          },
          {
            text: "HTML",
            link: "/backend/bigdata/",
          },
          {
            text: "高并发系统",
            link: "/backend/high-concurrency/s1/01.【高并发系统】什么是高并发系统？",
          },
          {
            text: "手写 Spring",
            link: "/backend/spring/01.【手写Spring】实现一个简单的SpringBean容器.md",
          },
        ],
      },
      {
        text: "运维",
        link: "/devops/",
      },
      {
        text: "软件工具",
        link: "/tools/",
      },
      {
        text: "时光机",
        link: "/archive/",
      },
      { text: "Gitee", link: "https://gitee.com/Double_Float/" },
      { text: "Github", link: "https://github.com/Double327/" },
    ],
    sidebar: {
      "/ui/": [
        "",
        {
          title: "Sketch",
          collapsable: true,
          children: ["sketch/", "sketch/1"],
        },
      ],
      "/frontend/": [
        {
          title: "HTML",
          collapsable: true,
          children: ["html/", "html/1"],
        },
        {
          title: "CSS",
          collapsable: true,
          children: ["css/", "css/1"],
        },
        {
          title: "JavaScript",
          collapsable: true,
          children: ["javascript/"],
        },
        {
          title: "TypeScript",
          collapsable: true,
          children: ["typescript/"],
        },
      ],
      "/backend/web/": [
        {
          title: "Web",
          children: ["web/"],
        },
      ],
      "/backend/bigdata/": [
        {
          title: "大数据",
          children: ["bigdata/"],
        },
      ],
      "/backend/high-concurrency/": genHighCourrency(),
      "/backend/spring/": genSpring(),
      "/devops/": [
        "",
        {
          title: "Docker",
          collapsable: true,
          children: [
            "docker/",
            "docker/00.Docker基本使用",
            "docker/01.Docker网络",
            "docker/02.阿里云镜像仓库",
          ],
        },
      ],
      "/tools/": [""],
    },
    lastUpdated: "上次修改时间",
  },
  plugins: [["vuepress-plugin-code-copy", true]],
};

function genHighCourrency() {
  return [
    {
      title: "高并发系统认知",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s1/01.【高并发系统】什么是高并发系统？.md",
        "s1/02.【高并发系统】从剖析两个高并发系统开始.md",
      ],
    },
    {
      title: "搭建生产级系统",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s2/01.【高并发系统】生产级系统框架设计的细节.md",
        "s2/02.【高并发系统】快速部署上线.md",
        "s2/03.【高并发系统】生产环境监测.md",
      ],
    },
    {
      title: "专项突破",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s3/01.【高并发系统】应用集群化.md",
        "s3/02.【高并发系统】缓存设计.md",
        "s3/03.【高并发系统】存储系统设计.md",
        "s3/04.【高并发系统】搜索引擎——让查询更便捷.md",
        "s3/05.【高并发系统】消息中间件——解耦业务系统与核心系统.md",
        "s3/06.【高并发系统】微服务设计——将系统拆分.md",
        "s3/07.【高并发系统】API网关设计——让服务井然有序.md",
      ],
    },
    {
      title: "高并发项目设计与实战",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s4/01.【高并发系统】高并发系统设计原则.md",
        "s4/02.【高并发系统】【项目实战】搭建千万级流量“秒杀”系统.md",
        "s4/03.【高并发系统】【项目实战】搭建C2C二手电商的社会化治理系统.md",
      ],
    },
    {
      title: "运维监控",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s5/01.【高并发系统】运维之术——告别加班.md",
        "s5/02.【高并发系统】监控之术——天使之眼.md",
      ],
    },
  ];
}

function genSpring() {
  return [
    {
      title: "手写 Spring",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "01.【手写Spring】实现一个简单的SpringBean容器.md",
        "02.【手写Spring】实现Bean对象的定义、注册和获取",
        "03.【手写Spring】基于Cglib实现含构造函数的类实例化策略",
        "04.【手写Spring】注入属性和依赖对象",
        "05.【手写Spring】资源加载器解析文件注册对象",
        "06.【手写Spring】实现应用上下文",
        "07.【手写Spring】Bean对象的初始化和销毁",
        "08.【手写Spring】感知容器对象",
        "09.【手写Spring】对象作用域和FactoryBean",
        "10.【手写Spring】容器事件和事件监听器",
        "11.【手写Spring】基于JDK、Cglib实现AOP切面",
        "12.【手写Spring】把AOP融入Bean的生命周期",
        "13.【手写Spring】自动扫描注册Bean对象",
        "14.【手写Spring】通过注解注入属性信息",
        "15.【手写Spring】给代理对象设置属性注入",
        "16.【手写Spring】通过三级缓存解决循环依赖",
        "17.【手写Spring】数据类型转换",
        "18.【手写Spring】JDBC功能整合",
        "19.【手写Spring】事务处理",
        "20.【手写Spring】ORM框架实现",
        "21.【手写Spring】将ORM框架整合到Spring Bean容器中",
      ],
    },
  ];
}
