<template>
  <div class="lm-badge" :style="{background: color}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LmBadge",
    props: {
      color: {
        type: String,
        default: '#FF2B5B'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lm-badge {
    font-size: 10px;
    width: 15px;
    height: 15px;
    color: #fff;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    @include flex-column(center);
    position: absolute;
    top: 1px;
    right: 1px;
  }
</style>