# 反馈操作

## 展示反馈的动作画板

::: tip 目标
这一小节，我们的目标是展示反馈的动作面板，基于 Vant 的 [ActionSheet 动作面板](https://vant-contrib.gitee.io/vant/#/zh-CN/action-sheet)组件，可以方便的渲染出反馈操作对应的区域
:::

::: warning 步骤

1. 在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构
2. 在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏
3. 在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板
:::

::: info 体验

* **Step.1：在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构**

```html
<!-- 文章的信息 -->
<van-cell></van-cell>

<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <div class="content">内容</div>
</van-action-sheet>
```

* **Step.2：在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏**

```js
data() {
  return {
    // 是否展示反馈面板
    show: false
  }
}
```

* **Step.3：在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板**

```html
<!-- 关闭按钮 -->
<!-- 通过 .stop 事件修饰符，阻止点击事件的冒泡 -->
<van-icon name="cross" @click.stop="show = true" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染一级反馈面板的结构

::: tip 目标
这一小节，我们的目标是 渲染一级反馈面板的结构，基于 Vant 的 [Cell 单元格](https://vant-contrib.gitee.io/vant/#/zh-CN/cell)组件，可以快速渲染出一级反馈面板的可选项
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件的反馈动作面板中，声明如下的**一级反馈面板**可选项
2. 在 `ArtItem.vue` 组件的 `<style>` 节点下，声明 `center-title` 类名
3. 在 `ArtItem.vue` 组件的 `data` 中声明如下的 `actions` 可选项数组
4. 基于 `v-for` 指令，循环渲染一级反馈面板的可选项列表
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件的反馈动作面板中，声明如下的**一级反馈面板**可选项**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div>
    <van-cell title="aaa" clickable class="center-title" />
    <van-cell title="aaa" clickable class="center-title" />
    <van-cell title="aaa" clickable class="center-title" />
  </div>
</van-action-sheet>
```

* **Step.2：在 `ArtItem.vue` 组件的 `<style>` 节点下，声明 `center-title` 类名**

```css
.center-title {
  text-align: center;
}
```

* **Step.3：在 `ArtItem.vue` 组件的 `data` 中声明如下的 `actions` 可选项数组**

```js
data() {
  return {
    // 第一个面板的可选项列表
    actions: [
      { name: '不感兴趣' },
      { name: '反馈垃圾内容' },
      { name: '拉黑作者' }
    ]
  }
}
```

* **Step.4：基于 `v-for` 指令，循环渲染一级反馈面板的可选项列表**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div>
    <!-- 循环渲染可选项 -->
    <van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" />
  </div>
</van-action-sheet>
```

:::

## 点击一级选项

::: tip 目标
这一小节，我们的目标是给一级选项添加JavaScript交互效果...
:::

::: warning 步骤

1. 为一级选项绑定名为 `onCellClick` 的点击事件处理函数，同时把当前选项的 `name` 作为参数，传递给事件处理函数
2. 在 `ArtItem.vue` 组件的 `methods` 节点下，声明 `onCellClick` 方法
:::

::: info 体验

* **Step.1：为一级选项绑定名为 `onCellClick` 的点击事件处理函数，同时把当前选项的 `name` 作为参数，传递给事件处理函数**

```html
<!-- 一级选项 -->
<van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
```

* **Step.2：在 `ArtItem.vue` 组件的 `methods` 节点下，声明 `onCellClick` 方法**

```js
methods: {
  // 一级选项的点击事件处理函数
  onCellClick(name) {
    if (name === '不感兴趣') {
      console.log('不感兴趣')
      this.show = false

    } else if (name === '拉黑作者') {
      console.log('拉黑作者')
      this.show = false

    } else if (name === '反馈垃圾内容') {
      // TODO：展示二级反馈面板
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

## 渲染二级反馈面板的结构

::: tip 目标
这一小节，我们的目标是渲染二级反馈面板的结构
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件的反馈动作面板中，声明二级反馈面板
2. 在 `ArtItem.vue` 组件的 data 节点下，定义名为 `isFirst` 的布尔值，用来控制是否展示第一个面
3. 在 `ArtItem.vue` 组件中的反馈动作面板中，结合 `v-if` 与 `v-else` 指令，按需展示对应的反馈面板
4. 点击一级反馈面板中的反馈垃圾内容选项时，将 `isFirst` 设置为 `false`，从而展示二级反馈面板
5. 当点击二级反馈面板中的返回时，将 `isFirst` 设置为 `true`，从而展示一级反馈面板
6. 监听 `<van-action-sheet>` 的 `@closed` 事件，当动作面板完全关闭且结束动画以后，将 `isFirst` 设置为 `true`。保证下次打开动作面板时，默认展示第一个反馈面板
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件的反馈动作面板中，声明二级反馈面板**

```html
<!-- 一级选项 -->
<van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
```

* **Step.2：在 `ArtItem.vue` 组件的 data 节点下，定义名为 `isFirst` 的布尔值，用来控制是否展示第一个面**

```js
methods: {
  // 一级选项的点击事件处理函数
  onCellClick(name) {
    if (name === '不感兴趣') {
      console.log('不感兴趣')
      this.show = false

    } else if (name === '拉黑作者') {
      console.log('拉黑作者')
      this.show = false

    } else if (name === '反馈垃圾内容') {
      // TODO：展示二级反馈面板
    }
  }
}
```

* **Step.3：在 `ArtItem.vue` 组件中的反馈动作面板中，结合 `v-if` 与 `v-else` 指令，按需展示对应的反馈面板**

```html
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div v-if="isFirst">
    <van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
  </div>
  <!-- 第二级反馈面板 -->
  <div v-else>
    <van-cell title="返回" clickable title-class="center-title" />
  </div>
</van-action-sheet>
```

* **Step.4：点击一级反馈面板中的反馈垃圾内容选项时，将 `isFirst` 设置为 `false`，从而展示二级反馈面板**

```js
else if (name === '反馈垃圾内容') {
  // TODO：展示二级反馈面板
  this.isFirst = false
}
```

* **Step.5：当点击二级反馈面板中的返回时，将 `isFirst` 设置为 `true`，从而展示一级反馈面板**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
</div>
```

* **Step.6：监听 `<van-action-sheet>` 的 `@closed` 事件，当动作面板完全关闭且结束动画以后，将 `isFirst` 设置为 `true`。保证下次打开动作面板时，默认展示第一个反馈面板**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false" @closed="isFirst = true">
  <!-- 省略其它代码 -->
</van-action-sheet>
```

:::
::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染二级反馈面板的数据

::: tip 目标
这一小节，我们的目标是渲染二级反馈面板的数据
:::

::: warning 步骤

1. 在 `/src/api/` 目录下，新建 `reports.js` 模块，用来定义第二个反馈面板要用到的列
2. 在 `ArtItem.vue` 组件中，导入 `/src/api/reports.js` 模块
3. 并将导入得到的 `reports` 数组挂载为 `ArtItem.vue` 组件的 `data` 数据，供模板结构进行 `v-for`循环的渲染
4. 在 `ArtItem.vue` 组件的模板结构中，循环渲染**二级反馈面板**的可选项列表
:::

::: info 体验

* **Step.1：在 `/src/api/` 目录下，新建 `reports.js` 模块，用来定义第二个反馈面板要用到的列**

```js
// 以模块的方式导出"举报文章"时，后端接口约定的举报类型
const reports = [
  {
    type: 0,
    label: '其它问题'
  },
  {
    type: 1,
    label: '标题夸张'
  },
  {
    type: 2,
    label: '低俗色情'
  },
  {
    type: 3,
    label: '错别字多'
  },
  {
    type: 4,
    label: '旧闻重复'
  },
  {
    type: 6,
    label: '内容不实'
  },
  {
    type: 8,
    label: '侵权'
  },
  {
    type: 5,
    label: '广告软文'
  },
  {
    type: 7,
    label: '涉嫌违法犯罪'
  }
]
export default reports
```

* **Step.2：在 `ArtItem.vue` 组件中，导入 `/src/api/reports.js` 模块**

```js
import reports from '@/api/reports'
```

* **Step.3：并将导入得到的 `reports` 数组挂载为 `ArtItem.vue` 组件的 `data` 数据，供模板结构进行 `v-for`循环的渲染**

```js
data() {
  return {
    // 省略其它数据项...

    // 第二个面板的可选项列表，数组中每一项的格式 { type, label }
    reports
  }
}
```

* **Step.4：在 `ArtItem.vue` 组件的模板结构中，循环渲染**二级反馈面板**的可选项列表**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
  <van-cell :title="item.label" clickable title-class="center-title" v-for="item in reports" :key="item.type" />
</div>
```

:::

## 指定动作面板的挂载位置

::: tip 目标
这一小节，我们的目标是指定动作面板的挂载位置
:::

::: warning 步骤

1. 默认情况下，我们是在 `ArtItem.vue` 组件中使用的 `<van-action-sheet>` 组件，因此动作面板的 `DOM` 结构会被渲染到 `List` 列表组件 内部：
    * **导致的问题**：动作面板中的内容上下滑动时，会导致 `List 列表组件的` **下拉刷新**

2. 解决方案：把 `ActionList` 组件，通过 `get-container` 属性，挂载到 `body` 元素下

```html
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false" @closed="isFirst = true" get-container="body">
  <!-- 省略其它代码 -->
</van-action-sheet>
```

:::

## 将文章设置为不感兴趣

::: tip 目标
这一小节，我们的目标是将文章设置为不感兴趣
:::

::: warning 步骤

1. 在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣
2. 在 `ArtItem.vue` 组件中，按需导入 `API` 接口
3. 在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性
4. 在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣
:::

::: info 体验

* **Step.1：在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣**

```js
// 将文章设置为不感兴趣（形参 id 是文章的 id）
export const dislikeArticleAPI = id => {
  return request.post('/v1_0/article/dislikes', {
    target: id
  })
}
```

* **Step.2：在 `ArtItem.vue` 组件中，按需导入 `API` 接口**

```js
// 按需导入 API 接口
import { dislikeArticleAPI } from '@/api/homeAPI.js'
```

* **Step.3：在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性**

```js
props: {
  // 文章的信息对象
  article: {
    type: Object, // 数据类型
    required: true // 必填项
  }
},

computed: {
  // 文章 Id 的计算属性
  artId() {
    // 注意：文章对象的 art_id 是大数对象，需要调用 .toString() 方法转换为字符串形式
    return this.article.art_id.toString()
  }
}
```

* **Step.4：在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作
    }
    this.show = false
  }

  // 省略其它代码...
}
```

:::

## 从列表中移除不感兴趣的文章

::: tip 目标
这一小节，我们的目标是从列表中移除不感兴趣的文章
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件
2. 在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件
3. 在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作，触发自定义的事件，将文章 id 发送给父组件
      this.$emit('remove-article', this.artId)
    }
    this.show = false
  }

  // 省略其它代码...
}
```

* **Step.2：在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件**

```html
<!-- 循环渲染文章的列表 -->
<art-item
   v-for="item in artlist"
   :key="item.art_id.toString()"
   :article="item"
   @remove-article="removeArticle"
  >
</art-item>
```

* **Step.3：在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 对原数组进行 filter 方法的过滤
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)
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

## 炸楼之后防止上拉加载不生效

::: tip 目标
这一小节，我们的目标是解决炸楼之后防治上拉加载不生效的问题，具体来讲就是： 炸楼之后，如果文章列表的数据不足以撑满整个屏幕，会导致上拉加载和下拉刷新不生效的问题，解决方案： 每次炸楼之后，判断剩余数据的文章数量是否小于 10，如果小于 10，则主动请求下一页的数据
:::

::: warning 步骤

1. 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法
:::

::: info 体验

* **Step.1： 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 1. 炸楼操作
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)

    // 2. 判断剩余数据的文章数量是否小于 10
    if (this.artlist.length < 10) {
      // 主动请求下一页的数据
      this.initArtList()
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

## 实现举报文章的功能

::: tip 目标
这一小节，我们的目标是实现举报文章的功能
:::

::: warning 步骤

1. 在 `/sr/api/homeAPI.js` 模块中，定义 `reportArticleAPI` 的方法，用来实现举报文章的功能
2. 在 `ArtItem.vue` 组件中，按需导入举报文章的 `API`接口
3. 在 `ArtItem.vue` 组件中，为二级反馈面板中的选项，绑定点击事件处理函数，将举报的类型作为参数，传递到事件处理函数中
4. 在 `ArtItem.vue`组件的 methods 节点下，定义名为 `reportArticle` 的点击事件处理函数
:::

::: info 体验

* **Step.1：在 `/sr/api/homeAPI.js` 模块中，定义 `reportArticleAPI` 的方法，用来实现举报文章的功能**

```js
// 举报文章的 API
export const reportArticleAPI = (target, type) => {
  return request.post('/v1_0/article/reports', {
    target, // 文章的 Id
    type // 举报的类型
  })
}
```

* **Step.2：在 `ArtItem.vue` 组件中，按需导入举报文章的 `API`接口**

```js
// 按需导入 API 接口
import { dislikeArticleAPI, reportArticleAPI } from '@/api/homeAPI.js'
```

* **Step.3：在 `ArtItem.vue` 组件中，为二级反馈面板中的选项，绑定点击事件处理函数，将举报的类型作为参数，传递到事件处理函数中**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
  <van-cell :title="item.label" clickable title-class="center-title" v-for="item in reports" :key="item.type" @click="reportArticle(item.type)" />
</div>
```

* **Step.4：在 `ArtItem.vue`组件的 methods 节点下，定义名为 `reportArticle` 的点击事件处理函数**

```js
methods: {
  // 举报文章（形参 type 是举报的类型值）
  async reportArticle(type) {
    // 1. 发起举报文章的请求
    const { data: res } = await reportArticleAPI(this.artId, type)
    if (res.message === 'OK') {
      // 2. 炸楼操作，触发自定义事件，把文章 Id 发送给父组件
      this.$emit('remove-article', this.artId)
    }
    // 3. 关闭动作面板
    this.show = false
  }
}
```

:::
