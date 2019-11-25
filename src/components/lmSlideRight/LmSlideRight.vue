<template>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
  <div id="slide-right" v-show="slideVisiblity">
    <div class="slider-right-inner">
      <div class="slide-Mask" @click="handleMaskClick"></div>
      <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="slider-container" v-show="slideVisiblity">
          <lm-scroll ref="wrapper"
                     :pullup="true">
            <div class="title">筛选</div>
            <div class="filt-item">
              <slot></slot>
            </div>
          </lm-scroll>
          <div class="filter-button">
            <span class="btn-reset" @click="reset">重置</span>
            <span class="btn-confirm" @click="confirm">确认</span>
          </div>
        </div>
      </transition>
    </div>


  </div>
  </transition>
</template>

<script>
  import LmScroll from "../lmScroll/LmScroll";
  export default {
    name: "LmSlideRight",
    components: {LmScroll},
    props: {
      slideVisiblity: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleMaskClick() {
        this.$emit('handleMaskClick');
      },
      confirm() { // 确认
        this.$emit('confirm');
      },
      reset() { // 重置
        this.$emit('reset');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #slide-right {
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 375px;
    top: 0;
    .slider-right-inner {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .slide-Mask {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
    .slider-container {
      padding: 0 20px;
      position: absolute;
      z-index: 999;
      height: 100%;
      width: 75%;
      right: 0;
      top: 0;
      background: #fff;

      .title {
        margin-bottom: 20px;
      }
    }
    .filter-button{
      position: absolute;
      bottom: 20px;
      right: 10px;
      z-index: 999;
      @include flex-row(center);
      border-radius: 5px;
      overflow: hidden;
      span {
        display: inline-block;
        @include flex-row(center);
        width: 70px;
        height: 25px;
        color: #fff;

      }
      .btn-reset {
        background: #54b4f8;
      }
      .btn-confirm{
        background: #7757fe;
      }
    }
  }
</style>