# 创建 GitLab Runner

## K8S GitLab Runner

### 通过 helm 安装

```bash
wget https://gitlab.com/gitlab-org/charts/gitlab-runner/blob/main/values.yaml
```

```bash
# NAMESPACE Runner 要被安装在的 Namespace
# CONFIG_VALUES_FILE 自定义配置
# helm install --namespace <NAMESPACE> gitlab-runner -f <CONFIG_VALUES_FILE> gitlab/gitlab-runner

helm install --namespace gitlab gitlab-runner -f values.yaml gitlab/gitlab-runner
```
