<template>
  <div class="fly-box" v-show="showBox">
    <div class="box-outter" :class="isRun?'act-outter': ''">
      <div class="box-inner" :class="isRun?'act-inner': ''">
        <slot name="img"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FlexBox",
    props: {
      showBox: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isRun: false,
      }
    },
    methods: {
      run() {
        this.isRun = true;
        return new Promise(resolve => {
          setTimeout(function() {
            resolve();
          }, 550)
        })
      },
      reset() {
        this.isRun = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act-outter{
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  .act-inner {
    transform: translateY(380px) scale(0,0);
    opacity: .5;
  }
  .fly-box {
    @include flex-column(baseline);
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*background: rgba(0,0,0,.5);*/
    .box-outter {

      margin-top:187px;
      /*margin-left: 187px;*/
      transition:all .5s;
      transition-timing-function: linear;
      .box-inner {
        overflow: hidden;
        width: 80px;
        height: 80px;
        background: #fff;
        border: solid $line-light 1px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transition:all .5s;
        transition-timing-function: cubic-bezier(.55,0,.85,.36);
      }
    }
  }
</style>