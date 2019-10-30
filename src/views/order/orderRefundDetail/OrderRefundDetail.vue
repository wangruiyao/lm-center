<template>
  <div id="order-refund-detail" class="lm-container">
    <lm-header :title="`退款记录`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true">
      <order-refund-detail-status :order-detail="orderDetail"></order-refund-detail-status>
      <order-refund-detail-info :order-detail="orderDetail"></order-refund-detail-info>
    </lm-scroll>
  </div>
</template>

<script>
  import {getrefundinfor, displayimg} from 'api/order';
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import OrderRefundDetailStatus from "./components/OrderRefundDetailStatus";
  import OrderRefundDetailInfo from "./components/OrderRefundDetailInfo";
  export default {
    name: "OrderRefundDetail",
    components: {OrderRefundDetailInfo, OrderRefundDetailStatus, LmScroll, LmHeader},
    data() {
      return {
        refundid: '',
        orderDetail: {}
      }
    },
    mounted() {
      this.refundid = this.$route.params.refundid;
      this.getRefundInfor();
    },
    methods: {
      getRefundInfor() {
        getrefundinfor({
          refundid: this.refundid
        }).then(rsp => {
          this.orderDetail = rsp.data;
          console.log(JSON.stringify(rsp))
        })
      },

    }
  }
</script>

<style lang="scss" scoped>
  #order-refund-detail {
    z-index: 1000;
    @include flex-column();
    background: $bgd-color;
  }
</style>