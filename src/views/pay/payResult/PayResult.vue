<template>
  <div id="pay-result" class="lm-container-blank">
    <p class="result">支付成功！</p>
    <p>恭喜您成功支付，</p>
    <p>您可以<span class="link" @click="go('shopCenter')">继续购物</span>或者查看<span class="link" @click="go('shopCenter')">该笔订单</span></p>
  </div>
</template>

<script>
  export default {
    name: "PayResult",
    methods: {
      go(path) {
        goforward(path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-result {
    z-index: 1000;
    background: #fff;
    @include flex-column(center);
    >p {
      font-size: 14px;
      .link {
        color: $blue-color-link;
      }
    }
    .result {
      font-size: 24px;
      padding: 20px 0;
    }

  }
</style>