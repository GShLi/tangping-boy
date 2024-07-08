module.exports = {
  title: "躺平男孩",
  description: "Just for TangPing!",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      // {
      //   text: "设计",
      //   link: "/ui/",
      // },
      {
        text: "面向对象",
        items: [
          {
            text: "设计模式",
            link: "/develop/design-patterns/",
          },
        ],
      },
      // {
      //   text: "前端",
      //   items: [
      //     {
      //       text: "HTML",
      //       link: "/frontend/html/",
      //     },
      //     {
      //       text: "CSS",
      //       link: "/frontend/css/",
      //     },
      //     {
      //       text: "JavaScript",
      //       link: "/frontend/javascript/",
      //     },
      //     {
      //       text: "TypeScript",
      //       link: "/frontend/typescript/",
      //     },
      //     {
      //       text: "Vue2",
      //       link: "/frontend/vue/",
      //     },
      //   ],
      // },
      {
        text: "后端",
        items: [
          // {
          //   text: "Web",
          //   link: "/backend/web/",
          // },
          {
            text: "Java",
            link: "/backend/java/",
          },
          // {
          //   text: "大数据",
          //   link: "/backend/bigdata/",
          // },
          // {
          //   text: "高并发系统",
          //   link: "/backend/high-concurrency/s1/01.【高并发系统】什么是高并发系统？",
          // },
          {
            text: "手写 Spring",
            link: "/backend/spring/00.Intro.md",
          },
          {
            text: "Redis",
            link: "/backend/redis/"
          },
          {
            text: "RabbitMQ",
            link: "/backend/rabbitmq/"
          }
        ],
      },
      {
        text: "大数据",
        items: [
          {
            text: "Spark",
            link: "/bigdata/spark/00.Spark介绍.md"
          }
        ]
      },
      {
        text: "运维",
        items: [
          {
            text: "Docker",
            link: "/devops/docker/",
          },
          {
            text: "Kubernates",
            link: "/devops/kubernates/",
          },
          {
            text: "Linux",
            link: "/devops/linux/"
          }
        ],
      },
      {
        text: "实战项目",
        items: [
          {
            text: "布尔商城",
            link: "/project/doublemall/",
          },
          {
            text: "二维码扫描登录原理",
            link: "/project/qrcode-login/",
          },
        ],
      },
      {
        text: "软件工具",
        link: "/tools/",
      },
      // {
      //   text: "时光机",
      //   link: "/archive/",
      // },
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
      "/frontend/html/": genHtml(),
      "/frontend/css/": genCss(),
      // "/frontend/javascript/": genJavaScript(),
      // "/frontend/typescript/": genTypeScript(),
      "/frontend/vue/": genVue2(),
      "/develop/design-patterns/": genDesignPatterns(),
      "/backend/web/": [
        {
          title: "Web",
          collapsable: false,
          sidebarDepth: 2,
          children: ["Guide.md"],
        },
      ],
      "/backend/java/": genJava(),
      "/backend/bigdata/": [
        {
          title: "大数据",
          collapsable: false,
          sidebarDepth: 2,
          children: [""],
        },
      ],
      "/backend/high-concurrency/": genHighConcurrency(),
      "/backend/spring/": genSpring(),
      "/backend/redis/": genRedis(),
      "/backend/rabbitmq/": genRabbitMQ(),
      "/bigdata/spark/": genSpark(),
      "/devops/docker/": genDocker(),
      "/devops/kubernates/": genKubernates(),
      "/devops/linux/": genLinux(),
      "/project/doublemall/": getDoubleMall(),
      "/tools/": [""],
    },
    lastUpdated: "上次修改时间",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "/images",
      },
    },
  },
};

function genHtml() {
  return [
    {
      title: "HTML",
      collapsable: true,
      children: ["Guide.md"],
    },
  ];
}

function genCss() {
  return [
    {
      title: "CSS",
      collapsable: true,
      children: ["Guide.md"],
    },
  ];
}

function genJavaScript() {
  return [
    {
      title: "JavaScript",
      collapsable: true,
      children: ["Guide.md"],
    },
  ];
}

function genTypeScript() {
  return [
    {
      title: "TypeScript",
      collapsable: true,
      children: ["Guide.md"],
    },
  ];
}

function genVue2() {
  return [
    {
      title: "Vue",
      collapsable: true,
      sidebarDepth: 2,
      children: ["", "中文链接转拼音.md"],
    },
  ];
}

