<template>
  <div id="order-refund-item">
    <div class="order-info">
      <img class="goods-img" :src="orderDetails.goodspic" />
      <div class="goods-detail">
        <div class="goods-detail-top">
          <span class="title">{{orderDetails.goodsname}}</span>
          <span class="detail">{{orderDetails.goodstitle}}</span>
        </div>
        <div class="goods-detail-center">
          <div class="title" v-show="orderDetails.serialnumber">
            开户号码
            <span>{{orderDetails.serialnumber}}</span>
          </div>
          <!--<div class="title" v-show="true">-->
            <!--装机地址-->
            <!--<span>123456789</span>-->
          <!--</div>-->
          <!--<div class="title" v-show="true">-->
            <!--商品规格-->
            <!--<span>123</span>-->
          <!--</div>-->
        </div>
        <div class="goods-detail-bottom">
          <span class="order-price">￥<span>{{(Number(orderDetails.refundprice)/100).toFixed(2)}}</span></span>
          <span class="good-number">x<span>{{orderDetails.amount}}</span></span>
        </div>
      </div>

    </div>
    <div class="order-status">
      <span class="status">{{orderDetails.refundstatedesc}}</span>
      <div class="refund-order-btn" @click="handleItemClick">查看详情</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderRefundItem",
    props: {
      orderDetails: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handleItemClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-refund-item {
    border: solid #eee 1px;
    margin-bottom: 10px;
    background: #fff;
    width:350px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-shadow:0 5px 4px 0 rgba(0, 0, 0, 0.13);
    .order-info {
      @include flex-row(baseline);
      align-items: stretch;
      padding: 10px;
      position: relative;
      .goods-img {
        flex-shrink: 0;
        width: 110px;
        height: 110px;
      }
      .goods-detail {
        flex-grow: 1;
        padding: 0 10px;
        @include flex-column();
        .detail {
          color: #999;
        }
        .goods-detail-top {
          width: 100%;
          @include flex-column(baseline,baseline);
          .detail {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
        .goods-detail-center {
          width: 100%;
          .title {
            >span {
              color: #999;
            }
          }
        }
        .goods-detail-bottom {
          width: 100%;
          .order-price {
            >span {
              color: #FF2D00;
              font-size: 16px;
            }
          }
          .good-number {
            margin-left: 10px;
            >span {
              font-size: 16px;
            }
          }
        }
      }

    }
    .order-info:after {
      content: '';
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background:linear-gradient(87deg,rgba(52,140,247,1),rgba(236,6,143,1));
      opacity:0.34;
    }
    .order-status {
      height: 35px;
      background: #fff;
      @include flex-row();
      padding: 0 10px;
      .status {
        color: #F13B40;
      }
      .refund-order-btn {
        width:63px;
        height:25px;
        border:1px solid;
        border-image:linear-gradient(0deg, rgba(194, 111, 229, 0.51), rgba(99, 135, 238, 0.51), rgba(91, 239, 225, 0.51)) 1 1;
        border-radius: 4px;
        font-size: 14px;
        color: #7069FD;
        @include flex-column(center)
      }

    }
  }
</style>