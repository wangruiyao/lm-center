<template>
  <div id="goods-detail-more-tools" @click="close">
    <transition enter-active-class="slideInDown"
                leave-active-class="slideOutUp">
      <div class="tool-list" v-show="isShowTools">123</div>
    </transition>

  </div>
</template>

<script>
  export default {
    name: "GoodsDetailMoreTools",
    data() {
      return {
        isShowTools: false
      }
    },
    props: {
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isVisible(newStatus) {
        this.isShowTools = newStatus;
      }
    },
    methods: {
      close() {
        this.isShowTools = false;
        setTimeout(() => {
          this.$emit('close', false);
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-detail-more-tools {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    z-index: 1000;
    background: rgba(0,0,0,0);

    .tool-list {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      color: #fff;
      width: 375px;
      height: 200px;
      background: rgba(0,0,0,.7);
    }
  }

</style>