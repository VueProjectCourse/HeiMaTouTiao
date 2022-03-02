# 个人中心

## 渲染个人中心的基础布局

::: tip 目标
这一小节，我们的目标是 渲染个人中心的基础布局
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `User.vue` 组件
2. 在 `/src/router/index.js` 模块中导入 `User.vue` 组件
3. 在路由模块的 `routes` 数组中，声明路由规则
4. 在`/User` 组件中，声明模板结构
5. 在 `User` 组件中编写样式
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `User.vue` 组件**
* **Step.2：在 `/src/router/index.js` 模块中导入 `User.vue` 组件**
* **Step.3：在路由模块的 `routes` 数组中，声明路由规则**
* **Step.4：在`/User` 组件中，声明模板结构**

```html
<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img src="" alt="" class="avatar">
        </template>
        <template #title>
          <span class="username">用户名</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link />
      <van-cell icon="chat-o" title="小思同学" is-link />
      <van-cell icon="warning-o" title="退出登录" is-link />
    </van-cell-group>
  </div>
</template>
```

* **Step.5：在 `User` 组件中编写样式**

```css
.user-container {
  .user-card {
    background-color: #007bff;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #007bff;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
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

## 在 vuex 中请求用户的基本信息

::: tip 目标
这一小节，我们的目标是在Vuex中请求用户的基本信息
:::

::: warning 步骤

1. 在 `userAPI.js` 模块中，定义请求用户基本信息的 `API` 方法
2. 在 `vuex` 模块中，按需导入请求用户基本信息的 `API` 方法
3. 在 `vuex`模块中，定义`initUserInfo`异步方法
4. 在 `vuex` 模块中，在 `initState` 对象中新增 `userInfo` 数据节点
5. 在 `vuex` 模块中定义`updateUserInfo` 同步方法，负责请求到的数据转存到 `state` 中
6. 在`initUserInfo` 方法中，触发指定名称的 `Mutation` 方法
:::

::: info 体验

* **Step.1：在`userAPI.js`模块中，定义请求用户基本信息的方法**

```js
// 请求用户基本信息的 API
export const getUserInfoAPI = () => {
  return request.get('/v1_0/user')
}
```

* **Step.2：在 `vuex` 模块中，按需导入请求用户基本信息的方法**

```js
// 按需导入 API 方法
import { getUserInfoAPI } from '@/api/userAPI.js'
```

* **Step.3：在 `vuex`模块中，定义`initUserInfo`异步方法**

```js
actions: {
  // 初始化用户的基本信息
  async initUserInfo(ctx) {
    // 调用 API 接口
    const { data: res } = await getUserInfoAPI()
    if (res.message === 'OK') {
      // TODO：把数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
    }
  }
}
```

* **Step.4：在 `vuex` 模块中，在 `initState` 对象中新增 `userInfo` 数据节点**

```js
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {},
  // 用户的基本信息
  userInfo: {}
}
```

* **Step.5：在 `vuex` 模块中定义`updateUserInfo` 同步方法，负责请求到的数据转存到 `state` 中**

```js
// 更新 userInfo 的方法
updateUserInfo(state, payload) {
  // 1. 把用户信息转存到 state 中
  state.userInfo = payload
  // 2. 将最新的 state 对象持久化存储到本地
  this.commit('saveStateToStorage')
}
```

* **Step.6：在`initUserInfo` 方法中，触发指定名称的同步方法**

```js
// 初始化用户的基本信息
async initUserInfo(ctx) {
  // 调用 API 接口
  const { data: res } = await getUserInfoAPI()
  if (res.message === 'OK') {
    // TODO：把数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
    ctx.commit('updateUserInfo', res.data)
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

## 在组件中使用 Action 方法

::: tip 目标
这一小节，我们的目标是在组件中使用 Actions中的方法
:::

::: warning 步骤

1. 在`User`组件中，导入 `mapActions` 辅助函数
2. 在`User`组件中，调用`mapActions`辅助函数，将方法映射到组件中
3. 在`User`组件的 `created` 函数中调用映射过来的 `initUserInfo` 方法
:::

::: info 体验

* **Step.1：在`User`组件中，导入 `mapActions` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions } from 'vuex'
```

* **Step.2：在`User`组件中，调用`mapActions`辅助函数，将方法映射到组件中**

```js
export default {
  name: 'User',
  methods: {
    // 从 vuex 中把指定名称的 Action 方法映射到组件中使用
    ...mapActions(['initUserInfo'])
  }
}
```

* **Step.3：在`User`组件的 `created` 函数中调用映射过来的 `initUserInfo` 方法**

```js
created() {
  this.initUserInfo()
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 在组件中使用 state 数据

::: tip 目标
这一小节，我们的目标是在组件中使用vuex中的state数据
:::

::: warning 步骤

1. 在 `User` 组件中，导入 `mapState` 辅助函数
2. 在 `User` 组件的 `computed` 节点下调用 `mapState` 辅助函数,映射数据
3. 把映射过来的数据，渲染到 `User` 组件的模板结构中

:::

::: info 体验

* **Step.1：在 `User` 组件中，导入 `mapState` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions, mapState } from 'vuex'
```

* **Step.2：在 `User` 组件的 `computed` 节点下调用 `mapState` 辅助函数,映射数据**

```js
computed: {
  // 从 vuex 中把指定名称的 State 数据映射到组件中使用
  ...mapState(['userInfo'])
}
```

* **Step.3：把映射过来的数据，渲染到 `User` 组件的模板结构中**

```html
<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img :src="userInfo.photo" alt="" class="avatar">
        </template>
        <template #title>
          <span class="username">{{userInfo.name}}</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>{{userInfo.art_count}}</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>{{userInfo.follow_count}}</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>{{userInfo.fans_count}}</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link />
      <van-cell icon="chat-o" title="小思同学" is-link />
      <van-cell icon="warning-o" title="退出登录" is-link />
    </van-cell-group>
  </div>
</template>
```

:::

## 渲染退出登录的确认提示框

::: tip 目标
这一小节，我们的目标是 渲染退出登录的确认提示框
:::

::: warning 步骤

1. 在 `User` 组件中，为退出登录的 `<van-cell>` 组件绑定点击事件
2. 在 `User` 组件的 `methods` 节点下，定义 `logout` 方法
3. 基于 `async/await` 简化 `Promise` 的调用
4. 基于 `.catch()` 方法捕获 `Promise` 中产生的错误
5. 判断用户点击了确认还是取消按钮
:::

::: info 体验

* **Step.1：在 `User` 组件中，为退出登录的 `<van-cell>` 组件绑定点击事件**

```html
<van-cell icon="warning-o" title="退出登录" is-link @click="logout" />
```

* **Step.2：在 `User` 组件的 `methods` 节点下，定义 `logout` 方法**

```js
// 点击了退出登录
logout() {
  // 展示确认的提示框
  const confirmResult = this.$dialog.confirm({
    title: '提示',
    message: '确认退出登录吗？'
  })

  // 经过打印输出，发现 confirmResult 是一个 Promise 对象
  console.log(confirmResult)
}
```

* **Step.3：基于 `async/await` 简化 `Promise` 的调用**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog.confirm({
    title: '提示',
    message: '确认退出登录吗？'
  })

  // 经过打印输出，发现 confirmResult 是一个 string 字符串
  console.log(confirmResult, typeof confirmResult)
}
```

* **Step.4：基于 `.catch()` 方法捕获 `Promise` 中产生的错误**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })

  // 经过打印输出发现：
  // 点击“确认”按钮时，confirmResult 的值为字符串 confirm
  // 点击“取消”按钮时，confirmResult 的值为字符串 cancel
  console.log(confirmResult)
}
```

* **Step.5：判断用户点击了确认还是取消按钮**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })
2
  // 如果点击了取消，则不执行后续的操作
  if (confirmResult === 'cancel') return

  // TODO：实现退出的登录操作：
  // 1. 清空 vuex 中的数据
  // 2. 清空本地的数据
  // 3. 跳转到登录页
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 实现退出登录的功能

::: tip 目标
这一小节，我们的目标是 实现退出登录的功能
:::

::: warning 步骤

1. 在 `vuex` 中定义名为 `cleanState` 的同步方法
2. 在 `User` 组件中按需导入 `mapMutations` 辅助函数
3. 调用 `mapMutations` 辅助函数，把 `cleanState`映射到`User`组件中
4. 在 `User` 组件的 `logout` 方法中，调用映射过来的方法，并跳转到登录页
:::

::: info 体验

* **Step.1：在 `vuex` 中定义名为 `cleanState` 的同步方法**

```js
// 清空 vuex 和本地的数据
cleanState(state) {
  // 1. 清空 vuex 中的数据
  state.tokenInfo = {}
  state.userInfo = {}

  // 2. 将清空后的 state 存储到本地
  this.commit('saveStateToStorage')
}

