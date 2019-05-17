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
            @getCode="getCode"></user-login-swipe>

    <!-- 登录按钮 -->
    <user-login-button-list @click="login"></user-login-button-list>

  </div>
</template>

<script>
  import { userloginbyname, userloginbyphone, userinfor } from 'api/user'
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
      this.toPath = this.$route.params.redirect === undefined ? 'homeCenter' : this.$route.params.redirect
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
          const data = this.loginParams.account;
          if(data.username === '') {
            this.$refs.swipe.checkLoginParams('username');
          } else if(data.password === '') {
            this.$refs.swipe.checkLoginParams('password');
          } else {
            this.loginByAccount(data);
            // alert('登录成功')
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
      loginByAccount(params) {
        const _this = this;
        userloginbyname(params).then( data => {
          if(data.code === '0') {
            if(data.subcode === '10000') {
              // console.log(_this.$store)
              _this.$store.dispatch('users/userInfo').then(data=>{
                if(data.code === '0' && data.subcode === '10000') {
                  goforward(_this.toPath);
                  Toast({
                    message: '登陆成功',
                    position: 'bottom'
                  });
                }
              })
            }
          } else {
            Toast(data.msg)
          }
        }).catch(data => {
          Toast('调用登录接口失败，报错信息：' + JSON.stringify(data))
        })
      },
      loginByNumber(params) {
        const _this = this;
        userloginbyphone(params)
          .then( data => {
            if(data.code === '0' && data.subcode === '10000') {
              const userInfo = data.data;
              if(userInfo.length >= 2) {
                goforward('userLoginCheckAccount', {userInfo})
              } else {
                Toast('直接登录')
              }
            } else {
              Toast('登录失败:' + data.msg)
            }
          })
          .catch( data => {
            Toast('登录接口调用失败, 失败返回:' + JSON.stringify(data));
          });
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