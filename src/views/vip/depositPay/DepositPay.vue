<template>
  <div id="deposit-pay" class="lm-container">
    <lm-header :title="`缴纳保证金`" :back-params="backParams">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <deposit-pay-next-gold v-for="item in showList" :info="item"></deposit-pay-next-gold>

    <div class="deposit-pay-bottom">
      <div class="left">
        <img :src="img.bottom">
      </div>
      <div class="right">
        <div class="desc">
          <span>1、建立自己的营销团队</span>
          <span>2、管理团员的</span>
        </div>
        <div class="btn">成为团长</div>
      </div>
    </div>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const DepositPayNextGold = resolve => require(['./components/DepositPayNextGold'], resolve);
  export default {
    name: "depositPay",
    components: {DepositPayNextGold, LmHeader},
    data() {
      return {
        backParams: {
          subPath: 'depositCenter'
        },
        img: {
          bottom: require('../../../assets/images/center/bzj_img_13.png')
        },
        vip: this.$store.state.vip.vipInfo.vip,
        depositList: [
          {
            vip: '1',
            pay: '99',
            imgurl: require('../../../assets/images/vip/deposit-vip1.png')
          },
          {
            vip: '2',
            pay: '199',
            imgurl: require('../../../assets/images/vip/deposit-vip2.png')
          },{
            vip: '3',
            pay: '299',
            imgurl: require('../../../assets/images/vip/deposit-vip3.png')
          },{
            vip: '4',
            pay: '599',
            imgurl: require('../../../assets/images/vip/deposit-vip4.png')
          },
        ],
        showList: []
      }
    },
    mounted() {
      this.getShowList()
    },
    methods: {
      getShowList() {
        const _this = this;
        this.depositList.map(item => {
          if(parseInt(item.vip) > parseInt(_this.vip)) {
            _this.showList.push(item)
          }
          // if(parseInt(item.vip) > 0) {
          //   _this.showList.push(item)
          // }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #deposit-pay {
    .deposit-pay-bottom {
      img {
        width: 130px;
      }
      position: fixed;
      left: 10px;
      right: 10px;
      bottom: 0;
      background: #fff;
      height: 230px;
      @include flex-row();
      >div {
        width: 50%;
        height: 100%;
      }
      .left {
        @include flex-column(center)
      }
      .right{
        @include flex-column();
        >.desc {
          height: 100px;
          @include flex-column(center, baseline)
        }
        >.btn {
          letter-spacing: 3px;
          font-size: 16px;
          margin: 10px;
          padding: 2px 15px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          color: #fff;
          align-self: flex-end;
          @include blue-gradiennt2;
        }
      }
    }
  }
</style>