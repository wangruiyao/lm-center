<template>
  <div class="commission-change lm-container" >
    <lm-header :title="`变更佣金账户`">
      <div class="header-right" slot="right">
        <!--<span class="icon iconfont">&#xe6d2;</span>-->
      </div>
    </lm-header>
    <div class="account-info-top">
      <!--支付宝-->
      <div class="account-info-zfb" v-show="awardType==='AT00'">
        <span class="icon iconfont zfb-icon">&#xe625;</span>
        <input placeholder="请输入支付宝账号" type="text" v-model="alipay"/>
      </div>

      <!-- 微信 -->
      <div class="account-info-wx" v-show="awardType==='AT01'">
        <span class="icon iconfont wx-icon">&#xe63a;</span>
        <div class="wx-account">
          <div class="wx-account-avatar">
            <img :src="wechatInfo.headimgurl">
          </div>
          <span class="wx-account-name">{{wechatInfo.nickname}}</span>
        </div>
      </div>
    </div>

    <div class="change-button" @click="bandAliPayAccount">确认绑定</div>
  </div>
</template>

<script>
  import {getUrlParams} from 'utils/basicMethods';
  import {getwechatbyopenid, bandalipayaccount} from 'api/commission';
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  export default {
    name: "CommissionChange",
    components: {LmHeader},
    data() {
      return {
        awardType: 'AT00',
        wechatInfo: {},
        alipay: '', // 支付宝id
        openid: ''  // opneid
      }
    },
    mounted() {
      this.awardType = this.$route.params.awardType;
      if(this.awardType === 'AT01') {
        this.openid = getUrlParams('openid');
        this.getWechatByOpenId(this.openid)
      }
    },
    methods: {
      getWechatByOpenId(openid){  // 根据openid获取当前微信用户信息
        getwechatbyopenid({
          openid
        }).then(rsp=> {
          this.wechatInfo = rsp.data;
        }).catch(err => {
          // this.wechatInfo = err;
        })
      },
      bandAliPayAccount() {
        /*
        awardtype	AT00：支付宝；AT01：微信	STRING	必填
        awardaccount	佣金账户，alipay或者openid	STRING	必填
        */
        const queryParams = {
          awardtype: this.awardType,
          awardaccount: this.awardType ==='AT00'?this.alipay:this.awardType ==='AT01'?this.openid:''
        };
        if(queryParams.awardaccount === '') {
          Toast('请输入绑定账号')
        } else {
          Message('确定提交绑定佣金账户？').then(action => {
            bandalipayaccount(queryParams).then(rsp => {
              this.$store.dispatch('commission/getUserAwardAccount');
              Toast('绑定成功!').then(() => {
                goback();
              })
            })
          })
        }

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