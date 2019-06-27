<template>
  <div id="order-ad">
    <div class="ad-close-btn">
      <slot name="close-btn"></slot>
    </div>

    <img :src="adImg">
  </div>
</template>

<script>
  export default {
    name: "OrderAd",
    data() {
      return {
        adImg: require('assets/images/vip/deposit-vip1.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-ad {
    @include flex-column(center, flex-end);
    position: relative;
    width: 354px;
    border-radius: 4px;
    box-shadow:0 3px 2px rgba(0,0,0,.1);
    margin-bottom: 15px;
    overflow: hidden;

    >img  {
      width: 100%;
    }

    .ad-close-btn {
      @include flex-column(center);
      position: absolute;
      right: 10px;
      padding: 2px 4px 0;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: rgba(0,0,0,.5);
    }
  }

</style>