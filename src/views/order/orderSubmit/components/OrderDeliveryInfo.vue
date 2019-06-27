<!-- 订单配送信息 -->

<template>
  <div id="order-delivery-info">
    <lm-cell :title="`配送方式：`"
             :disable="false">
      <div class="right-info force-type" slot="right-text">快递 免邮</div>
    </lm-cell>

    <lm-cell :title="`支付方式：`"
             :disable="false"
             @click="showPopup('payWay')">
      <div class="right-info force-type" slot="right-text">在线支付</div>
    </lm-cell>

    <lm-cell :title="`店铺优惠：`"
             :disable="false">
      <div class="right-info force-type" slot="right-text">填写优惠码</div>
    </lm-cell>

    <lm-cell :title="`发票：`"
             :disable="false">
      <div class="right-info force-type" slot="right-text">本次不开具发票</div>
    </lm-cell>
    <lm-cell :title="`买家留言：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                placeholder="填写备注信息"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
  </div>

</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderDeliveryInfo",
    components: {LmCell},
    methods: {
      showPopup(pop) {
        this.$emit('showPop', pop)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-input {
    width: 100%;
  }
  .right-info {
    white-space:nowrap;
    color: $color-deep;
  }
  #order-delivery-info {
    width: 375px;
    background: #fff;
    margin-top: 10px;
  }
</style>