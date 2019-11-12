<template>
  <div id="next-gold">
    <div @click="goToPay()">
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
    mounted() {},
    methods: {
      goToPay() {
        // console.log(this.$store.state.users.userInfo.userId)
        window.location.href="http://192.168.0.210:7700/lmfrontstage/pay/topay?paytype=0&vip="+this.info.vip+"&userid="+this.$store.state.users.userInfo.userId
        // goforward('payCheckOutCounter',{
        //   paytype: 0,
        //   vip: this.info.vip
        // })
      }
    }
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