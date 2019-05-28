<template>
  <div id="vip-center">
    <vip-center-header></vip-center-header>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="listenScroll">

      <div class="vip-center-container">
        <div class="vip-center-ad">
          <div class="lm-icon icon iconfont icon-guanbi">

          </div>
          <!--<span class="lm-icon icon iconfont">&#xe6e1;</span>-->
          <img src="../../../assets/images/vip/vip-img-1.png">
        </div>
      </div>
    </lm-scroll>
  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import VipCenterHeader from "./components/VipCenterHeader";
  export default {
    name: "VipCenter",
    components: {VipCenterHeader, LmScroll, LmHeader},
    data() {
      return {}
    },
    methods: {
      listenScroll(pos) {}
    }
  }
</script>

<style lang="scss" scoped>
  #vip-center {
    .vip-header {

      width: 100%;
      height: 146px;
    }
    /*background-repeat-y: no-repeat;*/
    .vip-center-container {
      @include flex-column(baseline);
      min-height: 560px;
      width: 100%;
      padding-top: 146px;
      margin-top: -10px;
      .vip-center-ad {
        position: relative;
        >div {
          position: absolute;
          @include flex-column();
          color: #fff;
          width: 22px;
          padding-left: 9px;
          background: rgba(0, 0, 0, 0.61);
          padding-top: 2px;
          height: 22px;
          border-radius: 50%;
          top: 7px;
          right: 6px;
          font-size: 10px;
        }
        img{
          width: 100%;
        }
        width: 360px;
      }
    }
  }
</style>