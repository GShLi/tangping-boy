export function genDeployment() {
  return []
}

export function genK8S() {
  return [
    {
      text: "容器编排与K8S作业管理",
      children: [
        "s3/01.为什么我们需要Pod.md",
        "s3/02.深入理解Pod对象-基本概念.md",
        "s3/03.深入理解Pod对象-使用进阶.md",
        "s3/04.控制器模型.md",
        "s3/05.作业副本与水平扩展.md",
        "s3/06.深入理解StateFulSet-拓扑状态.md",
        "s3/07.深入理解StateFulSet-存储状态.md",
        "s3/08.深入理解StateFulSet-有状态应用实践.md",
        "s3/09.容器化守护进程的意义-DaemonSet.md",
        "s3/10.撬动离线业务-Job与CronJob.md",
        "s3/11.声明式API与Kubernates编程规范.md",
        "s3/12.深入理解声明式API-API对象的奥秘.md",
        "s3/13.深入理解声明式API-编写自定义控制器.md",
        "s3/14.基于角色的权限控制-RBAC.md",
        "s3/15.Operator工作原理解读.md",
      ]
    }
  ]
}
