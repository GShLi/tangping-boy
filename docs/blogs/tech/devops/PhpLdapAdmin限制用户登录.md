---
date: 2025-02-08
categories:
  - 技术分享
  - 运维
tags:
  - LDAP
  - Docker
---

# PhpLdapAdmin 限制用户登录

## 原理

思路：

phpldapadmin 在登录时会判断用户是否被允许登录，判断的方式就是 allowed_dns 配置的 dn 列表中是否包含登录的用户名。

因此我们将被允许登录到 phpldapadmin 的用户的 CN 添加到 allowed_dns 中即可。

```php
public function login($user=null,$pass=null,$method=null,$new=false) {
  // other code
  # If we didnt log in...
	if (! is_resource($connect) || $this->noconnect || ! $this->userIsAllowedLogin($userDN)) {
		$this->logout($method);

		return false;
	} else
		return true;
}

/**
 * This function will determine if the user is allowed to login based on a filter
 */
protected function userIsAllowedLogin($dn) {
	if (DEBUG_ENABLED && (($fargs=func_get_args())||$fargs='NOARGS'))
		debug_log('Entered (%%)',17,0,__FILE__,__LINE__,__METHOD__,$fargs);
	$dn = trim(strtolower($dn));
	if (! $this->getValue('login','allowed_dns'))
		return true;
      foreach ($this->getValue('login','allowed_dns') as $login_allowed_dn) {
          if (DEBUG_ENABLED)
              debug_log('Working through (%s)',80,0,__FILE__,__LINE__,__METHOD__,$login_allowed_dn);
          /* Check if $login_allowed_dn is an ldap search filter
           * Is first occurence of 'filter=' (case ensitive) at position 0 ? */
          if (preg_match('/^\([&|]\(/',$login_allowed_dn)) {
			$query = array();
              $query['filter'] = $login_allowed_dn;
			$query['attrs'] = array('dn');
              foreach($this->getBaseDN() as $base_dn) {
				$query['base'] = $base_dn;
                  $results = $this->query($query,null);
                  if (DEBUG_ENABLED)
                      debug_log('Search, Filter [%s], BaseDN [%s] Results [%s]',16,0,__FILE__,__LINE__,__METHOD__,
                          $query['filter'],$query['base'],$results);
                  if ($results) {
                  	$dn_array = array();
                      foreach ($results as $result)
                          array_push($dn_array,$result['dn']);
                      $dn_array = array_unique($dn_array);
                      if (count($dn_array))
                          foreach ($dn_array as $result_dn) {
                              if (DEBUG_ENABLED)
                                  debug_log('Comparing with [%s]',80,0,__FILE__,__LINE__,__METHOD__,$result_dn);
                              # Check if $result_dn is a user DN
                              if (strcasecmp($dn,trim(strtolower($result_dn))) == 0)
                                  return true;
                              # Check if $result_dn is a group DN
                              if ($this->userIsMember($dn,$result_dn))
                                  return true;
                      }
                  }
              }
          }
          # Check if $login_allowed_dn is a user DN
          if (strcasecmp($dn,trim(strtolower($login_allowed_dn))) == 0)
              return true;
          # Check if $login_allowed_dn is a group DN
          if ($this->userIsMember($dn,$login_allowed_dn))
              return true;
      }
      return false;
}
```

## 本地部署

修改 config.php 文件，追加如下配置。

```php
# 只允许数组中的 DN 登录
$servers->setValue('login', 'allowed_dns', array('cn=admin1,dc=example,dc=com'));
```

## 容器化部署

```yaml
version: '3'

services:
  openldap-server:
    image: bitnami/openldap:2.6.8
    restart: always
    environment:
      - LDAP_ROOT
      - LDAP_ADMIN_USERNAME
      - LDAP_ADMIN_PASSWORD
      - LDAP_CONFIG_ADMIN_ENABLED
      - LDAP_CONFIG_ADMIN_PASSWORD
      - LDAP_ALLOW_ANON_BINDING=no
    volumes:
      - /opt/openldap-server-data:/bitnami/openldap
    ports:
      - '1389:1389'
    hostname: ldap.example.com

  ldapadmin:
    image: osixia/phpldapadmin:0.9.0-p1
    restart: always
    environment:
      - PHPLDAPADMIN_HTTPS=False
      - PHPLDAPADMIN_TRUST_PROXY_SSL=True
    volumns:
      - './ldapadmin-env/phpldapadmin.yaml:/container/environment/phpldapadmin.yaml'
    depends_on:
      - openldap-server
```

phpldapadmin.yaml

```yaml
PHPLDAPADMIN_LDAP_HOSTS:
  - ldap.example.com
    - server
      - port: 1389
    - login:
      - anon_bind: false
      # phpldapadmin 容器中的startup脚本有问题，无法将yaml列表转换，这里用 array
      - allowed_dns: "array('cn=admin,dc=example,dc=com')"
      - bind_id: admin
```

容器启动后会将 phpldapadmin.yaml 文件转换成 PHP 格式的配置并添加到 config.php 文件中。

因不支持将 yaml 的 list 写法转换成对应的 PHP 配置，所以我们直接将 allowed_dns 配置成 PHP 语法的 array。

```yaml
- allowed_dns:
  - cn=admin1,dc=example,dc=com
  - cn=admin2,dc=example,dc=com
```
