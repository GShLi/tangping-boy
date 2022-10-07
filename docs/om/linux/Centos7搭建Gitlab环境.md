# Centos7 搭建 Gitlab 环境

## 一、下载 Gitlab 资源文件

源文件地址：<https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm>

在控制台输入如下命令：

`wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm`

如果是在云服务器上下载会比较快。

**运行错误**：

```text
错误: 无法验证 mirrors.tuna.tsinghua.edu.cn 的由 “/C=US/O=Let's Encrypt/CN=R3” 颁发的证书
```

**解决方案**：

使用 wget 命令时添加 `--no-check-certificate` 参数

例如：

`wget --no-check-certificate https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm`

## 二、安装 Gitlab 服务器

在控制台输入如下命令安装：

`rpm -i gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm`

当控制台出现如下内容的时候就代表安装成功了

```text
警告：gitlab-ce-10.0.0-ce.0.el7.x86_64.rpm: 头V4 RSA/SHA1 Signature, 密钥 ID f27eab47: NOKEY
It looks like GitLab has not been configured yet; skipping the upgrade script.

       *.                  *.
      ***                 ***
     *****               *****
    .******             *******
    ********            ********
   ,,,,,,,,,***********,,,,,,,,,
  ,,,,,,,,,,,*********,,,,,,,,,,,
  .,,,,,,,,,,,*******,,,,,,,,,,,,
      ,,,,,,,,,*****,,,,,,,,,.
         ,,,,,,,****,,,,,,
            .,,,***,,,,
                ,*,.



     _______ __  __          __
    / ____(_) /_/ /   ____ _/ /_
   / / __/ / __/ /   / __ \`/ __ \
  / /_/ / / /_/ /___/ /_/ / /_/ /
  \____/_/\__/_____/\__,_/_.___/


Thank you for installing GitLab!
GitLab was unable to detect a valid hostname for your instance.
Please configure a URL for your GitLab instance by setting `external_url`
configuration in /etc/gitlab/gitlab.rb file.
Then, you can start your GitLab instance by running the following command:
  sudo gitlab-ctl reconfigure

For a comprehensive list of configuration options please see the Omnibus GitLab readme
https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md
```

**错误**：

```text
错误：依赖检测失败：
        policycoreutils-python 被 gitlab-ce-10.0.0-ce.0.el7.x86_64 需要
```

**解决方案**：

在控制台输入命令：`yum install policycoreutils-python` 进行安装

## 三.修改 Gitlab 的 IP 和 端口号

使用 Vim 打开 `/etc/gitlab.rb` 文件

修改 `external_url` 属性，类型是个字符串

格式为： `http://服务器IP:端口号`

例子：`external_url 'http://101.34.23.230:8081'`

## 四、配置并启动 Gitlab

如果我们想要在注册用户时给用户发送邮件通知，则需要配置发送邮件的账号

同样是 `/etc/gitlab/gitlab.rb` 文件

我们找到如下配置并填写（ 以 QQ 邮箱为例 ）

```bash
# 是否开启
gitlab_rails['smtp_enable'] = true
# 邮件服务器地址
gitlab_rails['smtp_address'] = "smtp.qq.com"
# 端口号
gitlab_rails['smtp_port'] = 465
# 发送邮件的账号
gitlab_rails['smtp_user_name'] = "203814477@qq.com"
# SMTP 授权码
gitlab_rails['smtp_password'] = "auoddbafsyfcbidd"
gitlab_rails['smtp_domain'] = "smtp.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
```

在控制台输入命令 `gitlab-ctl reconfigure` 进行自动配置

当在最后看到如下内容就代表配置完成了。

```text
Running handlers:
Running handlers complete
Chef Client finished, 360/515 resources updated in 01 minutes 46 seconds
gitlab Reconfigured!
```

在配置完成之后，我们在控制台输入命令 `gitlab-ctl restart` 重启 Gitlab 服务

在启动过程中我们会看到如下信息:

```text
ok: run: gitaly: (pid 27195) 1s
ok: run: gitlab-monitor: (pid 27229) 0s
ok: run: gitlab-workhorse: (pid 27253) 1s
ok: run: logrotate: (pid 27302) 0s
ok: run: nginx: (pid 27325) 1s
ok: run: node-exporter: (pid 27331) 0s
ok: run: postgres-exporter: (pid 27359) 0s
ok: run: postgresql: (pid 27367) 0s
ok: run: prometheus: (pid 27375) 0s
ok: run: redis: (pid 27419) 1s
ok: run: redis-exporter: (pid 27423) 0s
ok: run: sidekiq: (pid 27461) 0s
ok: run: unicorn: (pid 27475) 0s
```

**发送邮件测试**：

`Notify.test_email('double8799@163.com',"sdfsdf", 'dsf').deliver_now`

**未解决问题**：

```text
Notify#test_email: processed outbound mail in 227.8ms

Sent mail to double8799@163.com (513.5ms)
Date: Sun, 14 Nov 2021 22:31:28 +0800
From: GitLab <gitlab@101.34.23.230>
Reply-To: GitLab <noreply@101.34.23.230>
To: double8799@163.com
Message-ID: <61911dc05fcaf_309d3fb8301db118626bb@VM-4-7-centos.mail>
Subject: sdfsdf
Mime-Version: 1.0
Content-Type: text/html;
 charset=UTF-8
Content-Transfer-Encoding: 7bit
Auto-Submitted: auto-generated
X-Auto-Response-Suppress: All

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>dsf</p></body></html>

EOFError: end of file reached
```

## 五、重置密码

在完成所有的配置并重启后，我们用浏览器打开刚刚在 /etc/gitlab/gitlab.rb 中配置的 IP 和 端口号就能进入 Gitlab

首次进入 Gitlab 时，系统会让你重置密码，重置完密码后就可以正常使用了。
