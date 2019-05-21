<template>
  <div id="detail-cell">
    <lm-cell :title="`参数`"
             :disable="false"
             :border="false">
      <div class="cell-text" slot="cellInput">
        <span>品牌、手机卡类型..</span>
      </div>
    </lm-cell>
    <lm-cell :title="`优惠`"
             :disable="false"
             :border="false">
      <div class="cell-text" slot="cellInput">
        <span class="coupon-text">联通宽带优惠券</span>
      </div>
      <span slot="right-text">领取</span>
    </lm-cell>
    <lm-cell :title="`服务`"
             :disable="false"
             :border="false">
      <div class="cell-text" slot="cellInput">
        <span>正品保证</span>
      </div>
    </lm-cell>
  </div>
</template>

<script>
  import LmCell from "../../../../components/lmCell/LmCell";
  export default {
    name: "GoodsDetailCell",
    components: {LmCell},
    data() {
      return {
        test: '111'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detail-cell {
    .cell-text {
      width: 100%;
      text-align: left;
      color: #666;
      .coupon-text {
        color: $font-red-color;
      }
    }
  }
</style>