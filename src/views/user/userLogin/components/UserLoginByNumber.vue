<template>
  <div id="login-by-Number">
    <div class="login-by-Number-inner">
      <!-- 手机号码 -->
      <lm-input class="number"
                :place-holder="inputSetting.number.placeholder"
                :err-tip="inputSetting.number.errTip"
                :inputType="inputSetting.number.inputType"
                @handleInputBlur="checkNumber">
        <lm-icon :icon-class="inputSetting.number.iconClass"></lm-icon>
      </lm-input>
      <!-- 验证码 -->
      <lm-verified-code @codeInputBlur="getVerifiedCode"></lm-verified-code>
    </div>
  </div>
</template>

<script>
  import LmInput from "components/lmInput/LmInput";
  import LmIcon from "components/lmIcon/LmIcon";
  import LmVerifiedCode from "components/lmVerifiedCode/LmVerifiedCode";
  export default {
    name: "UserLoginByNumber",
    components: {LmVerifiedCode, LmIcon, LmInput},
    data() {
      return {
        inputSetting: {
          number: {
            placeholder: '手机号',
            iconClass: 'icon-dianhua',
            errTip: '',
            inputType: 'number'
          },
          yzcode: {
            buttonTitle: '获取验证码',
            placeholder: '验证码',
            iconClass: 'icon-yanzhengma',
            inputType: 'number'
          }
        }
      }
    },
    methods: {
      checkNumber(userName) {
        this.$emit('getusername')
      },
      getVerifiedCode(code){
        console.log(code)
      }
    }

  }
</script>

<style lang="scss" scoped>
  #login-by-Number {
    position: absolute;
    width: 100%;
  }
  .login-by-Number-inner{
    width: 315px;
  }

</style>