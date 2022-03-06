# 小思同学

## 认识websocket

::: tip 目标
这一小节，我们的目标是简单的认识webocked
:::

::: warning 步骤

1. 什么是 websocket
2. websocket 相比于 HTTP 的优势
3. websocket 主要的应用场景
4. HTTP 协议和 websocket 协议对比图
:::

::: info 体验

* **Kn.1：什么是 websocket**

  和 http 协议类似，websocket 也是是一个网络通信协议，是用来满足前后端数据通信的。

* **Kn.2：websocket 相比于 HTTP 的优势**

  HTTP 协议：客户端与服务器建立通信连接之后，服务器端只能被动地响应客户端的请求，无法主动给客户端发送消息。

  websocket 协议：客户端与服务器建立通信连接之后，服务器端可以主动给客户端推送消息了！！！

* **Kn.3：websocket 主要的应用场景**

  需要服务端主动向客户端发送数据的场景，比如我们现在要做的智能聊天

* **Kn.4：HTTP 协议和 websocket 协议对比图**

  ![11-1.01881d8f](./images/11-1.01881d8f.png)
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染小思同学的页面

::: tip 目标
这一小节，我们的目标是渲染小思同学的页面
:::

::: warning 步骤

1. 在 `/src/views` 目录下新建 `Chat` 组件
2. 在 路由模块中，导入 `Chat` 组件并声明路由规则
3. 在 `User` 组件中，为小思同学对应的 `van-cell`添加 `to` 属

:::

::: info 体验

* **Step.1：在 `/src/views` 目录下新建 `Chat` 组件**

```html
<template>
  <div class="container">
    <!-- 固定导航 -->
    <van-nav-bar fixed left-arrow @click-left="$router.back()" title="小思同学"></van-nav-bar>

    <!-- 聊天主体区域 -->
    <div class="chat-list">
      <div>
        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="chat-pao">hi，你好！我是小思</div>
        </div>

        <!-- 右侧是当前用户 -->
        <div class="chat-item right">
          <div class="chat-pao">我是编程小王子</div>
          <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </div>

    <!-- 对话区域 -->
    <div class="reply-container van-hairline--top">
      <van-field v-model.trim="word" placeholder="说点什么...">
        <template #button>
          <span @click="send()" style="font-size:12px;color:#999">提交</span>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      // 用户输入的聊天内容
      word: ''
    }
  },
  methods: {
    // 提交按钮的点击事件处理函数
    send() {
      // 如果输入的聊天内容为空，则 return 出去
      if (!this.word) return

      // 打印输出用户填写的聊天内容
      console.log(this.word)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background: #fafafa;
  padding: 46px 0 50px 0;
  .chat-list {
    height: 100%;
    overflow-y: scroll;
    .chat-item {
      padding: 10px;
      .van-image {
        vertical-align: top;
        width: 40px;
        height: 40px;
      }
      .chat-pao {
        vertical-align: top;
        display: inline-block;
        min-width: 40px;
        max-width: 70%;
        min-height: 40px;
        line-height: 38px;
        border: 0.5px solid #c2d9ea;
        border-radius: 4px;
        position: relative;
        padding: 0 10px;
        background-color: #e0effb;
        word-break: break-all;
        font-size: 14px;
        color: #333;
        &::before {
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          top: 12px;
          border-top: 0.5px solid #c2d9ea;
          border-right: 0.5px solid #c2d9ea;
          background: #e0effb;
        }
      }
    }
  }
}
.chat-item.right {
  text-align: right;
  .chat-pao {
    margin-left: 0;
    margin-right: 15px;
    &::before {
      right: -6px;
      transform: rotate(45deg);
    }
  }
}
.chat-item.left {
  text-align: left;
  .chat-pao {
    margin-left: 15px;
    margin-right: 0;
    &::before {
      left: -5px;
      transform: rotate(-135deg);
    }
  }
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  width: 100%;
  background: #f5f5f5;
  z-index: 9999;
}
</style>
```

* **Step.2：在 路由模块中，导入 `Chat` 组件并声明路由规则**

```js
// 导入小思同学的组件页面
import Chat from '@/views/Chat/Chat.vue'

const routes = [
  // 小思聊天的路由规则
  { path: '/chat', component: Chat, name: 'chat' }
]
```

* **Step.3：在 `User` 组件中，为小思同学对应的 `van-cell`添加 `to` 属**

