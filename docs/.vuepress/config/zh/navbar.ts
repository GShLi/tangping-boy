export const navbar = [
  {
    text: "博客",
    link: "/posts.html",
  },
  {
    text: "学习笔记",
    children: [
      {
        text: "Java",
        children: [
          {
            text: "Java 多线程",
            link: "/series/00.basic/03.backend_language/01.java/03.java-juc/",
          },
          {
            text: "Java IO",
            link: "/series/00.basic/03.backend_language/01.java/04.java-io/",
          },
          {
            text: "JVM",
            link: "/series/00.basic/03.backend_language/01.java/07.java-jvm/",
          },
        ],
      },
      {
        text: "框架",
        children: [
          {
            text: "Spring",
            link: "/series/04.development/01.framework/01.spring/",
          },
          {
            text: "MyBatis",
            link: "/series/04.development/01.framework/04.mybatis/",
          },
        ],
      },
      {
        text: "数据与中间件",
        children: [
          {
            text: "MySQL",
            link: "/series/04.development/02.rdb/",
          },
          {
            text: "Redis",
            link: "/series/04.development/11.nosql/01.redis/",
          },
        ],
      },
      {
        text: "架构",
        children: [
          {
            text: "高并发系统设计",
            link: "/series/02.architecture/high-concurrency/",
          },
        ],
      },
    ],
  },
  {
    text: "项目",
    link: "/project/work/Titan.md",
  },
  {
    text: "关于",
    link: "/about.md",
  },
  {
    text: "路书",
    link: "/archive/RoadBook.md",
  },
  { text: "Github", link: "https://github.com/GShLi/" },
];
