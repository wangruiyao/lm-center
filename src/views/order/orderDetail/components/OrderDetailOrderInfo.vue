<template>
  <div id="order-detail-order-info">
    <div class="title">
      <span>订单信息</span>
    </div>
    <div class="order-info-box">
      <div class="order-info-item">
        <span>订单编号：{{orderInfor.orderid}}</span>
        <div class="copy-btn copy-ordersn"
             data-clipboard-action="copy"
             :data-clipboard-text="orderInfor.orderid"
             @click="copyLink('copy-ordersn')">复制</div>
      </div>
      <div class="order-info-item">
        <span>支付方式：{{orderInfor.paytypedesc}}</span>
      </div>
      <div class="order-info-item">
        <span>支付单号：{{orderInfor.payno}}</span>
        <div class="copy-btn copy-payno"
             data-clipboard-action="copy"
             :data-clipboard-text="orderInfor.payno"
             @click="copyLink('copy-payno')">复制</div>
      </div>
      <div class="order-info-item">
        <span>创建时间：{{orderInfor.createtime}}</span>
      </div>
      <div class="order-info-item">
        <span>付款时间：{{orderInfor.paytime}}</span>
      </div>
      <div class="order-info-item">
        <span>发货时间：{{orderInfor.deliverytime}}</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailOrderInfo",
    props: {
      orderInfor: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      copyLink(target) {
        let _this = this;
        if(this.clipboard){
          this.clipboard.destroy();
        }
        this.clipboard = new _this.$clipboard(`.${target}`);
        this.clipboard.on('success', (e)=> {
          Toast('复制成功')
        });
        this.clipboard.on('error', (e)=> {
          console.log(1)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-detail-order-info {
    width: 375px;
    background: #fff;
    padding: 10px 15px;
    .title {
      @include flex-row();
      >span {
        font-size: 16px;
        position: relative;
      }
      >span::after {
        content: '';
        height: 90%;
        top: 5%;
        width: 3px;
        background: #000;
        position: absolute;
        left: -7px;
        background:linear-gradient(0deg,rgba(194,111,229,1),rgba(99,135,238,1),rgba(91,239,225,1));
      }
    }
    .order-info-box {
      padding: 10px 2px;
      color: #7C7C7C;

      .order-info-item {
        height: 25px;
        @include flex-row();
        .copy-btn {
          width: 55px;
          height: 21px;
          background: #6486EE;
          color: #fff;
          @include flex-column(center);
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
        }
      }
    }
  }
</style>