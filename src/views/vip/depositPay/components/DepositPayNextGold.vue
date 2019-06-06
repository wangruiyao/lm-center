<template>
  <div id="next-gold">
    <div>
      <img :src="info.imgurl">
      <div class="desc">
        <span class="desc-1">保证金</span>
        <span class="desc-2">{{info.pay}}元</span>
        <span class="desc-3">获得VIP{{info.vip}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DepositPayNextGold",
    props: {
      info: {
        type: Object
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  #next-gold {
    position: relative;
    margin: 12.5px 10px;
    img {
      width: 100%;
    }
    .desc {
      @include flex-column(center);
      height: 100%;
      position: absolute;
      color: #fff;
      top: 0;
      right: 30px;
      .desc-1 {
        font-size: 10px;
      }
      .desc-2 {
        font-size: 18px;
      }
      .desc-3 {
        font-size: 12px;
      }
    }
  }
</style>