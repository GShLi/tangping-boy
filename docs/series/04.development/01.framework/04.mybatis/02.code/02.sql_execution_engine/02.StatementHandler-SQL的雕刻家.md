# StatementHandler:SQL的雕刻家

```java
public interface StatementHandler {

  /**
   * 从数据库连接中获取一个 Statement
   *
   * @param connection         数据库连接
   * @param transactionTimeout
   * @return Statement Statement 对象
   * @throws SQLException SQL 异常
   */
  Statement prepare(Connection connection, Integer transactionTimeout) throws SQLException;

  /**
   * 绑定 Statement 执行时所需要的实参
   *
   * @param statement Statement 对象
   * @throws SQLException SQL 异常
   */
  void parameterize(Statement statement) throws SQLException;

  /**
   * 执行 Statement 的 batch 方法
   *
   * @param statement Statement 对象
   * @throws SQLException SQL 异常
   */
  void batch(Statement statement) throws SQLException;

  /**
   * 执行 Insert、Update、Delete 语句并返回受影响行数
   *
   * @param statement Statement 对象
   * @return 受影响行数
   * @throws SQLException SQL 异常
   */
  int update(Statement statement) throws SQLException;

  /**
   * 执行 Select 语句并返回结果列表
   *
   * @param statement     Statement 对象
   * @param resultHandler 结果处理器
   * @param <E>           结果类型
   * @return 结果列表
   * @throws SQLException SQL 异常
   */
  <E> List<E> query(Statement statement, ResultHandler resultHandler) throws SQLException;

  /**
   * 执行 Select 语句, 并返回游标
   *
   * @param statement Statement 对象
   * @param <E>       结果类型
   * @return 结果游标
   * @throws SQLException SQL 异常
   */
  <E> Cursor<E> queryCursor(Statement statement) throws SQLException;

  /**
   * @return
   */
  BoundSql getBoundSql();

  /**
   * 获取参数处理器
   *
   * @return 参数处理器
   */
  ParameterHandler getParameterHandler();

}
```

StatementHandler 是一个接口类。从命名上看其作用是
