<template>
  <div id="shop-center-header">
    <img :src="logo">
    <div class="header-search">
      <span class="lm-icon icon iconfont">&#xe68d;</span>
      <input v-model="keywords" placeholder="关键字查询"
             @keypress="mobileSearch"
             @keyup.enter="pcSearch"/>
    </div>
    <span class="lm-icon icon iconfont">&#xe706;</span>
  </div>
</template>

<script>
  import {topsearchcollect} from 'api/shop.js'
  export default {
    name: "ShopCenterHeader",
    data() {
      return {
        logo: require('assets/images/logo.png'),
        keywords: ''
      }
    },
    methods: {
      pcSearch() {
        if (!(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))) { //PC端触发搜索
          this.search()
        }
      },
      mobileSearch() {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端触发搜索
          if(event.keyCode === 13) {
            this.search()
          }
        }
      },
      search() {
        const reqParams = {
          keywords: this.keywords
        };
        const query = JSON.stringify({
          query: this.keywords
        });
        topsearchcollect(reqParams).then(data => {
          goforward('shopCenterGoodsList', {
            query
          });
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-header {
    z-index: 100;
    position: fixed;
    width: 375px;
    padding: 0 10px;
    top: 0;
    height: $header-height;
    @include flex-row();
    >img {
      width:34px;
    }
    >span {
      color: #fff;
      font-size: 26px;
    }
    .header-search {
      @include flex-row();
      padding: 10px;
      width:270px;
      height:32px;
      background: #fff;
      border-radius:16px;
      >span {
        color: $color-light;
        margin-right: 10px;
      }
      >input {
        font-size: 14px;
        color: $color-light;
        flex-grow: 1;
      }
    }
  }
</style>