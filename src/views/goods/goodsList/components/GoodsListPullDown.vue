<template>
  <div id="pull-down-container" :style="{height: height + `px`}">
    {{this.tip}}
  </div>
</template>

<script>
  export default {
    name: "GoodsListPullDown",
    props: {
      height: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        tip: '下拉刷新'
      }
    },
    watch: {
      height(val) {
        console.log(val);
        if(val >= 40) {
          this.tip = '松开刷新'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pull-down-container {
    background: #000;
    color: #fff;
    text-align: center;
  }
</style>