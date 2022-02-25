# 文章列表

## 封装文章列表组件

::: tip 目标
这一小节，我们的目标是封装文章列表组件
:::

::: warning 步骤

1. 在components目录下，新建ArticleList文件夹，并新建组件
2. 在Home组件中导入ArtList组件
3. 注册ArtList组件
4. 使用ArtList组件
:::

::: info 体验

* **Step.1：在components中，新建ArticleList文件夹，并新建组件**

```vue
<template>
  <div>文章列表组件</div>
</template>

<script>
export default {
  // 大驼峰命名法：每个单词的首字母大写
  name: 'ArticleList'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在Home组件中导入ArticleList组件**

```js
import ArticleList from '@/components/ArticleList/ArticleList.vue'
```

* **Step.3：注册ArticleList组件**

```js
components: {
  ArticleList
}
```

* **Step.4：使用ArticleList组件**

```html
<!-- 频道列表的标签页 -->
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <!-- 循环渲染用户的频道 -->
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 在每一个用户频道下，渲染出对应的“文章列表组件” -->
    <ArticleList></ArticleList>
  </van-tab>
</van-tabs>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 封装channelled属性

::: tip 目标
这一小节，我们的目标是封装channeled属性
:::

::: warning 步骤

1. 在`ArticleList`组件的`props`节点下，封装`channelId`属性
2. 在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值
3. 在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`
:::

::: info 体验

* **Step.1：在`ArticleList`组件的`props`节点下，封装`channelId`属性**

```js
export default {
  name: 'ArtList',
  props: {
    // 频道 Id（小驼峰命名法）
    channelId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  }
}
```

* **Step.2：在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值**

```html
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 注意：Vue 官方建议在绑定 props 时，把“小驼峰”的属性名，改造成“短横线”的形式使用 -->
    <art-list :channel-id="item.id"></art-list>
  </van-tab>
</van-tabs>
```

* **Step.3：在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`**

