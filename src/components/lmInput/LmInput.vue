<template>
  <div id="lm-input">
    <div class="lm-input-errtips"><err-tips :err-tip="errTip"></err-tips></div>
    <div class="lm-input-container-border">
      <div class="lm-input-container">
        <slot></slot>
        <div v-if="isReadOnly" class="lm-input-masker" @click.prevent="handleInputClick"></div>
        <input ref="lmInput"
                class="lm-input-input"
               :type="localInputType"
               v-model="inputInfo"
               :style="{color: (errTip !== ''&& errTip !== undefined) ? ' #ff0018': ''}"
               :placeholder="placeHolder"
               @blur="handleInputBlur"
               />
        <div>
          <lm-icon v-if="inputType === 'password'"
                   @click="changePasswordType()"
                   :icon-class="passwordIcon"></lm-icon>
        </div>
        <div class="err-tip-slot">
          <slot name="errTip"></slot>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  const LmIcon = r => require(['../lmIcon/LmIcon'], r);
  const ErrTips = resolve => require(['./components/ErrTips'], resolve);
  export default {
    name: "LmInput",
    components: {LmIcon, ErrTips},
    props: {
      'isListen': { // 是否实时监听变化
        type: Boolean,
        default: false
      },
      'isReadOnly': { // 是否只读
        type: Boolean,
        default: false
      },
      'inputType': {  // 输入框类型
        type: String,
        default: 'text'
      },
      'iconCode': { // input 图标
        type: String,
        default: 'none'
      },
      'placeHolder': {  // 自定义placeholder
        type: String,
        default: '搜索'
      },
      'errTip': { // 错误提示
        type: String
      },
      'isShowErrTip': Boolean
    },
    data() {
      return {
        isWritted: false,
        listen: false,
        localInputType: this.inputType,
        inputInfo: '',
        passwordIcon: 'icon-yanjing1'
      }
    },
    mounted() {
      this.listen = this.isListen;
    },
    methods: {
      lmInputBlur(){  //主动触发Input失去焦点
        console.log(1)
        this.$refs.lmInput.blur();
      },
      setInputVal(newVal) {
        this.inputInfo = newVal
      },
      handleInputBlur() {
        this.isWritted = true;
        this.$emit('handleInputBlur', this.inputInfo)
      },
      handleInputClick() {
        this.$emit('handleInputClick')
      },
      changePasswordType() {
        if (this.localInputType === 'password') {
          this.localInputType = 'text';
          this.passwordIcon = 'icon-yanjing'
        } else if (this.localInputType === 'text'){
          this.localInputType = 'password';
          this.passwordIcon = 'icon-yanjing1'
        }
      },
      reset() {
        this.inputInfo = ''
      }
    },
    watch: {
      inputInfo: function(newVal) {
        if(this.isListen) {
          this.handleInputBlur();
        } else {
          if(this.isWritted) {
            this.handleInputBlur();
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  #lm-input {
    width: 100%;
    padding-bottom: 28px;
    position: relative;
  }
  .lm-input-errtips {
    margin-left: 10px;
    position: absolute;
    top: -23px;
  }
  .lm-input-container-border {
    @include input-border-bgd;
    padding: 1px;
    .lm-input-container {
      position: relative;
      @include flex-row(flex-start);
      height: 40px;
      background: #fff;
      border-radius:20px;
      overflow: hidden;
      padding: 0 10px;
      .lm-input-masker {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
      }
      input {
        width: 100%;
        height: 80%;
        background: #fff;
      }
      .lm-input-icon {
        @include input-icon()
      }
      .err-tip-slot {
        color: rgba(255, 0, 24, 0.4);;
        position: absolute;
        left: 100px;
      }
    }
  }
</style>