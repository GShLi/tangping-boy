const autobar_options = {
  stripNumbers: true,
  maxLevel: 3,
  skipEmptySidebar: true,
  skipEmptyNavbar: true,
  multipleSideBar: true,
  setHomepage: "hide" | "toGroup" | "top",
  pinyinNav: true,
};

module.exports = {
  title: "躺平男孩",
  description: "Just for TangPing!",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "Gitee", link: "https://gitee.com/Double_Float/" },
      { text: "Github", link: "https://github.com/Double327/" },
    ],
    displayAllHeaders: true,
  },
  plugins: ["permalink-pinyin", "rpurl", ["autobar", autobar_options]],
};
