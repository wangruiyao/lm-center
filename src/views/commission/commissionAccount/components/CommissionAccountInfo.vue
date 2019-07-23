<template>
  <div class="account-info">
    <div class="account-info-top">
      <span>当前账户</span>

      <!--支付宝-->
      <div class="account-info-zfb" v-show="false">
        <span class="icon iconfont zfb-icon">&#xe625;</span>
        <span class="zfb-account">151****1360</span>
      </div>

      <!-- 微信 -->
      <div class="account-info-wx">
        <span class="icon iconfont wx-icon">&#xe63a;</span>
        <div class="wx-account">
          <div class="wx-account-avatar">
            <img :src="require('assets/images/avatar.jpg')">
          </div>
          <span class="wx-account-name">小葱豆腐</span>
        </div>
      </div>
    </div>

    <div class="change-button" @click="go('commissionChange')">变更佣金账户</div>
  </div>
</template>

<script>
  export default {
    name: "CommissionAccountInfo",
    methods: {
      go(path) {
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .account-info {
    padding-top: 20px;
    position: relative;
    width: 375px;
    @include flex-column();
    .account-info-top {
      @include flex-column();
      >span {
        font-size: 18px;
      }
      >div {
        @include flex-column();
        >.icon {
          font-size: 77px;
        }
      }

      .account-info-zfb {
        .zfb-account {
          font-size: 18px;
        }
      }

      .account-info-wx {
        .wx-account {
          @include flex-row();
          .wx-account-avatar {
            width: 58px;
            height: 58px;
            overflow: hidden;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
          .wx-account-name {
            font-size: 18px;
          }
        }
      }

    }

    .change-button {
      position: fixed;
      bottom: 188px;
      @include flex-column(center);
      width:340px;
      height:40px;
      background:linear-gradient(-25deg,rgba(71,201,255,0.95),rgba(8,82,249,0.95));
      border-radius:4px;
      color: #fff;
      font-size: 14px;
    }
  }
</style>