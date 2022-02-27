<template>
  <div id="login">
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" fixed />
    <!-- 登录的表单 -->
    <van-form @submit="login">
      <van-field
        v-model="form.mobile"
        type="tel"
        label="手机号码"
        placeholder="请输入手机号码"
        required
        :rules="rules.mobile"
      ></van-field>
      <van-field
        v-model="form.code"
        type="password"
        label="登录密码"
        placeholder="请输入登录密码"
        required
        :rules="rules.code"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api/userAPI";
// 1. 按需导入辅助方法
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      // 登录表单的数据，最终要双向绑定到 form 这个数据对象上
      form: {
        // 用户的手机号
        mobile: "",
        // 登录的密码
        code: "",
      },
      // 表单的校验规则对象
      rules: {
        // 手机号的校验规则
        mobile: [
          { required: true, message: "请填写您的手机号", trigger: "onBlur" },
          // 11 位手机号的校验规则
          {
            pattern: /^1\d{10}$/,
            message: "请填写正确的手机号",
            trigger: "onBlur",
          },
        ],
        // 密码的校验规则
        code: [
          { required: true, message: "请填写您的密码", trigger: "onBlur" },
        ],
      },
    };
  },
  methods: {
    // 2. 映射 mutations 中的方法
    ...mapMutations(["updateTokenInfo"]),
    async login() {
      // 只有当表单数据校验通过之后，才会调用 Login 函数
      // 只有当表单数据校验通过之后，才会调用此Login函数
      const { data: res } = await loginAPI(this.form);
      // 当数据请求成功之后，res.data中存储的就是服务器响应回来的数据
      console.log(res);

      // 判断是否登录成功了
      if (res.message === "OK") {
        console.log(res.data);
        // TODO1: 把登录成功的解构，存储到 vuex 中
        // 3. 把登录成功的结果，存储到 vuex 中
        this.updateTokenInfo(res.data);
        // TODO2: 登录成功后，跳转到主页
        // 4. 登录成功后，跳转到主页
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
#login {
  padding-top: 46px;
}
</style>
