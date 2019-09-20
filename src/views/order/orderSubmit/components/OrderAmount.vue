<template>
  <div id="order-amount">
    <div>
      <span>订单总价</span>
      <span>￥{{(Number(orderPrice)/100).toFixed(2)}}</span>
    </div>
    <div>
      <span>{{typeGroup === '0' ? '套餐' : typeGroup === '1' ? '宽带' : typeGroup === '2' ? '商品' : ''}}价格</span>
      <span>￥{{(Number(goodsPrice)/100).toFixed(2)}}</span>
    </div>
    <div v-show="typeGroup === '0' || typeGroup === '1'">
      <span>新增预存</span>
      <span>￥{{Number(serialPrice/100).toFixed(2)}}</span>
    </div>
    <div>
      <span>优惠金额</span>
      <span>￥{{(Number(price.discount)/100).toFixed(2)}}</span>
    </div>
    <div>
      <span>运费</span>
      <span>￥{{(Number(price.logistics)/100).toFixed(2)}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderAmount",
    props: {
      goodsPrice: {
        type: String,
        default: ''
      },
      orderPrice: {
        type: String,
        default: ''
      },
      typeGroup: {
        type: String,
        default: ''
      },
      serialPrice: {
        type: String,
        default: ''
      },
      price: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {},
    methods: {
      test() {

      }
    },
    computed: {
      // goodsPrice() {
      //   let goodsPrice = 0;
      //   this.goodsListParams.map(i=> {
      //     goodsPrice += Number(i.goodsnumber) * Number(i.goodsprice);
      //   });
      //   return goodsPrice;
      // },
      // orderPrice() {// 订单总价
      //   // 运费
      //   const logistics = this.price.logistics;
      //   // 优惠
      //   const discount = this.price.discount;
      //   let orderPrice = Number(logistics) + Number(-discount) + Number(this.goodsPrice) + Number(this.serialPrice);
      //
      //   return orderPrice;
      //
      // }
    }
  }
</script>

<style lang="scss" scoped>
  #order-amount {
    width: 375px;
    padding: 20px 15px;
    >div {
      width: 100%;
      @include flex-row()
    }
  }
</style>