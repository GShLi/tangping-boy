# JUC - 线程的基础概念

## 一、 基础概念

### 1. 进程与线程

#### 进程

- **定义**：进程是操作系统分配资源的基本单位，是程序的一次执行实例。
- **特点**：
  - 每个进程有独立的内存空间（代码段、数据段、堆栈等）。
  - 进程间相互隔离，一个进程崩溃不会直接影响其他进程。
  - 进程间通信（IPC）需要通过特定机制（如管道、消息队列、共享内存等）。
  - 创建和销毁进程的开销较大。

#### 线程

- **定义**：线程是进程内的一个执行单元，是CPU调度的基本单位。
- **特点**：
  - 线程共享进程的内存空间（代码、数据、堆等），但每个线程有自己的栈和寄存器。
  - 线程间通信更高效，可以直接读写共享数据。
  - 线程的创建和切换开销较小（相对于进程）。
  - 一个线程崩溃可能影响整个进程。

### 2. 多线程

Java 多线程是指利用 Java 提供的多线程机制，使程序能够同时执行多个任务，从而提高程序的并发性和效率。Java 对多线程的支持非常强大，主要通过 `Thread` 类和 `Runnable` 接口来实现。

### 3. 串行、并行、并发

#### 串行

- **定义**：任务按顺序依次执行，一个任务完成后才开始下一个。

- **特点**：

  - 简单易实现。

  - 资源占用少。

  - 执行效率低，无法利用多核处理器。

#### 并行

- **定义**：多个任务同时执行，通常依赖多核处理器或多台机器。
- **特点**：
  - 执行效率高，适合计算密集型任务。
  - 实现复杂，需要处理任务分配和同步。
  - 资源消耗大。

#### 并发

- **定义**：多个任务交替执行，看似同时进行，实际通过快速切换实现。
- **特点**：
  - 提高资源利用率，适合I/O密集型任务。
  - 实现复杂，需处理任务切换和同步。
  - 资源消耗较少。

### 对比

| 特性       | 串行     | 并行           | 并发          |
| ---------- | -------- | -------------- | ------------- |
| 执行方式   | 顺序执行 | 同时执行       | 交替执行      |
| 资源需求   | 低       | 高             | 中            |
| 实现复杂度 | 简单     | 复杂           | 较复杂        |
| 适用场景   | 简单任务 | 计算密集型任务 | I/O密集型任务 |

### 总结

- **串行**：顺序执行，简单但效率低。
- **并行**：同时执行，效率高但实现复杂，适合计算密集型任务（不会出现IO阻塞的情况）。
- **并发**：交替执行，资源利用率高，适合I/O密集型任务（在IO阻塞时可以执行其他任务）。

### 4. 同步异步、阻塞非阻塞

## 二. 线程的创建

1. 继承 Thread 类并重写 run 方法。
2. 实现 Runnable 接口并重写 run 方法。
3. 实现 Callable 接口，并配置 FutureTask。
4. 利用线程池创建线程。
5. lambda 表达式重写 Thread run 方法。

究其原理：实现 Runnable 接口。

### 1. 方法一：继承 Thread 类并重写 run 方法

```java
public static void main(String[] args) {
  MyThread t1 = new MyThread();
  t1.start();
}
public class MyThread extends Thread {
  @Override
  public void run() {
    // code
  }
}
```

Thread 源码：

```java
public class Thread implements Runnable {
  // other codes
  @Override
  public void run() {
    if (target != null) {
      target.run();
    }
  }
}
```

Thread 类本身就实现了 Runnable 接口，并重写了 run 方法。

### 2. 方法二：实现 Runnable 接口并重写 run 方法

```java
public class Main {
  public static void main(String[] args) {
    MyRunnable myRunnable = new MyRunnable();
    Thread t1 = new Thread(myRunnable);
    t1.start();
  }
}

public class MyRunnable implements Runnable {
  @Override
  public void run() {
    // code
  }
}
```

原理：

Thread 类内部有一个 Runnable 类型成员变量 target，此 target 就是我们在创建 Thread 类的时候传递过来的，而 Thread 的 run 方法就是在执行 target 的 run 方法。

```java
public class Thread implements Runnable {
  public Thread(Runnable target) {
    init(null, target, "Thread-" + nextThreadNum(), 0);
  }
  private void init(ThreadGroup g, Runnable target, String name,
      long stackSize, AccessControlContext acc,
      boolean inheritThreadLocals) {
    // other codes
    this.target = target;
    // other codes
  }
  // other codes
  @Override
  public void run() {
    if (target != null) {
      target.run();
    }
  }
}
```

### 3. 方法三：实现 Callable 接口，并配合 FutureTask

```java
public class Main {
  public static void main(String[] args) {
    MyCallable myCallable = new MyCallable();
    FutureTask futureTask = new FutureTask(myCallable);
    Thread t1 = new Thread(futureTask);
    t1.start();
  }
}

public class MyCallable implements Callable {
  @Override
  public Object call() throws Exception {
    return "null";
  }
}
```

原理：

这种方法的的关键是 FutureTask，通过查看源码我们可以发现 FutureTask 实现了 RunnableFuture，而 RunnableFuture 又继承了 Runnable 和 Future 接口。

因此，FutureTask 其实也是 Runnable 接口的实现，也有 run 方法，而 run 方法中最终调用了 Callable 接口的 call 方法。

到此为止，可以看出这种方法其实可以转换成 ***方法二***。

```java
public class FutureTask<V> implements RunnableFuture<V> {
  public FutureTask(Callable<V> callable) {
    // other codes
    this.callable = callable;
    // other codes
  }

  public void run() {
    // other codes
    Callable<V> c = callable;
    result = c.call();
    // other codes
  }
}

public interface RunnableFuture<V> extends Runnable, Future<V> {}
```

### 4. 方法四：利用线程池创建线程

```java
public class ThreadPoolExecutor extends AbstractExecutorService {
  private final class Worker
    extends AbstractQueuedSynchronizer
    implements Runnable {}
}
```

线程池中的 Worker 实现的也是 Runnable 接口。

### 5. 方法五：lambda 表达式重写 Thread run 方法

```java
public class Main {
  public static void main(String[] args) {
    Thread t1 = new Thread(() -> {
      // code
    });
    t1.start();
  }
}
```

这种方法其实和 ***方法一*** 原理一样，只不过用了 lambda 表达式写法。

## 三. 线程的使用

### 1. 线程的状态

1. New：线程还未启动。
2. Runnable：可运行状态。
3. Blocked：阻塞状态。
4. Waiting：处于等待状态，需要被唤醒。
5. Time Waiting：处于等待状态，一定时间后会自动唤醒。
6. Terminated：线程已经销毁

### 2. 线程的常用方法

### 3. 线程的结束方式

#### 3.1 stop 方法（废弃）

#### 3.2 使用共享变量（很少用）

#### 3.3 interrupt 方法

sleep 和 wait 有什么区别？

1. sleep 属于 Thread 类，wait 属于 Object 类。
2. sleep 执行后不会释放锁，wait 执行后会释放锁。
3. sleep 执行后线程进入 Time Waiting 状态，会自动唤醒线程，wait 执行后线程进入 Waiting 状态，需要手动唤醒线程。
4. wait 方法只有在持有锁时才能执行。
