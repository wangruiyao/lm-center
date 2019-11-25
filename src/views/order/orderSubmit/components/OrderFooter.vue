<template>
  <div id="order-footer">
    <div class="order-footer-sum">
      合计:
      <span>￥<span>{{intPrice}}</span>.{{decimalPrice}}</span>
    </div>
    <div>
      <!--<mt-button type="primary" disabled>primary</mt-button>-->
      <mt-button @click="onSubmit" type="primary" :disabled="!aggre">提交订单</mt-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "OrderFooter",
    props: {
      orderPrice: {
        type: String,
        default: ''
      },
      aggre: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    methods: {
      onSubmit() {
        this.$emit('onSubmit')
      }
    },
    computed: {
      intPrice() {
        return  Math.floor(Number(this.orderPrice/100));

      },
      decimalPrice() {
        return  Number(this.orderPrice) % 100 < 10 ? '0' + Number(this.orderPrice)%100 : Number(this.orderPrice)%100;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-footer {
    height: 50px;
    border-top: solid $line-deep 1px;
    width: 375px;
    position: fixed;
    bottom: 0;
    background: $bgd-color;
    @include flex-row(flex-end);

    >div {
      height: 100%;
      width: 33.33%;
    }

    .order-footer-sum {
      @include flex-row(center);
      >span{
        color: #F53737;
        >span {
          font-size: 18px;
        }
      }
    }

  }
</style>