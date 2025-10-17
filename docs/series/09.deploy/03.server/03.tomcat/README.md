# Tomcat

## Tomcat 基础组件

Server： 表示 Tomcat 实例，有且只有一个。

Service: 

Connector: 负责监听端口接收用户的请求并将相应返回给用户，但是不做具体的业务工作。

ProtocalHandler:

Engine: 顶层 Servlet 容器。

Host: 相当于虚拟主机。包含多个 Context。

Context: 用于表示 ServletContext，即一个独立的Web应用。

Wrapper: 表示 Web 应用程序中定义的 Servlet。

Executor: 共享的线程资源。
