import Vue from "vue";
import VueRouter from "vue-router";

// 导入 Main 组件
import Main from "@/views/Main/Main.vue";
// 导入 Home 组件
import Home from "@/views/Home/Home.vue";
// 导入 Login 组件
import Login from "@/views/Login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "/",
        redirect: "home",
      },
      {
        path: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
