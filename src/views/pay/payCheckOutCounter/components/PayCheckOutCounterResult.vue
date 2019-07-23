<template>
  <div id="pay-check-out-counter-result">
    <span class="tips">支付金额</span>
    <div class="pay-price">
      ￥<span>2000.00</span>元
    </div>

    <div class="pay-result-point">
      <div class="pay-result-point-desc">
        <span class="lm-icon icon iconfont">&#xe501;</span>
        <div>
          <p class="result">订单已成功提交！</p>
          <p>订单号 — 2019490343421830034</p>
          <p class="tip">订单为您保留24小时，请及时付款。</p>
        </div>
      </div>
      <div class="bottom-border">
        <div v-for="i in Array.from({length:32}, (v,k) => k)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PayCheckOutCounterResult"
  }
</script>

<style lang="scss" scoped>
  #pay-check-out-counter-result {
    >.tips {
      font-size: 16px;
    }

    .pay-price {
      font-size: 16px;
      margin-bottom: 20px;
      >span {
        display: inline-block;
        margin: 0 5px;
        font-size: 30px;
      }
    }
    color: #fff;
    width: 375px;
    height: 206px;
    background:linear-gradient(0deg,rgba(64,233,245,1),rgba(102,133,251,1),rgba(116,96,253,1),rgba(124,74,255,1));
    @include flex-column(center);
    .pay-result-point {
      position: relative;
      height: 77px;
      width: 320px;
      background: #fff;

      .pay-result-point-desc {
        color: $color-deep;
        padding-left: 10px;
        @include flex-row(baseline,end);
        >span {
          @include blue-icon();
          font-size: 42px;
        }
        >div {
          padding: 10px;

          .result {
            font-size: 14px;
          }

          .tip {
            color: #666;
            line-height: 24px;
          }
        }
      }

      .bottom-border {
        position: absolute;
        width: 100%;
        height: 10px;
        bottom: -5px;
        @include flex-row();
        >div {
          border-radius: 50%;
          width: 10px;
          height: 10px;
          background: #fff;
        }
      }

    }


  }
</style>