<template>
  <div id="shop-center" class="lm-container">
    <shop-center-header></shop-center-header>
    <div class="head-bgd"></div>
    <div class="shop-center-scroll-box" ref="shopCenterWarpper">
      <div class="shop-center-scroll-inner">
        <div class="hot-search">
          <span>热搜：</span>
          <span class="hot-search-item">联通8折宽带</span>
        </div>
        <!-- 轮播图 -->
        <shop-center-slider></shop-center-slider>

        <!-- -->
        <!--<div class="arc-box">-->
          <!--<div class="inner-box">-->
            <!---->

          <!--</div>-->
        <!--</div>-->
        <div class="common-bgd">
          <shop-center-button-list></shop-center-button-list>
          <shop-center-hot-sale></shop-center-hot-sale>
          <shop-center-goods-list></shop-center-goods-list>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import types from 'store/types'
  import BScroll from 'better-scroll'
  const ShopCenterHeader = resolve => require(['./components/ShopCenterHeader'], resolve);
  const ShopCenterSlider = resolve => require(['./components/ShopCenterSlider'], resolve);
  const ShopCenterButtonList = resolve => require(['./components/ShopCenterButtonList'], resolve);
  const ShopCenterHotSale = resolve => require(['./components/ShopCenterHotSale'], resolve);
  const ShopCenterGoodsList = resolve => require(['./components/ShopCenterGoodsList'], resolve);

  export default {
    name: "ShopCenter",
    components: {
      ShopCenterGoodsList,
      ShopCenterHotSale, ShopCenterButtonList, ShopCenterSlider, ShopCenterHeader},
    mounted() {
      this.$store.commit(types.SET_HOME_TAB, 0);
      this.setScroll();
    },
    methods: {
      setScroll() {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.shopCenterWarpper, {
            mouseWheel: true,
            click: true,
            pullUpLoad: true
          });
          this.scroll.on('pullingUp', () => {})
        }, 20)
      },

    }
  }
</script>

<style lang="scss" scoped>
  .common-bgd {
    background: $bgd-color;
  }
  #shop-center {
    width: 375px;
    .head-bgd {
      position: fixed;
      width: 375px;
      top: 0;
      height: $header-height *6;
      background:linear-gradient(-20deg,rgba(102,188,255,.42),rgba(105,40,253,.82));
    }
    .shop-center-scroll-box {
      position: fixed;
      top: $header-height;
      bottom: 0;
      width: 375px;
      overflow: hidden;
      .shop-center-scroll-inner {
        .hot-search {
          height: $cell-height;
          width: 375px;
          color: #fff;
          @include flex-row(baseline);
          padding: 10px;
          >span {
            padding: 1px 5px;
            margin-right: 5px;
          }
          .hot-search-item {
            background:rgba(255,255,255,.15);
            -webkit-border-radius: 9px;
            -moz-border-radius: 9px;
            border-radius: 9px;
          }
        }
        .arc-box {
          width: 375px;
          /*height: 100px;*/

          background: $bgd-color;
          position: relative;
          .inner-box {
            position: absolute;
            background: $bgd-color;
            width: 375px;
            z-index: 100;
          }
        }
        .arc-box::after {
          content: '';
          display: block;
          width: 130%;
          height: 40px;
          position: absolute;
          left: -15%;
          top: -10px;
          z-index: 1;
          border-radius: 50% 50% 0 0 ;
          background: $bgd-color;

        }
      }
    }

  }
</style>