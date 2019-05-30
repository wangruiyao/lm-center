<template>
  <div id="vipHome" class="lm-container-blank">
    <router-view />
    <div class="vip-home-tab">
      <span @click="go('depositCenter')" :class="actTab === 'depositCenter' ? 'act' : ''">保证金</span>
      <span @click="go('rightsCenter')" :class="actTab === 'rightsCenter' ? 'act' : ''">权益</span>
      <span @click="go('vipCenter')" :class="actTab === 'vipCenter' ? 'act' : ''">VIP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VipHome",
    data() {
      return {
         actTab: ''
      }
    },
    mounted() {
      this.actTab = this.$route.name;
    },
    methods: {
      go(path) {
        this.actTab = path;
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: #000;
  }
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