# 【Spring】实现一个简单的 Spring Bean 容器

## 什么是容器？

Spring Bean 本身就是一个容器，包含并管理应用对象及其配置和生命周期。

针对每个需要交给 Spring 管理的对象都有对应的 BeanDefinition。

对于很多 BeanDefinition 的管理就需要 Spring 容器了。

下面这段代码定义了一个简化的 BeanDefinition，通过 Object 来存储对象。

```java
public class BeanDefinition {

    private Object bean;

    public BeanDefinition(Object bean) {
        this.bean = bean;
    }

    public Object getBean() {
        return bean;
    }
}
```

对于 BeanDefinition 的管理，我们可以通过一个 BeanFactory 来实现，其包含注册和获取两个基本方法，并由 HashMap 来进行存储。

```java
public class BeanFactory {

    private Map<String, BeanDefinition> beanDefinitionMap = new ConcurrentHashMap<>();

    public Object getBean(String name) {
        return beanDefinitionMap.get(name);
    }

    public void registerBeanDefinition(String name, BeanDefinition beanDefinition) {
        beanDefinitionMap.put(name, beanDefinition);
    }
}
```

## 什么要用 HashMap 来存储 Bean 对象

扰动函数？

负载因子？

红黑树转换？

## TODO 和问题

1. Spring 容器解决了怎样的痛点？
