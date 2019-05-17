<template>
  <div id="login-by-Account">
    <div class="login-by-Account-inner">
      <lm-input class="username"
                :place-holder="inputSetting.username.placeholder"
                :err-tip="usernameErr"
                @handleInputBlur="checkUserName">
        <lm-icon :icon-class="inputSetting.username.iconClass"></lm-icon>
      </lm-input>
      <!--密码-->
      <lm-input class="password"
                :place-holder="inputSetting.password.placeholder"
                :err-tip="passwordErr"
                :inputType="inputSetting.password.inputType"
                @handleInputBlur="checkPassword">
        <lm-icon :icon-class="inputSetting.password.iconClass"></lm-icon>
      </lm-input>
    </div>
    <!-- 用户名 -->

  </div>
</template>

<script>
  import LmInput from "components/lmInput/LmInput";
  import LmIcon from "../../../../components/lmIcon/LmIcon";
  export default {
    name: "UserLoginByAccount",
    components: {LmIcon, LmInput},
    props: {
      usernameErr: {
        type: String,
        default: ''
      },
      passwordErr: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        inputSetting: {
          username: {
            placeholder: '用户名',
            iconClass: 'icon-login'
          },
          password: {
            placeholder: '密码',
            iconClass: 'icon-login3',
            inputType: 'password'
          }
        }
      }
    },
    methods: {
      checkUserName(userName) {
        // if(userName === '') {
        //   this.inputSetting.username.errTip = '登录账号不能为空'
        // } else {
        //   this.inputSetting.username.errTip = ''
        // }
        this.$emit('getUserName', userName)
      },
      checkPassword(password) {
        // if(password === '') {
        //   this.inputSetting.password.errTip = '请输入登录密码'
        // } else {
        //   this.inputSetting.password.errTip = ''
        // }
        this.$emit('getPassword', password)
      }
    }

  }
</script>

<style lang="scss" scoped>
  #login-by-Account{
    position: absolute;
    width: 100%;
  }
  .login-by-Account-inner {
    width: 315px;
  }
</style>