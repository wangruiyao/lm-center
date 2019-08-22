<template>
  <div id="shop-center-button-list">
    <div class="button-item" v-for="i in iconList" @click="go('shopCenterGoodsList')">
      <img :src="i.icon">
      <span>{{i.title}}</span>
    </div>
  </div>
</template>

<script>
  import {indexgoodstype} from 'api/shop'
  export default {
    name: "ShopCenterButtonList",
    data() {
      return {
        icon: require('assets/images/shop/shop-icon.png'),
        iconList: []
      }
    },
    mounted() {
      this.getGoodsType();
    },
    methods: {
      getGoodsType() {
        indexgoodstype().then(data => {
          this.iconList = data;
        })
      },
      go(path) {
        this.$emit('go', path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-button-list {
    padding: 15px;
    .button-item {
      @include flex-column(center);
      position: relative;
      >img {
        width: 100%;
      }
      >span {
        position: absolute;
        bottom: -2px;
        line-height: 12px;
      }
    }
    display: grid;
    grid-template-columns: repeat(5, 49px);
    grid-template-rows: repeat(2, 62px);
    grid-row-gap: 10px;
    grid-column-gap: 25px;
  }
</style>