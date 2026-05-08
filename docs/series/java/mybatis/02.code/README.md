# MyBatis 源码分析

## 引言

### MyBatis 的模块划分

MyBatis 总体可以分为三层，自上而下分别为:

1. 接口 (SqlSession)
2. 应用层
3. 基础组件

### MyBatis 是如何执行一条查询操作的？

1. 使用 SqlSessionFactory 创建 SqlSession
2. 使用 SqlSession 执行 Statement
3. Statement
4. Executor
5. StatementHandler
6. Statement
