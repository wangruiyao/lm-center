<template>
  <div id="deposit-header">
    <lm-header :title="`我的保证金`"
               :background="`rgba(255,255,255,0})`"
               :border="`solid transparent 1px`"
               :color="headerColor">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <div class="deposit-number">
      <span class="number">{{(Number(userInfo.despoit)/100).toFixed(2)}}</span>
      <span>( 元 )</span>
    </div>
  </div>
</template>

<script>
  import LmHeader from "../../../../components/lmHeader/LmHeader";
  export default {
    name: "DepositCenterHeader",
    components: {LmHeader},
    data() {
      return {
        headerColor: '#fff'
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.users.userInfo
      }
    },
  }
</script>

<style lang="scss" scoped>
  #deposit-header {
    border-top: solid transparent 1px;
    width: 100%;
    height: $header-height-2;
    background-image: url("../../../../assets/images/vip/vip-deposit-header.png");
    background-size: 100%;

    .deposit-number {
      color: #fff;
      width: 100%;
      margin-top: $header-height;
      @include flex-column(center);

      .number {
        font-size: 24px;
      }
    }
  }

</style>