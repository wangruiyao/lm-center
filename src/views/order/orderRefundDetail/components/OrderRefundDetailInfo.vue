<template>
  <div class="order-refund-detail-info">
    <div class="order-no">
      <span>订单号：{{orderDetail.ordersn}}</span>
      <span class="icon iconfont">&#xe66c;</span>
    </div>
    <div class="good-info">
      <img :src="orderDetail.goodspic" class="good-img"/>

      <div class="info">
        <div class="goods-detail-top">
        <span class="title">{{orderDetail.goodsname}}</span>
        <span class="detail">{{orderDetail.goodstitle}}</span>
      </div>
        <div class="goods-detail-center">
          <div class="title" v-show="orderDetail.serialnumber">
            开户号码
            <span>{{orderDetail.serialnumber}}</span>
          </div>
        </div>
        <div class="goods-detail-bottom">
          <span class="order-price">￥<span>{{(Number(orderDetail.price)/100).toFixed(2)}}</span></span>
          <span class="good-number">x<span>{{orderDetail.amount}}</span></span>
        </div>
      </div>
    </div>
    <div class="refund-result">
      <div class="refund-result-pic">
        <img v-for="i in base64List" :src="i"/>
      </div>
      <div class="refund-result-desc">
        <span>退款原因：{{orderDetail.handlereason}}</span>
        <span>具体描述：{{orderDetail.handleremark}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {getrefundinfor, displayimg} from 'api/order';

  export default {
    name: "OrderRefundDetailInfo",
    props: {
      orderDetail: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        picSrc:'',
        picDesc: [],
        base64List:[]
      }
    },
    mounted() {
      this.picSrc = this.$store.state.global.displayImg;
    },
    watch: {
      orderDetail(newInfo) {
        this.picDesc = newInfo.picdesc.split(',');
        for(let i=0;i<this.picDesc.length;i++) {
          this.getDisPlayImg({
            fileId: this.picDesc[i]
          })
        }
      }
    },
    methods: {
      getDisPlayImg(params) {
        displayimg(params).then(rsp => {
          this.base64List.push('data:image/jpeg;base64,'+rsp.data.img)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-refund-detail-info {
    border-radius:2px;
    overflow: hidden;
    width:350px;
    background: #fff;
    padding: 10px;
    margin-top: 9px;

    .order-no {
      @include flex-row();
    }
    .good-info {
      @include flex-row(baseline);
      .good-img {
        width: 75px;
        height: 75px;
        flex-shrink: 0;
      }
      .info {
        padding-left: 10px;
        height: 75px;
        width: 280px;
        overflow: hidden;
        @include flex-column(space-between, baseline);
        .goods-detail-top {
          overflow: hidden;
          @include flex-column(baseline,baseline);
          >span {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .detail {
            color: #999;
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
    .refund-result {
      margin-top: 18px;
      .refund-result-pic {
        >img {
          border: solid #eee 1px;
          width: 77px;
          height: 77px;
          margin-right: 10px;
        }
      }
      .refund-result-desc {
        margin-top: 18px;
        @include flex-column(baseline, baseline);
      }
    }
  }
</style>