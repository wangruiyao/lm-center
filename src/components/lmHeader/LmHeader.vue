<template>
  <div id="lm-header" :style="{background: background, opacity: opacity }">
    <!-- 返回 -->
    <div class="header-back"
         @click="back">
      <span class="lm-icon icon iconfont" v-show="showBack">&#xe612;</span>
    </div>

    <!-- 标题 -->
    <div class="headerName">
      {{title}}
      <slot name="center"></slot>
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
      opacity: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: '#fff'
      },
      showBack: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      }
    },
    methods: {
      back() {
        goback()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-header {
    position: fixed;
    @include flex-row();
    height: $header-height;
    width: 100%;
    border-bottom: solid #eee 1px;
    font-size: 16px;
    color: #424242;
    top: 0;
    z-index: 999;
  }
  .header-back, .header-right-icon {
    width: 40px;
    text-align: center;
  }
</style>