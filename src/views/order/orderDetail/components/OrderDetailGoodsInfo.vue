<template>
  <div id="order-detail-good-info">
    <div class="header">
      <div class="header-left">
        <img src="../../../../assets/images/logo.png">
        <span>{{netLabel}}</span>
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </div>
      <div class="header-right">
        <span class="close-time" v-show="orderInfo.status === '0'">（交易关闭：{{closeTime}}）</span>
        <span class="order-type">{{orderInfo.statusdesc}}</span>
      </div>
    </div>
    <div class="goods-box" v-for="order in orderGoods">
      <div class="center">
        <img :src="order.goodspic">
        <div class="order-info">
          <div class="title">
            {{order.goodsname}}
            <span>{{order.goodstitle}}</span>
          </div>

          <div class="title" v-show="orderInfo.order_type === 0">
            开户号码
            <span>{{order.serialnumber}}</span>
          </div>
          <div class="title" v-show="orderInfo.order_type === 1">
            装机地址
            <span>{{resInfor.installaddr}}</span>
          </div>
          <div class="title" v-show="orderInfo.order_type === 2">
            商品规格
            <span v-for="sku in order.specification.cursku">{{sku}}；</span>
          </div>

          <div class="price">￥<span class="red">{{(Number(order.price)/100).toFixed(2)}}</span><span>x{{order.amount}}</span></div>
        </div>
      </div>

      <div class="footer">
        <div>
          [顺丰]121323142154325
          <span class="blue"> 复制单号</span>
        </div>
        <div @click="goRefundApply(order.goodsid)" class="btn" v-show="(!(['0','6','7'].includes(orderInfo.status))) && order.ordergoodsstate === '0'">申请退货</div>
      </div>
    </div>
    <div class="price-box">
      <div class="price-item">
        <span>商品总价</span>
        <span>￥{{acountPrice(price.goods)}}</span>
      </div>
      <div class="price-item">
        <span>新增预存款</span>
        <span>￥{{acountPrice(price.sundry)}}</span>
      </div>
      <div class="price-item">
        <span>优惠金额</span>
        <span>￥-{{acountPrice(price.discount)}}</span>
      </div>
      <div class="price-item">
        <span>运费</span>
        <span>￥{{acountPrice(price.logistics)}}</span>
      </div>
      <div class="price-total">
        <span>订单金额</span>
        <span class="price-number">￥{{acountPrice(price.order)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailGoodsInfo",
    props: {
      closeTime: {
        type: String,
        default: ''
      },
      orderInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      orderGoods: { // 订单商品列表
        type: Array,
        default() {
          return []
        }
      },
      resInfor: {
        type: Object,
        default() {
          return {}
        }
      },
      price: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        netLabel: '',
        goodImg: require('assets/images/order/good.png')
      }
    },
    watch: {
      orderGoods(newVal) {
        this.netLabel = newVal[0].netlabel === ''? '钟华铭': newVal[0].netlabel;
      }
    },
    methods: {
      acountPrice(price) {
        return (Number(price)/100).toFixed(2);
      },
      goRefundApply(goodsid) {
        goforward('orderRefundApply', {
          orderinfo: JSON.stringify({
            orderid: this.orderInfo.orderid,
            goodsid: goodsid
          })
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .red {
    color: #FF2D00;
  }
  .blue {
    color: $blue-color-link;
  }
  #order-detail-good-info {
    width: 375px;
    background: #fff;
    box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.13);
    margin-bottom: 10px;
    padding: 0 10px 10px;
    border-radius: 0 0 4px 4px;
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
    .goods-box::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0px;
      @include blue-gradiennt3();
    }
    .goods-box {
      padding: 0 5px 5px;
      position: relative;
      margin-bottom: 10px;
      .center {
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
            line-height: 14px;
            >span {
              color: $color-light;
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

      .footer {
        padding: 5px;
        @include flex-row();
        .btn {
          @include flex-column(center);
          width: 80px;
          height: 30px;
          font-size: 14px;
          color: $color-middle;
          border-radius: 4px;
          border: solid $color-middle 1px;
        }

      }
    }
    .price-box {
      .price-item{
        color: #7C7C7C;
        padding: 0 5px;
        @include flex-row();
      }

      .price-total {
        font-size: 14px;
        padding: 5px;
        @include flex-row();
        .price-number {
          color: #EC4747;
        }
      }
    }

  }
</style>