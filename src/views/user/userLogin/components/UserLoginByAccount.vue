<template>
  <div id="login-by-Account">
    <div class="login-by-Account-inner">
      <lm-input class="username"
                :place-holder="inputSetting.username.placeholder"
                :err-tip="inputSetting.username.errTip"
                @handleInputBlur="checkUserName">
        <lm-icon :icon-class="inputSetting.username.iconClass"></lm-icon>
      </lm-input>
      <!--密码-->
      <lm-input class="password"
                :place-holder="inputSetting.password.placeholder"
                :err-tip="inputSetting.password.errTip"
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
    data() {
      return {
        inputSetting: {
          username: {
            placeholder: '用户名',
            iconClass: 'icon-login',
            errTip: ''
          },
          password: {
            placeholder: '密码',
            iconClass: 'icon-login3',
            errTip: '',
            inputType: 'password'
          }
        }
      }
    },
    methods: {
      checkUserName(userName) {
        this.$emit('getUserName', userName)
      },
      checkPassword(password) {
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