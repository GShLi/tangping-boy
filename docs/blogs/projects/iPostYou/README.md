# iPostYou

## 一、描述图书馆管理系统需求

```markdown
## **项目大纲：图书馆管理系统**

### **项目概述**
- 系统功能：
  - 管理员模块：
    - 图书管理：新增、编辑、删除、查询图书信息。
    - 用户管理：新增、编辑、删除、查询用户信息。
    - 借阅管理：审核借阅请求、管理借阅记录。
  - 读者模块：
    - 图书浏览：按分类、关键字搜索图书。
    - 借阅管理：借阅图书、查看借阅历史。
    - 个人信息管理：修改个人资料、密码等。
- 技术栈：
  - 后端：Spring Boot 3.x、JPA、MySQL。
  - 前端：Vue3、ElementPlus、Vite。
  - 开发工具：Cursor AI 编辑器、IDEA。
```

## 二、使用 IDEA 生成 springboot 项目

## 三、生成前端 vue 项目,安装依赖，启动前端项目

```bash
npm create vite@latest
```

## 四、使用 cursor 打开刚才创建的 springboot 和 vue 项目的根目录

## 五、告知 cursor 项目的基本代码

```text
这个项目是一个 springboot+vue3 的项目脚手架，其中前端 vue 的代码写在library-ui目录下。
接下来我会用这个项目创建一个图书馆管理系统，包含后端接口和前端页面。
在我描述具体需求之前不要生成代码
```

## 六、添加 cursor rules

```markdown
### 提示词

你是一个 web 应用程序开发专家，精通 Spring Boot、Vue3、Element Plus 和相关技术栈。你的任务是帮助我构建一个清晰、高效、可维护的前后端分离应用程序。以下是你的工作要求和规范：

#### **代码风格与结构**
- 编写清晰、高效、并具有良好注释的代码，提供准确的 Spring Boot 和 Vue3 示例。
- 遵循 Spring Boot 和 Vue3 的最佳实践与约定。
- 使用 RESTful API 设计模式构建后端服务。
- 前后端代码遵循命名规范，方法和变量名使用 `camelCase`，类名使用 `PascalCase`。
- 项目结构分明：
  - Spring Boot 后端：按 `controller`、`service`、`repository`、`model`、`configuration` 模块组织代码。
  - Vue3 前端：按 `views`、`components`、`store`、`router`、`utils`、`assets` 组织代码。

#### **Spring Boot 规范**
- 使用 Spring Boot Starter 快速搭建项目和管理依赖。
- 正确使用常用注解（如 `@SpringBootApplication`、`@RestController`、`@Service`）。
- 用 `@ControllerAdvice` 和 `@ExceptionHandler` 实现全局异常处理。
- 利用 Spring Data JPA 简化数据库操作。

#### **Vue3 规范**
- 代码基于 `<script setup>` 语法，组件内逻辑清晰分离。
- 使用 Vue Router 实现路由管理，Vuex 或 Pinia 实现状态管理。
- 遵循模块化开发，组件命名清晰，按需引入 Element Plus 组件。
- 使用 ES6+ 语法，代码风格简洁规范。

#### **测试与调试**
- 后端测试：
  - 编写单元测试（JUnit 5）和集成测试（`@SpringBootTest`）。
  - 使用 MockMvc 测试控制器层。
- 前端测试：
  - 使用 Vitest 和 Vue Test Utils 编写组件单元测试。
  - 确保核心功能覆盖率达到 80% 以上。
- 提供友好的错误提示和日志，后端使用 SLF4J 记录日志。

#### **性能与安全**
- 实现缓存策略（如使用 Spring Cache）。
- 后端异步处理使用 `@Async`，必要时使用 WebFlux 实现响应式编程。
- 使用 Spring Security 实现认证和授权，密码采用 BCrypt 编码。
- 配置 CORS，确保跨域访问正常。

#### **配置与部署**
- 使用 `application.yml` 配置文件，按环境（开发、测试、生产）划分配置。
- 使用 Docker 容器化应用，按需添加 CI/CD 流程。
- 通过 Spring Boot Actuator 实现监控和指标收集。

#### **API 文档**
- 使用 Springdoc OpenAPI 生成后端 API 文档。
- 提供前端集成调试工具（如 Postman Collection）。

#### **最终目标**
构建一个功能齐全、用户友好的应用程序，包括用户管理、权限分配、数据展示等核心功能，注重代码质量、可维护性与可扩展性。

**用以上规范，生成代码和建议。**
```

## 七、输入项目需求，一步一步生成后端代码

## 八、调试项目

  a. 生成数据库初始化语句
  b. 启动 mysql 数据库
  c. 设置 mysql 数据库用户名和密码
  d. 打开 idea 编辑器创建数据库连接
  e. 初始化 mysql 数据库建表语句
  f. 启动 Java 应用

## 九、生成前端代码

```markdown
现在在 ui 目录下直接修改代码生成前端页面，并对接后端接口实现图书馆管理系统的功能，
请使用现代化美观的 Element-plus UI 来构建页面。
如果需要执行命令，请先暂停生成，让我先执行命令
```

现在开始实现后端服务模块的代码，如果需要执行命令，请先暂停生成，让我先执行命令
