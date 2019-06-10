<template>
  <div id="detail-footer">
    <div class="left">
      <span class="lm-icon icon iconfont">&#xe65e;</span>
      <span class="lm-icon icon iconfont">&#xe618;</span>
    </div>
    <div class="center">
      <span class="lm-icon icon iconfont" :class="isShake? 'shakeBox': ''" @click="addTocart">&#xe504;</span>
      <span class="lm-icon icon iconfont">&#xe513;</span>
    </div>
    <div class="right">
      <div>立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailFooter",
    props: {
      isShake: false
    },
    methods: {
      addTocart() {
        this.$emit('addTocart')
      },
      cartRun() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @-moz-keyframes tada{
    0%{-moz-transform:scale(1);}
    10%,20%{-moz-transform:scale(0.9) rotate(-3deg);}
    30%,50%,70%,90%{-moz-transform:scale(1.2) rotate(3deg);}
    40%,60%,80%{-moz-transform:scale(1.2) rotate(-3deg);}
    100%{-moz-transform:scale(1) rotate(0);}
  }

  @-webkit-keyframes tada{
    0%{-webkit-transform:scale(1);}
    10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);}
    30%,50%,70%,90%{-webkit-transform:scale(1.2) rotate(3deg);}
    40%,60%,80%{-webkit-transform:scale(1.2) rotate(-3deg);}
    100%{-webkit-transform:scale(1) rotate(0);}}

  .shakeBox{
    -webkit-animation: tada 1s .2s ease both;
    -moz-animation: tada 1s .2s ease both;
  }
  #detail-footer {
    height: $header-height;
    background: #fff;
    border-top: solid $line-light 1px;
    width: 100%;
    @include flex-row();
    position: fixed;
    z-index: 999;
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