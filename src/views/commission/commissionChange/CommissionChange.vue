<template>
  <div class="commission-change lm-container" >
    <lm-header :title="`变更佣金账户`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe6d2;</span>
      </div>
    </lm-header>
    <div class="account-info-top">

      <!--支付宝-->
      <div class="account-info-zfb" v-show="false">
        <span class="icon iconfont zfb-icon">&#xe625;</span>
        <input placeholder="请输入支付宝账号" type="text" />
      </div>

      <!-- 微信 -->
      <div class="account-info-wx" >
        <span class="icon iconfont wx-icon">&#xe63a;</span>
        <div class="wx-account">
          <div class="wx-account-avatar">
            <img :src="require('assets/images/avatar.jpg')">
          </div>
          <span class="wx-account-name">小葱豆腐</span>
        </div>
      </div>
    </div>

    <div class="change-button">确认绑定</div>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  export default {
    name: "CommissionChange",
    components: {LmHeader},
    methods: {
      go(path) {
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .commission-change {
    background: $bgd-color;
    z-index: 1000;
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
        margin-top: 20px;
        >input {
          width:290px;
          height:40px;
          background:rgba(255,255,255,1);
          border-radius:10px;
          padding: 20px;
        }
      }

      .account-info-wx {
        margin-top: 20px;
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