# TODO

## 待补完文章

以下文章有标题框架但内容不完整，需要补充：

| 文件 | 问题 | 优先级 |
|------|------|--------|
| `java/language/juc/阻塞队列与生产者消费者.md` | 生产者消费者部分已写，ArrayBlockingQueue / LinkedBlockingQueue / PriorityBlockQueue / DelayQueue / SynchronousQueue 各节仅有标题 | 高 |
| `java/language/juc/JUC-锁.md` | 仅 74 行，锁分类部分较简略 | 中 |
| `java/language/juc/并发编程Bug的源头.md` | MESA 模型部分未完成，末尾 AI 解释明显错误需修正 | 中 |
| `java/spring/02.code/【手写Spring】实现Bean对象的定义、注册和获取.md` | 仅标题，手写系列 03-21 篇待重启 | 高 |
| `java/mybatis/02.code/StatementHandler-SQL的雕刻家.md` | 内容偏薄 | 低 |
| `architecture/high-concurrency/s1/【高并发系统】什么是高并发系统？.md` | 仅一篇概述，整个系列待建 | 高 |

## 待写作

| 板块 | 计划文章 |
|------|---------|
| AI 与开发 | AI 辅助编程实践 / Prompt Engineering / AI 与架构设计 / AI 代码审查 |
| 工程实践 | CI/CD 实践总结 / Docker 容器化实践 / 性能调优案例 |
| 读书笔记 | 《DDD》/《数据密集型应用系统设计》/《凤凰架构》/ 哲学类 |
| 架构设计 | 架构决策记录 (ADR) / DDD 实践 / 分布式系统 / 系统重构案例 |
| Spring | Spring Boot 从零搭建 / Spring MVC 请求链路源码 |

## 已记录问题

1. 为什么 Redis 中字符串对象 SDS 和 EMBSTR 的界限是 39 字节？
2. Java CyclicBarrier 循环栅栏的原理和使用场景？
3. Nginx upstream live 检测的机制？
4. wait(timeout) 超时后被谁从等待队列移出？
5. 什么是 Monitor 锁？

## 已修复

- [x] 设计模式 sidebar collapse 单子项显示异常（已删除空壳，问题不再存在）
- [x] 移除所有空壳文章（193 篇）
- [x] 目录结构重构（00.basic → java/data-infra/architecture）
- [x] 文章去编号前缀