```html
<van-cell icon="chat-o" title="小思同学" is-link to="/chat" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 动态渲染聊天消息

::: tip 目标
这一小节，我们的目标是动态渲染聊天消息
:::

::: warning 步骤

1. 在 `data` 中声明 `list` 数组，用来聊天消息
2. 动态渲染聊天消息的 `DOM` 结构
:::

::: info 体验

* **Step.1：在 `data` 中声明 `list` 数组，用来聊天消息**

```js
data() {
  return {
    // 用户填写的内容
    word: '',
    // 所有的聊天消息
    list: [
      // 1. 只根据 name 属性，即可判断出这个消息应该渲染到左侧还是右侧
      { name: 'xs', msg: 'hi，你好！我是小思' },
      { name: 'me', msg: '我是编程小王子' }
    ]
  }
},
```

* **Step.2：动态渲染聊天消息的 `DOM` 结构**

```html
<!-- 聊天主体区域 -->
<div class="chat-list">
  <div v-for="(item, index) in list" :key="index">
    <!-- 左侧是机器人小思 -->
    <div class="chat-item left" v-if="item.name === 'xs'">
      <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="chat-pao">{{item.msg}}</div>
    </div>

    <!-- 右侧是当前用户 -->
    <div class="chat-item right" v-else>
      <div class="chat-pao">{{item.msg}}</div>
      <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
  </div>
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 动态渲染用户头像

::: tip 目标
这一小节，我们的目标是动态渲染用户头像
:::

::: warning 步骤

1. 在`vuex` 模块中，定义`getter` 节点`userAvatar`
2. 在 `Chat` 组件中导入 `mapGetters` 辅助函数
3. 在 `Chat` 组件中把 `userAvatar` 映射到当前组件中
4. 动态渲染用户的头像
:::

::: info 体验

* **Step.1：在`vuex` 模块中，定义`getter` 节点`userAvatar`**

```js
getters: {
  // 用户头像的计算属性
  userAvatar(state) {
    // 默认的头像地址
    let imgSrc = 'https://img.yzcdn.cn/vant/cat.jpeg'

    // 如果用户信息对象中包含 photo 属性的值，则为 imgSrc 重新赋值
    if (state.userInfo.photo) {
      imgSrc = state.userInfo.photo
    }

    return imgSrc
  }
}
```

* **Step.2：在 `Chat` 组件中导入 `mapGetters` 辅助函数**

```js
// 按需导入辅助函数
import { mapGetters } from 'vuex'
```

* **Step.3：在 `Chat` 组件中把 `userAvatar` 映射到当前组件中**

```js
computed: {
  ...mapGetters(['userAvatar'])
}
```

* **Step.4：动态渲染用户的头像**

```html
<!-- 右侧是当前用户 -->
<div class="chat-item right" v-else>
  <div class="chat-pao">我是编程小王子</div>
  <van-image fit="cover" round :src="userAvatar" />
</div>
```

:::

## 向 list 数组中追加消息

::: tip 目标
这一小节，我们的目标是向list数组中追加消息
:::

::: warning 步骤

1. 点击提交按钮时，把用户填写的消息内容存储到 `list` 数组中
2. 测试无误之后，将 `list` 数组中的“假数据”清空
:::

::: info 体验

* **Step.1：点击提交按钮时，把用户填写的消息内容存储到 `list` 数组中**

```js
// 提交按钮的点击事件处理函数
send() {
  // 如果输入的聊天内容为空，则 return 出去
  if (!this.word) return

  // 1. 将用户填写的消息存储到 list 数组中
  this.list.push({ name: 'me', msg: this.word })
  // 2. 清空文本框中的消息内容
  this.word = ''
}
```

* **Step.2：测试无误之后，将 `list` 数组中的“假数据”清空**

```js
data() {
  return {
    // 所有的聊天消息
    list: []
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

## 安装和配置 `socket.io-client`

::: tip 目标
这一小节，我们的目标是安装和配置 `socket.io-client`
:::

::: warning 步骤

1. 在项目中运行如下的命令，安装 `websocket` 客户端相关的包
2. 在 `Chat` 组件中，从 `socket.io-client`导入 `io` 方法
3. 先定义变量 `socket`，用来接收 `io`方法创建的 `socket` 实例
:::

::: info 体验

* **Step.1：在项目中运行如下的命令，安装 `websocket` 客户端相关的包**

```bash
npm i socket.io-client@4.0.0 -S

# 如果 npm 无法成功安装 socket.io-client，可以尝试用 yarn 来装包
# yarn add socket.io-client@4.0.0
```

* **Step.2：在 `Chat` 组件中，从 `socket.io-client`导入 `io` 方法**

```js
// 按需导入 io 方法：调用 io('url') 方法，即可创建 websocket 连接的实例
import { io } from 'socket.io-client'
```

* **Step.3：先定义变量 `socket`，用来接收 `io`方法创建的 `socket` 实例**

```js
let socket = null
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 创建和销毁 socket 实例

