---
date: 2025-01-19
categories:
  - 技术分享
  - Docker
tags:
  - Docker
  - HDFS
---

# 制作 Hadoop Docker 镜像

## 运行环境需求

Hadoop 3.x

ARM 环境

## 制作步骤

```dockerfile
# 使用ARM兼容的OpenJDK基础镜像
FROM arm64v8/openjdk:8-jdk

# 设置Hadoop版本和安装路径
ARG HADOOP_VERSION=3.3.6
ENV HADOOP_HOME /opt/hadoop
ENV PATH $HADOOP_HOME/bin:$PATH

# 安装依赖
RUN apt-get update && \
    apt-get install -y \
    openssh-server \
    curl \
    procps \
    && rm -rf /var/lib/apt/lists/*

# 配置SSH
RUN ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa && \
    cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys && \
    chmod 0600 ~/.ssh/authorized_keys

COPY ssh_config /root/.ssh/config
RUN chmod 600 /root/.ssh/config

# 下载ARM兼容的Hadoop二进制包
# https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.3.6/hadoop-3.3.6-aarch64.tar.gz
RUN curl -L https://archive.apache.org/dist/hadoop/common/hadoop-$HADOOP_VERSION/hadoop-$HADOOP_VERSION-aarch64.tar.gz | \
    tar -xz -C /opt && \
    mv /opt/hadoop-$HADOOP_VERSION $HADOOP_HOME

# 设置环境变量
ENV HADOOP_COMMON_HOME=$HADOOP_HOME \
    HADOOP_HDFS_HOME=$HADOOP_HOME \
    HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop \
    HADOOP_YARN_HOME=$HADOOP_HOME

COPY config/ $HADOOP_CONF_DIR/

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

```

core-site.xml

```xml
<configuration>
  <property>
    <name>fs.defaultFS</name>
    <value>hdfs://localhost:9000</value>
  </property>
</configuration>
```

hdfs-site.xml

```xml
<configuration>
  <property>
    <name>dfs.replication</name>
    <value>1</value>
  </property>
</configuration>
```

mapred-site.xml

```xml
<configuration>
  <property>
    <name>mapreduce.framework.name</name>
    <value>yarn</value>
  </property>
</configuration>
```

yarn-site.xml

```xml
<configuration>
  <property>
    <name>yarn.nodemanager.aux-services</name>
    <value>mapreduce_shuffle</value>
  </property>
</configuration>
```

hadoop-env.sh

```bash
export JAVA_HOME=/usr/local/openjdk-8
export HADOOP_OPTS="-Djava.library.path=${HADOOP_HOME}/lib/native"
```

entrypoint.sh

```bash
#!/bin/bash

# 格式化HDFS（首次启动）
if [ ! -f /tmp/hadoop-formatted ]; then
  hdfs namenode -format -force
  touch /tmp/hadoop-formatted
fi

# 启动SSH服务
service ssh start

# 启动HDFS
$HADOOP_HOME/sbin/start-dfs.sh

# 启动YARN
$HADOOP_HOME/sbin/start-yarn.sh

# 保持容器运行
tail -f $HADOOP_HOME/logs/*
```

构建并运行 Docker

```bash
# 构建镜像（在ARM设备上执行）
docker build -t hadoop-3.3.6-arm .

# 运行容器
docker run -d \
  -p 9000:9000 \
  -p 9870:9870 \
  -p 8088:8088 \
  --name hadoop-container \
  hadoop-3.3.6-arm
```

```bash
# 进入容器
docker exec -it hadoop-container bash

# 检查HDFS
hdfs dfs -ls /

# 运行示例MapReduce任务
hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar pi 2 4
```

```bash
docker run -d \
  -p 9000:9000 \
  -p 9870:9870 \
  -p 8088:8088 \
  -p 19888:19888 \
  -v hadoop-data:/home/hadoop/hadoop-data \
  --name hadoop-container \
  hadoop-3.3.6-arm
```
