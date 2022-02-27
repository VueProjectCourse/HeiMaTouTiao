// 导入 Axios
import axios from "axios";
import { Toast } from "vant";
import store from "../store";
// 使用Axios创建新的axios实例 并导出
const instance = axios.create({
  baseURL: "http://toutiao.itheima.net/v1_0",
  timeout: 5000,
  headers: { Authorization: "Bearer 5329b5fc-02c7-4732-b102-d1adb32015f5" },
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 展示 loading 效果
    Toast.loading({
      message: "加载中...", // 文本内容
      duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
    });
    // 从 vuex 中获取 token 的值
    const tokenStr = store.state.tokenInfo.token;
    if (tokenStr) {
      // 只有 tokenStr 的值存在，才有必要挂载到请求头的 Authorization 属性中
      config.headers.Authorization = "Bearer " + tokenStr;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 隐藏 loading 效果
    Toast.clear();
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
