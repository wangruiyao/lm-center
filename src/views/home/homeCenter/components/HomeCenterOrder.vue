<template>
  <div id="center-order">
    <home-center-box :title="`我的订单`" :desc="`查看全部订单`">
      <div class="item-container">
        <div class="item">
          <img src="../../../../assets/images/center/order_icon_03.png">
          <span>代付款</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/order_icon_06.png">
          <span>代发货</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/order_icon_08.png">
          <span>待收货</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/order_icon_10.png">
          <span>待处理</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/order_icon_12.png">
          <span>退款售后</span>
        </div>
      </div>

    </home-center-box>
  </div>
</template>

<script>
  import HomeCenterBox from "./HomeCenterBox";
  export default {
    name: "HomeCenterOrder",
    components: {HomeCenterBox}
  }
</script>

<style lang="scss" scoped>
  #center-order {
    .item-container {
      @include flex-row(space-around);
      padding: 10px 0;
      .item {
        margin: 10px 0;
        img {
          width: 80%;
          margin-bottom: 5px;
        }
        @include flex-column()
      }
    }

  }
</style>