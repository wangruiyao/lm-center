<template>
  <div id="login-swiper">
      <user-login-swipe-button
              @toggleLogin="toggleLoginType"></user-login-swipe-button>
      <user-login-by-account
              v-if="loginType === 'account'"
              @getUserName="getUserName"
              @getPassword="getPassword"></user-login-by-account>
      <user-login-by-number
              v-if="loginType === 'number'"></user-login-by-number>
  </div>
</template>

<script>
  import UserLoginByAccount from "./UserLoginByAccount";
  import UserLoginByNumber from "./UserLoginByNumber";
  import UserLoginSwipeButton from "./UserLoginSwipeButton";
  export default {
    name: "UserLoginSwipe",
    components: {UserLoginSwipeButton, UserLoginByNumber, UserLoginByAccount},
    data() {
      return {
        loginType: 'account'
      }
    },
    methods: {
      toggleLoginType(type) { // 切换登录方式
        this.loginType = type;
        this.$emit('getLoginWay', type)
      },
      getUserName(username) { // 用户名密码登录 ---用户名
        if( this.loginType === 'account') {
          this.$emit('getUserName', username)
        } else {
          return false;
        }
      },
      getPassword(password) { // 用户名密码登录 ---密码
        if( this.loginType === 'account') {
          this.$emit('getPassword', password)
        } else {
          return false;
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  #login-swiper {
    min-height: 100px;
    width: 315px;
  }
</style>