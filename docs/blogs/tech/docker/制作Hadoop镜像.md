---
date: 2025-01-18
categories:
  - 技术分享
  - Docker
tags:
  - Docker
  - Hadoop
---

# 制作 Hadoop 镜像

## 准备 Dockerfile

[Dockerfile](attachment/build.rar)

## 构建

需要在公网环境下执行

```bash
docker build -t hadoop-3.3.6-arm64 .
docker build -t hadoop-3.3.6-amd64 .
```

## 导出

```bash
docker save -o <文件名> <镜像名>
```