::: tip 目标
这一小节，我们的目标是创建和销毁socket实例
:::

::: warning 步骤

1. 在 `Chat` 组件的`created`生命周期函数中，创建 websocket 实例对象
2. 在 `Chat` 组件的`beforeDestroy`生命周期函数中，关闭 websocket 连接并销毁`websocket`实例对象
:::

::: info 体验

* **Step.1：在 `Chat` 组件的`created`生命周期函数中，创建 websocket 实例对象**

```js
created() {
  // 创建客户端 websocket 的实例
  socket = io('ws://www.liulongbin.top:9999')
}
```

* **Step.2：在 `Chat` 组件的`beforeDestroy`生命周期函数中，关闭 websocket 连接并销毁`websocket`实例对象**

```js
// 组件被销毁之前，清空 sock 对象
beforeDestroy() {
  // 关闭连接
  socket.close()

  // 销毁 websocket 实例对象
  socket = null
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 监听连接的建立和关闭

::: tip 目标
这一小节，我们的目标是监听连接的建立和关闭
:::

::: warning 步骤

1. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('connect', fn)` 方法，可以监听到 `socket` 连接成功的事件
2. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('disconnect', fn)` 方法，可以监听到 `socket` 连接关闭的事件
:::

::: info 体验

* **Step.1：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('connect', fn)` 方法，可以监听到 `socket` 连接成功的事件**

```js
// 建立连接的事件
socket.on('connect', () => console.log('connect: websocket 连接成功！'))
```

* **Step.2：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('disconnect', fn)` 方法，可以监听到 `socket` 连接关闭的事件**

```js
// 关闭连接的事件
socket.on('disconnect', () => console.log('disconnect: websocket 连接关闭！'))
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 接收服务器发送的消息

::: tip 目标
这一小节，我们的目标是接收服务器发送的消息
:::

::: warning 步骤

1. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('message', fn)` 方法，即可监听到服务器发送到客户端的消息
2. 将服务器发送到客户端的消息，存储到 `Chat.vue` 组件的 `list` 数组中
:::

::: info 体验

* **Step.1：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('message', fn)` 方法，即可监听到服务器发送到客户端的消息**

```js
// 接收到消息的事件
socket.on('message', msg => console.log(msg))
```

* **Step.2：将服务器发送到客户端的消息，存储到 `Chat.vue` 组件的 `list` 数组中**

```js
// 接收到消息的事件
socket.on('message', msg => {
  // 把服务器发送过来的消息，存储到 list 数组中
  this.list.push({ name: 'xs', msg })
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 向服务器发送消息

::: tip 目标
这一小节，我们的目标是向服务器发送消息
:::

::: warning 步骤

1. 客户端调用 socket.emit('send', '消息内容') 方法，即可向 websocket 服务器发送消息
:::

::: info 体验

* **Step.1：客户端调用 socket.emit('send', '消息内容') 方法，即可向 websocket 服务器发送消息**

```js
// 提交按钮的点击事件处理函数
send() {
  // 如果输入的聊天内容为空，则 return 出去
  if (!this.word) return

  // 向服务器发送消息
  socket.emit('send', this.word)
  // 将用户填写的消息存储到 list 数组中
  this.list.push({ name: 'me', msg: this.word })
  // 清空文本框中的消息内容
  this.word = ''
}
```

:::

## 自动滚动到底部

::: tip 目标
这一小节，我们的目标是 让聊天信息自动滚动到底部
:::

::: warning 步骤

1. 在 `methods` 中声明 `scrollToBottom` 方法
2. 在 `Chat` 组件中定义 `watch` 侦听器，监视 `list` 数组的变化，从而自动滚动到页面底部
:::

::: info 体验

* **Step.1：在 `methods` 中声明 `scrollToBottom` 方法**

```js
// 滚动到页面底部
scrollToBottom() {
  // 1. 获取到所有的聊天 Item 项
  const chatItem = document.querySelectorAll('.chat-item')
  // 2. 获取到最后一项对应的 DOM 元素
  const lastItem = chatItem[chatItem.length - 1]

  // 3. 滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见
  lastItem.scrollIntoView({
    behavior: 'smooth',
    // 定义垂直方向的对齐（end 表示元素的底端将和其所在滚动区的可视区域的底端对齐）
    block: 'end'
  })
}
```

* **Step.2：在 `Chat` 组件中定义 `watch` 侦听器，监视 `list` 数组的变化，从而自动滚动到页面底部**

```js
watch: {
  list() {
    // 监视到 list 数据变化后，等 DOM 更新完毕，再执行滚动到底部的操作
    this.$nextTick(() => {
      this.scrollToBottom()
    })
  }
}
```

:::
