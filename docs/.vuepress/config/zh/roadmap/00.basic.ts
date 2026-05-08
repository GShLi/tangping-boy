export function genBasic() {
  return [
    {
      text: "后端编程语言",
      collapsible: true,
      children: [],
    },
  ];
}

export function genComputerBasic() {
  return [];
}

export function genProgrammingBasic() {
  return [];
}

export function genDesignPatterns() {
  return [];
}

export function genBackendLanguage() {
  return [
    {
      text: "Java",
      children: [],
    },
  ];
}

export function genJava() {
  return [
    {
      text: "Java 多线程",
      children: [
        "03.java-juc/README.md",
        "03.java-juc/01.JUC-线程的基础概念.md",
        "03.java-juc/02.JUC-并发编程的三大特性.md",
        "03.java-juc/03.JUC-锁.md",
        "03.java-juc/04.JUC-阻塞队列.md",
      ],
    },
    {
      text: "Java IO",
      children: [
        "04.java-io/01.IO基础知识总结.md",
      ],
    },
    {
      text: "Java 虚拟机 (JVM)",
      children: [
        "07.java-jvm/README.md",
        "07.java-jvm/01.类加载器.md",
        "07.java-jvm/02.运行时数据区域.md",
        "07.java-jvm/03.执行引擎.md",
      ],
    },
    {
      text: "JUC 并发",
      children: [
        "JUC/00.总览.md",
        "JUC/01.如何创建线程.md",
        "JUC/02.如何停止线程.md",
        "JUC/03.线程的状态转换.md",
        "JUC/04.实现生产者消费者模式.md",
        "JUC/05.并发编程Bug的源头.md",
        "JUC/06.并发工具类.md",
        "JUC/07.并发设计模式.md",
      ],
    },
  ];
}

export function genFrontendLanguage() {
  return [];
}
