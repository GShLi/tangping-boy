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
        link: "/frontend/",
      },
      {
        text: "后端",
        link: "/backend/",
      },
      {
        text: "运维",
        link: "/om/",
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
      "/backend/": [
        "",
        {
          title: "Web",
          children: ["web/"],
        },
        {
          title: "大数据",
          children: ["bigdata/"],
        },
      ],
      "/om/": [
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