```html
<template>
  <div>文章列表组件 --- {{channelId}}</div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 请求文章列表的数据

::: tip 目标
这一小节，我们的目标是请求文章列表数据
:::

::: warning 步骤

1. 在`homeAPI`模块中,封装名为`getArtListAPI`的接口
2. 在`ArticleList`组件中，从`homeAPI`模块中按需导入`getArtListAPI`接口
3. 在`ArticleList`组件的`data`中，声明`articlelist`数组，用来存放文章的列表数据。同时声明一个初始的时间戳`timestamp`
4. 在`ArticleList`组件中，定义`iniArticleList`的方法，根据`channelId`和t`imestamp`请求对应的文章列表数据
5. 在`ArticleList`组件的`created`声明周期中，调用`iniArticleList`方法
:::

::: info 体验

* **Step.1：在`homeAPI`模块中,封装名为`getArtListAPI`的接口**

```js
// 根据频道 Id 请求频道下的文章列表数据
export const getArtListAPI = (id, time) => {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: id, // 频道的 Id
      timestamp: time, // 时间戳
    }
  })
}
```

* **Step.2：在`ArticleList`组件中，从`homeAPI`模块中按需导入`getArtListAPI`接口**

```js
// 按需导入 API 接口
import { getArtListAPI } from '@/api/homeAPI'
```

* **Step.3：在`ArticleList`组件的`data`中，声明`articlelist`数组，用来存放文章的列表数据。同时声明一个初始的时间戳`timestamp`**

```js
data() {
  return {
    // 文章列表的数组
    artlist: [],
    // 时间戳。初始的默认值为当前的时间戳
    timestamp: Date.now()
  }
}
```

* **Step.4：在`ArticleList`组件中，定义`iniArticleList`的方法，根据`channelId`和t`imestamp`请求对应的文章列表数据**

```js
methods: {
  // 初始化文章的列表数据
  async initArtList() {
    // 请求 API 接口
    const { data: res } = await getArtListAPI(this.channelId, this.timestamp)
    if (res.message === 'OK') {
      // 为时间戳重新赋值
      this.timestamp = res.data.pre_timestamp
      // 为 artlist 赋值
      this.artlist = res.data.results
    }
  }
}
```

* **Step.5：在`ArticleList`组件的`created`声明周期中，调用`iniArticleList`方法**

```js
created() {
  // 在组件创建的时候，请求文章的列表数据
  this.initArtList()
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 封装文章Item项组件

::: tip 目标
这一小节，我们的目标是封装文章Item项组件
:::

::: warning 步骤

1. 在`/src/components/`目录下新建`ArtItem`文件夹，并在其下新建`ArtItem`组件
2. 在`ArticleList`组件中导入、注册、并使用`ArtItem`组件
3. 编写`ArtItem`组件的布局结构
4. 编写`ArtItem`组件的布局样式
5. 在`ArtItem`组件的`props`节点下，声明`article`属性
6. 基于`props`接收到的`article`对象，渲染文章的信息
7. 在`ArticleList`组件中，通过`v-for`指令循环渲染`ArtItem`组件时，动态绑定`article`属性的值
:::

::: info 体验

* **Step.1：在`/src/components/`目录下新建`ArtItem`文件夹，并在其下新建`ArtItem`组件**

```js
<template>
  <div>文章 Item 组件</div>
</template>

<script>
export default {
  name: 'ArtItem'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在`ArticleList`组件中导入、注册、并使用`ArtItem`组件**

```js
import ArtItem from '@/components/ArtItem/ArtItem.vue'

components: {
  ArtItem
}
```

```html
<template>
  <div>
    <!-- 循环渲染文章的列表 -->
    <art-item v-for="item in artlist" :key="item.art_id"></art-item>
  </div>
</template>
```

* **Step.3：编写`ArtItem`组件的布局结构**

```html
<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>文章的标题噢</span>
          <!-- 单张图片 -->
          <img src="https://www.escook.cn/vuebase/pics/1.png" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 &nbsp;&nbsp; 0评论 &nbsp;&nbsp; 发布日期</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
```

* **Step.4：编写`ArtItem`组件的布局样式**

```css
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
```

* **Step.5：在`ArtItem`组件的`props`节点下，声明`article`属性**

```js
export default {
  name: 'ArtItem',
  props: {
    // 文章的信息对象
    article: {
      type: Object, // 数据类型
      required: true // 必填项
    }
  }
}
```

* **Step.6：基于`props`接收到的`article`对象，渲染文章的信息**

```html
<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{article.title}}</span>
          <!-- 单张图片 -->
          <img alt="" class="thumb" v-if="article.cover.type === 1" :src="article.cover.images[0]">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.type === 3">
          <img alt="" class="thumb" v-for="(item, index) in article.cover.images" :key="index" :src="item" >
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{article.aut_name}} &nbsp;&nbsp; {{article.comm_count}}评论 &nbsp;&nbsp; {{article.pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
```

* **Step.7：在`ArticleList`组件中，通过`v-for`指令循环渲染`ArtItem`组件时，动态绑定`article`属性的值**

```html
<!-- 循环渲染文章的列表 -->
<art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
```

:::

## 上拉加载更多

::: tip 目标
这一小节，我们的目标是实现上拉加载更多功能,我们可以基于基于Vant的[List列表](<https://vant-contrib.gitee.io/vant/#/zh-CN/list>)组件，可以轻松实现列表的上拉加载更多效果
:::

::: warning 步骤

1. 在`ArtList`组件的`data`中，声明`loading`和`finished`
2. 在`ArtList`组件的模板结构中，使用`<van-list>`组件将`<art-item>`组件包裹起来
3. 在`ArtList`组件的`methods`中声明 onLoad 函数
4. 为`<van-list>`组件绑定immediate-check属性，防止首次加载时触发`load`事件
5. 在`<van-list>`组件的`@load="onLoad"`事件处理函数中，调用`initArtList`方法
6. 当下一页数据请求回来之后，对新旧数据的拼接操作
7. 当下一页数据请求回来之后，需要进行新旧数据的拼接操作
8. 当下一页数据请求回来之后，根据请求的结果，判断所有数据是否已加载完毕
:::

::: info 体验

* **Step.1：在`ArtList`组件的`data`中，声明`loading`和`finished`**

```js
data() {
  return {
    // loading 表示是否正在进行上拉加载的请求
    //   每当触发 List 组件的上拉加载更多时，List 组件会自动把 loading 设为 true
    //   每当下一页的数据请求回来以后，需要程序员手动的把 loading 设为 false，
    //   否则：再次触发上拉加载更多时，不会发起请求！！
    loading: false,

    // finished 表示所有数据是否加载完毕
    //    false 表示还有下一页的数据
    //    true  表示所有数据都已加载完毕
    finished: false
  }
}
```

* **Step.2：在`ArtList`组件的模板结构中，使用`<van-list>`组件将`<art-item>`组件包裹起来**

```html
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- 循环渲染文章的列表 -->
      <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
    </van-list>
  </div>
</template>
```

* **Step.3：在`ArtList`组件的`methods`中声明 onLoad 函数**

```js
methods: {
  // 加载更多的数据
  onLoad() {
    console.log('触发了上拉加载更多')
  }
}
```

* **Step.4：为`<van-list>`组件绑定immediate-check属性，防止首次加载时触发`load`事件**

```html
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
      <!-- 循环渲染文章的列表 -->
      <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
    </van-list>
  </div>
</template>
```

* **Step.5：在`<van-list>`组件的`@load="onLoad"`事件处理函数中，调用`initArtList`方法**

```js
// 加载更多的数据
onLoad() {
  console.log('触发了上拉加载更多')
  this.initArtList()
}
```

* **Step.6：当下一页数据请求回来之后，对新旧数据的拼接操作**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
  }
},
```

* **Step.7：当下一页数据请求回来之后，需要进行新旧数据的拼接操作**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId,this.timestamp)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
    // 2. 重置 loading 为 false
    this.loading = false
  }
},
```

* **Step.8：当下一页数据请求回来之后，根据请求的结果，判断所有数据是否已加载完毕**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId,this.timestamp)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
    // 2. 重置 loading 为 false
    this.loading = false
    // 3. 判断所有的数据是否已加载完毕
    if (res.data.pre_timestamp === null) {
      this.finished = true
    }
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 下拉刷新

::: tip 目标
这一小节，我们的目标是完成下拉刷新功能，

:::

## 格式化时间

## 文章列表图片的懒加载
