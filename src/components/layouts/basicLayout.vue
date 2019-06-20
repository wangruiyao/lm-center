<template>
  <div id="basicLayout">
    <div @click="back">返回</div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  #basicLayout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $bgd-color;
    z-index: 999;
  }
</style>

<script>
export default {
  name: 'BasicLayout',
  methods: {
    back() {
      goback()
    }
  }
}
</script>
