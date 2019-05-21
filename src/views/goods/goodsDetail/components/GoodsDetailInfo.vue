<template>
  <div id="goods-info">
    <div class="good-price">
      ￥<span class="number">{{(goodsInfo.publish_price/100).toFixed(2)}}</span>
      <span class="band">疯狂促销</span>
    </div>
    <div class="good-price-old">
      <span>价格</span>￥<span>{{(goodsInfo.basicPrice/100).toFixed(2)}}</span>
    </div>
    <div class="goods-desc">
      {{goodsInfo.title}}
    </div>
    <div class="good-basic-info">
      <span>快递:0.00</span>
      <span>月销量:10件</span>
      <span>山东济南</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailInfo",
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-info {
    font-size: 10px;
    background: #fff;
    padding: 0 10px;
    margin-bottom: 5px;
    .good-price {
      @include flex-row(baseline);
      font-size: 18px;
      color: $font-red-color;
      .number {
        font-size: 22px;
      }
      .band {
        /*font-size: .1rem;*/
        background: $font-red-color;
        font-size: 10px;
        color: #ffffff;
        font-weight: 100;
        padding: 0 1px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
      }
    }
    .goods-desc {
      font-size: 12px;
      color: #333;
    }
    .good-basic-info {
      color: #999;
      @include flex-row();
      padding: 5px 0;
    }
  }
</style>