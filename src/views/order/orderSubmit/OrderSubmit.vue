<template>
  <div id="order-submit" class="lm-container">
    <lm-header :background="`#f2f2f2`" :back-params="backParams">
      <div slot="left" class="title">确认订单</div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div @click="test">test</div>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="order-scroll-inner">

      </div>
      <!--商品基本信息-->
      <order-goods-common-info></order-goods-common-info>
      <!--订单基本信息-->
      <order-common-info :good-type="goodType" @go="go" @showPop="showPopup"></order-common-info>
      <!--运营商产品机主信息-->
      <order-user-info-operator
              v-show="goodType === `numberCard` || goodType === `broadBand`"></order-user-info-operator>
      <!--收货信息-->
      <order-receive-info :good-type="goodType" @go="go"></order-receive-info>
      <lm-border-bar></lm-border-bar>

      <!-- 配送信息-->
      <order-delivery-info @showPop="showPopup"></order-delivery-info>
      <order-amount></order-amount>

      <!-- 协议 -->
      <order-agreement v-show="goodType === `numberCard` || goodType === `broadBand`"></order-agreement>


    </lm-scroll>

    <!-- footer -->
    <order-footer></order-footer>
    <!-- 选择支付方式 -->
    <order-pay-way-check :isVisible="showPop === 'payWay'"
                         :check-list="payWay"
                         @checkPayWay="checkPayWay" @closeSelf="showPopup"></order-pay-way-check>
    <keep-alive>
      <transition :enter-active-class="$route.meta.pageIn"
                  :leave-active-class="$route.meta.pageOut">
        <router-view v-if="$route.meta.keepAlive"/>
      </transition>

    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>



  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const OrderGoodsCommonInfo = resolve => require(['./components/OrderGoodsCommonInfo'], resolve);
  const OrderCommonInfo = resolve => require(['./components/OrderCommonInfo'], resolve);
  const OrderUserInfoOperator = resolve => require(['./components/OrderUserInfoOperator'], resolve);
  const OrderReceiveInfo = resolve => require(['./components/OrderReceiveInfo'], resolve);
  const LmBorderBar = resolve => require(['components/lmBorderBar/LmBorderBar'], resolve);
  const OrderDeliveryInfo = resolve => require(['./components/OrderDeliveryInfo'], resolve);
  const OrderFooter = resolve => require(['./components/OrderFooter'], resolve);
  const OrderAmount = resolve => require(['./components/OrderAmount'], resolve);
  const OrderPayWayCheck = resolve => require(['./components/OrderPayWayCheck'], resolve);
  const OrderAgreement = resolve => require(['./components/OrderAgreement'], resolve);
  export default {
    name: "OrderSubmit",
    components: {
      OrderAgreement,
      OrderPayWayCheck,
      OrderAmount,
      OrderFooter,
      OrderDeliveryInfo,
      LmBorderBar,
      OrderReceiveInfo, OrderUserInfoOperator, OrderCommonInfo, OrderGoodsCommonInfo, LmScroll, LmHeader},
    data() {
      return {
        orderParams: {
          deliveryInfo: { //
            payWay: ''
          }
        },
        backParams: {},
        orderInfo: {},
        cityInfo: {},
        goodType: 'numberCard', // numberCard: 号卡，broadBand: 宽带， commodity: 单商品
        showPop:'', //
        payWay: [ // 支付方式
          {
            name: '在线支付',
            value: '1',
            checked: true
          },{
            name: '货到付款',
            value: '2',
            checked: false
          }]
      }
    },
    mounted() {
      this.orderInfo = this.$route.params;
      this.backParams = {
        id: this.orderInfo.id
      };
    },
    methods: {
      checkPayWay(item) { // 选择支付方式
        this.payWay = item;
        this.showPop = '';
      },
      test() {
        goforward('orderCityPicker')
      },
      go(path) {
        goforward(path)
      },
      showPopup(pop) {  //弹出层
        this.showPop = pop;
      }
    },
    watch: {
      $route() {
        if(this.$route.params.addr !== undefined) {
          this.cityInfo = this.$route.params.addr;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-submit {
    .title {
      white-space: nowrap;
      font-size: 14px !important;
      margin-left: 10px;
    }

    .order-scroll-inner {
      margin-top: -10px;
    }
  }
</style>