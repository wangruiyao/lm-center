<template>
  <div id="login-swiper">
      <user-login-swipe-button
              @toggleLogin="toggleLoginType">

      </user-login-swipe-button>
      <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
        <user-login-by-account
                v-if="loginType === 'account'"
                @getUserName="getUserName"
                @getPassword="getPassword"
                :username-err="errTips.usernameErr"
                :password-err="errTips.passwordErr">

        </user-login-by-account>
      </transition>
      <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <user-login-by-number
                ref="loginByNumber"
                v-if="loginType === 'number'"
                @getNumber="getNumber"
                @getCode="getCode"
                :number-err="errTips.numberErr"
                @sendCode="sendCode">

        </user-login-by-number>
      </transition>
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
        loginType: 'account',
        errTips: {
          usernameErr: '',
          passwordErr: '',
          numberErr: ''
        }
      }
    },
    methods: {
      sendCode() {
        this.$emit('sendCode')
      },
      toggleLoginType(type) { // 切换登录方式
        this.loginType = type;
        this.errTips = {
          usernameErr: '',
          passwordErr: '',
          numberErr: ''
        };
        this.$emit('getLoginWay', type)
      },
      getUserName(username) { // 用户名密码登录 ---用户名
        if( this.loginType === 'account') {
          if(username === '') {
            this.errTips.usernameErr = '请输入用户名'
          } else {
            this.errTips.usernameErr = ''
          }
          this.$emit('getUserName', username)
        } else {
          return false;
        }
      },
      getPassword(password) { // 用户名密码登录 ---密码
        if( this.loginType === 'account') {
          if(password === '') {
            this.errTips.passwordErr = '请输入登录密码'
          } else {
            this.errTips.passwordErr = ''
          }
          this.$emit('getPassword', password)
        } else {
          return false;
        }
      },
      getNumber(number) {
        if(this.loginType === 'number') {
          if(number === '') {
            this.errTips.numberErr = '请输入手机号'
          } else {
            this.errTips.numberErr = ''
          }
          this.$emit('getNumber', number)
        }else {
          return false;
        }
      },
      getCode(code) {
        if(this.loginType === 'number') {
          this.$emit('getCode', code)
        }else {
          return false;
        }
      },
      checkLoginParams(err) {
        if(err === 'username') {
          this.errTips.usernameErr = '请输入用户名'
        } else if(err === 'password') {
          this.errTips.passwordErr = '请输入登录密码'
        } else if(err === 'number') {
          this.errTips.numberErr = '请输入手机号'
        }
      },
      resetCounter() {
        this.$refs.loginByNumber.resetCounter();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #login-swiper {
    min-height: 100px;
    width: 315px;
  }
</style>