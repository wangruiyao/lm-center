<!-- 招募页 -->
<template>
  <div id="enlist" class="lm-container-blank" @click="goUserRegister">
    <lm-scroll ref="wrapper" :bounce="false">
      <img src="../../../assets/images/zhaomu.png">
      <!--<div class="enlist-add-btn" @click="goUserRegister"></div>-->
    </lm-scroll>

  </div>
</template>

<script>
  import LmScroll from "../../../components/lmScroll/LmScroll";
  export default {
    name: "Enlist",
    components: {LmScroll},
    methods: {
      goUserRegister() {
        goforward('userRegister', {developer: this.$route.params.developer})
      }
    }
  }
</script>

<style lang="scss" scoped>
  #enlist {
    margin-top: -10px;
    img {
      width: 100%;
    }
    .enlist-add-btn {
      position: absolute;
      width: 260px;
      height: 50px;
      bottom: 143px;
      left: 50%;
      margin-left: -130px;
    }
  }
</style>