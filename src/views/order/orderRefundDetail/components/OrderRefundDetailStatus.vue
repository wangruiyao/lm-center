<template>
  <div class="order-refund-detail-status">
    <div class="detail-status">
      <span class="status">{{orderDetail.refundstatedesc}}</span>
      <span class="time">{{orderDetail.updatetime}}</span>
    </div>
    <div class="detail-cell">
      <span>退款总额：</span>
      <span class="refund-price">￥<span>{{(Number(orderDetail.refundprice)/100).toFixed(2)}}</span></span>
    </div>
    <div class="detail-cell">
      <span>退款单号：</span>
      <span>{{orderDetail.refundtrans}}</span>
    </div>
    <div class="detail-cell2">
      <div>同意退款：</div>
      <div>{{orderDetail.handleopinion}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderRefundDetailStatus",
    props: {
      orderDetail: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-refund-detail-status {
    background: #fff;
    border-radius:4px;
    overflow: hidden;
    width:350px;
    box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.13);
    .detail-status {
      padding: 17px 25px;
      width: 100%;
      height:70px;
      background: #F23A43;
      color: #fff;
      @include flex-column(baseline, baseline);
      .status {
        font-size: 14px;
      }
    }
    .detail-cell {
      padding: 0 18px;
      @include flex-row();
      height: 42px;
      border:1px solid rgba(191, 191, 191, 0.45);
      border-top: solid transparent 1px;

      .refund-price {
        color: #F13B40;
        >span {
          font-size: 14px;
        }
      }
    }
    .detail-cell2 {
      padding: 12px 18px 16px;
      @include flex-row(baseline,baseline);
      flex-wrap: wrap;
      border:1px solid rgba(191, 191, 191, 0.45);
      border-top: solid transparent 1px;
      border-radius:4px;
      >span {
        flex-shrink: 0;
      }
    }
  }
</style>