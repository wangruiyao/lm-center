<template>
  <div id="order-detail-order-info">
    <div class="title">
      <span>订单信息</span>
    </div>
    <div class="order-info-box">
      <div class="order-info-item" v-for="i in [1,1,1,1,1]">
        <span>订单编号：2019802915435613</span>
        <div class="copy-btn">复制</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailOrderInfo",

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