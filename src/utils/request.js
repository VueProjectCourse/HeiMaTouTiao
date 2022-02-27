// 导入 Axios
import axios from "axios";
// 使用Axios创建新的axios实例 并导出
const instance = axios.create({
  baseURL: "http://toutiao.itheima.net/v1_0",
  timeout: 5000,
  headers: { Authorization: "Bearer 5329b5fc-02c7-4732-b102-d1adb32015f5" },
});

export default instance;
