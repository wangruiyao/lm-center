<template>
  <div id="shop-center-hot-sale">
    <div class="hot-sale-top">
      <div class="title">
        <span>连萌</span>
        <span class="lm-icon icon iconfont">&#xe66d;</span>
        <span>热销</span>

      </div>
        <nut-swiper
                direction="vertical"
                :autoPlay="3000" ref="hotSaleSwiper">
          <div class="nut-swiper-slide gray" v-for="item in hotSaleScroll">
            <div class="scroll-item">
              <span class="tip">热门</span>
              <span>{{item.title}}</span>
            </div>
          </div>
        </nut-swiper>
    </div>
    <div class="hot-sale-bottom">
      <div class="hot-sale-box" v-for="item in hotSale">
      <div class="box-header">
        <img :src="item.icon">
        <span>{{item.title}}</span>
      </div>
    </div>

      <div class="hot-sale-box">
        <div class="box-header">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {hotsale, hotsalescroll} from 'api/shop'
  export default {
    name: "ShopCenterHotSale",
    data() {
      return {
        hotSale: [],
        hotSaleScroll: []
      }
    },
    mounted() {
      this.getHotSale();
      this.getHotSaleScroll();
    },
    methods: {
      getHotSale() {
        const _this = this;
        hotsale().then(data => {
          _this.hotSale = data;
        })
      },
      getHotSaleScroll() {
        const _this = this;
        hotsalescroll().then(data => {
          _this.hotSaleScroll = data.data;
          _this.$refs.hotSaleSwiper.updateEvent(1);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-hot-sale {
    width: 375px;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    .hot-sale-top {
      @include flex-row(baseline);
      height: 30px;
      border-bottom: solid $bgd-color 1px;
      background: #fff;
      padding: 0 10px;
      .scroll-item {
        height: 100%;
        @include flex-row();
      }
      .title {
        color: #887878;
        font-size: 14px;
        font-weight: bold;
        
        .icon {
          font-size: 12px;
          color: #ff2f67;
        }

        margin-right: 10px;
      }

      .nut-swiper-slide {
        .scroll-item {
          @include flex-row(baseline);
          font-size: 10px;
          .tip {
            color: #64A3FF;
            background: #EDF4FF;
            padding: 0 3px;
            margin-right: 5px;
          }
        }
      }
    }
    .hot-sale-bottom {
      width: 100%;
      grid-row-gap: 1px;
      grid-column-gap: 1px;
      height: 212px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .hot-sale-box {
        background: #fff;
        .box-header {
          @include flex-row(baseline);
          padding: 0 10px;
          color: #202020;
          font-weight: 400;
          >img {
            margin-right: 5px;
            width: 12px;
          }
        }
      }
    }
  }
</style>