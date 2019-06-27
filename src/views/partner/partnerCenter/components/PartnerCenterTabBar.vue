<template>
  <div id="partner-center-tab-bar">
    <div :class="actTab === 0? 'act':''"
         @click="changeTab(0)">全部合伙人</div>
    <div :class="actTab === 1? 'act':''"
         @click="changeTab(1)">未完成</div>
    <div :class="actTab === 2? 'act':''"
         @click="changeTab(2)">已完成</div>
  </div>
</template>

<script>
  export default {
    name: "PartnerCenterTabBar",
    props: {
      actTab: {
        type: Number,
        default: 0
      }
    },
    methods: {
      changeTab(tab) {
        this.$emit('changeTab', tab)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: #ED5948 !important;
    border-bottom: solid #ED5948 2px;
  }
  #partner-center-tab-bar {
    padding: 0 15px;
    width: 375px;
    @include flex-row();
    >div {
      width: 70px;
      padding: 5px;
      color: $color-middle;
      @include flex-column(center);
      margin: 10px 0;
    }
  }
</style>