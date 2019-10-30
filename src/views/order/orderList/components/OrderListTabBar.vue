<template>
  <div id="order-list-tab-bar">
    <nut-scroller>

      <div slot="list"
           v-for="(item,idx) in tabList"
           class="tab-item"
           :class="actTab === idx?'act':''"
           @click="changeTab(idx)">{{item}}
      </div>
    </nut-scroller>
    <span class="lm-icon icon iconfont" @click="handleFilterClick">&#xe6d2;</span>
  </div>
</template>

<script>
  export default {
    name: "OrderListTabBar",
    props: {
      actTab: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        tabList: [
          '全部',
          '代付款',
          '代发货',
          '待收货',
          '待处理'
        ]
      }
    },
    methods: {
      handleFilterClick() {
        this.$emit('handleFilterClick')
      },
      changeTab(tab) {
        this.$emit('changeTab',tab)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: #7069FD;
    border: unset !important;
    position: relative;
  }
  .act::after {
    content: '';
    position: absolute;
    height: 3px;
    bottom: 0;
    width: 100%;
    @include blue-gradiennt3();
    left: 0;
  }
  #order-list-tab-bar {
    color: #666;
    background: #fff;
    padding: 0 10px;
    position: fixed;
    width: 375px;
    z-index: 999;
    height: $header-height;
    @include flex-row();
    .tab-item {
      width: 65px;
      font-size: 14px;
      @include flex-column(center);
      height: 100%;
      flex-grow: 1;
      text-align: center;
    }
    >span {
      width: 20px;
    }
  }
</style>