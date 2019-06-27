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
      this.getVipInfo();
      this.showSubPath();
    },
    methods: {
      go(path) {
        this.actTab = path;
        goforward(path)
      },
      showSubPath() {
        if(this.$route.query.subPath === undefined) {
          goforward('vipCenter')
        } else {
          goforward(this.$route.query.subPath)
        }
      },
      getVipInfo() {
        this.$store.dispatch('vip/vipInfo').then( data => {
          if(data.code === '0') {
            if(data.subcode === '10000') {

            } else {
              Message(`${data.submsg},错误代码：${data.subcode}`)
            }
          } else {
            Message(`${data.msg}, 错误代码：${data.code}`)
          }
        }).catch( data => {
          Message('调用获取用户Vip信息失败：' + JSON.stringify(data));
        })
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
    z-index: 999;

    span {
      width: 33.3%;
      text-align: center;
    }
  }
</style>