```

* **Step.2：在 `User` 组件中按需导入 `mapMutations` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions, mapState, mapMutations } from 'vuex'
```

* **Step.3：调用 `mapMutations` 辅助函数，把 `cleanState`映射到`User`组件中**

```js
methods: {
  ...mapMutations(['cleanState']),
}
```

* **Step.4：在 `User` 组件的 `logout` 方法中，调用映射过来的方法，并跳转到登录页**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })

  // 如果点击了取消，则不执行后续的操作
  if (confirmResult === 'cancel') return

  // TODO：实现退出的登录操作：
  // 1. 清空 vuex 中的数据
  // 2. 清空本地的数据
  this.cleanState()
  // 3. 跳转到登录页
  this.$router.push('/login')
}
```

:::

## 导航到编辑用户资料页面

::: tip 目标
这一小节，我们的目标是 导航到编辑用户资料页面
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `UserEdit` 组件
2. 在路由模块中导入 `UserEdit` 组件
3. 在路由模块的 `routes` 数组中声明 `UserEdit` 组件的路由规则
4. 在 `User` 组件中，为编辑资料的 `<van-cell>` 绑定点击事件处理函数
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `UserEdit` 组件**

```html
<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.back()" fixed />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </template>
      </van-cell>
      <van-cell title="名称" is-link value="张三" />
      <van-cell title="生日" is-link value="2012-12-12" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserEdit'
}
</script>

<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
}

.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>
```

* **Step.2：在路由模块中导入 `UserEdit` 组件**

```js
import UserEdit from '@/views/UserEdit/UserEdit.vue'
```

* **Step.3：在路由模块的 `routes` 数组中声明 `UserEdit` 组件的路由规则**

```js
const routes = [
  // 编辑用户资料的路由规则
  { path: '/user/edit', component: UserEdit, name: 'user-edit' }
]
```

* **Step.4：在 `User` 组件中，为编辑资料的 `<van-cell>` 绑定点击事件处理函数**

```html
<!-- 通过命名路由实现导航跳转 -->
<van-cell icon="edit" title="编辑资料" is-link @click="$router.push({name: 'user-edit'})" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 请求用户的简介信息

## 把请求到的数据转存到 state

## 在组件中使用 Actions 方法

## 在组件中使用 state中的数据

## 修改用户名称

## 修改用户生日

## 修改用户头像
