<template>
  <div id="button"
       :class="isActive ? actType : 'lm-button'"
       @click="handleButtonClick" @touchstart="handleStart(true)" @touchend="handleStart(false)">
    <div class="mask" v-show="touchMask"></div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LmButton",
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      actType: {
        type: String,
        default: 'active-red'
      }
    },
    data() {
      return {
        touchMask:false
      }
    },
    methods: {
      handleStart(type) {
        this.touchMask = type
      },
      handleButtonClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .active {
    color: red;
  }
  #button {
    position: relative;
    @include flex-row(center);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(255,255,255,.3);
    }
  }
  .lm-button {
    color: #666;
    border: solid $button-border-color 1px;
  }
  .active-red {
    @include btn-active-red;
  }
  .active-blue {
    @include btn-active-blue;
  }
</style>