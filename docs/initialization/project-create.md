# 项目初始化

## 项目介绍

::: tip Object
这一小节，我们来介绍一下我们即将要做的项目--黑马头条，介绍它的原因是让大家在做项目之前，对这个项目有一个大概的宏观的了解...
:::

::: warning Path

1. 项目背景
2. 涉及知识
3. 项目功能
:::

::: info Experience

* **Kn. 1：项目背景**

  我们已经生活在一个IT技术蓬勃发展的信息化时代，作为一名IT从业者，势必要努力的提升自身技术，或者想把技术分享出去，就要找一个这样的载体，因此我们希望建设这样一个网站：具有可靠性、
  技术先进、能实现技术交流和讨论的这样一个移动端IT技术社区

* **Kn. 2：涉及知识**

  * ⓵ 前端知识

    Vue2.x基础、VueRouter路由管理、Vuex状态管理、Axios网络请求、Vant移动端组件库、脚手架、Less、websocket即时通讯、页面权限管理、Token续签、项目优化、项目打包

  * ⓶ 后端知识

    略...

* **Kn. 3：项目功能**

  | 页面 | 一级功能                           | 二级页面                   |
  | ---- | -------------------------------------- |   ------------------------------ |
  | 首页 | 频道渲染、文本列表渲染、底部菜单渲染 | 搜索页面、搜索列表、文章详情、点赞、举报等 |
  | 问答 | 问答头部、问题列表            | 略...                         |
  | 视频 | 视频头部、视频列表            | 略...                         |
  | 我的 | 登录、个人中心 | 小智同学、个人信息修改               |

  项目演示: [地址](http://toutiao.itheima.net/)

:::

::: danger Note

* 【重点】
  * ⓵ 项目背景
  * ⓶ 项目功能
:::

## 创建项目结构

::: tip Object
这一小节，我们的目标是创建并梳理项目的结构
:::

::: warning Path

1. 运行Vue CLI的创建项目命令，创建Vue2的工程化项目
2. 重置 App.vue 根组件中的代码
3. 清空 /src/router/index.js 路由模块，删除创建项目时自带的路由规则
4. 删除 components 目录下的 HelloWorld.vue 组件
5. 删除 views 目录下的 About.vue 和 Home.vue 组件
6. 执行 npm run serve 命令，把项目运行起来看效果
:::

::: info Experience

* **Step.1：运行Vue CLI的创建项目命令，创建Vue2的工程化项目**

```bash
vue create hei-ma-tou-tiao
```

* **Step.2：重置 App.vue 根组件中的代码**

```html
<template>
  <div>App 根组件</div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less" scoped></style>

```

* **Step.3：删除创建项目时自带的路由规则**

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 清空路由规则
const routes = []

const router = new VueRouter({
  routes
})

export default router
```

* **Step.4：删除 components 目录下的 HelloWorld.vue 组件**
* **Step.5：删除 views 目录下的 About.vue 和 Home.vue 组件**
* **Step.6：执行 npm run serve 命令，把项目运行起来看效果**
:::

## 配置ESLint

::: tip Object
这一小节，我们的目标是了解ESLint及其配置方法
:::

::: warning Path

1. ESLint介绍
2. ESLint的语法规则
3. 自定义ESLint的规则
4. 安装ESLint插件
:::

::: info Experience

* **Kn. 1：ESLint介绍**

  ESLint是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格。使用ESLint的好处在于多人协作时代码风格统一

* **Kn. 2：ESLint的语法规则**

  ESLint 提供了许多校验代码格式的[语法规则](https://eslint.bootcss.com/docs/rules/)，常见的语法规则列表如下：

  | 序号 | 规则名称                    | 规则约束\|默认约束                           |
  | ---- | --------------------------- | -------------------------------------------- |
  | 1    | quotes                      | 默认: 字符串需要使用单引号包裹               |
  | 2    | key-spacing                 | 默认: 对象的属性和值之间，需要一个空格分隔   |
  | 3    | comma-dangle                | 默认: 对象或数组的末尾，不允许出现多余的逗号 |
  | 4    | no-multiple-empty-lines     | 不允许出现多个空行                           |
  | 5    | no-trailing-spaces          | 不允许在行尾出现多余的空格                   |
  | 6    | eol-last                    | 默认：文件的末尾必须保留一个空行             |
  | 7    | spaced-comment              | 在注释中的`//`或`/*`后强制使用一致的间距     |
  | 8    | indent                      | 强制一致的缩进                               |
  | 9    | import/first                | `import` 导入模块的语句必须声明在文件的顶部  |
  | 10   | space-before-function-paren | 方法的形参之前是否需要保留一个空格           |

* **Kn. 3：自定义ESLint的规则**

  如果希望修改 `ESLint` 默认的校验规则，可以在 `.eslintrc.js` 文件的 `rules` 节点下进行自定义。例如：

  ```bash
  rules: {
    "no-console": process .env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process .env.NODE_ENV === "production" ? "warn" : "off",
    // space-before-function-paren代表规则名称
    // error 是该规则的第一个参数，代表的是错误级别:
    // 如果值为off代表关闭规则
    // 如果值为warn代表将规则视为警告
    // 如果值为error代表将规则视为错误
    // never是该规则的第二个参数，代表的是配置项
    // never 代表禁止...
    // always 代表要求...
    'space-before-function-paren': ['error', 'never'],
    // double也是配置项，但是有的规则有，有的规则没有
    // quotes代表引号，在JavaScript中 引号有三种分别单引号、双引号、反引号，double代表双引号
    "quotes": ["error", "double"]
  },
  ```

* **Kn. 4：安装ESLint插件**

  * ⓵ 在 vscode 中搜索并安装 ESLint 插件.
  * ⓶ 打开 vscode 的 settings.json 配置文件，新增如下的配置节点:

    ```bash
    // ESLint 插件的配置
    "editor.codeActionsOnSave": {
      "source.fixAll": true,
    },
    ```

  * ⓷ 点击 vscode 状态栏右下角的 ESLint 按钮，在弹出层中选择 Allow Everywhere。
:::

## 配置Vant组件库

::: tip Object
这一小节，我们的目标是把Vant组件库 配置到 项目中，后续我们写项目的时候，方便我们搭建项目页面
:::

::: warning Path

1. Vant组件库介绍
2. Vant组件库安装
3. 在入口文件导入Vant
4. 在根组件中测试组件
:::

::: info Experience

* **Step. 1：Vant组件库介绍**

  Vant 是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4 年时间。Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。

  目前 Vant 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant/#/zh-CN/)、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。

* **Step. 2：Vant组件库安装**

  ```bash
  npm i vant@2.12.12 -S
  ```

* **Step. 3：在入口文件导入Vant**

  ```js
  import Vue from 'vue'
  // 导入Vant
  import Vant from 'vant'
  // 导入Vant的样式
  import 'vant/lib/index.css'
  // 把Vant作为插件用在Vue中
  Vue.use(Vant)
  ```

* **Step. 4：在根组件中测试组件**

  ```html
  <template>
    <div>
      <p>App 根组件</p>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </template>
  ```

:::

## 配置Rem适配

::: tip Object
这一节，我们的目标是 使用插件帮我们把布局时写的像素(px)单位自动转换为`rem`单位
:::

::: warning Path

1. 安装插件 `postcss-pxtorem` 和 `lib-flexible`
2. 配置 `postcss-pxtorem`
3. 在入口文件中导入 `amfe-flexible`
:::

::: info Experience

* **Step. 1：安装插件 `postcss-pxtorem` 和 `lib-flexible`**

  ```bash
  # postcss-pxtorem 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
  npm i postcss-pxtorem@5.1.1 -D
  # lib-flexible 用于动态设置 rem 基准值
  npm i amfe-flexible@2.2.1 -S
  ```

* **Step. 2：在`postcss.config.js`配置 `postcss-pxtorem`**

  ```js
  module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 根节点的 font-size 值
        propList: ['*'] // 要处理的属性列表，* 代表所有属性
      }
    }
  }
  ```

* **Step. 3：在入口文件中导入 `amfe-flexible`**

  ```js
  import 'amfe-flexible'
  ```

:::

## 安装和配置Axios

::: tip Object
这一小节，我们的目标是对Axios进行二次封装，这样可以使得项目维护接口非常方便...
:::

::: warning Path

1. 安装axios
2. axios基础配置
3. 声明API接口
:::

::: info Experience

* **Step. 1：安装axios**

  ```bash
  npm i axios -S
  ```

* **Step. 2：axios基础配置**

  ```js
  import axios from 'axios'

  // 调用 axios.create() 方法，创建 axios 的实例对象
  const instance = axios.create({
    // 请求根路径
    baseURL: 'http://geek.itheima.net'
  })

  export default instance
  ```

* **Step. 3：声明API接口**

  ```js
  // 1.导入request.js文件
  import request from '../utils/request'

  /**
  * 获取文章列表
  * @param {*} Id 频道ID
  * @param {*} time 时间戳
  */
  export const getArticleListAPI = (Id, time) => {
    return request.get('/v1_0/articles', {
      params: {
        channel_id: Id, // 频道的 Id
        timestamp: time // 时间戳
      }
    })
  }

  /**
  * 将文章设置为不感兴趣
  * @param {*} id 文章Id
  * @returns
  */
  export const dislikeArticleAPI = (id) => {
    return request.post('/v1_0/article/dislikes', {
      target: id
    })
  }
  ```

:::
