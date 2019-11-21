<template>
  <div id="common-info">
    <div class="order-type">
      <img :src="handleOrderTypeImg(orderInfor.status)">
      <div>
        <span class="font-18">
          {{orderInfor.statusdesc}}
          <span v-show="orderInfor.status === '0'" class="font-14 close-time">({{closeTime}})</span>
        </span>
        <span>预估佣金: ￥<span class="preaward">{{(Number(orderInfor.preaward)/100).toFixed(2)}}</span></span>
      </div>
    </div>
    <!-- 用户信息错误显示 -->
    <div class="userInfo-err-box" v-show="orderInfor.backpersonflag !== 0">
      <div class="left">
        <p class="err font-14">{{orderInfor.backreason}}</p>
        <p class="err-info">{{orderInfor.backremark}}</p>
      </div>
      <div class="right">
        <div class="order-revise" @click="goChangeInfo()">去修改</div>
      </div>
    </div>

    <!--物流信息-->
    <div class="info-box delivery-info" @click="go('orderDetailDelivery')">
      <div class="info-icon">
        <span class="lm-icon icon iconfont">&#xe602;</span>
      </div>
      <div class="main-info">
        <p class="delivery-info font-14">
          {{orderProgress.statusname}}：{{orderProgress.detail}}
        </p>
        <p class="delivery-time footer">{{orderProgress.time}}</p>
      </div>
      <div class="right-icon">
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </div>
    </div>

    <!-- 收件人信息 -->
    <div class="info-box receiver-info">
      <div class="info-icon">
        <span class="lm-icon icon iconfont">&#xe62c;</span>
      </div>
      <div class="main-info font-14">
        <p>
          {{delivery.contactname}} <span class="receiver-number">{{delivery.contacttel}}</span>
        </p>
        <p class="footer">{{delivery.contactprovince}} {{delivery.contactcity}} {{delivery.contactcountry}} {{delivery.contactaddr}}</p>
      </div>
      <div class="right-icon"></div>
    </div>

    <!-- 开户信息 -->
    <div class="account-open-info" v-show="[0,1].includes(orderInfor.order_type)">
      <div class="account-open-info-top">开户信息</div>
      <div class="account-open-info-bottom">
        <span>
          开户人：{{resinfor.resname}}
          <span>{{idNum}}</span>
        </span>

        <span class="lm-icon icon iconfont id-card">&#xe679;</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {orderprogress} from 'api/order'
  export default {
    name: "OrderDetailCommonInfo",
    props: {
      closeTime: {
        type: String,
        default() {
          return '';
        }
      },
      orderInfor: { // 订单基本信息
        type: Object,
        default() {
          return {}
        }
      },
      delivery: { // 订单配送信息
        type: Object,
        default() {
          return {}
        }
      },
      resinfor: { // 开户信息
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        countDownTime: '' // 倒计时
        ,orderProgress: {}
      }
    },
    computed: {
      idNum() {
        try {
          return this.resinfor.pspt.idnum
        } catch (e) {
          return ''
        }
      }
    },
    watch: {
      orderInfor(newInfo) {
        this.getOrderprogress(newInfo.orderid)
      }
    },
    methods: {
      go(path) {
        this.$emit('go', path)
      },
      goChangeInfo() {
        const params = {
          flag: this.orderInfor.backpersonflag,
          orderId: this.orderInfor.orderid,
          orderType: this.orderInfor.order_type
        };
        goforward('orderDetailChangeInfo', {flag: JSON.stringify(params)})
      },
      handleOrderTypeImg(order_type) {
        if(order_type === '0') {
          return require('assets/images/order/order_res_1.png')
        } else if(['1','2','3'].includes(order_type)) {
          return require('assets/images/order/order_res_2.png')
        } else if(order_type === '4') {
          return require('assets/images/order/order_res_3.png')
        } else if(['5','6'].includes(order_type)) {
          return require('assets/images/order/order_res_4.png')
        } else if(order_type === '7') {
          return require('assets/images/order/order_res_5.png')
        }
        // return require('assets/images/order/order_res_success.png')
      },
      getOrderprogress(orderid) {  //前台-订单流程展示
        orderprogress({
          orderid
        }).then(rsp => {
          this.orderProgress = rsp.data[0].items[0];
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  #common-info {
    margin-bottom: 10px;
    box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.13);
    .order-type {
      position: relative;
      @include flex-row();
      img {
        width: 100%;
      }
      >div {
        /*font-weight: 100;*/
        position: absolute;
        left: 33px;
        line-height: 24px;
        @include flex-column(center);
        color: #fff;
        @include flex-column(baseline,baseline);
        .close-time {
          color: rgb(198, 195, 208) !important;
        }
        .preaward {
          font-size: 16px;
        }
      }
    }
    .userInfo-err-box {
      @include flex-row();
      background: #fff;
      margin: 10px;
      padding: 10px 0 10px 10px;
      min-height:64px;
      background:rgba(255,255,255,1);
      border-radius:10px;
      .left {
        position: relative;
        flex-grow: 1;
        padding-right: 10px;
        .err {
          color: #FF2D00;
        }
      }
      .left::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 3px;
        background: #eee;
        top: 0;
        right: 0;
      }
      .right {
        flex-shrink: 0;
        width: 100px;
        height: 100%;
        @include flex-column(center);
        >div {
          font-weight: 100;
          background: #6486EE;
          color: #fff;
          @include flex-column(center);
          width: 55px;
          height: 22px;
          border-radius: 2px;
        }
      }
    }
    .info-box {
      background: #fff;
      border-bottom: solid $line-light 1px;
      padding: 10px;
      min-height: 93px;
      @include flex-row();
      .info-icon {
        width: 35px;
        height: 35px;
        flex-shrink: 0;
        @include blue-gradient;
        color: #fff;
        @include flex-column(center);
        border-radius: 50%;
        span {
          font-size: 20px;
          line-height: 20px;
          font-weight: 100;
        }
      }

      .main-info {
        flex-grow: 1;
        padding: 0 10px;
        >p {
          line-height: 18px;
        }

        >.delivery-info {
          color: $blue;
          >span {
            margin: 0 5px;
          }
        }
        >.delivery-time {
          color: $color-light;
        }
        >.footer {
          margin-top: 5px;
        }
      }
      .right-icon {
        width: 40px;
        text-align: right;
        >span {
          font-size: 20px;
          color: $color-light;
        }

      }
    }

    .receiver-info {
      .receiver-number {
        color: $blue;
        font-size: 12px;
      }
    }

    .account-open-info {
      @include flex-column(space-around,baseline);
      background: #fff;
      padding: 10px;
      height: 77px;
      .account-open-info-top {
        color: $color-middle;
      }
      .account-open-info-bottom {
        width: 100%;
        @include flex-row();
        font-size: 14px;
        .id-card {
          font-size: 22px;
          color: #1376FD;
        }
      }
    }
  }
</style>