<!-- 获取验证码 -->
<template>
  <div id="lm-verified-code">
    <div class="register-form-yz-code">
      <lm-input ref="code"
                class="phonenumber"
                :place-holder="placeholder"
                :inputType="inputType"
                :is-listen = true
                @handleInputBlur="codeInputBlur"
      >
        <lm-icon :icon-class="iconClass"></lm-icon>
      </lm-input>
    </div>
    <div class="register-form-yz-btn">
      <lm-button v-if="!isTimmer" :is-active="true" @click="handleCountClick">{{buttonTitle}}</lm-button>
      <lm-button v-else :is-active="true">{{section}}秒后重新获取</lm-button>
    </div>
  </div>
</template>

<script>
  import LmButton from "components/lmButton/LmButton";
  const LmInput = resolve => require(['components/lmInput/LmInput'], resolve);
  const LmIcon = resolve => require(['components/lmIcon/LmIcon'], resolve);
  export default {
    name: "LmVerifiedCode",
    components: { LmButton, LmIcon, LmInput},
    props: {
      number: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isTimmer: false,
        section: 5,
        buttonTitle: '获取验证码',
        placeholder: '验证码',
        iconClass: 'icon-yanzhengma',
        inputType: 'number'
      }
    },
    methods: {
      handleCountClick() {
        if(this.number === '') {
          Toast('请输入手机号')
        } else {
          Toast(`短信已发送至：${this.number}`);
          this.isTimmer = true;
          this.countDown()
        }
      },
      countDown() {
        return new Promise((resolve, reject) => {
          let clock = window.setInterval(() => {
            this.section--;
            if (this.section < 0) {
              clearInterval(clock);
              this.section = 5;
              this.isTimmer = false
            }
          },1000)
        })
      },
      codeInputBlur(val) {
        this.$emit('codeInputBlur', val)
      },
      reset() {
        this.$refs.code.reset();
        this.$emit('codeInputBlur', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-verified-code {

      @include flex-row();
      .register-form-yz-code {
        width: 55%;
      }
      .register-form-yz-btn {
        margin-bottom: 28px;
        width: 40%;
        height: $input-height +1px;
      }
    width: 315px;
  }
</style>