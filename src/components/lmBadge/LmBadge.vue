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
    font-weight: 100;
    width: 20px;
    height: 20px;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    @include flex-column(center);
    position: absolute;
    top: 1px;
    right: 1px;
  }
</style>