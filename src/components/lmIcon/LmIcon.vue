<template>
  <span class="lm-icon icon iconfont" :class="iconClass" @click="handleClick"></span>
</template>

<script>
  export default {
    name: "LmIcon",
    props: {
      'iconClass': {
        type: String,
        default: 'icon-login'
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
  .lm-icon {
    @include input-icon(0 10px 0 0);
  }
</style>