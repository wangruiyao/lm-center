<template>
  <div id="order-detail-footer">
    <div>
      <span class="lm-icon icon iconfont">&#xe65e;</span>联系客服
    </div>
    <div>
      <span class="lm-icon icon iconfont">&#xe616;</span>拨打电话
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailFooter"
  }
</script>

<style lang="scss" scoped>
  #order-detail-footer {
    width: 375px;
    background: #FFF;
    margin-bottom: 15px;
    @include flex-row();
    >div{
      @include flex-row(center);
      width: 50%;
      height: $header-height;
      font-size: 14px;
      color: #4C4C4C;
      >span {
        color: #6486EE;
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
</style>