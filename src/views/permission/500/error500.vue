<template>
  <div id="error-500" class="lm-container-blank">
    <img :src="require('assets/images/permission/500.png')"/>
    <div class="tips">
      <div>系统内部错误！</div>
      <div @click="goHome()">访问首页</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "error500",
    methods: {
      goHome() {
        goforward('shopCenter');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #error-500 {
    @include flex-column(center);
    background: $bgd-color;
    >img {
      width: 50%;
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