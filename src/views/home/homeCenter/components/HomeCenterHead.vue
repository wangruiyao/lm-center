<template>
  <div id="center-header">
    <!--<div class="img-contain">-->
      <!--<img src="../../../../assets/images/center/center-head.png">-->
    <!--</div>-->
      <div class="head-child head-info" @click="go('mineAccount')">
        <div class="head-info-left">
          <div class="avatar">
            <img :src="userInfo.avatar">
          </div>

          <div class="user-info">
            <span class="username">{{userInfo.name === '' ? '未设置' : userInfo.name}}</span>
            <div class="user-type">
              <span class="lm-icon icon iconfont">&#xe61d;</span>
              <span>{{userInfo.vipdesc}}</span>
              <span>{{userInfo.usertypedesc}}</span>
            </div>
          </div>
        </div>
        <div class="head-info-right">
          <!--消息提示按钮-->
          <span class="lm-icon icon iconfont" @click.stop="showNotice">&#xe63b;</span>
          <!--二维码-->
          <span class="lm-icon icon iconfont" @click.stop="showQRCode">&#xe678;</span>
          <!--设置-->
          <span class="lm-icon icon iconfont">&#xe6fe;</span>
        </div>
      </div>
      <div class="head-child head-btn">
        <div class="head-btn-item" @click="go('partnerCenter')">
          <span>12</span>
          <span>合伙人</span>
        </div>
        <div class="head-btn-item">
          <span>12</span>
          <span>可提现</span>
        </div>
        <div class="head-btn-item">
          <span>12</span>
          <span>预约单</span>
        </div>
        <div class="head-btn-item">
          <span>12</span>
          <span>已领卡券</span>
        </div>
      </div>
      <div class="head-child head-vip" @click="goVipHome()">
        <div class="vip-1">
          <img src="../../../../assets/images/center/sy_imgtu_10.png">
          <span>积分412</span>
        </div>
        <div class="vip-2">
          <span>缴纳保证金获得VIP权益</span>
          <span>查看我的保证金及权益</span>
        </div>
        <div class="vip-3">
          <img src="../../../../assets/images/center/sy_imgtu_07.png">
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCenterHead",
    data() {
      return {}
    },
    computed: {
      userInfo() {
        return this.$store.state.users.userInfo
      }
    },
    methods: {
      go(path) {
        goforward(path)
      },
      goVipHome() {
        goforward('vipHome', {subPath: 'rightsCenter'})
      },
      showNotice() {  // 消息通知
        Message.confirm('暂无消息通知！')
      },
      showQRCode() {  // 二维码
        goforward('commingSoon');
      }
    }
  }
</script>

<style lang="scss" scoped>
  $child-width: 355px;
  #center-header {
    @include flex-column(baseline);
    position: relative;
    color: #fff;
    margin-top: -10px;
    height: 170px;
    .img-contain {
      img {
        width: 100%;
      }
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    .head-child {
      width: $child-width;
    }
    .head-info {
      @include flex-row(space-between, flex-start);
      /*>div {*/
        /*width: 50%;*/
      /*}*/
      .head-info-left {
        @include flex-row();
        padding-top: 20px;
        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #fff;
          overflow: hidden;
          border: solid #fff 1px;
          img {
            width: 100%;
          }
        }
        .user-info {
          width: 130px;
          padding-left: 15px;
          .username {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
            line-height: 20px;
            margin: 0;
          }
          .user-type {
            @include flex-row(space-around);
            height: 24px;
            line-height: 24px;
            border-radius: 22px;
            background: rgba(0,0,0,0.4);
            padding: 0 5px;
            margin-top: 8px;
            text-align: center;
            .lm-icon {
              font-size: 12px;
              color: #ffea00;
              padding: 0 2px;
            }
          }
        }
      }
      .head-info-right {
        margin: 10px;
        padding: 0 2px;
        @include flex-row();
        width: 120px;
        span {
          font-size: 22px;
        }
      }
    }
    .head-btn {
      @include flex-row(space-around);
      margin-top: 10px;
      div {
        @include flex-column();
      }
    }
    .head-vip {
      @include flex-row();
      position: absolute;
      background: #fff;
      color: #666;
      height: 70px;
      padding: 10px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      bottom: -30px;
      .vip-1 {
        @include flex-column(space-between);
        padding-bottom: 3px;
        border-right: solid $line-light 1px;
        img {
          width: 70%;
        }
      }
      .vip-2 {
        width: 50%;
        height: 100%;
        @include flex-column(space-around);
        span {
          width: 100%;
          padding-left: 20px;
        }
      }
      .vip-3 {
        @include flex-column(space-between, flex-end);
        img {
          width: 86%;
        }
      }
      .vip-1, .vip-3 {

        height: 100%;

        width: 25%;
      }
    }
  }
</style>