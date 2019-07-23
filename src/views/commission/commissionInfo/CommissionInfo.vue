<template>
  <div id="commission-info" class="lm-container">
    <lm-header :title="`佣金明细`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe6d2;</span>
      </div>
    </lm-header>

    <lm-scroll ref="wrapper"
               :pullup="true">
      <commission-info-item v-for="i in [1,1,1,1,1]"></commission-info-item>
    </lm-scroll>
  </div>
</template>

<script>
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const CommissionInfoItem = resolve => require(['./components/CommissionInfoItem'], resolve);
  export default {
    name: "CommissionInfo",
    components: {CommissionInfoItem, LmHeader, LmScroll}
  }
</script>

<style lang="scss" scoped>
  #commission-info {
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