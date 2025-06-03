import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { themeConfig } from "./config/index";
import { viteBundler } from "@vuepress/bundler-vite";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  parser: "@typescript-eslint/parser",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Double's Zone.",
      description: "Just for TangPing!",
    },
  },
  bundler: viteBundler(),
  plugins: [
    // searchConsolePlugin({
    //   baiduId: "cc5c9b6500314a97a313d944eb260fb5"
    // })
    mdEnhancePlugin({
      // 配置 md 扩展插件会报错
      // mermaid: true,
    }),
  ],
  theme: recoTheme(themeConfig),
  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cc5c9b6500314a97a313d944eb260fb5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
  ],
});

// module.exports = {
//   head: [["link", { rel: "icon", href: "/logo.png" }]],
//   themeConfig: {

//     lastUpdated: "上次修改时间",
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@img": "/images",
//       },
//     },
//   },
// };
