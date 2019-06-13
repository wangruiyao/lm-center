<template>
  <div id="order-submit" class="lm-container">
    <lm-header :background="`#f2f2f2`">
      <div slot="left" class="title">确认订单</div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="order-scroll-inner">

      </div>
      <order-goods-common-info></order-goods-common-info>
      <order-common-info></order-common-info>

    </lm-scroll>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>


  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const OrderGoodsCommonInfo = resolve => require(['./components/OrderGoodsCommonInfo'], resolve);
  const OrderCommonInfo = resolve => require(['./components/OrderCommonInfo'], resolve);
  export default {
    name: "OrderSubmit",
    components: {OrderCommonInfo, OrderGoodsCommonInfo, LmScroll, LmHeader},
    data() {
      return {
        cityInfo: {}
      }
    },
    methods: {
      test() {
        goforward('orderToolkit')
      }
    },
    watch: {
      $route() {

        if(this.$route.params.addr !== undefined) {
          this.cityInfo = this.$route.params.addr;
          console.log(this.cityInfo)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-submit {
    .title {
      font-size: 14px !important;
      margin-left: 10px;
    }

    .order-scroll-inner {
      margin-top: -10px;
    }
  }
</style>