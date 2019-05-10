<template>
  <div id="lm-header">
    <!-- 返回 -->
    <div class="header-back"
         @click="back">
      <span class="lm-icon icon iconfont">&#xe611;</span>
    </div>

    <!-- 标题 -->
    <div class="headerName">
      {{title}}
    </div>

    <!-- 右侧按钮 -->
    <div class="header-right-icon">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import types from 'store/types'
  export default {
    name: "LmHeader",
    components: {},
    props: {
      title: {
        type: String
      }
    },
    methods: {
      back() {
        const histoyrPage = this.$store.state.historyPage;
        this.$store.commit(types.SET_PAGE_STATION, 'back');
        this.$router.replace({name: histoyrPage})
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-header {
    position: fixed;
    background: #fff;
    @include flex-row();
    height: $header-height;
    width: 100%;
    border-bottom: solid #eee 1px;
    font-size: 17px;
    color: #424242;
    font-weight: 900;
    top: 0;
    z-index: 999;
  }
  .header-back, .header-right-icon {
    width: 40px;
    text-align: center;
  }
</style>