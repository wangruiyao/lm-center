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
            <div class="scroll-item" @click="go('shopCenterGoodsDetail')">
              <span class="tip">热门</span>
              <span>{{item.title}}</span>
            </div>
          </div>
        </nut-swiper>
    </div>
    <div class="hot-sale-bottom">
      <div class="hot-sale-box" v-for="item in hotSaleList" @click="goHotSaleList(item)">
        <div class="box-header">
          <img :src="item.icon">
          <span>{{item.title}}</span>
        </div>
        <div class="box-main">
          <div class="box-img" v-for="i in item.viewhotsale">
            <img :src="i.pic"/>
          </div>
        </div>

      </div>
      <div class="hot-sale-box">
        <div class="box-header">
          <img src="1">
          <span>指导销售</span>
        </div>
        <div class="box-main">
          <div class="box-img">
            <span>敬请期待</span>
          </div>
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
  import {hotsale, hotsalescroll, viewhotsale} from 'api/shop'
  export default {
    name: "ShopCenterHotSale",
    data() {
      return {
        hotSaleList: [],
        hotSaleScroll: [],
      }
    },
    mounted() {
      this.getHotSale();
      this.getHotSaleScroll();
      // this.getViewHotSale()
    },
    methods: {
      go(path) {
        this.$emit('go', path)
      },
      getHotSale() {
        let flag = 0;
        const _this = this;
        hotsale().then(data => {
          data.map(i => {
            viewhotsale({
              shelftype: i.type
            }).then(d => {
              flag ++;
              i.viewhotsale = d.data;
              if(flag === 3) {
                _this.hotSaleList = data;
              }
            });
          });
        })
      },
      getHotSaleScroll() {
        const _this = this;
        hotsalescroll().then(data => {
          _this.hotSaleScroll = data.data;
          _this.$refs.hotSaleSwiper.updateEvent(1);
        })
      },
      goHotSaleList(params) { //跳转货架商品列表
        const queryParams = JSON.stringify({shelftype: params.type});
        goforward('shopCenterGoodsList', {
          query: queryParams
        });
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
        white-space: nowrap;
        
        .icon {
          font-size: 12px;
          color: #ff2f67;
        }

        margin-right: 10px;
      }

      .nut-swiper-slide {
        .scroll-item {
          white-space:nowrap;
          @include flex-row(baseline);
          font-size: 10px;
          .tip {
            flex-shrink: 0;
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
        .box-main {
          @include flex-row(space-around);
          .box-img {
            width: 70px;
            height: 70px;
            >img {
              width: 70px;
              height: 70px;
            }
          }
        }

      }
    }
  }
</style>