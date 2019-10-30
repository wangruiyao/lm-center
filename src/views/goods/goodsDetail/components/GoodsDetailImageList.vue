<template>
  <div class="goods-main-image-list" @click="handleMainImgListVisible">

    <div class="image-item-box">
      <mt-swipe :auto="0" :prevent="true" :defaultIndex="defaultIndex">
        <mt-swipe-item v-for="img in mainImg">
          <img class="image-item" :src="img.url"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="close-image-list">
      <span class="icon iconfont">&#xe633;</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsDetailImageList",
    data() {
      return {
        mainImgList: []
      }
    },
    props: {
      defaultIndex: {
        type: Number,
        default: 0
      },
      mainImg: {
        type: Array,
        default: []
      }
    },
    methods: {
      handleMainImgListVisible() {
        this.$emit('handleMainImgListVisible', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-main-image-list {
    position: fixed;
    top: 0;
    background: #000;
    color: #fff;
    bottom: 0;
    width: 375px;
    z-index: 2000;
    @include flex-column(center);
    .image-item-box {
      width: 375px;
      height: 375px;
      .image-item {
        width: 375px;
        height: 375px;
      }
    }
    .close-image-list {
      position: fixed;
      z-index: 2000;
      top: 15px;
      left: 15px;
      background: rgba(255,255,255,.3);
      width: 30px;
      height: 30px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      @include flex-column(center);
    }
  }
</style>