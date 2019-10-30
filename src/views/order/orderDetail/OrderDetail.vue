<template>
  <div id="order-detail" class="lm-container">
    <order-detail-header></order-detail-header>
    <div class="order-detail-scroll" ref="orderDetailWarpper">
      <div class="order-detail-scroll-inner">
        <order-detail-common-info @go="go"
                                  :order-infor="orderInfo.orderinfor"
                                  :delivery="orderInfo.delivery"
                                  :resinfor="orderInfo.resinfor"></order-detail-common-info>
        <order-detail-goods-info :order-goods="orderInfo.ordergoods"
                                 :order-info="orderInfo.orderinfor"
                                 :close-time="countDownTime"
                                 :price="orderInfo.price"
                                 :res-infor="orderInfo.resinfor"></order-detail-goods-info>
        <order-detail-order-info :order-infor="orderInfo.orderinfor"></order-detail-order-info>
        <order-detail-footer></order-detail-footer>
      </div>
    </div>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {orderdetailbyid} from 'api/order.js'
  const OrderDetailHeader = r => require(['./components/OrderDetailHeader'], r);
  const OrderDetailCommonInfo = r => require(['./components/OrderDetailCommonInfo'], r);
  const OrderDetailGoodsInfo = r => require(['./components/OrderDetailGoodsInfo'], r);
  const OrderDetailOrderInfo = r => require(['./components/OrderDetailOrderInfo'], r);
  const OrderDetailFooter = r => require(['./components/OrderDetailFooter'], r);

  export default {
    name: "OrderDetail",
    components: {OrderDetailFooter, OrderDetailOrderInfo, OrderDetailGoodsInfo, OrderDetailCommonInfo, OrderDetailHeader},
    data() {
      return {
        test: {},
        orderInfo: {
          orderinfor: {}
        },
        orderid: '',
        orderType: '', // 订单类型
        countDownTime: ''  // 订单关闭时间
      }
    },
    mounted() {
      const _this = this;
      _this.getOrderId();
      setTimeout(() => {
        this.scroll = new BScroll(_this.$refs.orderDetailWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 20)
    },
    methods: {
      getOrderId() {  // 获取订单id
        this.orderid = JSON.parse(this.$route.params.orderinfo).orderid;
        this.getOrderDetail({
          orderid: this.orderid
        });
      },
      getOrderDetail(params) {  //获取订单详情
        const _this = this;
        orderdetailbyid(params).then(rsp => {
          _this.orderInfo = rsp.data;
          _this.orderType = _this.orderInfo.orderinfor.order_type;
          console.log(JSON.stringify(_this.orderInfo));
          this.closeTimeCountDown(_this.orderInfo.closetime)
        });

      },
      closeTimeCountDown(time) {  // 订单关闭时间-倒计时
        const _this = this;
        let min=Math.floor(time%3600);
        this.countDownTime = Math.floor(time/3600) + ":" + Math.floor(min/60) + ":"+ time%60;
        if(time > 0) {
          this.timmer = setTimeout(function() {
            _this.closeTimeCountDown(time -1)
          }, 1000);
        } else {
          clearTimeout(this.timmer);
        }

      },
      go(path, params) {
        goforward(path, params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-detail {
    z-index: 999;
    width: 375px;
    background: $bgd-color;

    .order-detail-scroll {
      overflow: hidden;
      position: fixed;
      top: $header-height;
      bottom: 0;
      width: 375px;
    }
  }

</style>