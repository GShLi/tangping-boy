# 配置阿里云 Yum 源

在 /etc/yum.repo.d/ 新建 openEuler.repo 并粘贴如下内容

```bash
[OS]
name=OS
baseurl=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS/OS/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS/OS/$basearch/RPM-GPG-KEY-openEuler

[everything]
name=everything
baseurl=https://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS/everything/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS/everything/$basearch/RPM-GPG-KEY-openEuler

[EPOL]
name=EPOL
baseurl=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/EPOL/main/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/EPOL/main/$basearch/RPM-GPG-KEY-openEuler

[debuginfo]
name=debuginfo
baseurl=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/debuginfo/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/debuginfo/$basearch/RPM-GPG-KEY-openEuler

[source]
name=source
baseurl=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/source/
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/source/RPM-GPG-KEY-openEuler

[update]
name=update
baseurl=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS-SP2/update/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/openeuler/openEuler-20.03-LTS/OS/$basearch/RPM-GPG-KEY-openEuler

```

清理并重建缓存

```bash
yum clean yum
yum makecache
```

TOTO:
[搭建内网 yum 源]<https://blog.51cto.com/moneypy/9287845>