function genHighConcurrency() {
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
    // {
    //   title: "搭建生产级系统",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s2/01.【高并发系统】生产级系统框架设计的细节.md",
    //     "s2/02.【高并发系统】快速部署上线.md",
    //     "s2/03.【高并发系统】生产环境监测.md",
    //   ],
    // },
    // {
    //   title: "专项突破",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s3/01.【高并发系统】应用集群化.md",
    //     "s3/02.【高并发系统】缓存设计.md",
    //     "s3/03.【高并发系统】存储系统设计.md",
    //     "s3/04.【高并发系统】搜索引擎——让查询更便捷.md",
    //     "s3/05.【高并发系统】消息中间件——解耦业务系统与核心系统.md",
    //     "s3/06.【高并发系统】微服务设计——将系统拆分.md",
    //     "s3/07.【高并发系统】API网关设计——让服务井然有序.md",
    //   ],
    // },
    // {
    //   title: "高并发项目设计与实战",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s4/01.【高并发系统】高并发系统设计原则.md",
    //     "s4/02.【高并发系统】【项目实战】搭建千万级流量“秒杀”系统.md",
    //     "s4/03.【高并发系统】【项目实战】搭建C2C二手电商的社会化治理系统.md",
    //   ],
    // },
    // {
    //   title: "运维监控",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s5/01.【高并发系统】运维之术——告别加班.md",
    //     "s5/02.【高并发系统】监控之术——天使之眼.md",
    //   ],
    // },
  ];
}

function genSpring() {
  return [
    {
      title: "手写 Spring",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "00.Intro.md",
        "01.【手写Spring】实现一个简单的SpringBean容器.md",
        "02.【手写Spring】实现Bean对象的定义、注册和获取.md",
        // "03.【手写Spring】基于Cglib实现含构造函数的类实例化策略.md",
        // "04.【手写Spring】注入属性和依赖对象.md",
        // "05.【手写Spring】资源加载器解析文件注册对象.md",
        // "06.【手写Spring】实现应用上下文.md",
        // "07.【手写Spring】Bean对象的初始化和销毁.md",
        // "08.【手写Spring】感知容器对象.md",
        // "09.【手写Spring】对象作用域和FactoryBean.md",
        // "10.【手写Spring】容器事件和事件监听器.md",
        // "11.【手写Spring】基于JDK、Cglib实现AOP切面.md",
        // "12.【手写Spring】把AOP融入Bean的生命周期.md",
        // "13.【手写Spring】自动扫描注册Bean对象.md",
        // "14.【手写Spring】通过注解注入属性信息.md",
        // "15.【手写Spring】给代理对象设置属性注入.md",
        // "16.【手写Spring】通过三级缓存解决循环依赖.md",
        // "17.【手写Spring】数据类型转换.md",
        // "18.【手写Spring】JDBC功能整合.md",
        // "19.【手写Spring】事务处理.md",
        // "20.【手写Spring】ORM框架实现.md",
        // "21.【手写Spring】将ORM框架整合到SpringBean容器中.md",
      ],
    },
  ];
}

function genRedis() {
  return [
    {
      title: "Redis 基础",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s1/01.Redis命令执行流程.md",
        "s1/02.Redis基础架构-数据模型和操作接口.md",
        "s1/03.Redis中使用的数据结构.md"
      ]
    }
  ]
}

function genRabbitMQ() {
  return [
    {
      title: "RabbitMQ 基础",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s1/00.安装RabbitMQ.md"
      ]
    }
  ]
}

function genSpark() {
  return [
    {
      title: "Spark 介绍",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "00.Spark介绍.md"
      ]
    },
    {
      title: "Spark Core",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "spark-core/00.SparkCore介绍.md"
      ]
    },
    {
      title: "Spark SQL",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "spark-sql/00.SparkSQL介绍.md"
      ]
    },
    {
      title: "Spark Stream",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "spark-stream/00.SparkStream介绍.md"
      ]
    }
  ]
}

function genDocker() {
  return [
    {
      title: "Docker",
      collapsable: true,
      sidebarDepth: 2,
      children: ["00.Docker基本使用", "01.Docker网络", "02.阿里云镜像仓库"],
    },
  ];
}

