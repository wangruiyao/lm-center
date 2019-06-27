<template>
  <div id="number-check" class="lm-container">
    <lm-search-header :place-text="`号码查询`">
      <span slot="leftIcon" class="lm-icon icon iconfont">&#xe615;</span>
      <div class="header-right" slot="right">
        <span slot="leftIcon" class="lm-icon icon iconfont">&#xe6d2;</span>
        济南
      </div>
    </lm-search-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="number-check-scroll">
        <order-number-check-item v-for="item in [1,1,1]"></order-number-check-item>
      </div>

    </lm-scroll>
  </div>
</template>

<script>
  const LmSearchHeader = resolve => require(['components/lmSearchHeader/LmSearchHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const OrderNumberCheckItem = resolve => require(['./components/OrderNumberCheckItem'], resolve);
  export default {
    name: "OrderNumberCheck",
    components: {OrderNumberCheckItem, LmScroll, LmSearchHeader}
  }
</script>

<style lang="scss" scoped>
  #number-check {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    background: $bgd-color;
    z-index: 999;

    .header-right {
      padding: 10px;
    }

    .number-check-scroll {
      padding: 0 15px;
      @include flex-row();
      flex-wrap: wrap;
    }
  }
</style>