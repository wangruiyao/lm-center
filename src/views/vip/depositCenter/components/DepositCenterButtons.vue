<template>
  <div id="button-container">
    <div class="jn" @click="go(`depositPay`)">缴纳</div>
    <div class="tq">提取</div>
  </div>
</template>

<script>
  export default {
    name: "DepositCenterButtons",
    methods: {
      go(path, params) {
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #button-container {
    height: 50px;
    background: #fff;
    @include flex-row(space-around);
    .jn {
      background: #6D94FD;
    }
    .tq {
      background: #7C4CFF;
    }
    div {
      letter-spacing: 3px;
      border-radius: 3px;
      @include flex-column(center);
      width: 114px;
      height: 30px;
      background: $blue-color;
      color: #fff;
      font-size: 14px;
    }
  }

</style>