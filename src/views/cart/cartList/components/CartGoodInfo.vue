<template>
  <div class="cart-good-info">
    <img src="../../../../assets/images/goods/goods-img.png">
    <div class="goods-info">
      <div class="goods-title">
        <span>99元冰激凌预存300(1元语音包)</span>
        <span class="font-desc">300分钟通话，国内流量冰激凌</span>
      </div>

      <div class="goods-type-select">
        <span>
          华为P20pro， 黑色，8+128G
        </span>
        <span class="lm-icon icon iconfont">&#xe615;</span>
      </div>
      <div class="info-bottom">
        <div class="good-store">
          <span class="font-desc">库存：1201</span>
          <span>无货</span>
        </div>

        <div class="good-price">
          <div class="price"><span>￥</span>200.00</div>
          <div class="handle-num">
            <span class="btn">—</span>
            <span>1</span>
            <span class="btn-add">+</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "CartGoodInfo"
  }
</script>

<style lang="scss" scoped>
  .font-desc {
    color: #999;
  }
.cart-good-info {
  width: 345px;
  @include flex-row(baseline);
  >img {
    width: 100px;
    height: 100px;
    border: solid $line-light 1px;
  }
  .goods-info {
    padding-left: 10px;
    height: 100px;
    width: 220px;
    padding-bottom: 5px;
    @include flex-column(space-between, baseline);

    .goods-type-select {
      height: 20px;
      @include flex-row();
      background: $line-light;
    }
    .info-bottom {
      width: 100%;

      .good-store {
        color: #FF4A2A;
      }

      .good-price {
        @include flex-row();
        .price {
          color: #FD5030;
          font-size: 14px;
          >span {
            font-size: 12px;
          }
        }

        .handle-num {
          @include flex-row();
          font-size: 14px;
          .btn-add {
            font-size: 22px;
          }
          .btn {
            font-size: 12px;
          }
          span {
            line-height: 14px;
            text-align: center;
            display: inline-block;
            width: 30px;
          }
        }
      }
    }

  }
  
}
</style>