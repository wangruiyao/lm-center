<template>
  <div id="order-delivery" class="lm-container">
    <lm-header :title="`查看订单进度`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <order-delivery-info-list></order-delivery-info-list>
    </lm-scroll>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const OrderDeliveryInfoList = resolve => require(['./components/OrderDeliveryInfoList'], resolve);
  export default {
    name: "OrderDelivery",
    components: {OrderDeliveryInfoList, LmScroll, LmHeader},
    mounted() {
      console.log(this.$route)
    }
  }
</script>

<style lang="scss" scoped>
  #order-delivery {
    background: $bgd-color;
    z-index: 999;
  }
</style>