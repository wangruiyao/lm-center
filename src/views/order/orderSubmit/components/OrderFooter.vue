<template>
  <div id="order-footer">
    <div class="order-footer-sum">
      合计：
      <span>￥<span>200</span>.00</span>
    </div>
    <div>
      <mt-button type="default">提交订单</mt-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "OrderFooter"
  }
</script>

<style lang="scss" scoped>
  #order-footer {
    height: 50px;
    border-top: solid $line-deep 1px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: $bgd-color;
    @include flex-row(flex-end);

    >div {
      height: 100%;
      width: 33.33%;
    }

    .order-footer-sum {
      @include flex-row(center);
      >span{
        color: #F53737;
        >span {
          font-size: 18px;
        }
      }
    }

  }
</style>