<template>
  <div id="order-list-item">
    <div class="header">
      <div class="header-left">
        <img :src="require('../../../../assets/images/logo.png')">
        <span>{{goodsInfo.netlabel === '' ? '钟华铭' : goodsInfo.netlabel}}</span>
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </div>
      <div class="header-right">
        <span class="close-time" v-show="this.countDownTime > 0">（交易关闭：{{countDownTime}}）</span>
        <span class="order-type">{{goodsInfo.statusdesc}}</span>
      </div>
    </div>
    <div class="center" @click="goDetail">
      <div v-for="i in goodsInfo.ordergoods">
        <img :src="i.goodspic">
        <div class="order-info">
          <div class="title">
            {{i.goodsname}}
            <span>{{i.goodstitle}}</span>
          </div>

          <div class="title" v-show="goodsInfo.ordertype == '0'">
            开户号码
            <span>{{i.serialnumber}}</span>
            <span class="city">[济南]</span>
          </div>
          <div class="title" v-show="goodsInfo.ordertype == '1'">
            装机地址
            <span>{{installaddr}}</span>
          </div>
          <div class="title" v-show="goodsInfo.ordertype == '2'">
            产品规格
            <span v-for="(item,k) in i.specification.cursku">{{item}};</span>
          </div>

          <div class="price">￥<span class="red-font">{{Number(i.price/100).toFixed(2)}}</span><span>x{{i.amount}}</span></div>
        </div>
      </div>

    </div>
    <div class="order-info-box">
      <span>共{{goodsAmount(goodsInfo.ordergoods)}}件商品</span>
      <span>合计：￥{{Number(goodsInfo.orderprice/100).toFixed(2)}}<span></span></span>
      <span class="light-font">(邮费：￥0)</span>
    </div>
    <div class="footer">
      <span class="lm-icon icon iconfont">&#xe66a;</span>
      <div class="btn-list">
        <div class="del-btn" @click="goDetail">查看详情</div>
        <div class="footer-button" v-show="goodsInfo.status === '0'">
          <div class="btn-inner" @click="gotoPay">去付款</div>
        </div>
        <div class="footer-button" v-show="goodsInfo.status === '4'">
          <div class="btn-inner" @click="confirmOrder(goodsInfo.key)">确认收货</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {gotopay} from 'api/pay'
  import {confirmorder} from 'api/order'
  const LmIcon = resolve => require(['components/lmIcon/LmIcon'], resolve);
  export default {
    name: "OrderListItem",
    components: {LmIcon},
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        goodImg: require('assets/images/order/good.png'),
        countDownTime: '',
        installaddr: '', // 装机地址 宽带商品显示

      }
    },
    mounted() {
      this.closeTimeCountDown(15);
      try {
        this.installaddr = this.goodsInfo.ordergoods[0].resinfor.installaddr;
      } catch (e) {
        this.installaddr = ''
      }
    },
    methods: {
      goDetail() {
        this.$emit('goDetail');
      },
      go(path) {
        goforward(path);
      },
      goodsAmount(list) { //商品总数
        let amount = 0;
        for(let i = 0;i<list.length;i++) {
          amount += Number(list[i].amount)
        };
        return amount;
      },
      closeTimeCountDown(time) {
        const _this = this;
        let min=Math.floor(time%3600);
        this.countDownTime = Math.floor(time/3600) + ":" + Math.floor(min/60) + ":"+ time%60;
        if(time !== 0) {
          this.timmer = setTimeout(function() {
            _this.closeTimeCountDown(time -1)
          }, 1000);
        } else {
          clearTimeout(this.timmer);
        }

      },
      gotoPay() { // 跳转支付页面
        gotopay({
          orderids: this.goodsInfo.key,
          paytype: 1
        });
      },
      confirmOrder(orderid) {  // 确认收货
        Message.confirm('确认收货？').then(() => {
          confirmorder({
            orderid
          }).then(rsp => {
            console.log(rsp)
          })
        })

      }
    }
  }
</script>

<style lang="scss" scoped>
  .red-font {
    color: #FF2D00;
  }
  .light-font {
    color: $color-light;
  }
  #order-list-item {
    margin-bottom: 15px;
    width: 354px;
    background: #fff;
    border-radius: 4px;
    box-shadow:0 3px 2px rgba(0,0,0,.1);
    .header {
      .header-left {
        img {
          margin-right: 10px;
          margin-bottom: 5px;
        }
        .iconfont {
          margin-left: 10px;
          color: $color-light;
        }
      }
      .header-right{
        .close-time {
          font-size: 9px;
          color: $color-light;
        }
        .order-type {
          color: #F75929;
        }
      }
      >div {
        height: 100%;
        @include flex-row()
      }
      padding:0 9px;
      height: 35px;
      @include flex-row();
      img {
        width: 20px;
      }
    }
    .center >div {
      padding: 9px;
      @include flex-row(baseline,end);
      >img {
        flex-shrink: 0;
        width: 83px;
        height: 83px;
      }

      .order-info {

        color: $color-middle;
        margin-left: 10px;
        height: 83px;
        @include flex-column(space-between, baseline);
        >span {
          color: $color-light;
        }
        .title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          line-height: 14px;
          >span {
            color: $color-light;
          }
          .city {
            color: $font-red-color;
            margin-left: 5px;
          }
        }
        .price {
          line-height: 16px;
          span {
            font-size: 16px;
            margin-right: 5px;
          }
        }
      }
    }

    .order-info-box {
      padding: 5px 10px;
      @include flex-row(flex-end)
      span{
        padding-left: 3px;
      }
    }
    .footer {
      padding: 10px;
      @include flex-row();
      position: relative;
      width: 100%;
      height: 54px;
      >span {
        @include kefu-icon();
        font-size: 28px;
      }
      .btn-list {
        @include flex-row();
        .del-btn {
          color: $color-light;
          font-size: 14px;
          padding: 5px 10px;
          background: #fff;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          border: solid $color-light 1px;
          margin-right: 10px;
        }
        .footer-button {
          border-radius: 4px;
          position: relative;
          padding: 1px;
          @include blue-gradiennt4;
          .btn-inner {
            color: #7069FD;
            border-radius: 3px;
            font-size: 14px;
            background: #fff;
            padding:5px 10px;
          }
        }

      }


    }
    .footer::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0px;
      @include blue-gradiennt3();
    }
  }
</style>