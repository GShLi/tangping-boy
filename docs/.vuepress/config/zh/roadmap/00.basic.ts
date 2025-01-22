export function genBasic() {
  return [
    {
      text: "计算机基础",
      collapsible: true,
      children: [""],
    },
    {
      text: "编程基础",
      collapsible: true,
      children: [],
    },
    {
      text: "后端编程语言",
      collapsible: true,
      children: [],
    },
    {
      text: "前端编程语言",
      collapsible: true,
      children: [],
    },
  ];
}

export function genComputerBasic() {
  return []
}

export function genProgrammingBasic() {
  return []
}

export function genDesignPatterns() {
  return [
    {
      text: "创建型模式",
      collapsible: true,
      children: [
        "s1-创建型模式/01.工厂方法模式.md",
        "s1-创建型模式/02.抽象工厂模式.md",
        "s1-创建型模式/03.生成器模式.md",
      ],
    },
    {
      text: "结构型模式",
      collapsible: true,
      children: [
        "s2-结构性模式/6.享元模式.md"
      ],
    },
    {
      text: "行为模式",
      collapsible: true,
      children: ["s3-行为型模式/01.责任链模式.md"],
    },
  ];
}

export function genBackendLanguage() {
  return [
    {
      text: "Java",
      children: [

      ]
    }
  ]
}

export function genJava() {
  return [
    {
      text: "Java 基础",
      children: [
        "01.java-basic/01.Java基础-面向对象.md"
      ]
    },
    {
      text: "Java 集合",
      children: [
        "02.java-collection/README.md"
      ]
    },
    {
      text: "Java 多线程",
      children: [
        "03.java-juc/README.md",
        "03.java-juc/01.JUC-线程的基础概念.md",
        "03.java-juc/02.JUC-并发编程的三大特性.md",
        "03.java-juc/03.JUC-锁.md",
        "03.java-juc/04.JUC-阻塞队列.md",
        "03.java-juc/Java多线程-QA.md"
      ]
    },
    {
      text: "Java IO",
      children: [
        "04.java-io/README.md"
      ]
    },
    {
      text: "Java 8",
      children: [
        "05.java8/README.md"
      ]
    },
    {
      text: "Java 8+",
      children: [
        "06.java8+/README.md"
      ]
    },
    {
      text: "Java 虚拟机(JVM)",
      children: [
        "07.java-jvm/README.md"
      ]
    }
  ]
}

export function genFrontendLanguage() {
  return []
}
