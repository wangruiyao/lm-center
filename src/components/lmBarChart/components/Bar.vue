<template>
  <div id="bar-item" :style="{height: showHeight+ '%', background: barColor}"></div>
</template>

<script>
  export default {
    name: "Bar",
    props: {
      height: {
        type: Number,
        default: 0
      },
      barColor: {
        type: String,
        default: '#fff'
      }
    },
    data() {
      return {
        showHeight: 0
      }
    },
    mounted() {
      this.run()
    },
    methods: {
      run() {
        const _this = this;
        this.showHeight += 3;
        if(this.showHeight < this.height) {
          window.requestAnimationFrame(function(){_this.run()});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #bar-item {
    width: 5px;
  }
</style>