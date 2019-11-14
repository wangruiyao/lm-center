<template>
  <div id="user-login" class="lm-container-blank">
    <!-- 登录页logo -->
    <lm-logo></lm-logo>

    <!-- 登录方式切换 -->
    <user-login-swipe ref="swipe"
            @getLoginWay="getLoginWay"
            @getUserName="getUserName"
            @getPassword = "getPassword"
            @getNumber="getNumber"
            @getCode="getCode"
            @sendCode="sendCode"></user-login-swipe>

    <!-- 登录按钮 -->
    <user-login-button-list @click="login"></user-login-button-list>

  </div>
</template>

<script>
  import { userloginbyname, userloginbyphone, userinfor, sendcodeforlogin } from 'api/user'
  import types from 'store/types'
  import LmLogo from "../../../components/lmLogo/LmLogo";
  import UserLoginSwipe from "./components/UserLoginSwipe";
  import UserLoginButtonList from "./components/UserLoginButtonList";
  export default {
    name: "UserLogin",
    data() {
      return {
        toPath: 'homeCenter',
        loginWay: 'account',
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
    mounted() {
      this.toPath = this.$route.params.redirect === undefined ? 'shopCenter' : this.$route.params.redirect;

    },
    methods: {
      getLoginWay(type) {
        this.clearLoginParams();
        this.loginWay = type;
      },
      getUserName(userName) {
        this.loginParams.account.username = userName
      },
      getPassword(passward) {
        this.loginParams.account.password = passward
      },
      getNumber(number) {
        this.loginParams.number.mobile = number
      },
      getCode(code) {
        this.loginParams.number.smscode = code
      },
      login() {
        if(this.loginWay === 'account') {
          const data = {};
          data.username = this.loginParams.account.username;
          data.password = this.loginParams.account.password;
          if(data.username === '') {
            this.$refs.swipe.checkLoginParams('username');
          } else if(data.password === '') {
            this.$refs.swipe.checkLoginParams('password');
          } else {
            data.password = this.$RSA(data.password);
            this.loginByAccount(data);
          }
          // console.log(JSON.stringify(this.loginParams.account))
        }else if(this.loginWay === 'number') {
          const data = this.loginParams.number;
          if(data.mobile === '') {
            this.$refs.swipe.checkLoginParams('number');
          } else if(data.smscode === '') {
            Toast('请获取验证码')
          } else {
            this.loginByNumber(data);
          }
        }
      },
      getUserInfo() {
        this.$store.dispatch('users/userInfo').then(data=>{
          goforward(this.toPath);
          Toast({
            message: '登陆成功',
            position: 'bottom'
          });
        })
      },
      loginByAccount(params) {
        const _this = this;
        userloginbyname(params).then( data => {
          _this.getUserInfo();
        }).catch(data => {})
      },
      loginByNumber(params) {
        const _this = this;
        userloginbyphone(params)
          .then( data => {
            const userInfo = data.data;
            if(userInfo.length >= 2) {
              goforward('userLoginCheckAccount', {userInfo})
            } else {
              _this.getUserInfo();
            }
          })
          .catch( data => {});
      },
      clearLoginParams() {
        this.loginParams = {  // 登录信息
          account: {    // 用户名密码登录
            username: '',
            password: ''
          },
          number: { // 手机号码登录
            mobile: '',
            smscode: ''
          }
        }
      },
      sendCode() {  // 发送验证码
        const _this = this;
        const params = {
          phoneNumber: this.loginParams.number.mobile
        };
        if(this.loginParams.number.mobile === '') {
          Toast('请输入手机号码')
        } else {
          sendcodeforlogin(params).then(data=> {
            Toast(data.submsg);
          }).catch(() => {
            _this.$refs.swipe.resetCounter();
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #user-login {
    @include flex-column(center);
    background: #fff;
  }
</style>