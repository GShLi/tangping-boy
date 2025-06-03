import * as zhConfig from "./zh";

export const themeConfig = {
  locales: {
    "/": {
      selectLanguageText: "语言",
      selectLanguageName: "简体中文",
      lastUpdatedText: "最后更新时间",
      navbar: zhConfig.navbar,
      series: zhConfig.series,
    },
  },
  author: "Double",
  // 自动设置分类
  autoSetBlogCategories: true,
  // algolia: {
  //     appId: 'WLXYU2FQNF',
  //     apiKey: '301023a99e29361f490178916504c25c',
  //     indexName: 'TangPing',
  //     inputSelector: '.theme-reco-default-content',
  //     algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
  //     debug: false // Set debug to true if you want to inspect the dropdown
  // },
};
