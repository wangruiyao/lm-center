<template>
  <div id="vip-header">
    <div class="header-top">
      <div class="header-icon" @click="back()">
        <span class="lm-icon icon iconfont">&#xe612;</span>
      </div>
      <div class="header-container">
        <div class="header-img">
          <img src="../../../../assets/images/default-avatar.png" />
        </div>
        <div class="header-vip-logo">
          <img src="../../../../assets/images/vip/vip-icon-1.png">
        </div>
        <div class="vip-grade">vip1</div>
      </div>
      <div class="header-icon">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </div>
    <div class="header-bottom">
      <div>
        <span>1</span>
        <span>连萌积分</span>
      </div>
      <div>
        <span>1</span>
        <span>我的保证金</span>
      </div>
      <div>
        <span class="lm-icon icon iconfont bottom-icon">&#xeb94;</span>
        <span>已领权益</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VipCenterHeader",
    methods: {
      back() {
        goback();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #vip-header {
    z-index: 777;
    width: 100%;
    height: $header-height-2;
    background-image: url("../../../../assets/images/vip/vip-header.png");
    background-size: 100%;
    @include flex-column(baseline);
    position: fixed;
    color: #fff;

    >div {
      @include flex-row();
      width: 100%;
    }

    .header-top {
      margin-top: 10px;
      font-size: 16px;
      @include flex-row(space-between, start);
      .header-icon {
        >span {
          font-size: 18px;
        }
        width: 40px;
        text-align: center;
      }
      .header-container {
        @include flex-column();
        img {
          width: 100%;
        }
        .header-img {
          border: solid #fff 1px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          overflow: hidden;
        }
        .header-vip-logo {
          width: 55px;
          height: 24px;
        }
        .vip-grade {
          font-size: 12px;
          width: 55px;
          background: #3f77b1;
          text-align: center;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 3px;
          line-height: 14px !important;
          @include flex-row(center)
        }
      }
    }
    .header-bottom {
      padding: 10px 10px 0;
      font-size: 12px;
      @include flex-row(space-around);
      >div {
        @include flex-column()
      }

      .bottom-icon {
        font-size: 14px;
      }
    }
  }

</style>