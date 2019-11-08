<template>
  <div id="vip-center">
    <vip-center-header></vip-center-header>
    <div class="vip-header-layout"></div>

    <div class="vip-center-ad" v-show="adShow">
      <div class="lm-icon icon iconfont icon-guanbi" @click="closeAd()"></div>
      <!--<span class="lm-icon icon iconfont">&#xe6e1;</span>-->
      <img :src="require('assets/images/vip/vip-img-1.png')">
    </div>
    <div class="vip-ad-layout" v-show="adShow"></div>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="listenScroll">

      <div class="vip-center-container">
        <div class="vip-list">
          <span class="title">精选权益</span>
          <div class="vip-list-container">
            <div class="right-block">
              <img :src="rightBlockImg">
              <p>更多权益正在路上</p>
              <p>敬请期待</p>
            </div>
            <!--<div>-->
              <!--<img src="../../../assets/images/vip/vip-img2.png">-->
              <!--<div>-->
                <!--<span>新人专属红包</span>-->
                <!--<span class="vip-grade">(VIP2)</span>-->
              <!--</div>-->

            <!--</div>-->
          </div>

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
      return {
        rightBlockImg: require('assets/images/vip/rights_blank.png'),
        adShow: true
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.users.userInfo
      }
    },
    methods: {
      closeAd() {
        this.adShow = false;
      },
      listenScroll(pos) {}
    }
  }
</script>

<style lang="scss" scoped>
  $width: 360px;
  $ad-height: 50px;
  #vip-center {
    .vip-header-layout {
      height: $header-height-2;
      width: 100%;
    }
    .vip-ad-layout {
      width: 100%;
      height: $ad-height;
    }
    @include flex-column();
    border: solid transparent 1px;
    .vip-header {

      width: 100%;
      height: 146px;
    }
    .vip-center-ad {
      @include flex-row(space-between, flex-end);
      position: fixed;
      z-index: 888;
      top: 146px;
      height: $ad-height;
      >div {
        position: absolute;
        @include flex-column();
        color: #fff;
        width: 22px;
        padding-left: 9px;
        /*background: rgba(0, 0, 0, 0.61);*/
        padding-top: 2px;
        height: 22px;
        border-radius: 50%;
        top: 19px;
        right: 6px;
        font-size: 10px;
      }
      img{
        width: 100%;
      }
      width: $width;
    }
    /*background-repeat-y: no-repeat;*/
    .vip-center-container {
      @include flex-column(baseline);
      min-height: 560px;

      .vip-list {
        padding: 0 5px 10px;
        .title {
          margin-bottom: 5px;
          font-weight: 400;
          font-size: 16px;
          color: #383838;
        }
        width: $width;
        @include flex-column(baseline, baseline);
        .vip-list-container {
          width: 100%;
          @include flex-row();
          flex-wrap: wrap;
          >div {
            margin-bottom: 10px;
            @include flex-column(space-between, baseline);
            >div {
              color: #666;
              padding: 2px;
              width: 100%;
              @include flex-row();
              .vip-grade {
                color: #BC7E2E;
                font-size: 10px;
              }
            }
          }
          img {
            width: 170px;
          }

          .right-block {
            width: 100%;
            >img {
              padding: 30px 0 20px;
              width: 120px;
            }
            @include flex-column(center);
            >p {
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>