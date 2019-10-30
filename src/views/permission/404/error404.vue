<template>
  <div id="permission-404" class="lm-container-blank">
    <img :src="require('assets/images/permission/404.png')"/>
    <div class="tips">
      <div>你访问页面已不存在！</div>
      <div @click="goHome()">访问首页</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "error404",
    methods: {
      goHome() {
        goforward('shopCenter');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #permission-404 {
    @include flex-column(center);
    background: $bgd-color;
    >img {
      width: 320px;
    }
    .tips{
      @include flex-column(center);
      margin-top: 10px;
      >div{
        font-size: 18px;
        color: #413CA9;
      }
    }

  }
</style>