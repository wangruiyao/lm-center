<template>
  <div id="order-detail" class="lm-container">
    <order-detail-header></order-detail-header>
    <div class="order-detail-scroll" ref="orderDetailWarpper">
      <div class="order-detail-scroll-inner">
        <order-detail-common-info @go="go"></order-detail-common-info>
        <order-detail-goods-info></order-detail-goods-info>
        <order-detail-order-info></order-detail-order-info>
        <order-detail-footer></order-detail-footer>
      </div>
    </div>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {searchorderdetail} from 'api/order.js'
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
        orderInfo: null
      }
    },
    mounted() {
      const _this = this;
      _this.getOrderDetail();
      setTimeout(() => {
        this.scroll = new BScroll(_this.$refs.orderDetailWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 20)
    },
    methods: {
      getOrderDetail() {  //获取订单详情
        const _this = this;
        searchorderdetail().then(data=> {

          if(data.code === '0') {
            if(data.subcode === '10000') {
              _this.orderInfo = data.data;
              console.log(_this.orderInfo)
            } else {
              Message(`获取订单详情接口报错：${data.submsg}`)
            }
          } else {
            Message(`获取订单详情接口报错：${data.msg}` )
          }
        }).catch(data=> {
          Message(`调用获取订单详情接口失败,失败原因:${JSON.stringify(data)}`)
        })
      },
      go(path, params) {
        goforward(path, params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-detail {
    width: 375px;

    .order-detail-scroll {
      overflow: hidden;
      position: fixed;
      top: $header-height;
      bottom: 0;
      width: 375px;
    }
  }

</style>