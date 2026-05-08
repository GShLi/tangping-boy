export const navbar = [
  {
    text: "博客",
    link: "/posts.html",
  },
  {
    text: "格物",
    children: [
      {
        text: "Java 生态",
        children: [
          {
            text: "Java 语言",
            link: "/series/java/language/",
          },
          {
            text: "Spring",
            link: "/series/java/spring/",
          },
          {
            text: "MyBatis",
            link: "/series/java/mybatis/",
          },
        ],
      },
      {
        text: "数据与中间件",
        children: [
          {
            text: "MySQL",
            link: "/series/data-infra/mysql/",
          },
          {
            text: "Redis",
            link: "/series/data-infra/redis/",
          },
        ],
      },
      {
        text: "架构设计",
        link: "/series/architecture/",
      },
      {
        text: "AI 与开发",
        link: "/series/ai/",
      },
      {
        text: "工程实践",
        link: "/series/engineering/",
      },
      {
        text: "读书笔记",
        link: "/series/reading/",
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
