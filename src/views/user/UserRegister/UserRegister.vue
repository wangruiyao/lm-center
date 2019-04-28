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
                @handleInputBlur="checkPassword">
        <lm-icon :icon-class="inputSetting.password.iconClass"></lm-icon>
      </lm-input>

      <!-- 城市 -->
      <lm-input class="username"
                ref="citypickerInput"
                :place-holder="inputSetting.city.placeholder"
                :err-tip="inputSetting.city.errTip"
                :is-read-only=true
                @handleInputClick="cityInputClick">
        <lm-icon :icon-class="inputSetting.city.iconClass"></lm-icon>
      </lm-input>
      <lm-city-picker ref="citypicker" @handleCheckCity="checkCity"></lm-city-picker>

      <!--手机号码-->
      <lm-input class="phonenumber"
                :place-holder="inputSetting.phonenumber.placeholder"
                :err-tip="inputSetting.phonenumber.errTip"
                :inputType="inputSetting.phonenumber.inputType"
                @handleInputBlur="checkNumber">
        <lm-icon :icon-class="inputSetting.phonenumber.iconClass"></lm-icon>
      </lm-input>

      <!-- 验证码 -->
      <lm-verified-code @codeInputBlur="getVerifiedCode"></lm-verified-code>

    </div>

    <!-- 选择主营项 -->
    <user-register-main-work @handleCheckIntention="checkIntention"></user-register-main-work>

    <!-- 登录按钮 -->
    <div class="user-register-aggrement">
      <div class="aggrement-checkbox">
        <mt-checklist
              v-model="isCheckAggrement"
              :options="['']">
      </mt-checklist>
      </div>

      我已阅读，并同意<span class="aggrement">《连萌注册协议》</span>
    </div>

    <div class="user-register" @click="register">
      <lm-button :is-active="true" :actType="`active-blue`">立即注册</lm-button>
    </div>
    <div class="back-login">返回登录</div>
  </div>
</template>

<script>
  import LmButton from "../../../components/lmButton/LmButton";
  import UserRegisterMainWork from "./components/UserRegisterIntention";
  const LmInput = resolve => require(['components/lmInput/LmInput'], resolve);
  const LmIcon = resolve => require(['components/lmIcon/LmIcon'], resolve);
  const LmLogo = resolve => require(['components/lmLogo/LmLogo'], resolve);
  const LmCityPicker = resolve => require(['components/lmCityPicker/LmCityPicker'], resolve);

  import {userisexist} from 'api/user'
  import LmVerifiedCode from "../../../components/lmVerifiedCode/LmVerifiedCode";
  export default {
    name: "UserRegister",
    components: {LmVerifiedCode, UserRegisterMainWork, LmButton, LmCityPicker, LmLogo, LmIcon, LmInput},
    data() {
      return {
        registerParams: {
          username: ''
          ,password: ''
          ,province: ''
          ,city: ''
          ,country: ''
          ,mobile: ''
          ,intention: ''  // 主营方向
          ,channel: ''  // 用户渠道,
          ,developer: ''  // 发展人账号
        },
        isCheckAggrement: [],  // 是否同意协议
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
          city: {
            placeholder: '城市',
            iconClass: 'icon-dizhi1',
            errTip: '',
            isCityPickerShow: false
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
    mounted() {},
    methods: {
      // 表单验证
      checkUserName(userName) { // 用户名
        const re =  /^[0-9a-zA-Z]*$/g;
        if(!re.test(userName) || userName.length < 8) {
          this.inputSetting.username.errTip = '账号格式错误 请输入8位及以上数字字母组合';
          this.registerParams.username = '';
        }else {
          const params = {
            username: userName
          };
          this.checkUserisexist(params)
        }
      }
      ,checkPassword(password){ // 密码
        const reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        if(!reg.test(password) && password.length >= 8) {
          this.inputSetting.password.errTip = '';
          this.registerParams.password = password;
        } else {
          this.registerParams.password = '';
          this.inputSetting.password.errTip = '密码格式错误 请输入8位及以上数字字母组合';
        }

      }
      , checkNumber(number) {
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(number))){
          this.inputSetting.phonenumber.errTip = '手机格式错误';
          this.registerParams.mobile = ''
        } else {
          this.registerParams.mobile = number;
          this.inputSetting.phonenumber.errTip = '';
        }
      },
      // 显示选择城市
      cityInputClick() {
        this.$refs.citypicker.openTouch()
      },
      checkCity(city) {
        const cityNameList = city.province.name + ' - ' + city.city.name + ' - ' +  city.country.name
        this.$refs.citypickerInput.setInputVal(cityNameList);
        this.registerParams.province = city.province.code;
        this.registerParams.city = city.city.code;
        this.registerParams.country = city.country.code;

      },
      // 取验证码
      getVerifiedCode(val) {
        alert(val)
      },
      //选择主营项
      checkIntention(intention) {
        this.registerParams.intention = intention;
      },
      // 提交注册
      register() {
        console.log(this.isCheckAggrement.length)
        // console.log(this.registerParams)
      },
      // 判断用户名是否存在
      checkUserisexist(params) {
        const _this = this
        userisexist(params).then( data => {
          if(data.code === '0') {
            if(data.subcode === '10000') {
              _this.inputSetting.username.errTip = '';
              _this.registerParams.username = params.username
            } else {                                         // 用户名不可用
              _this.registerParams.username = '';
              _this.inputSetting.username.errTip = data.submsg;
            }
          } else {
            alert(data.msg)
          }
        }).catch(data => {
          console.warn(data)
        })
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
    }
    .user-register-aggrement {
      @include flex-row(center);
      font-size: 12px !important;
      .aggrement-checkbox {
        width: 50px;
        height: 50px;
        overflow: hidden;
      }
      .aggrement {
        color: $button-border-color;
      }
    }
    .user-register {
      font-size: 18px;
      width: 315px;
      height: $input-height;
      letter-spacing: 4px;

    }
    .back-login {
      width: 315px;
      text-align: right;
      padding: 5px;
      color: $button-border-color;
    }
  }
</style>