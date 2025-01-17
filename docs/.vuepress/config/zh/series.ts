import { genBasic } from './roadmap/00.basic.ts'
import { genDesign } from './roadmap/01.design.ts'
import { genArchitecture } from './roadmap/02.architecture.ts'
import { genEnvironment } from './roadmap/03.environment.ts'
import { genDevelopment } from './roadmap/04.development.ts'
import { genTools } from './roadmap/05.tools.ts'
import { genDebug } from './roadmap/06.debug.ts'
import { genTesting } from './roadmap/07.testing.ts'
import { genQualityAnalysis } from './roadmap/08.quality_analysis.ts'
import { genDeployment } from './roadmap/09.deployment.ts'

export const series = {
  "/series/": genRoadMap(),
  "/series/00.basic/": genBasic(),
}

function genRoadMap() {
  return [
    {
      text: "一、计算机基础",
      collapsible: true,
      children: genBasic()
    },
    {
      text: "二、设计",
      collapsible: true,
      children: genDesign()
    },
    {
      text: "三、架构",
      collapsible: true,
      children: genArchitecture()
    },
    {
      text: "四、开发环境",
      collapsible: true,
      children: genEnvironment()
    },
    {
      text: "五、开发技术",
      collapsible: true,
      children: genDevelopment()
    },
    {
      text: "六、类库和工具",
      collapsible: true,
      children: genTools()
    },
    {
      text: "七、调试",
      collapsible: true,
      children: genDebug()
    },
    {
      text: "八、测试",
      collapsible: true,
      children: genTesting()
    },
    {
      text: "九、质量分析",
      collapsible: true,
      children: genQualityAnalysis()
    },
    {
      text: "十、发布和部署",
      collapsible: true,
      children: genDeployment()
    }
  ]
}
