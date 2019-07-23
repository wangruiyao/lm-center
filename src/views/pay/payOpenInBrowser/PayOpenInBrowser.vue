<template>
  <div id="pay-open-in-browser" class="lm-container-blank">
    <span class="tips1">由于微信内不支持支付宝付款</span>
    <span class="tips2">请在浏览器打开</span>
  </div>
</template>

<script>
  export default {
    name: "PayOpenInBrowser"
  }
</script>

<style lang="scss" scoped>
  #pay-open-in-browser {
    background: #fff;
    z-index: 1000;
    @include flex-column(center);

    .tips1 {
      font-size: 14px;
    }

    .tips2 {
      margin-top: 10px;
      font-size: 24px;
    }
  }
</style>