# 登录操作

## 基于路由渲染登录组件

::: tip 目标
这一小节，我们的目标是基于路由来渲染登录组件
:::

::: warning 步骤

1. 在`/src/views`目录之下，创建Login文件夹，并在其下新建Login.vue登录组件
2. 在`/src/router/index.js`路由模块中，导入需要通过路由渲染的login.vue登录组件
3. 在路由模块的routes数组中，声明登录组件的路由规则
4. 当用户访问`http://localhost:8080/#/login`地址的时候，渲染出登录组件
:::

::: info 体验

* **Step.1：在`/src/views`目录之下，创建Login文件夹，并在其下新建Login.vue登录组件**

```html
<template>
  <div>登录组件</div>
</template>

<script>
export default {
  // name 是当前组件的名称（建议为每个组件都指定唯一的 name 名称）
  name: 'Login'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在`/src/router/index.js`路由模块中，导入需要通过路由渲染的login.vue登录组件**

```js
// 导入需要的路由组件
import Login from '@/views/Login/Login.vue'
```

* **Step.3：在路由模块的routes数组中，声明登录组件的路由规则**

```js
const routes = [
  // 带有 name 名称的路由规则，叫做“命名路由”
  { path: '/login', component: Login, name: 'login' }
]
```

* **Step.4：当用户访问`http://localhost:8080/#/login`地址的时候，渲染出登录组件**

```vue
<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染登录组件的头部区域

::: tip
这一小节，我们的目标是**基于 Vant 的** [NavBar 导航栏](https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar) **组件，渲染登录组件的头部区域**
:::

::: warning 步骤

1. 渲染登录组件的header头部区域
2. 为 `<van-nav-bar>` 组件添加 `fixed`属性，实现顶部固定定位的效果
3. 为`Login.vue`组件最外层的`div`元素添加名为`login-container`的类名，防止`<van-nav-bar>`组件遮挡其他元素
4. 在`Login.vue`组件的`style`节点中给`login-container`添加样式
:::

::: info 体验

* **Step.1： 渲染登录组件的header头部区域**

```html
<template>
  <div>
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" />
  </div>
</template>
```

* **Step.2： 为 `<van-nav-bar>` 组件添加 `fixed`属性，实现顶部固定定位的效果**

```html
<van-nav-bar title="黑马头条 - 登录" fixed />
```

* **Step.3： 为`Login.vue`组件最外层的`div`元素添加名为`login-container`的类名，防止`<van-nav-bar>`组件遮挡其他元素**

```html
<template>
  <div class="login-container">
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" fixed />
  </div>
