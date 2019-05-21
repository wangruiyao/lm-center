<template>
  <div id="swiper">
    <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in goodsPicture">
          <img :src="item.url"/>
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
    }
  }
</script>

<style lang="scss" scoped>
  #swiper {
    overflow: hidden;
    background: rgba(0,0,0,.6);
    height: 375px;
    width: 375px;
    img {
      width: 375px;
    }
  }
</style>