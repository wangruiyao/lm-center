<template>
  <div id="user-login" class="lm-container-blank">
    <!-- 登录页logo -->
    <lm-logo></lm-logo>

    <!-- 登录方式切换 -->
    <user-login-swipe @getLoginWay="getLoginWay"></user-login-swipe>

    <!-- 登录按钮 -->
    <user-login-button-list @click="login"></user-login-button-list>

  </div>
</template>

<script>
  import types from 'store/types'
  import LmLogo from "../../../components/lmLogo/LmLogo";
  import UserLoginSwipe from "./components/UserLoginSwipe";
  import UserLoginButtonList from "./components/UserLoginButtonList";
  export default {
    name: "UserLogin",
    data() {
      return {
        loginWay: ' account',
        loginParams: {  // 登录信息
          account: {    // 用户名密码登录
            username: '',
            password: ''
          },
          number: { // 手机号码登录
            mobile: '',
            smscode: ''
          }
        }
      }
    },
    components: {UserLoginButtonList, UserLoginSwipe, LmLogo},
    methods: {
      getLoginWay(type) {
        this.loginWay = type;
      },
      login() {
        goforward('userLoginCheckAccount')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #user-login {
    @include flex-column(center)
  }
</style>