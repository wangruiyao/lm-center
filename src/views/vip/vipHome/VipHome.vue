<template>
  <div id="vipHome" class="lm-container-blank">
    <router-view />
    <div class="vip-home-tab">
      <span @click="go('depositCenter')">保证金</span>
      <span @click="go('rightsCenter')">权益</span>
      <span @click="go('vipCenter')">VIP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VipHome",
    methods: {
      go(path) {
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vip-home-tab {
    @include flex-row();
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    color: #666;
    background: #fff;
    border-top: solid $line-deep 1px;

    span {
      width: 33.3%;
      text-align: center;
    }
  }
</style>