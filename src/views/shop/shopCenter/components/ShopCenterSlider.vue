<template>
  <div id="shop-center-slide">
    <nut-swiper
            direction="horizontal"
            ref="swipper"
            :canDragging="false"
            :paginationClickable="true"
            :paginationVisible="true">
      <div @click="linkTo(item)"  v-for="(item,index) in bannerList" :key="index"  class="nut-swiper-slide">
        <img :src="item.piclocation">
      </div>

    </nut-swiper>
  </div>
</template>

<script>
  import {linkto} from 'api/common'
  import {viewbanner} from 'api/shop'
  export default {
    name: "ShopCenterSlider",
    data() {
      return {
        bannerList: []
      }
    },
    mounted() {
      this.getViewBanner();
    },
    methods: {
      getViewBanner() { // 获取首页轮播图数据
        const _this = this;
        viewbanner().then(data => {
          console.log('首页轮播图', data)
          _this.bannerList = data.data;
          _this.$refs.swipper.updateEvent(1)
        })
      },
      linkTo(item) {
        linkto(item.urllocation, item.params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-slide {
    position: relative;
    background: $bgd-color;
    width: 375px;
    height: 107px;
    /*overflow: hidden;*/
    img {
      width: 375px;
    }
  }
  #shop-center-slide::after {
    content: '1';
    display: block;
    width: 130%;
    height: 25px;
    position: absolute;
    left: -15%;
    bottom: -18px;
    z-index: 999;
    border-radius: 50% 50% 0 0 ;
    background: $bgd-color;
  }
</style>