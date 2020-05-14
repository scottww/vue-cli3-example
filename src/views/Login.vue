<template>
  <div class="Login">
    <h1>Login page</h1>
    <div class="container">
      <div class="title">
        <p>Welcome</p>
        <p>vue-cli3</p>
      </div>
      <div class="form">
        <input class="control-input" type="text" placeholder="请输入账号" />
        <input class="control-input" type="text" placeholder="请输入密码" />
        <button class="btn">登录</button>
      </div>
      <div class="form-item custom-font">
        <a class="remember">记住密码</a>
        <a class="forget custom-color">忘记密码?</a>
      </div>
      <div class="custom-font">
        没有账号?去<a class="custom-font custom-color">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style scoped>
.title p {
  font-size: 20px;
  color: #505050;
  margin: 0;
  margin-bottom: 14px;
}
.container {
  position: absolute;
  /* width: 335px; */
  padding: 50px 30px 40px;
  border: 1px solid green;
  background-color: #fff;
}
.custom-font {
  font-size: 12px;
}
.custom-color {
  color: #198cff;
}
.form-item {
  display: flex;
}
.remember {
}
.forget {
  margin-left: auto;
}
a:hover {
  cursor: pointer;
  color: #198cffc4;
  /* text-decoration: underline; */
}
.btn {
  margin-top: 34px;
  margin-bottom: 16px;
  background-color: #198cff;
  color: #fff;
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 4px;
}
.btn:hover {
  cursor: pointer;
  background-color: #198cffc4;
}
.btn:focus {
  outline: none;
}
.control-input {
  display: block;
  width: 252px;
  height: 36px;
  margin-bottom: 12px;
  padding: 0 16px;
  border: 1px solid rgba(80, 80, 80, 0.5);
  border-radius: 4px;
  color: rgba(80, 80, 80, 0.5);
}
input:focus {
  outline: none;
  border: 1px solid #198cff;
}
input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #505050;
  opacity: 0.5;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #505050;
  opacity: 0.5;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #505050;
  opacity: 0.5;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #505050;
  opacity: 0.5;
}
</style>
