export default {
  lang: 'en-US',
  title: '黑马头条',
  description: '一个 移动端 技术论坛',
  base: "/HeiMaTouTiao",
  // markdown文件设置
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    // 设置文档所在的文件夹
    docsDir: 'docs',
    // 搜索插件
    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    // 顶部导航
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      }
    ],
    // 侧边栏导航
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: "前期准备",
      children: [
        { text: '项目介绍', link: '/early/introduction' },
        { text: '项目创建', link: '/early/initialization' },
        { text: '配置组件库', link: '/early/deploy-vant' },
        { text: '配置适配插件', link: '/early/deploy-screen-adaptation' },
        { text: '配置网络请求插件', link: '/early/deploy-axios' },
        { text: '模板页面开发', link: '/early/layout' },

      ]
    },
    {
      text: "登录页",
      children: [
        { text: '渲染登录组件', link: '/middle/login-render-base' },
        { text: '渲染登录头部', link: '/middle/login-render-header' },
        { text: '渲染登录表单', link: '/middle/login-render-form' },
        { text: '添加校验规则', link: '/middle/login-form-rules' },
        { text: '实现登录方法', link: '/middle/login-form-function' },
        { text: '存储token到vuex', link: '/middle/login-token-vuex' },
        { text: '持久化存储token', link: '/middle/login-token-storage' },
        { text: '全局loading效果', link: '/middle/login-global-loading' },
        { text: '全局token认证', link: '/middle/login-global-auth' }
      ]
    },
    {
      text: "首页",
      children: [
        { text: '渲染首页组件', link: '/middle/home-render-base' },
        { text: '频道列表页面', link: '/middle/home-channels-static' },
        { text: '渲染频道列表', link: '/middle/home-channels-dynamic' },
        { text: '封装文章列表', link: '/middle/home-article-list' },
        { text: '获取文章列表数据', link: '/middle/home-article-list-data' },
        { text: '封装channelId属性', link: '/middle/home-article-list-channelid' },
        { text: '封装文章列表项', link: '/middle/home-article-list-item' },
        { text: '文章列表上拉加载', link: '/middle/home-article-pullload' },
        { text: '文章列表下拉刷新', link: '/middle/home-article-pullrefresh' },
        { text: '图片懒加载', link: '/middle/home-article-lazyload' },
        { text: '格式化时间', link: '/middle/home-article-dateformat' },
      ]
    },
    {
      text: "文章搜索",
      children: [

      ]
    },
    {
      text: "文章详情",
      children: [

      ]
    },
    {
      text: "个人中心",
      children: [

      ]
    },
    {
      text: "小思同学",
      children: [

      ]
    },
    {
      text: "后期优化",
      children: [

      ]
    },

  ]
}

/** 
⓵
⓶
⓷
⓸
⓹
⓺
⓻
⓼
⓽
⓾
*/