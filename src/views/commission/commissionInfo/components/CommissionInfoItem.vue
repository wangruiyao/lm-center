<template>
  <div class="info-item">
    <div class="item-left">
      <span class="commission-amount">30.00</span>
      <span>固定佣金</span>
    </div>
    <div class="item-center">
      <div class="item-center-top">
        <span>产生时间：</span>
        <span>2018-12-12</span>
        <span>30:01</span>
      </div>
      <p class="item-center-bottom">
        来源订单:201931232131234351212321312343512
      </p>
    </div>
    <div class="item-right">
      <span>待发放</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommissionInfoItem"
  }
</script>

<style lang="scss" scoped>
  .info-item {
    margin-top: 23px;
    width: 360px;
    height: 70px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    @include flex-row();

    .item-left {
      width: 95px;
      height: 100%;
      background:linear-gradient(90deg,rgba(56,168,253,0.95),rgba(68,192,255,0.95));
      color: #fff;
      @include flex-column(center);
      .commission-amount {
        font-size: 24px;

      }
    }

    .item-center {
      width: 215px;
      height: 100%;
      @include flex-column(center, baseline);
      padding: 10px;
      overflow: hidden;

      >div {
        width: 100%;
        margin-bottom: 5px;
      }
      .item-center-bottom {
        width: 90%;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .item-right {
      width: 50px;
      height: 100%;
      @include flex-column(center);
      color: #0081C3;
    }
  }
</style>