<!-- 商品基本信息-->
<template>
  <div id="order-goods-common-info">
    <div class="goods-store">
      <img src="../../../../assets/images/logo.png">
      <span>山东联通</span>
    </div>
    <div class="goods-info">
      <img src="../../../../assets/images/goods/goods-img.png">
      <div class="goods-info-desc">
        <div class="goods-title">
          <span class="title">99元冰激凌预存300（1元语音包）</span>
          <span class="tips">800分钟通话，国内流量冰激凌</span>
        </div>

        <div class="good-price">
          ￥<span class="price">200.00</span>
          x<span class="number">1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderGoodsCommonInfo"
  }
</script>

<style lang="scss" scoped>
  #order-goods-common-info {
    width: 375px;

    .goods-store {
      height: 37px;
      background: #fff;
      @include flex-row(baseline);

      >img {
        margin: 0 10px;
        width: 20px;
      }
      >span {
        line-height: 20px;
        font-size: 12px;
        color: #333;
      }
    }

    .goods-info {
      height: 102px;
      @include flex-row();
      padding: 0 15px;
      >img {
        border: solid #999 1px;
        width: 82px;
        height: 82px;
      }

      .goods-info-desc {
        padding-left: 22px;
        height: 82px;
        @include flex-column(space-between,baseline)

        .goods-title {
          .tips {
            color: #999;
          }
        }
        .good-price {
          margin-bottom: 10px;
          font-size: 10px;
          color: $color-middle;
          span {
            display: inline-block;
            font-size: 14px;
            color: #FF2D00;
          }
          .price {
            margin-right: 15px;
          }
          .number {

            color: $color-middle;
          }
        }
      }
    }
  }
</style>