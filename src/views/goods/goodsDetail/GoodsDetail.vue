<template>
  <div id="goods-list" class="lm-container-blank">
    <!-- 头部 -->
    <goods-detail-header :scroll-y="scrollY" :act-tab="actTab"
                         @changeTab="changeTab"></goods-detail-header>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="scroll">
      <div class="swipper-inner">
        <goods-detail-swiper :goods-picture="goodDetail.goodsPicture"></goods-detail-swiper>
        <div class="goods-detail-Info">
          <goods-detail-info :goods-info="goodDetail"></goods-detail-info>
          <goods-detail-cell></goods-detail-cell>
        </div>


      </div>

    </lm-scroll>



  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import GoodsDetailHeader from "./components/GoodsDetailHeader";
  import GoodsDetailSwiper from "./components/GoodsDetailSwiper";
  import GoodsDetailInfo from "./components/GoodsDetailInfo";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import GoodsDetailCell from "./components/GoodsDetailCell";
  export default {
    name: "GoodsDetail",
    components: {GoodsDetailCell, LmScroll, GoodsDetailInfo, GoodsDetailSwiper, GoodsDetailHeader, LmHeader},
    data() {
      return {
        scrollY: 0,
        actTab: 0,
        goodDetail: {},
      }
    },
    mounted() {
      this.goodDetail = this.$route.params.goodsInfo;
      console.log(this.goodDetail)
    },
    methods: {
      scroll(pos) {
        this.scrollY = pos.y
      },
      changeTab(idx) {
        this.actTab = idx
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-list {
    .swipper-inner {
      margin-top: -10px;
      .goods-detail-Info {
      }
    }
  }
</style>