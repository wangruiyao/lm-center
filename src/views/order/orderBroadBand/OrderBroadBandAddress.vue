<template>
  <div id="order-broad-band-address">
    <div class="back-button" @click="goBack"></div>
    <iframe frameborder="0" src="http://kdcx.enms.cn/externallogic/kdcx/index.html#/broadbandAddress"></iframe>
  </div>
</template>

<script>
  export default {
    name: "OrderBroadBandAddress",
    data() {
      return {
        broadBandAddress: ''
      }
    },
    mounted() {
      this.getCopyInfo();

    },
    methods: {
      getCopyInfo() {
        const _this = this;
        window.addEventListener('message', function(e) {
          if(e.data.type==="kdcx"){
            _this.broadBandAddress = e.data.value;
            _this.$emit('getBroadBandAddress', e.data.value)
          }
        }, false);
      },
      goBack() {
        goback();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-broad-band-address {
    top: 0;
    bottom: 0;
    width: 375px;
    position: fixed;
    z-index: 2222;
    background: #fff;
    .back-button{
      position: fixed;
      width: 30px;
      height: 40px;
      left: 0;
      top: 0;
    }
  >iframe {
      width: 375px;
      height: 100%;
    }
  }
</style>