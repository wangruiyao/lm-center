<template>
  <div id="lm-input">
    <div class="lm-input-errtips"><err-tips :err-tip="errTip"></err-tips></div>
    <div class="lm-input-container-border">
      <div class="lm-input-container">
        <slot></slot>
        <div v-if="isReadOnly" class="lm-input-masker" @click.prevent="handleInputClick"></div>
        <input class="lm-input-input"
               :type="localInputType"
               v-model="inputInfo"
               :style="{color: (errTip !== ''&& errTip !== undefined) ? ' #ff0018': ''}"
               :placeholder="placeHolder"
               @blur="handleInputBlur"
               />
        <div @click="changePasswordType()">
          <lm-icon v-if="inputType === 'password'"
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
  const LmIcon = r => require(['../lmIcon/LmIcon'], r)
  const ErrTips = resolve => require(['./components/ErrTips'], resolve);
  export default {
    name: "LmInput",
    components: {LmIcon, ErrTips},
    props: {
      'isReadOnly': {
        type: Boolean,
        default: false
      },
      'inputType': {
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
        localInputType: this.inputType,
        inputInfo: '',
        passwordIcon: 'icon-yanjing1'
      }
    },
    mounted() {},
    methods: {
      setInputVal(newVal) {
        this.inputInfo = newVal
      },
      handleInputBlur() {
        this.$emit('handleInputBlur', this.inputInfo)
      },
      handleInputClick() {
        this.$emit('handleInputClick')
      },
      changePasswordType() {
        if (this.localInputType === 'password') {
          this.localInputType = 'text'
          this.passwordIcon = 'icon-yanjing'
        } else if (this.localInputType === 'text'){
          this.localInputType = 'password'
          this.passwordIcon = 'icon-yanjing1'
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
      height: $input-height;
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
        height: 100%;
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