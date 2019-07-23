<template>
  <div id="pick-up-info" class="lm-container">
    <lm-header :title="`提现明细`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe6d2;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <commission-pick-up-item v-for="i in [1,1,1]"></commission-pick-up-item>
    </lm-scroll>
  </div>
</template>

<script>
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);

  const CommissionPickUpItem = resolve => require(['./components/CommissionPickUpItem'], resolve);
  export default {
    name: "CommissionPickUpInfo",
    components: {CommissionPickUpItem, LmScroll, LmHeader}
  }
</script>

<style lang="scss" scoped>
  #pick-up-info {
    width: 375px;
    background: $bgd-color;
    z-index: 1000;
    @include flex-column();

    .header-right {
      .iconfont {
        font-size: 23px;
      }
    }
  }
</style>