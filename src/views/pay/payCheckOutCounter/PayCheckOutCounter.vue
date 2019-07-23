<template>
  <div id="pay-check-out-counter" class="lm-container">

    <lm-header>
      <div class="head-left" slot="left">收银台</div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="check-out-inner-scroll">
        <pay-check-out-counter-result></pay-check-out-counter-result>
        <pay-check-out-counter-way></pay-check-out-counter-way>
      </div>

    </lm-scroll>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const PayCheckOutCounterResult = resolve => require(['./components/PayCheckOutCounterResult'], resolve);
  const PayCheckOutCounterWay = resolve => require(['./components/PayCheckOutCounterWay'], resolve);
  export default {
    name: "PayCheckOutCounter",
    components: {PayCheckOutCounterWay, PayCheckOutCounterResult, LmScroll, LmHeader},
    data(){
      return {
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  #pay-check-out-counter {
    width: 375px;
    background: #fff;
    .head-left {
      line-height: 15px;
      margin-left: 10px;
    }

    .check-out-inner-scroll {
      margin-top: -10px;
    }
  }

</style>