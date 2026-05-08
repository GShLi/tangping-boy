---
date: 2025-02-06
categories:
  - 技术分享
  - 运维
tags:
  - GitLab
  - CI/CD
---

# Gitlab 持续集成、持续部署 (CI、CD)

## 什么是 CI、CD

CI、CD 是持续集成 (Continuous Integration) 和持续部署 (Continuous Deployment) 的简称。
指在开发和部署的过程中自动执行一系列脚本来降低开发引入 bug 的概率，在新代码的开发和部署过程中，尽量减少人工的干预。

### 持续集成

持续集成指将代码 Push 到远程仓库后，在本次提交合并到 master 分支后进行的一系列自动化测试、构建等流程。
例如 Gitlab 中的 CI，通过配置文件，开发者的每次提交都会触发一次 CI，自动执行一系列脚本进行自动测试和构建，降低新代码引入错误的概率。

### 持续部署

持续部署是在持续集成的进一步操作，指在持续集成产生的产品部署至指定环境中。

## Gitlab CICD

## .gitlab-ci.yml 文件结构

.gitlab-ci.yml 是指定 CICD 相关配置的 YAML 文件

YAML 文件像 Python 一样用缩紧代表层级，.gitlab-ci.yml 文件第一层级会包含如下 key：

* stages：定义整个 CICD pipeline 的 job 数量和名称。
* variables：定义 CICD 流程中的一些环境变量。
* before_scripts：一些从 Job 中提取出来的命令集，在 Scripts 执行前执行。
* stage：定义 Job 的具体流程。

### stages

stages 的值是一个数组，如下案例，包含了三个 job：compile、release 和 deploy，分别实现编译、打包和部署。
文件中所有的 stage 都必须在 stages 中定义。

```yaml
stages:
    - compile
    - release
    - deploy
```

### variables
