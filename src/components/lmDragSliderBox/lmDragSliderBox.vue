<!--滑块验证-->
<template>
  <div id="drag-slider-box" v-if="visibile">
    <div class="drag-slider-outter">
      <div class="drag-slider-header">
        <span class="icon iconfont"><span class="icon-display">&#xe633;</span></span>
        <span @click="onReset">验证</span>
        <span class="icon iconfont">&#xe633;</span>
      </div>
      <drag-slider-pc @dragSliderCheckSuccess="dragSliderCheckSuccess" v-if="browserType === 'pc'" ref="dragSlider"></drag-slider-pc>
      <drag-slider-mobile @dragSliderCheckSuccess="dragSliderCheckSuccess" v-else-if="browserType === 'mobile'" ref="dragSlider"></drag-slider-mobile>
    </div>
  </div>
</template>

<script>
  import DragSliderPc from "./components/DragSliderPC";
  import DragSliderMobile from "./components/DragSliderMobile";

  export default {
    name: "DragSliderBox",
    components: {DragSliderPc, DragSliderMobile},
    props: {
      visibile: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {

        browserType: ''
      }
    },
    mounted() {
      if(this.isMobile()){
        this.browserType = 'mobile'
      } else {
        this.browserType = 'pc'

      }
    },
    methods: {
      isMobile() {  // 判断是否是手机浏览器
        const userAgentInfo = navigator.userAgent;
        const agents = ["Android", "iPhone", "Windows Phone","iPad", "iPod", "SymbianOS"];
        const flag = agents.some(i => {
          return userAgentInfo.indexOf(i) > 0;
        });
        return flag;
      },
      onReset() {
        this.$refs.dragSlider.reset();
      },
      dragSliderCheckSuccess() {  // 滑块验证通过
        this.$emit('dragSliderCheckSuccess')

      }
    }
  }
</script>

<style lang="scss" scoped>
  #drag-slider-box {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    background: rgba(0,0,0,.3);
    @include flex-column(center);
    .drag-slider-outter{
      overflow: hidden;
      position: fixed;
      z-index: 3000;
      width: 300px;
      /*height: 100px;*/
      top: 200px;
      background: #fff;
      .drag-slider-header {
        height: $header-height;
        @include  flex-row();
        padding: 0 10px;
        >span {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 10px;
          .icon-display {
            color: transparent;
          }
        }
      }
    }
  }
</style>