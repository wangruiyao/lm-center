<template>
  <div id="commission-account" class="lm-container">
    <lm-header :title="`佣金账户`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe6d2;</span>
      </div>
    </lm-header>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
    <lm-scroll ref="wrapper"
               :pullup="true">


      <commission-account-check v-show="false"></commission-account-check>
      <commission-account-info></commission-account-info>
    </lm-scroll>
  </div>
</template>

<script>
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);

  const CommissionAccountCheck = resolve => require(['./components/CommissionAccountCheck'], resolve);
  const CommissionAccountInfo = resolve => require(['./components/CommissionAccountInfo'], resolve);
  export default {
    name: "CommissionAccount",
    components: {CommissionAccountInfo, CommissionAccountCheck, LmHeader, LmScroll},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  #commission-account {
    background: $bgd-color;
    z-index: 1000;
  }

</style>