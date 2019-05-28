<template>
  <div id="home-center" class="lm-container-blank">
    <lm-header :title="`连萌`" :show-back="false" :opacity="headerOpacity" v-show="showHeader">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="listenScroll">
      <home-center-head></home-center-head>
      <!--<div class="minePage" @click="goforward('mineAccount')">我的账户</div>-->
      <!--<div class="minePage" @click="goforward('minePersonalData')">完善个人信息</div>-->
      <div class="home-center-container">
        <home-center-order></home-center-order>
        <home-center-helper></home-center-helper>
        <home-center-commission></home-center-commission>
      </div>
    </lm-scroll>

  </div>
</template>

<script>
  import LmHeader from "components/lmHeader/LmHeader";
  import types from 'store/types'
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import HomeCenterHead from "./components/HomeCenterHead";
  import HomeCenterOrder from "./components/HomeCenterOrder";
  import HomeCenterHelper from "./components/HomeCenterHelper";
  import HomeCenterCommission from "./components/HomeCenterCommission";
  export default {
    name: "HomeCenter",
    components: {HomeCenterCommission, HomeCenterHelper, HomeCenterOrder, HomeCenterHead, LmScroll, LmHeader},
    data() {
      return {
        showHeader: false,
        headerOpacity: 0
      }
    },
    mounted() {

    },
    methods: {
      goforward(page) {
        goforward(page)
      },
      listenScroll(pos) {
        this.headerOpacity = -pos.y * 0.04;
        this.showHeader = pos.y < 0;

      }
    }

  }
</script>

<style lang="scss" scoped>

  .lt-enter-active{
    opacity: 1;
    transition: opacity 1s;
  }
  .lt-leave-active{
    opacity: 1;
    transition: opacity .4s;
  }

  .lt-enter,.lt-leave-to{
    opacity: 0;
  }
  #home-center {
    height: 400px;
    background-size: 100%;
    background-image: url("../../../assets/images/center/center-head.png");
    .home-center-container {
      @include flex-column(baseline);
      min-height: 700px;
      padding-top: 30px;
      width: 100%;
      /*height: 10000px;*/
      background: $bgd-color;
    }
  }
</style>