const uiSidebar = require("../ui/sidebar");
const webSidebar = require("../web/sidebar");
const processSidebar = require("../process/sidebar.js");
const toolsSidebar = require("../tools/sidebar.js");
const omSidebar = require("../om/sidebar.js");

const lgsSidebar = {
  ...uiSidebar,
  ...webSidebar,
  ...processSidebar,
  ...toolsSidebar,
  ...omSidebar,
};

module.exports = lgsSidebar;
