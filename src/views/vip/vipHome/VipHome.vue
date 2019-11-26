<template>
  <div id="vipHome" class="lm-container-blank">
    <router-view />
    <div class="vip-home-tab">
      <span @click="go('depositCenter')" :class="actTab === 'depositCenter' ? 'act' : ''">保证金</span>
      <span @click="go('rightsCenter')" :class="actTab === 'rightsCenter' ? 'act' : ''">VIP</span>
      <span @click="go('vipCenter')" :class="actTab === 'vipCenter' ? 'act' : ''">权益</span>
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
      this.showSubPath();
    },
    methods: {
      go(path) {
        this.actTab = path;
        goforward(path)
      },
      showSubPath() {
        if(this.$route.query.subPath === undefined) {
          goforward('vipCenter');
          this.actTab = this.$route.name;
        } else {
          goforward(this.$route.query.subPath);
          this.actTab = this.$route.name;

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: $blue-color-link;
    font-weight: 800;
  }
  .vip-home-tab {
    @include flex-row();
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 48px;
    color: #666;
    background: #fff;
    border-top: solid $line-deep 1px;
    z-index: 999;

    span {
      width: 33.3%;
      text-align: center;
    }
  }
</style>