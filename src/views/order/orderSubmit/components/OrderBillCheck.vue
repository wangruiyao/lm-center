<!-- 下单发票选择 -->

<template>
  <div id="order-bill-check">
    <nut-actionsheet :is-visible="isVisible"
                     @close="switchActionSheet('isVisible')"
                     cancelTxt="关闭"
    >
      <div slot="custom" class="custom-wrap">
        <div class="title">是否开具发票</div>
        <div class="pay-way-check">
          <span>否</span>
          <div class="check" @click="checkBillType({name: '本次不开具发票',value: '0'})">
            <span class="lm-icon icon iconfont" v-show="billType === '本次不开具发票'">&#xe68f;</span>
          </div>
        </div>
          <div class="pay-way-check"
               v-for="(item) in goodsInfo.invoice"
               :key="item.value">
            <span>{{item.name}}</span>
            <div class="check" @click="checkBillType(item)">
              <span class="lm-icon icon iconfont" v-show="item.name === billType">&#xe68f;</span>
            </div>
          </div>


      </div>
    </nut-actionsheet>
  </div>
</template>

<script>
  export default {
    name: "OrderPayWayCheck",
    props: {
      isVisible: {
        type: Boolean,
        default: true
      },
      goodsInfo: {  // 订单商品信息
        type: Object,
        default() {
          return {}
        }
      },
      billType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        group: []
      }
    },
    methods: {
      switchActionSheet() {
        this.$emit('closeSelf', false)
      },
      checkBillType(value) {  // 选择支付方式
        const _this = this;
        this.$emit('setBillInfo', value);
        setTimeout(function() {
          _this.switchActionSheet();
        },100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-bill-check {
    height: 500px;

    .custom-wrap {
      min-height: 400px;
      .title {
        font-size: 14px;
        padding: 10px;
        height: $header-height;
        @include flex-row()
      }

      .pay-way-check {
        padding: 10px;
        height: $cell-height;
        @include flex-row();

        .check {
          @include flex-column(center);
          width: 20px;
          height: 20px;
          border: solid $line-deep 1px;
          span {
            color: #5475E5;
            font-size: 10px;
          }
        }
      }
    }

  }
</style>