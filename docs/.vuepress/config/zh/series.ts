import {
  genBasic,
  genComputerBasic,
  genProgrammingBasic,
  genDesignPatterns,
  genBackendLanguage,
  genJava,
  genFrontendLanguage,
} from "./roadmap/00.basic.ts";
import { genDesign } from "./roadmap/01.design.ts";
import {
  genArchitecture,
  genArchitecturePattern,
} from "./roadmap/02.architecture.ts";
import { genEnvironment } from "./roadmap/03.environment.ts";
import {
  genDevelopment,
  genSpring,
  genMyBatis,
  genRelationDatabase,
  genDataSource,
  genShardingsphere,
  genDataSync,
  genMQ,
  genTaskSchedule,
  genSearchEngine,
  genOSS,
  genGraphStore,
  genRedis,
  genBigData,
  genReisterCenter,
  genGateway,
  genRpc,
} from "./roadmap/04.development.ts";
import { genTools } from "./roadmap/05.tools.ts";
import { genDebug } from "./roadmap/06.debug.ts";
import { genTesting } from "./roadmap/07.testing.ts";
import { genQualityAnalysis } from "./roadmap/08.quality_analysis.ts";
import { genDeployment, genK8S } from "./roadmap/09.deployment.ts";

export const series = {
  // 基础
  // "/series/00.basic/01.computer_basic/": genComputerBasic(),
  "/series/00.basic/02.programming_basic/": genProgrammingBasic(),
  "/series/00.basic/02.programming_basic/01.design_pattern/":
    genDesignPatterns(),
  "/series/00.basic/03.backend_language/": genBackendLanguage(),
  "/series/00.basic/03.backend_language/01.java/": genJava(),
  // "/series/00.basic/04.frontend_language/": genFrontendLanguage(),
  // 设计
  // 架构
  // "/series/02.architecture/01.architecture_pattern/": genArchitecturePattern(),
  // 开发技术
  // 框架
  "/series/04.development/01.framework/01.spring/": genSpring(),
  "/series/04.development/01.framework/04.mybatis/": genMyBatis(),
  "/series/04.development/02.rdb/": genRelationDatabase(),
  "/series/04.development/03.datasource/": genDataSource(),
  // "/series/04.development/04.shardingsphere/": genShardingsphere(),
  // "/series/04.development/05.data_sync/": genDataSync(),
  "/series/04.development/06.mq/": genMQ(),
  // "/series/04.development/07.task_schedule/": genTaskSchedule(),
  // "/series/04.development/08.search_engine/": genSearchEngine(),
  // "/series/04.development/09.oss/": genOSS(),
  // "/series/04.development/10.graph_store/": genGraphStore(),
  // No SQL
  "/series/04.development/11.nosql/01.redis/": genRedis(),
  "/series/04.development/12.bigdata/": genBigData(),
  // "/series/04.development/13.reister_center/": genReisterCenter(),
  // "/series/04.development/14.gateway/": genGateway(),
  // "/series/04.development/15.rpc/": genRpc(),
  "/series/09.deploy/04.containerization/02.k8s/": genK8S(),
};

function genRoadMap() {
  return [
    {
      text: "一、计算机基础",
      collapsible: true,
      children: genBasic(),
    },
    {
      text: "二、设计",
      collapsible: true,
      children: genDesign(),
    },
    {
      text: "三、架构",
      collapsible: true,
      children: genArchitecture(),
    },
    {
      text: "四、开发环境",
      collapsible: true,
      children: genEnvironment(),
    },
    {
      text: "五、开发技术",
      collapsible: true,
      children: genDevelopment(),
    },
    {
      text: "六、类库和工具",
      collapsible: true,
      children: genTools(),
    },
    {
      text: "七、调试",
      collapsible: true,
      children: genDebug(),
    },
    {
      text: "八、测试",
      collapsible: true,
      children: genTesting(),
    },
    {
      text: "九、质量分析",
      collapsible: true,
      children: genQualityAnalysis(),
    },
    {
      text: "十、发布和部署",
      collapsible: true,
      children: genDeployment(),
    },
  ];
}
