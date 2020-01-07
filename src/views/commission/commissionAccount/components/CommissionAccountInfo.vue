<template>
  <div class="account-info">
    <div class="account-info-top">
      <span>当前账户</span>
      <!--支付宝-->
      <div class="account-info-zfb" v-show="userawardaccount.accounttype==='AT00'">
        <span class="icon iconfont zfb-icon">&#xe625;</span>
        <span class="zfb-account">{{userawardaccount.accountno}}</span>
      </div>

      <!-- 微信 -->
      <div class="account-info-wx" v-show="userawardaccount.accounttype==='AT01'">
        <span class="icon iconfont wx-icon">&#xe63a;</span>
        <div class="wx-account">
          <div class="wx-account-avatar">
            <img :src="wechatInfo.headimgurl">
          </div>
          <span class="wx-account-name">{{wechatInfo.nickname}}</span>
        </div>
      </div>
    </div>

    <div class="change-button" @click="changeCommissionAccount">变更佣金账户</div>
  </div>
</template>

<script>
  import {getuserawardaccount, getwechatbyopenid} from 'api/commission'
  export default {
    name: "CommissionAccountInfo",
    data() {
      return {
        // userawardaccount: {},
        wechatInfo: {}
      }
    },
    mounted() {
      // this.getUserAwardAccount()
    },
    computed: {
      userawardaccount() {
        const awardAccount = this.$store.state.commission.userAwardAccount;
        if(awardAccount.accounttype === 'AT01') {
          this.getWechatByOpenId(awardAccount.accountno)
        }
        return awardAccount;
      }

    },
    methods: {
      go(path) {
        goforward(path)
      },

      // getUserAwardAccount() { // 获取登录用户佣金账户
      //   getuserawardaccount().then(rsp=> {
      //     console.log('用户账户信息', rsp.data);
      //     this.userawardaccount = rsp.data;
      //     if(rsp.data.accounttype === 'AT01') {
      //       this.getWechatByOpenId(rsp.data.accountno)
      //     }
      //   })
      // },
      getWechatByOpenId(openid){  // 根据openid获取当前微信用户信息
        getwechatbyopenid({
          openid
        }).then(rsp=> {
          this.wechatInfo = rsp.data;
        })
      },
      changeCommissionAccount() {
        this.$emit('changeAccount')
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