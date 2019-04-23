<template>
  <div id="blank-layout">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  #blank-layout {
    background: #ffffff;
    min-height: 667px;
  }
</style>

<script>
export default {
  name: 'BlankLayout',
}
</script>
