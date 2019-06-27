<template>
  <div id="lm-border-bar">
    <div v-for="(item, idx) in Array.from({length:70}, (v,k) => k)" :style="{background: colorList[idx%4]}"></div>
  </div>
</template>

<script>
  export default {
    name: "LmBorderBar",
    data() {
      return {
        colorList: ['#fff', '#ea2d59','#fff', '#66aedc']
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-border-bar {
    padding: 0 3px;
    width: 375px;
    height: 7px;
    background: #66aedc;
    @include flex-row(baseline);
    overflow: hidden;
    >div {
      flex-shrink: 0;
      height: 100%;
      width: 6px;
      background: red;
      transform: skewX(-40deg);
    }
  }
</style>