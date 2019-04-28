<!-- 招募页 -->
<template>
  <div id="enlist">
    <img src="../../../assets/images/zhaomu.png">
    <div class="enlist-add-btn" @click="goUserRegister"></div>
  </div>
</template>

<script>
  export default {
    name: "Enlist",
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