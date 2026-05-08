---
date: 2025-02-19
categories:
  - 技术分享
tags:
  - Python
  - Linux
  - 编码
---

# python - 为什么 locale.getpreferredencoding() 返回 'ANSI_X3.4-1968' 而不是 'UTF-8' ？

```bash
export LANG="C.UTF-8"
```

然后一切正常

```bash
python3 -c 'import locale; print(locale.getdefaultlocale())'
# ('en_US', 'UTF-8')
python3 -c 'import locale; print(locale.getpreferredencoding())'
# UTF-8

```

如果您选择了一个不可用的语言环境，例如

```bash
export LANG="en_US.UTF-8"
```

它将不工作:

```bash
python3 -c 'import locale; print(locale.getdefaultlocale())'
# ('en_US', 'UTF-8')
python3 -c 'import locale; print(locale.getpreferredencoding())'
# ANSI_X3.4-1968
```
