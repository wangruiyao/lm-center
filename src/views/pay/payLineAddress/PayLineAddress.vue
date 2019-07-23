<template>
  <div id="pay-line-address" class="lm-container-blank">
    <lm-popup :title="`支付链接`" :popup-visible="showPop" @closePop="closePop" @confirm="confirm">
      <div class="pop-container" slot="pop">
        <div class="qrCode"></div>
        <p>www.https://mcunondlin.pay.231=12311231123112311231123112311231</p>
        <div class="copy-button">复制支付链接</div>
      </div>
    </lm-popup>
  </div>
</template>

<script>
  const LmPopup = resolve => require(['components/lmPopup/LmPopup'], resolve);
  export default {
    name: "PayLineAddress",
    components: {LmPopup},
    data() {
      return {
        showPop: true
      }
    },
    methods: {
      closePop() {
        this.showPop = false;
        setTimeout(() => {
          goback();
        },300)
      },
      confirm() {
        goforward('payLoading')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-line-address {
    background: rgba(0,0,0,.3);
    z-index: 1000;

    .pop-container {
      min-height: 400px;
      @include flex-column(center);
      padding: 20px 0;
      .qrCode {
        width: 150px;
        height: 150px;
        background: #5475E5;
      }
      >p {
        width: 300px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #000;
        font-size: 14px;
        display: inline-block;
        margin-top: 20px;
      }
      .copy-button {
        width:161px;
        height:35px;
        background:linear-gradient(270deg,rgba(64,233,245,1),rgba(102,133,251,1),rgba(116,96,253,1),rgba(124,74,255,1));
        border-radius:5px;
        color: #fff;
        @include flex-column(center);
        font-size: 14px;
        margin-top: 20px;
      }
    }


  }
</style>