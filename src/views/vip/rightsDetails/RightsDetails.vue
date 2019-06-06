<template>
  <div id="reights-detail" class="lm-container">
    <lm-header :title="`连萌VIP升级之路`"
               :back-params="backParams">
      <!--<div slot="right">-->
      <!--<span class="lm-icon icon iconfont">&#xe61e;</span>-->
      <!--</div>-->
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <rights-detail-item v-for="item in [1,1,1,1]"></rights-detail-item>
    </lm-scroll>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const RightsDetailItem = resolve => require(['./components/RightsDetailItem'], resolve);
  export default {
    name: "RightsDetails",
    components: {RightsDetailItem, LmScroll, LmHeader},
    data() {
      return {
        backParams: {
          subPath: 'rightsCenter'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #reights-detail {
    @include flex-column();
  }
</style>