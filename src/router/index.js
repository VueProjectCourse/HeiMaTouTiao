import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 Main组件
import Main from '@/views/Main/Main.vue'
// 导入Home组件
import Home from '@/views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
