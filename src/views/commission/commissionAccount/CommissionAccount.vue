<template>
  <div id="commission-account" class="lm-container">
    <lm-header :title="`佣金账户`">
      <div class="header-right" slot="right">
      </div>
    </lm-header>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
    <lm-scroll ref="wrapper"
               :pullup="true">

      <!--未绑定佣金账户-->
      <commission-account-check v-if="module === '0'"></commission-account-check>
      <!--已绑定佣金账户-->
      <commission-account-info @changeAccount="changeAccount" v-if="module === '1'"></commission-account-info>
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
    data() {
      return {
        module: 0
      }
    },
    created() {
      this.module = this.$route.params.module;  // 0: 未绑定 1: 已绑定
    },
    methods: {
      changeAccount() {
        this.module = '0'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #commission-account {
    background: $bgd-color;
    z-index: 1000;
  }

</style>