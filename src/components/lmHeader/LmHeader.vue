<template>
  <div id="lm-header"
       :style="{background: background, opacity: opacity, borderBottom:  border, color: color}">
    <!-- 返回 -->
    <div class="header-back"
         @click="back">
      <span class="lm-icon icon iconfont" v-show="showBack">&#xe612;</span>
      <slot name="left"></slot>
    </div>

    <!-- 标题 -->
    <div class="headerName">
      {{title}}
      <slot name="center"></slot>
    </div>

    <!-- 右侧按钮 -->
    <div class="header-right-icon" @click="handleMoreClick">
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
      },
      border: {
        type: String,
        default: 'solid #eee 1px'
      },
      color: {
        type: String,
        default: '#424242'
      },
      backParams: {
        type: Object,
        default: ()=>{}
      }
    },
    methods: {
      back() {
        goback(this.backParams)
      },
      handleMoreClick() {
        this.$moreTools.show()
        // this.$emit('handleMoreClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-header {
    position: fixed;
    @include flex-row();
    height: $header-height;
    width: 375px;
    font-size: 16px;
    color: #424242;
    top: 0;
    z-index: 999;

    .headerName {
      font-size: 18px;
    }
  }
  .header-back{
    >span {
      font-size: 18px;
      line-height: 18px;
    }
    padding-left: 10px;
    @include flex-row(center);
  }
  .header-right-icon {
    @include flex-row(center);
    width: 40px;
    text-align: center;
  }
  .click-more-box {
    position: fixed;
    width: 375px;
    height: 150px;
    background: rgba(0,0,0,0.6);
  }
</style>