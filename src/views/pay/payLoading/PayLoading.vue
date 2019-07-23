<template>
  <div id="pay-loading" class="lm-container-blank">
    <div class="tips">
      <div class="loading-icon">
        <span class="icon iconfont">&#xe6f2;</span>
      </div>
      <span>等待支付结果通知</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PayLoading",
    mounted() {
      const _this = this;
      setTimeout(()=> {
        _this.go('payResult')
      }, 1000)
    },
    methods: {
      go(path) {
        goforward(path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-loading {
    z-index: 2000;
    background: rgba(0,0,0,.3);
    @include flex-column(center);
    .tips {
      width:307px;
      height:177px;
      background:#fff;
      border-radius:20px;
      @include flex-column(center);
      >span {
        color: #000;
        font-size: 14px;
      }

      .loading-icon {
        @include blue-icon();
        span {
          font-size: 40px;
        }
        -webkit-transition-property: -webkit-transform;
        -webkit-transition-duration: 1s;
        -moz-transition-property: -moz-transform;
        -moz-transition-duration: 1s;
        -webkit-animation: rotate 3s linear infinite;
        -moz-animation: rotate 3s linear infinite;
        -o-animation: rotate 3s linear infinite;
        animation: rotate 3s linear infinite;}
        @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
          to{-webkit-transform: rotate(360deg)}
        }
        @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
          to{-moz-transform: rotate(359deg)}
        }
        @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
          to{-o-transform: rotate(359deg)}
        }
        @keyframes rotate{from{transform: rotate(0deg)}
          to{transform: rotate(359deg)}
        }
      }




  }
</style>