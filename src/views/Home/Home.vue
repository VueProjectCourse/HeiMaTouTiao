<template>
  <div class="home">
    <!-- 1.navbar -->
    <van-nav-bar title="头条">
      <template #left>
        <!-- logo图片 -->
        <img class="logo" src="@/assets/toutiao_logo.png" alt="" />
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 2.用户频道 -->
    <van-tabs v-model="active" sticky offset-top="46px">
      <van-tab :title="item.name" v-for="item in userChannels" :key="item.id">
        <!-- 3.文章列表 -->
        <ArticleList :channelId="item.id"></ArticleList>
      </van-tab>
    </van-tabs>
    <!-- 频道管理的小图标 -->
    <van-icon name="plus" size="16" class="plus" />
  </div>
</template>

<script>
// 导入 用户频道数据接口
import { getUserChannels } from '@/api/homeAPI'
// 导入 文章列表组件
import ArticleList from '@/components/ArticleList/ArticleList.vue'
export default {
  components: {
    ArticleList
  },

  data () {
    return {
      active: 0,
      userChannels: []
    }
  },
  methods: {
    // 初始化用户频道列表
    async initUserChannels () {
      const { data: res } = await getUserChannels()
      if (res.message === 'OK') {
        this.userChannels = res.data.channels
      }
    }
  },
  created () {
    this.initUserChannels()
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  padding-bottom: 53px;
  box-sizing: border-box;
  .logo {
    height: 80%;
  }

  ::v-deep .van-nav-bar {
    position: sticky;
    top: 0px;
  }
  // 突破 scoped的束缚
  ::v-deep .van-nav-bar__title {
    color: white;
  }

  // 为 tabs 容器设置右 padding
  ::v-deep .van-tabs__wrap {
    padding-right: 36px;
    background-color: white;
  }

  /* 频道管理小图标的定位 */
  .plus {
    position: fixed;
    top: 58px;
    right: 10px;
    z-index: 999;
  }
}

// scoped 的作用就是使得css样式拥有了作用域
// 写在该组件中的样式 只在该组件中有效
// 本质其实就是一个属性选择器
</style>