</template>
```

* **Step.4： 在`Login.vue`组件的`style`节点中给`login-container`添加样式**

```css
.login-container {
  padding-top: 46px;
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染登录表单

::: tip 目标
这一小节，我们的目标是渲染登录表单
:::

::: warning 步骤

1. 在`Login.vue`组件的`script`节点中，声明`mobile`和`code`
2. 在`Login.vue`组件的模板结构中定义DOM结构
:::

::: info 体验

* **Step.1： 在`Login.vue`组件的`script`节点中，声明`mobile`和`code`**

```js
export default {
  name: 'Login',
  data() {
    return {
      // 登录表单的数据，最终要双向绑定到 form 这个数据对象上
      form: {
        // 用户的手机号
        mobile: '',
        // 登录的密码
        code: ''
      }
    }
  }
}
```

* **Step.2： 在`Login.vue`组件的模板结构中定义DOM结构**

```js
<!-- 登录的表单 -->
<van-form>
  <van-field v-model="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required></van-field>
  <van-field v-model="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required></van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 添加校验规则

::: tip 目标

这一小节，我们的目标是为表单添加校验规则
:::

::: warning 步骤

1. 在`Login.vue`组件的data中声明**登录表单的校验规则对象**，里面包含了**手机号**和**密码**的校验规则
2. 在`Login.vue`组件的模板结构中，为每个`<van-field>`组件应用对应的校验规则
3. 为手机号添加pattern正则进行校验
:::

::: info 体验

* **Step.1： 在`Login.vue`组件的data中声明**登录表单的校验规则对象**，里面包含了**手机号**和**密码**的校验规则**

```js
data() {
  return {
    // 表单的校验规则对象
    rules: {
      // 手机号的校验规则
      mobile: [{ required: true, message: '请填写您的手机号', trigger: 'onBlur' }],
      // 密码的校验规则
      code: [{ required: true, message: '请填写您的密码', trigger: 'onBlur' }]
    }
  }
}
```

* **Step.2： 在`Login.vue`组件的模板结构中，为每个`<van-field>`组件应用对应的校验规则**

```js
// 只有同时满足以下两个验证规则，才能验证通过
mobile: [
  // 必填项的校验规则
  { required: true, message: '请填写您的手机号', trigger: 'onBlur' },
  // 11 位手机号的校验规则
  { pattern: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
]
```

* **Step.3： 为手机号添加pattern正则进行校验**
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 实现登陆功能

::: tip 目标
这一小节，我们的目标是实现登录功能
:::

::: warning 步骤

1. 为`<van-form>`组件绑定`submit`事件处理函数
2. 在`Login.vue`组件中的methods节点声明`login`事件处理函数
3. 在 `src` 目录之下，新建 `api`文件夹，并在其下新建`userAPI.js`模
4. 在`Login.vue`组件中，按需导入登录的API接口
5. 在`<van-form>`组件的`submit`事件处理函数中，调用`loginAPI`接口
:::

::: info 体验

* **Step.1： 为`<van-form>`组件绑定`submit`事件处理函数**

```html
<!-- 登录的表单 -->
<van-form @submit="login"></van-form>
```

* **Step.2： 在`Login.vue`组件中的methods节点声明`login`事件处理函数**

```js
methods: {
  login() {
    // 只有当表单数据校验通过之后，才会调用此 login 函数
    console.log('ok')
    // TODO：调用 API 接口，发起登录的请求
  }
}
```

* **Step.3： 在 `src` 目录之下，新建 `api`文件夹，并在其下新建`userAPI.js`模**

```js
import request from '@/utils/request'

// 登录的 API 接口
export const loginAPI = data => {
  return request.post('/v1_0/authorizations', data)
}
```

* **Step.4： 在`Login.vue`组件中，按需导入登录的API接口**

```js
import { loginAPI } from '@/api/userAPI'
```

* **Step.5： 在`<van-form>`组件的`submit`事件处理函数中，调用`loginAPI`接口**

```js
    methods: {
    async login() {
      // 只有当表单数据校验通过之后，才会调用 Login 函数
      // 只有当表单数据校验通过之后，才会调用此Login函数
      const res = await loginAPI(this.form)
      // 当数据请求成功之后，res.data中存储的就是服务器响应回来的数据
      console.log(res)

      // 判断是否登录成功了
      if (res.message === 'ok') {
        // TODO1: 把登录成功的解构，存储到 vuex 中
        // TODO2: 登录成功后，跳转到主页
      }
    }
  }
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 把token存储到vuex

::: tip 目标
这一小节，我们的目标是把token存储到vuex中
:::

::: warning 步骤

1. 在vuex模块中声明如下的state数据节点，定义专门用来存储token信息的`tokenInfo`对象
2. 在mutations节点下，定义名为`updateTokenInfo`的Mutation方法，专门用来更新`tokenInfo`的值
3. 在`Login.vue`组件中，通过`mapMutations`辅助方法，把`updateTokenInfo`映射为组件的methods方法
:::

::: info 体验

* **Step.1： 在vuex模块中声明如下的state数据节点，定义专门用来存储token信息的`tokenInfo`对象**

```js
export default new Vuex.Store({
  state: {
    // 用来存储token信息的对象，将来这个对象中会包含两个属性 {token, refresh_token}
    tokenInfo: {}
  }
})
```

* **Step.2： 在mutations节点下，定义名为`updateTokenInfo`的Mutation方法，专门用来更新`tokenInfo`的值**

```js
export default new Vuex.Store({
  mutations: {
    // 更新 tokenInfo 数据的方法
    updateTokenInfo (state, payload) {
      // 把提交过来的 payload 对象， 作为 tokenInfo 的值
      state.tokenInfo = payload
      // 测试 state 中是否有数据
      console.log(state)
    }
  }
})
```

* **Step.3： 在`Login.vue`组件中，通过`mapMutations`辅助方法，把`updateTokenInfo`映射为组件的methods方法**

```js
// 1. 按需导入辅助方法
import { mapMutations } from 'vuex'

export default {
  methods: {
    // 2. 映射 mutations 中的方法
    ...mapMutations(['updateTokenInfo']),

    async login() {
      const { data: res } = await loginAPI(this.form)
      console.log(res)

      if (res.message === 'OK') {
        // 3. 把登录成功的结果，存储到 vuex 中
        this.updateTokenInfo(res.data)
        // 4. 登录成功后，跳转到主页
        this.$router.push('/')
      }
    }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 持久化存储state

::: tip 目标
这一小节，我们的目标是把state持久化存储到客户端，存储在 vuex 中的数据都是内存数据，只要浏览器一刷新，vuex 的数据就被清空了。为了防止这个问题，我们可以把 vuex 中的数据持久化存储到浏览器的 localStorage 中。
:::

::: warning 步骤

1. 在`mutations`节点下，定义名为`saveStateStorage` 的函数，专门把state数据持久化存储到localStorage中
2. 今后， 只要`tokenInfo`对象被更新了，就可以调用`saveStateStorage`方法，把最新的state持久化存储到本地
:::

::: info 体验

* **Step.1： 在`mutations`节点下，定义名为`saveStateStorage` 的函数，专门把state数据持久化存储到localStorage中**

```js
// 将 state 持久化存储到本地
saveStateToStorage(state) {
  localStorage.setItem('state', JSON.stringify(state))
}
```

* **Step.2： 只要`tokenInfo`对象被更新了，就可以调用`saveStateStorage`方法，把最新的state持久化存储到本地**

```js
// 更新 tokenInfo 数据的方法
updateTokenInfo(state, payload) {
  state.tokenInfo = payload

  // 如果希望在 Mutation A 中调用 Mutation B，需要通过 this.commit() 方法来实现
  // this 表示当前的 new 出来的 store 实例对象
  this.commit('saveStateToStorage')
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 初始化vuex时加载本地的state

::: tip
 这一小节，我们的目标是当 new Vuex.Store()时，需要读取localStorage中的数据，将读取的结果作为state的初始值
:::

::: warning 步骤

1. 定义初始的 state 对象， 命名为 `initState`
2. 把 `initState` 对象作为 `new Vuex.Store()` 时候的state初始值
3. 在 `new Vuex.Store()`之前， 读取localStorage中本地存储的state字符串
4. 如果 `stateStr`的值存在， 则证明本地存储中有之前存储的state数据，需要转换后赋值给`initState`
:::

::: info 体验

* **Step.1： 定义初始的 state 对象， 命名为 `initState`**

```js
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {}
}
```

* **Step.2： 把 `initState` 对象作为 `new Vuex.Store()` 时候的state初始值**

```js
export default new Vuex.Store({
  // 为 state 赋初值
  state: initState

  // 省略其它代码...
})
```

* **Step.3： 在 `new Vuex.Store()`之前， 读取localStorage中本地存储的state字符串**

```js
const stateStr = localStorage.getItem('state')
```

* **Step.4： 如果 `stateStr`的值存在， 则证明本地存储中有之前存储的state数据，需要转换后赋值给`initState`**

```js
if (stateStr) {
  // 加载本地的数据
  initState = JSON.parse(stateStr)
}

export default new Vuex.Store({
  // 为 state 赋初值
  state: initState

  // 省略其它代码...
})
```

:::

## axios拦截器

> [中文官方文档地址:http://www.axios-js.com/zh-cn/docs/#拦截器](http://www.axios-js.com/zh-cn/docs/#%E6%8B%A6%E6%88%AA%E5%99%A8)

### 什么是axios拦截器

**拦截器**(英文: Interceptors)会在**每次发起ajax请求和得到响应**的时候自动触发。

![img](./images/2-1.1ce0958b.png)

1. 在组件中发起请求的时候，会触发axios**的请求拦截器**。
2. 当API接口服务器响应回来数据以后，会触发axios**的响应拦截器**。

### 拦截器的好处

拦截器可以在全局拦截每一次axios的请求和响应，并**统一的进行处理**。这样可以避免写重复的代码。例如，下面的需求就是拦截器的典型应用场景：

* 每次调用API接口之前，展示loading提示效果
* 每次接口调用成功之后，隐藏loading提示效果

### axios拦截器的分类

axios 拦截器分为请求拦截器和响应拦截器。顾名思义，请求拦截器会在每次发起请求的时候被触发；响应拦截器会在每次得到响应之后被触发。

1. 定义**请求拦截器**的固定写法：

```js
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
```

2. 定义**响应拦截器**的固定写法：

```js
// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
```

## 基于拦截器实现loading效果

::: tip 目标
这一小节，我们的目标是基于 Vant 的 [Toast 轻提示](https://vant-contrib.gitee.io/vant/#/zh-CN/toast) 组件，方便的展示 loading 效果
:::

::: warning 步骤

1. 在`src/utils/request.js`模块中，从`vant`中按需导入`Toast`组件
2. 在请求拦截器中，展示loading提示效果
3. 在响应拦截器中，隐藏loading提示效果
:::

::: info 体验

* **Step.1： 在`src/utils/request.js`模块中，从`vant`中按需导入`Toast`组件**

```js
import { Toast } from 'vant'
```

* **Step.2： 在请求拦截器中，展示loading提示效果**

```js
// 请求拦截器
// 注意：在我们的项目中，是基于 instance 实例来发起 ajax 请求的，
// 因此一定要为 instance 实例绑定请求拦截器
instance.interceptors.request.use(
  config => {
    // 展示 loading 效果
    Toast.loading({
      message: '加载中...', // 文本内容
      duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
```

* **Step.3： 在响应拦截器中，隐藏loading提示效果**

```js
// 响应拦截器（注意：响应拦截器也应该绑定给 instance 实例）
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
```

:::

## 基于拦截器添加token认证

::: tip 目标
这一小节，我们的目标是实现基于拦截器添加token认证
:::

::: warning 步骤

1. 在`request.js`模块中导入vuex的模块
2. 在请求拦截器中，从`store.state`中获取到`tokenInfo`对象上的`token`值：
3. 如果`tokenStr`的值不为空，则为这次请求的请求头添加`Authorization`身份认证字段：

:::

::: info 体验

* **Step.1： 在`request.js`模块中导入vuex的模块**
* **Step.2： 在请求拦截器中，从`store.state`中获取到`tokenInfo`对象上的`token`值**
* **Step.3： 如果`tokenStr`的值不为空，则为这次请求的请求头添加`Authorization`身份认证字段**

```js
// 从 vuex 中获取 token 的值
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      // 只有 tokenStr 的值存在，才有必要挂载到请求头的 Authorization 属性中
      config.headers.Authorization = 'Bearer ' + tokenStr
    }
```

:::
