# IO 基础知识总结

## 一、IO 简介

IO 即 `Input/Output` 的缩写，数据从外部到计算机内存的过程为`输入`，从计算机内存到外部的过程为`输出`。

数据输入输出的过程类似水流，也被称为 `IO 流`。根据数据的流向可分为：`输入流`和`输出流`。

根据数据的类型又可分为 `字节流` 和 `字符流`。

`InputStream`/`OutputStream`：处理字节的流，前者是输入流，后者是输出流。

`Reader`/`Writer`：处理字符的流，前者是输入流，后者是输出流。

## 二、字节流

### 字节输入流(InputStream)

Java 中用 `java.io.InputStream` 从外部数据源输入数据到计算机内存。

常用方法：

- `int read()`：从输入流中读取下一字节的数据， 1 byte = 8 bit，因此返回的内容范围是：0 ～ 255，如果流读取完毕则返回 -1。
- `int read(byte b[])`：从输入流中读取若干字节的数据并存储在参数 b 字节数组中，返回值为读取的字节数，如果流读取完毕则返回 -1。
- `int read(byte b[], int off, int len)`：从输入流中从指定的`偏移量 offset` 开始读取 `len` 个字节。
- `long skip(long n)`：跳过读取输入流中的 n 个字节，返回实际跳过的字节数。
- `int available()`：返回输入流中可读取的字节数。
- `void close()`：关闭输入流并释放分配给该流的相关资源。

#### 1. FileInputStream 文件输入流

::: tip 作用
A FileInputStream obtains input bytes from a file in a file system.

从系统文件中获取字节数据到计算机内存中。
:::

#### 2. FilterInputStream

::: tip 作用
A FilterInputStream contains some other input stream, which it uses as its basic source of data, possibly transforming the data along the way or providing additional functionality.

FilterInputStream 包含一些其他输入流，它使用它们作为基本数据源，可能对数据进行转换或提供其他功能。
:::

根据JDK文档可知其作用是从文件中读取原始字节数据流，当我们需要从文件中读取字符流时可以考虑使用 `FileReader`。

但是更推荐另外一种方式，即组合使用 `FileInputStream` 和 `InputStreamReader`，前者负责从文件中读取字节数据，后者负责将字节数据转换为字符数据。

```java
try (InputStream fis = new FileInputStream("file.txt");
    Reader reader = new InputStreamReader(fis, StandardCharsets.UTF_8)) {
    // other codes
}
```

这种方式的好处是可以指定字符编码，即指定字符集，如 `UTF-8`、`GBK` 等。

当我们查看 `FileReader` 的继承关系时可以发现，`FileReader` 就是 `InputStreamReader` 的子类。

```java
public class FileReader extends InputStreamReader {
    // other codes
}
```

#### 3. ObjectInputStream 对象输入流

::: tip 作用
An ObjectInputStream deserializes primitive data and objects previously written using an ObjectOutputStream.

ObjectInputStream 反序列化被 ObjectOutputStream 序列化的基础数据和对象。
:::

#### 4. PipedInputStream 管道输入流

::: tip 作用
A piped input stream should be connected to a piped output stream; the piped input stream then provides whatever data bytes are written to the piped output stream.

PipedInputStream 应该连接到 PipedOutputStream；PipedInputStream 然后提供 PipedOutputStream 写入的字节数据。
:::

#### 5. SequenceInputStream

::: tip 作用
A SequenceInputStream represents the logical concatenation of other input streams. It starts out with an ordered collection of input streams and reads from the first one until end of file is reached, whereupon it reads from the second one, and so on, until end of file is reached on the last of the contained input streams.

一个 SequenceInputStream 表示一个逻辑串联的输入流。它从有序的输入流集合开始，直到到达文件末尾，然后从第二个输入流开始，直到到达文件末尾，依此类推，直到到达最后一个输入流的末尾。
:::

#### 6. StringBufferInputStream 字符缓存输入流

