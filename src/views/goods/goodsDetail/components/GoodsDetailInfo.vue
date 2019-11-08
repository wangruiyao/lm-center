<template>
  <div id="goods-info">
    <div class="good-price">
      ￥<span class="number">{{(Number(priceSell)/100).toFixed(2)}}</span>
      <span class="band" v-for="item in goodsInfo.marketingtags">{{item.tagname}}</span>
    </div>
    <div class="good-price-old">
      <span>价格</span>￥<span class="price">{{goodsInfo && goodsInfo.price && goodsInfo.price.basic ?(Number(goodsInfo.price.basic)/100).toFixed(2) : ''}}</span>
    </div>
    <div class="goods-desc">
      {{goodsInfo.title}}
    </div>
    <div class="good-basic-info">
      <span>快递:0.00</span>
      <span>月销量:{{goodsInfo.salenum}}件</span>
      <span>库存:{{goodsInfo.stock}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailInfo",
    data() {
      return {
        priceSell: ''
      }
    },
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      goodsInfo(newInfo) {
        this.priceSell = newInfo.price.sell;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-info {
    background: #fff;
    padding: 0 15px;
    margin-bottom: 10px;
    .good-price {
      @include flex-row(baseline);
      font-size: 18px;
      color: $font-red-color;
      .number {
        font-size: 22px;
      }
      .band {
        margin: 0 2px;
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
    .good-price-old{
      color: #999;
      .price{
        text-decoration: line-through;
      }

    }
    .goods-desc {
      font-size: 14px;
      color: #333;
    }
    .good-basic-info {
      color: #999;
      @include flex-row();
      padding: 5px 0;
    }
  }
</style>