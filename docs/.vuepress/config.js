const lgsSidebar = require("./sidebar");

module.exports = {
  title: "躺平男孩",
  description: "Just for TangPing!",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "UI设计", link: "/ui/" },
      {
        text: "Web前端",
        items: [
          { text: "HTML", link: "/web/html/" },
          { text: "CSS", link: "/web/css/" },
          { text: "JavaScript", link: "/web/js/" },
          { text: "TypeScript", link: "/web/ts/" },
        ],
      },
      { text: "后端", link: "/process/" },
      {
        text: "运维",
        items: [{ text: "Linux", link: "/om/linux/" }],
      },
      { text: "软件工具", link: "/tools/" },
      { text: "Gitee", link: "https://gitee.com/Double_Float/" },
      { text: "Github", link: "https://github.com/Double327/" },
    ],
    sidebar: lgsSidebar,
    displayAllHeaders: true,
  },
};
