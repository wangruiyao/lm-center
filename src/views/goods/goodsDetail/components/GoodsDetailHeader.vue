<template>
  <div id="header">
    <div class="header-default" :style="{opacity: 1-headerOpacity}">
      <span class="lm-icon icon iconfont" @click="back">&#xe612;</span>
      <span class="lm-icon icon iconfont">&#xe61e;</span>
    </div>

    <lm-header :background="`#fff`" :opacity="headerOpacity" v-show="showHeader">
      <div class="head-scroll" slot="center">
        <div></div>
        <div class="header-anchor">
          <div :class="actTab === 0 ? 'act' : ''" @click="handleTabClick(0)">
            商品
            <span v-show="actTab === 0"></span>
          </div>
          <div :class="actTab === 1 ? 'act' : ''" @click="handleTabClick(1)">
            评价
            <span v-show="actTab === 1"></span>
          </div>
          <div :class="actTab === 2 ? 'act' : ''" @click="handleTabClick(2)">
            详情
            <span v-show="actTab === 2"></span>
          </div>
        </div>
        <div class="head-car">
          <span class="lm-icon icon iconfont">&#xe504;</span>
        </div>
      </div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

  </div>
</template>

<script>
  import LmHeader from "../../../../components/lmHeader/LmHeader";
  export default {
    name: "GoodsDetailHeader",
    components: {LmHeader},
    props: {
      actTab: {
        type: Number,
        default: 0
      },
      scrollY: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        headerOpacity: 0,
        showHeader: false
      }
    },
    watch: {
      scrollY(newVal) {
        this.showHeader = newVal < 0;
        this.headerOpacity = -newVal*0.003
      }
    },
    methods: {
      handleTabClick(tabIdx) {
        this.$emit('changeTab', tabIdx)
      },
      back() {
        goback()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    margin-top: 10px;
  }
  #header {
    .header-default {
      position: fixed;
      @include flex-row();
      height: $header-height;
      width: 100%;
      font-size: 16px;
      color: #424242;
      font-weight: 900;
      top: 0;
      z-index: 999;
      padding: 0 8px;
      span {
        @include flex-row(center);
        background: rgba(0,0,0,0.3);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: #fff;
        width: 25px;
        height: 25px;
      }
    }
    .head-scroll {
      @include flex-row();
      .header-anchor {
        /*margin-top: 10px;*/
        width: 200px;
        font-size: 14px;
        @include flex-row();
        >div{
          width: 50px;
          height: $header-height;
          @include flex-column(center);
          >span{
            width: 50px;
            margin-top: 7px;
            height: 3px;
            @include blue-gradient;
          }
        }

      }
      .head-car {
        color: #424242;
        span {
          font-size: 18px;
        }
      }
      width: 315px;
    }
  }
</style>