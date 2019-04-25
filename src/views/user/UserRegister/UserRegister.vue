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
      <div class="register-form-yz">
        <div class="register-form-yz-code">
          <lm-input class="phonenumber"
                    :place-holder="inputSetting.yzcode.placeholder"
                    :err-tip="inputSetting.yzcode.errTip"
                    :inputType="inputSetting.yzcode.inputType"
                    >
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
  export default {
    name: "UserRegister",
    components: {UserRegisterMainWork, LmButton, LmCityPicker, LmLogo, LmIcon, LmInput},
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
    methods: {
      // 表单验证
      checkUserName(userName) {
        const re =  /^[0-9a-zA-Z]*$/g;
        if(!re.test(userName) || userName.length < 8) {
          this.inputSetting.username.errTip = '账号格式错误';
          this.registerParams.username = '';
        }else {
          const params = {
            username: userName
          };
          this.checkUserisexist(params)
        }
        // console.log(userName)
        // this.inputSetting.username.errTip = '用户名已存在'
      }
      ,checkPassword(password){

      }
      , checkNumber(number) {

      },
      // 显示选择城市
      cityInputClick() {
        this.$refs.citypicker.openTouch()
      },
      checkCity(city) {
        const cityNameList = city.province.name + ' - ' + city.city.name + ' - ' +  city.country.name
        this.$refs.citypickerInput.setInputVal(cityNameList)
      },
      //选择主营项
      checkIntention(intention) {
      },
      register() {
        // alert(1)
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
      .register-form-yz {
        @include flex-row();
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
    .user-register {
      font-size: 18px;
      width: 315px;
      height: $input-height;
    }
    .back-login {
      width: 315px;
      text-align: right;
      padding: 5px;
      color: $button-border-color;
    }
  }
</style>