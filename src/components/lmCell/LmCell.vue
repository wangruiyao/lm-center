<!--title: 标题, info: 信息, disable：不可点击 -->

<template>
  <div id="lm-cell" :class="[border?'borderbottom': '', fontLarge? 'font-large': '']">
    <div class="cell-title">
      {{title}}
    </div>
    <div class="cell-info" v-if="cellType === 'info'">
      <slot name="cellInfo"></slot>
      <slot name="cellInput"></slot>

    </div>
    <div class="cell-icon" @click="handleClick" :style="rightStyle">
      <slot name="right-text"></slot>

      <span class="lm-icon icon iconfont" v-if="!disable">&#xe66c;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LmCell",
    props: {
      border: {
        type: Boolean,
        default: true
      },
      fontLarge: {
        type: Boolean,
        default: false
      },
      cellType: {
        type: String,
        default: 'info'
      },
      titleColor: {
        type: String,
        default: ''
      },
      title: {
        type: String
      },
      disable: {
        type: Boolean
      },
      fontSize: {
        type: String,
        default: '12px'
      },
      rightStyle: {
        type: Object,
        default: ()=>{}
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .borderbottom {
    border-bottom: solid $line-light 1px;
  }
  .font-large {
    font-size: 14px;
  }
  #lm-cell{
    min-height: $cell-height;
    @include flex-row();
    padding: 0 15px;
    text-align: right;
    background: #fff;

    div {
      display: inline-block;
    }
    .cell-title {
      white-space:nowrap;
      color: $color-deep;
      min-width: 20%;
      text-align: left;
    }
    .cell-info {
      color: $line-deep;
      width: 70%;
    }
    .cell-icon {
      .right-text {
        min-width: 30px;
      }
      @include flex-row(flex-end);
      color: $line-deep;
      min-width: 10%;
    }
  }
</style>