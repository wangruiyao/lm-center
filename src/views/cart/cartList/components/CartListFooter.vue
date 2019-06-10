<template>
  <div id="cart-list-footer">
    <div class="checkbox">
      <lm-check-box></lm-check-box>
      <span>全选</span>
    </div>

    <div class="total">
      合计：
      <span>￥<span>6600</span>.00</span>
    </div>

    <div class="pay-btn">
      结算（2）
    </div>

  </div>
</template>

<script>
  const LmCheckBox = resolve => require(['components/lmCheckBox/LmCheckBox'], resolve);
  export default {
    name: "CartListFooter",
    components: {LmCheckBox}
  }
</script>

<style lang="scss" scoped>
  #cart-list-footer {
    >div {
      width: 33.33%;
    }
    @include flex-row();
    padding: 0 0 0 5px;
    height: $header-height;
    background: $bgd-color;
    border-top: solid $line-light 1px;
    position: fixed;
    bottom: 0;
    width: 100%;

    .checkbox {
      @include flex-row(baseline);
      span {
        margin-left: 5px;
      }
    }
    .total {
      span {
        color: #F53737;
        span {
          font-size: 18px;
        }
      }
    }
    .pay-btn {
      font-size: 14px;
      height: 100%;
      color: #fff;
      @include flex-column(center);
      @include blue-gradient;
    }
  }
</style>