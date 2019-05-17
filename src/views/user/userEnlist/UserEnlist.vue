<!-- 招募页 -->
<template>
  <div id="enlist" class="lm-container-blank">
    <lm-scroll ref="wrapper"
               :pullup="true">
      <img src="../../../assets/images/zhaomu.png">
      <div class="enlist-add-btn" @click="goUserRegister"></div>
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
        this.$router.push('register')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #enlist {
    position: relative;
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