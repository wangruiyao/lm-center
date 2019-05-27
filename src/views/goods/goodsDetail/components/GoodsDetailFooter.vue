<template>
  <div id="detail-footer">
    <div class="left">
      <span class="lm-icon icon iconfont">&#xe65e;</span>
      <span class="lm-icon icon iconfont">&#xe618;</span>
    </div>
    <div class="center">
      <span class="lm-icon icon iconfont">&#xe504;</span>
      <span class="lm-icon icon iconfont">&#xe513;</span>
    </div>
    <div class="right">
      <div>立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailFooter"
  }
</script>

<style lang="scss" scoped>
  #detail-footer {
    height: $header-height;
    background: #fff;
    border-top: solid $line-deep 1px;
    width: 100%;
    @include flex-row();
    position: fixed;
    bottom: 0;
    >div {
      width: 33%;
      height: 100%;
      @include flex-row(space-around);
      padding: 0 5px;
     span {
        height: 100%;
       @include flex-row();
      }
    }
    .center {
      span {
        color: #fff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        @include flex-row(center);
        @include blue-gradient();
        height: ($header-height) - 10px;
        width: ($header-height) - 10px;;
      }
    }
    .left {
      span {
        @include blue-icon()
      }
    }
    .right {
      color: #fff;
      @include blue-gradient()
    }
  }
</style>