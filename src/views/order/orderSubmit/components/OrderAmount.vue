<template>
  <div id="order-amount">
    <div>
      <span>订单总价</span>
      <span>￥200.00</span>
    </div>
    <div>
      <span>套餐价格</span>
      <span>￥200.00</span>
    </div>
    <div>
      <span>新增预存</span>
      <span>￥200.00</span>
    </div>
    <div>
      <span>优惠金额</span>
      <span>￥200.00</span>
    </div>
    <div>
      <span>运费</span>
      <span>￥200.00</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderAmount"
  }
</script>

<style lang="scss" scoped>
  #order-amount {
    width: 375px;
    padding: 20px 15px;
    >div {
      width: 100%;
      @include flex-row()
    }
  }
</style>