function genKubernates() {
  return [
    {
      title: "介绍",
      collapsable: false,
      sidebarDepth: 2,
      children: ["", "01.安装.md"]
    },
    // {
    //   title: "容器技术概念入门",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s1/01.进程.md",
    //     "s1/02.隔离与限制.md",
    //     "s1/03.深入理解容器镜像.md",
    //     "s1/04.重新认识Docker容器.md",
    //     "s1/05.Kubernates的本质.md",
    //   ],
    // },
    // {
    //   title: "K8S集群搭建与实践",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s2/01.Kubernetes一键部署利器-kubeadm.md",
    //     "s2/02.从0到1-搭建一个完整的Kubernetes集群.md",
    //     "s2/03.牛刀小试-我的第一个容器化应用.md",
    //   ],
    // },
    // {
    //   title: "容器编排与K8S作业管理",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s3/01.为什么我们需要Pod.md",
    //     "s3/02.深入理解Pod对象-基本概念.md",
    //     "s3/03.深入理解Pod对象-使用进阶.md",
    //     "s3/04.控制器模型.md",
    //     "s3/05.作业副本与水平扩展.md",
    //     "s3/06.深入理解StateFulSet-拓扑状态.md",
    //     "s3/07.深入理解StateFulSet-存储状态.md",
    //     "s3/08.深入理解StateFulSet-有状态应用实践.md",
    //     "s3/09.容器化守护进程的意义-DaemonSet.md",
    //     "s3/10.撬动离线业务-Job与CronJob.md",
    //     "s3/11.声明式API与Kubernates编程规范.md",
    //     "s3/12.深入理解声明式API-API对象的奥秘.md",
    //     "s3/13.深入理解声明式API-编写自定义控制器.md",
    //     "s3/14.基于角色的权限控制-RBAC.md",
    //     "s3/15.Operator工作原理解读.md",
    //   ],
    // },
    // {
    //   title: "K8S持久化存储",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s4/01.PV_PVC_StorageClass,这些到底在说啥.md",
    //     "s4/02.PV_PVC体系是不是多此一举,从本地持久化卷谈起.md",
    //     "s4/03.编写自己的存储插件-FlexVolume与CSI.md",
    //     "s4/04.容器存储实践-CSI插件编写指南.md",
    //   ],
    // },
    // {
    //   title: "K8S容器网络",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s5/01.浅谈容器网络.md",
    //     "s5/02.深入解析容器跨主机网络.md",
    //     "s5/03.Kubernetes网络模型与CNI网络插件.md",
    //     "s5/04.解读Kubernetes三层网络方案.md",
    //     "s5/05.为什么说Kubernetes只有softmulti-tenancy.md",
    //     "s5/06.找到容器不容易-Service_DNS与服务发现.md",
    //     "s5/07.从外界连通Service与Service调试三板斧.md",
    //     "s5/08.谈谈Service与Ingress.md",
    //   ],
    // },
    // {
    //   title: "K8S作业调度与资源管理",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s6/01.Kubernetes的资源模型与资源管理.md",
    //     "s6/02.十字路口上的Kubernetes默认调度器.md",
    //     "s6/03.Kubernetes默认调度器调度策略解析.md",
    //     "s6/04.Kubernetes默认调度器的优先级与抢占机制.md",
    //     "s6/05.KubernetesGPU管理与DevicePlugin机制.md",
    //   ],
    // },
    // {
    //   title: "K8S容器运行时",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s7/01.幕后英雄_SIG-Node与CRI.md",
    //     "s7/02.解读CRI与容器运行时.md",
    //     "s7/03.绝不仅仅是安全_KataContainers与gVisor.md",
    //   ],
    // },
    // {
    //   title: "K8S容器监控与日志",
    //   collapsable: false,
    //   sidebarDepth: 2,
    //   children: [
    //     "s8/01.Prometheus_MetricsServer与Kubernetes监控体系.md",
    //     "s8/02.CustomMetrics_让AutoScaling不再食之无味.md",
    //     "s8/03.让日志无处可逃_容器日志收集与管理.md",
    //   ],
    // },
  ];
}

function genLinux() {
  return [
    {
      title: "Centos",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "centos/01.Centos7搭建Gitlab环境.md",
        "centos/02.五步配置GitHubSSH.md",
        "centos/03.yum常用命令.md",
        "centos/ASC校验文件.md",
        "centos/Gitlab持续集成、持续部署.md"
      ]
    },
    {
      title: "OpenEuler",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "openeuler/配置yum源.md",
        "openeuler/网络配置.md"
      ]
    }
  ]
}

function genDesignPatterns() {
  return [
    {
      title: "创建型模式",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "s1-创建型模式/01.工厂方法模式.md",
        "s1-创建型模式/02.抽象工厂模式.md",
        "s1-创建型模式/03.生成器模式.md",
      ],
    },
    {
      title: "结构型模式",
      collapsable: false,
      sidebarDepth: 2,
      children: ["s1-创建型模式/01.工厂方法模式.md"],
    },
    {
      title: "行为模式",
      collapsable: false,
      sidebarDepth: 2,
      children: ["s1-创建型模式/01.工厂方法模式.md"],
    },
  ];
}

function getProject() {
  return [
    {
      title: "二维码扫描登录原理",
      collapsable: false,
      sidebarDepth: 1,
      children: ["/project/01.二维码扫描登录原理.md"],
    },
  ];
}

function getDoubleMall() {
  return [
    {
      title: "前言",
      collapsable: false,
      sidebarDepth: 2,
      children: ["01.intro/01.学习计划.md", "01.intro/02.项目架构.md"],
    },
    {
      title: "技术总和",
      collapsable: false,
      sidebarDepth: 1,
      children: ["02.tech/02.分布式技术.md"],
    },
    {
      title: "开发准备",
      collapsable: false,
      sidebarDepth: 1,
      children: ["02.tech/02.分布式技术.md"],
    },
    {
      title: "分布式基础篇",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        "04.basic/01.分类维护-树形结构构建方法.md",
        "04.basic/02.分类维护API-跨域问题的原理及处理方案.md",
      ],
    },
    {
      title: "分布式高级篇",
      collapsable: false,
      sidebarDepth: 1,
      children: ["02.tech/02.分布式技术.md"],
    },
  ];
}

function genJava() {
  
  return [
    {
      title: "Java 多线程",
      collapsable: false,
      sidebarDepth: 1,
      children : genJavaJUC()
    }
  ]
}

function genJavaJUC() {
  return [
    "JUC/00.总览.md",
    "JUC/01.如何创建线程.md",
    "JUC/02.如何停止线程.md",
    "JUC/03.线程的状态转换.md",
  ]
}
