<template>
  <div id="order-detail-header">
    <div class="left" @click="back">
      <span class="lm-icon icon iconfont">&#xe612;</span>
      订单详情
    </div>
    <div class="right">
      <span class="lm-icon icon iconfont">&#xe61e;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailHeader",
    methods: {
      back() {
        goback();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-detail-header {
    width: 375px;
    @include flex-row();
    padding: 10px;
    top: 0;
    position: fixed;
    height: $header-height;
    @include blue-gradient;
    color: #fff;
    span {
      font-size: 18px;
    }
    .left {
      font-size: 18px;
    }
  }

</style>