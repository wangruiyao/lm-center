<template>
  <div id="swiper">
    <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item, idx) in goodsPicture" :key="idx">
          <img @click="handleMainImgListVisible(idx)" :src="item.url"/>
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailSwiper",
    props: {
      goodsPicture: {
        type: Array
      }
    },
    methods: {
      handleMainImgListVisible(idx) {
        this.$emit('handleMainImgListVisible', idx)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #swiper {
    overflow: hidden;
    background: #fff;
    height: 375px;
    width: 375px;
    img {
      width: 375px;
      height: 375px;
    }
  }
</style>