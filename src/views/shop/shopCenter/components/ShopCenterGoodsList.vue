<template>
  <div id="shop-center-goods-list">
    <div class="button-list">
      <div class="button-item" v-for="(item, idx) in [1,1,1,1,1]" :class="idx === 0 ? 'act' : ''">
        <span class="title">全部</span>
        <span class="desc">推荐</span>
      </div>
    </div>

    <div class="goods-list">
      <div class="goods-item" v-for="item in [1,1,1]">
        <img :src="goodsImg">

        <div class="price-box">
          <span class="title">东阿阿胶正牌阿胶品质保障</span>
          <span class="price">￥<span>200.00</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopCenterGoodsList",
    data() {
      return {
        goodsImg: require('assets/images/goods/goods-img.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-goods-list {
    .act {
      .title {
        color: #072AFF !important;
      }
      .desc {
        background:linear-gradient(-90deg,rgba(64,233,245,0.99),rgba(102,133,251,0.99),rgba(116,96,253,0.99),rgba(124,74,255,0.99));
        color: #fff !important;
      }
     }
    .button-list {
      background: #bfbfbf;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 2px;
      margin: 10px 0;
      .button-item {
        height: 35px;
        background: $bgd-color;
        @include flex-column(center);

        .title {
          color: #202020;
          font-size: 14px;
        }
        .desc {
          color: #999;
          padding: 0 5px;
          border-radius: 10px;
        }
      }
    }

    .goods-list {
      padding: 0 10px;
      @include flex-row(baseline);
      flex-wrap: wrap;
      .goods-item {
        background: #fff;
        overflow: hidden;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        width: 170px;
        margin-left: 5px;
        margin-bottom: 13px;
        >img {
          width: 100%;
          height: 159px;
        }

        .price-box {
          padding: 5px 10px 5px;
          font-size: 10px;
          @include flex-column(baseline,baseline);
          .title {
            margin-bottom: 5px;
          }
          .price {
            color: #FF2A00;
            >span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>