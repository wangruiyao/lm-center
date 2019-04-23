<template>
  <div id="user-register" class="user-register">
    <!-- Logo -->
    <lm-logo :flex-type="logoStyle"></lm-logo>

    <!-- 注册表单 -->
    <div class="register-form">
      <!--用户名-->
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
                @handleInputBlur="checkUserName">
        <lm-icon :icon-class="inputSetting.password.iconClass"></lm-icon>
      </lm-input>

      <!-- 城市 -->
      <!--<lm-city-picker></lm-city-picker>-->

      <!--手机号码-->
      <lm-input class="phonenumber"
                :place-holder="inputSetting.phonenumber.placeholder"
                :err-tip="inputSetting.phonenumber.errTip"
                :inputType="inputSetting.phonenumber.inputType"
                @handleInputBlur="checkUserName">
        <lm-icon :icon-class="inputSetting.phonenumber.iconClass"></lm-icon>
      </lm-input>

      <!-- 验证码 -->
      <div class="register-form-yz">
        <div class="register-form-yz-code">
          <lm-input class="phonenumber"
                    :place-holder="inputSetting.yzcode.placeholder"
                    :err-tip="inputSetting.yzcode.errTip"
                    :inputType="inputSetting.yzcode.inputType"
                    @handleInputBlur="checkUserName">
            <lm-icon :icon-class="inputSetting.yzcode.iconClass"></lm-icon>
          </lm-input>
        </div>
        <div class="register-form-yz-btn">
          <lm-button :is-active="true">{{inputSetting.yzcode.buttonTitle}}</lm-button>
        </div>
      </div>

    </div>

    <!-- 选择主营项 -->
    <user-register-main-work @handleCheckIntention="checkIntention"></user-register-main-work>

    <!-- 登录按钮 -->
  </div>
</template>

<script>
  import LmButton from "../../../components/lmButton/LmButton";
  import UserRegisterMainWork from "./components/UserRegisterIntention";
  const LmInput = resolve => require(['components/lmInput/LmInput'], resolve);
  const LmIcon = resolve => require(['components/lmIcon/LmIcon'], resolve);
  const LmLogo = resolve => require(['components/lmLogo/LmLogo'], resolve);
  const LmCityPicker = resolve => require(['components/lmCityPicker/LmCityPicker'], resolve);
  export default {
    name: "UserRegister",
    components: {UserRegisterMainWork, LmButton, LmCityPicker, LmLogo, LmIcon, LmInput},
    data() {
      return {
        registerParams: {

        },
        logoStyle: 'row',
        inputSetting: { //输入框设置
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
          },
          phonenumber: {
            placeholder: '手机号码',
            iconClass: 'icon-login3',
            errTip: '',
            inputType: 'number'
          },
          yzcode: {
            buttonTitle: '获取验证码',
            placeholder: '验证码',
            iconClass: 'icon-yanzhengma',
            inputType: 'number'
          },
        }

      }
    },
    methods: {
      // 表单验证
      checkUserName(userName) {
        // this.inputSetting.username.errTip = '用户名已存在'
      },
      //选择主营项
      checkIntention(intention) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-register {

    @include flex-column(center);
    .register-form {
      width: 315px;
      /*验证码*/
      .register-form-yz {
        @include flex-row()
        .register-form-yz-code {
          width: 55%;
        }
        .register-form-yz-btn {
          margin-bottom: 28px;
          width: 40%;
          height: $input-height +1px;

        }
      }
    }
  }
</style>