::: tip 作用
This class allows an application to create an input stream in which the bytes read are supplied by the contents of a string.

此类允许一个应用程序创建一个输入流，其中输入的字节由字符串的内容提供。
:::

#### 7. ByteArrayInputStream 字节数组输入流

::: tip 作用
A ByteArrayInputStream contains an internal buffer that contains bytes that may be read from the stream.

ByteArrayInputStream 包含一个内部缓冲区，其中包含可以从流中读取的字节。
:::

调用该类的 close() 方法没有任何的影响，因为该方法是一个空方法。

```java
public void close() throws IOException {
}
```

### 字节输出流(OutputStream)

常用方法：

- `void write(int b)`：写入一个字节的数据到输出流中。
- `void write(byte b[])`：写入一批字节数据到输出流中。
- `void write(byte b[], int off, int len)`：从字节输出流偏移量 `off` 开始，写入 `len` 个字节数据到输出流中。
- `void flush()`：刷新输出流并强制将缓存中的数据写出。
- `void close()`：关闭输出流并释放操作系统分配给该流的资源。

#### 1. FileOutputStream 文件输出流

#### 2. FilterOutputStream

#### 3. ObjectOutputStream 对象输出流

#### 4. PipedOutputStream 管道输出流

#### 5. ByteArrayOutputStream 字节数组输出流

## 三、字符流

### 字符输入流(Reader)

常用方法：

- `int read()`：从字符流中读取一个字符。
- `int read(char[] cbuf)`：从字符流中读取字符并放入 cbuf 数组中。
- `int read(char[] cbuf, int off, int len)`：从字符流偏移量 `off` 位置开始读取 `len` 个字符放入 cbuf 中。
- `long skip(long n)`：跳过 `n` 个字符。
- `void close()`：关闭字符输入流并释放操作系统分配给该流的资源。

### 字符输出流(Writer)

常用方法：

- `void write(int c)`：写入单个字符。
- `void write(char cbuf[])`：写入多个字符。
- `void write(char cbuf[], int off, int len)`：从偏移量 `off` 开始写入 `len` 个字符（字符来自 `cbuf` 字符数组）。
- `void write(String str)`：写入一个字符串。
- `void write(String str, int off, int len)`：从偏移量 `off` 开始写入 `len` 个字符（字符来自 `str` 字符串）。
- `Writer append(CharSequence csq)`：将指定的字符序列追加到字符输出流中。
- `Writer append(CharSequence csq, int start, int end)`：写入指定字符序列中 `start` 到 `end` 的字符。
- `Writer append(char c)`：将指定的字符追加到字符输出流中。
- `void flush()`：刷新字符输出流并强制将缓存中的数据写出。
- `void close()`：关闭字符输出流并释放操作系统分配给该流的资源。

###

A character stream whose source is a string.

## 四、字节缓冲流

### 字节缓冲输入流(BufferedInputStream)

### 字节缓冲输出流(BufferedOutputStream)

## 五、字符缓冲流

### 字符缓冲输入流(BufferedReader)

### 字符缓冲输出流(BufferedWriter)

## 六、转换流

转换流是建立在字节流和字符流之间的桥梁，用于字节流和字符流之间的转换。

### 字符编码转换流(InputStreamReader)

官方的解释: An InputStreamReader is a bridge from byte streams to character streams: It reads bytes and decodes them into characters using a specified charset.

InputStreamReader 用于连接字节流和字符流，它使用指定的 charset 读取字节并将其解码为字符。

```java
InputStreamReader reader = new InputStreamReader(new FileInputStream(filePath));
```

### 字符编码转换流(OutputStreamWriter)

官方的解释: An OutputStreamWriter is a bridge from character streams to byte streams: Characters written to it are encoded into bytes using a specified charset

OutputStreamWriter 用于连接字符流和字节流，它使用指定的 charset 将写入的字符编码为字节。

```java
OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(copyFilePath));
```

###

## 七、打印流

## 八、随机访问流
