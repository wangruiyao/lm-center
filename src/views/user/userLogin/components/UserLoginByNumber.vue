<template>
  <div id="login-by-Number">

    <div class="login-by-Number-inner">
      <!-- 手机号码 -->
      <lm-input ref="numberInput" class="number"
                :place-holder="inputSetting.number.placeholder"
                :err-tip="numberErr"
                :inputType="inputSetting.number.inputType"
                @handleInputBlur="checkNumber">
        <lm-icon :icon-class="inputSetting.number.iconClass"></lm-icon>
      </lm-input>
      <!-- 验证码 -->
      <lm-verified-code
              ref="verified"
              :number="this.numberInfo"
              @codeInputBlur="getVerifiedCode"
              @sendCode = sendCode></lm-verified-code>
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
    props: {
      numberErr: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        numberInfo: '',
        codeInfo: '',
        inputSetting: {
          number: {
            placeholder: '手机号',
            iconClass: 'icon-dianhua',
            errTip: '',
            inputType: 'number'
          },
          yzcode: {
            isChange: false, // 是否修改过
            buttonTitle: '获取验证码',
            placeholder: '验证码',
            iconClass: 'icon-yanzhengma',
            inputType: 'number'
          }
        }
      }
    },
    watch: {
      numberInfo(newNumber) {
        if(this.codeInfo !== '') {
          Toast('请重新获取验证码');
        }

        this.$refs.verified.reset();
      }
    },
    methods: {
      lmInputBlur(){
        for(let i in this.$refs) {
          this.$refs[i].lmInputBlur()
        }
      },
      checkNumber(number) {
        this.numberInfo = number;
        this.$emit('getNumber', number)
      },
      getVerifiedCode(code){
        this.codeInfo = code;
        this.inputSetting.yzcode.isChange = true;
        this.$emit('getCode', code);
      },
      sendCode() {
        this.$emit('sendCode');
      },
      resetCounter() {
        this.$refs.verified.resetCounter();
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