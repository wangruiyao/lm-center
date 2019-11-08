<template>
  <div id="comming-soon" class="lm-container-blank">
    <div @click="returnLastPage" class="comming-soon-back">
      <span class="icon iconfont">&#xe612;</span>
    </div>
     <img :src="require('assets/images/permission/comming-soon.png')"/>
    <div class="comming-text">
      <p>页面正在开发中...</p>
      <p>敬请期待</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommingSoon",
    methods: {
      returnLastPage() {
        goback();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #comming-soon {
    background: #fff;
    @include flex-column(center);
    .comming-soon-back {
      position: absolute;
      top: 15px;
      left: 15px;
      background: rgba(0,0,0,.5);
      color: #fff;
      width: 25px;
      height: 25px;
      @include flex-column(center);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
    > img {
      width: 300px;
    }
    .comming-text {
      color: #ADADAD;
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
    }
  }
</style>