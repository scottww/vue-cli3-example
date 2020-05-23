<template>
  <div class="login-dialog" v-if="true">
    <div class="mask">
      <div class="content">
        <div class="container">
          <div class="my-icon" @click="handleClose">
            <!-- <Icon type="md-close" size="24" /> -->
            <i class="my-icon-close"></i>
          </div>
          <div class="title">
            <p>Welcome</p>
            <p class="sub-title">vue-cli3-example</p>
          </div>
          <div class="form mt40">
            <div class="form-item">
              <div class="form-item-content">
                <div class="input-group" ref="usernameBox">
                  <span class="input-group-prefix">
                    <i class="my-icon-user"></i>
                  </span>
                  <input
                    class="control-input"
                    type="text"
                    :autofocus="autofocus.username"
                    placeholder="请输入账号"
                    v-model="form.username"
                    ref="username"
                    required
                    @focus="handleFocus"
                  />
                  <template v-if="clearable">
                    <!-- <Icon
                      class="clear"
                      @click="handleClear('username')"
                      type="ios-close"
                      size="24"
                    /> -->
                    <i
                      class="my-icon my-icon-clear clear"
                      @click="handleClear('username')"
                    ></i>
                  </template>
                </div>
              </div>
            </div>
            <div class="form-item">
              <div class="form-item-content">
                <div class="input-group" ref="passwordBox">
                  <span class="input-group-prefix">
                    <i class="my-icon-lock"></i>
                  </span>
                  <input
                    class="control-input"
                    type="password"
                    :autofocus="autofocus.password"
                    placeholder="请输入密码"
                    v-model="form.password"
                    ref="password"
                    required
                    @focus="handleFocus"
                  />
                  <template v-if="clearable">
                    <i
                      class="my-icon my-icon-clear clear"
                      @click="handleClear('password')"
                    ></i>
                  </template>
                </div>
              </div>
            </div>

            <button class="btn" @click="handleSubmit" :disabled="loginStatus">
              {{ loginStatus ? "登录中" : "登录" }}
            </button>
          </div>
          <div class="form-item fs12">
            <div class="remember">
              <input type="checkbox" checked />记住密码
            </div>
            <a class="link ml custom-color" @click="losePwd">忘记密码?</a>
          </div>
          <div class="fs12 mt20">
            没有账号?去<a class="link fs12 custom-color" @click="register"
              >注册</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    loginVisible: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      autofocus: {
        username: true,
        password: false,
      },
      loginStatus: false,
    };
  },
  methods: {
    losePwd() {},
    register() {},
    handleClose() {
      this.loginStatus = false;
      // this.$store.commit("updateLoginVisible", false);
    },
    handleSubmit() {
      let validUsername = this.validateField("username");
      let validPassword = this.validateField("password");
      //todo something...
    },
    handleFocus(event) {
      //focus remove border css
      let elem = event.target;
      elem.className.indexOf("is-error") !== -1 &&
        elem.classList.remove("is-error");
    },
    handleClear(key) {
      this.form[key] = "";
    },
    validateField(elemId) {
      let elem = this.$refs[elemId];
      let info = elemId === "username" ? "用户名" : "密码";
      if (elem.validity.valueMissing === true) {
        elem.setCustomValidity(`${info}不能为空！`);
        this.shake(elemId);
        return false;
      } else {
        elem.setCustomValidity("");
        return true;
      }
    },
    shake(elemId) {
      let elem = this.$refs[elemId];
      let elemBox = this.$refs[`${elemId}Box`];
      if (elem && elemBox) {
        elem.classList.add("is-error");
        elemBox.classList.add("shake");
        setTimeout(() => {
          elemBox.classList.remove("shake");
        }, 800);
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/login/index.css";
</style>
