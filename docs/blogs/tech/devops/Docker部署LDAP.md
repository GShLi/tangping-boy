---
date: 2025-01-22
categories:
  - 技术分享
  - 运维
tags:
  - Docker
  - LDAP
---

# Docker 部署 LDAP

## docker-compose

```yaml
services:
  openldap-server:
    image: bitnami/openldap:2.6.8
    restart: always
    environment:
      - LDAP_ROOT
      - LDAP_ADMIN_USERNAME
      - LDAP_ADMIN_PASSWORD
      - LDAP_CONFIG_ADMIN_ENABLE
      - LDAP_CONFIG_ADMIN_PASSWORD
      - LDAP_ALLOW_ANON_BINDING=no
    volumes:
      # 挂载数据目录
      - /opt/data/openldap-server-data:/bitnami/openldap
    ports:
      - '1389:1389'
  ldapadmin:
    image: osixia/phpldapadmin:0.9.0
    restart: always
    environment:
      - PHPLDAPADMIN_HTTPS=False
      - PHPLDAPADMIN_TRUST_PROXY_SSL=True
    ports:
      - '18000:80'
    volumes:
      - './ldapadmin-env/phpldapadmin.yaml:/container/environment/phpldapadmin.yaml'
      # - './ldapadmin-env/cmd.php:/var/www/phpldapadmin_bootstrap/htdocs/cmd.php'
    depends_on:
      - openldap-server

  self-service-password:
    image: tiredofit/self-service-password:5.2.3
    ports:
      - '8089:80'
    environment:
      - DEBUG_MODE=FALSE
      - USE_TOKEN=FALSE
      - LDAP_SERVER=ldap://openldap-server:1389
      - LDAP_BINDDN=cn=admin,${LDAP_ROOT}
      - LDAP_BINDPASS=${LDAP_ADMIN_PASSWORD}
      - LDAP_BASE_SEARCH=${LDAP_ROOT}
      - LDAP_LOGIN_ATTRIBUTE=cn
      - WHO_CAN_CHANGE_PASSWORD=user
      - PASSWORD_HASH=SHA
    depends_on:
      - openldap-server
```

```yaml
PHPLDAPADMIN_LDAP_HOSTS:
  - openldap-server:
    - server:
      - port: 1389
    - login:
      - bind_id: admin
      - anon_bind: false
      -allowed_dns: "array('cn=admin,dc=bd,dc=com')"
```

.env

```properties
LDAP_ROOT=dc=bd,dc=com
LDAP_ADMIN_USERNAME=admin
LDAP_ADMIN_PASSWORD=admin
LDAP_CONFIG_ADMIN_ENABLED=no
LDAP_CONFIG_ADMIN_PASSWORD=admin
```

env.override

```properties
LDAP_ROOT=dc=bd,dc=com
LDAP_ADMIN_USERNAME=admin
LDAP_ADMIN_PASSWORD=admin
LDAP_CONFIG_ADMIN_ENABLED=no
LDAP_CONFIG_ADMIN_PASSWORD=admin
```

启动:

```bash
env $(cat env.override | grep ^# -v) docker compose up -d
```
