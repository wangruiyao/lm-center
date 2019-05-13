<!--title: 标题, info: 信息, disable：不可点击 -->

<template>
  <div id="lm-cell">
    <div class="cell-title">
      {{title}}
    </div>
    <div class="cell-info" v-if="cellType === 'info'">
      <slot name="cellInfo"></slot>
      <slot name="cellInput"></slot>

    </div>
    <div class="cell-icon" @click="handleClick">
      <span class="lm-icon icon iconfont" v-if="!disable">&#xe66c;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LmCell",
    props: {
      cellType: {
        type: String,
        default: 'info'
      },
      title: {
        type: String
      },
      disable: {
        type: Boolean
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
  #lm-cell{
    min-height: $cell-height;
    @include flex-row();
    padding: 0 20px;
    text-align: right;
    background: #fff;
    border-bottom: solid $line-light 1px;
    div {
      display: inline-block;
    }
    .cell-title {
      width: 20%;
      text-align: left;
    }
    .cell-info {
      color: $line-deep;
      width: 70%;
    }
    .cell-icon {
      color: $line-deep;
      width: 10%;
    }
  }
</style>