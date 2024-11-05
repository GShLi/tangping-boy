# Java 多线程与并发

## 未归类概念

### 内存屏障

什么是内存屏障？

内存屏障（memory barrier），是一条 CPU 指令。

内存屏障的作用是什么？

1. 插入内存屏障后，内存屏障前的执行必须先执行，内存屏障后的指令必须后执行，禁止指令重排序。
2. 强制更新一次不同 CPU 的缓存。

内存屏障的分类：

Java 中的内存屏障有 Load Barrier 和 Store Barrier 两类。

Load Barrier：在读指令前插入 Load Barrier，让缓存中的数据全部失效并重新从内存中读取。

Store Barrier：在写指令后插入 Store Barrier，会将缓存中的数据全部同步到内存中。

相关文章：

[java内存屏障的原理与应用_Java_breakout_alex的博客-CSDN博客]<https://juejin.cn/post/6844904079978659848>
