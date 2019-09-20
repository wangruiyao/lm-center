<template>
  <div id="order-pay-way-check">
    <nut-actionsheet :is-visible="isVisible"
                     @close="switchActionSheet('isVisible')"
                     cancelTxt="关闭"
    >
      <div slot="custom" class="custom-wrap">
        <div class="title">选择{{title}}</div>
        <div v-show="title==='支付方式'">
          <div class="pay-way-check"
               v-for="(item) in goodsInfo.paytype"
               :key="item.value">
            <span>{{item.name}}</span>
            <div class="check" @click="checkPayWay(item)">
              <span class="lm-icon icon iconfont" v-show="item.name === payType.name">&#xe68f;</span>
            </div>
          </div>
        </div>

        <div v-show="title==='配送方式'">
          <div class="pay-way-check"
               v-for="(item) in goodsInfo.receivetype"
               :key="item.value">
            <span>{{item.name}}</span>
            <div class="check" @click="checkReceiveWay(item)">
              <span class="lm-icon icon iconfont" v-show="item.name === receiveType.name">&#xe68f;</span>
            </div>
          </div>
        </div>

        <div v-show="title==='生效方式'">
          <div class="pay-way-check"
               v-for="(item) in goodsInfo.effecttype"
               :key="item.value">
            <span>{{item.name}}</span>
            <div class="check" @click="checkEffectType(item)">
              <span class="lm-icon icon iconfont" v-show="item.name === effectType.name">&#xe68f;</span>
            </div>
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
      title: {
        type: String,
        default: ''
      },
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
      receiveType: {
        type: Object,
        default() {
          return {}
        }
      },
      payType: {
        type: Object,
        default() {
          return {}
        }
      },
      effectType: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        group: []
      }
    },
    methods: {
      switchActionSheet() {
        this.$emit('closeSelf', '')
      },
      checkPayWay(value) {  // 选择支付方式
        const _this = this;
        this.$emit('setPopUpInfo', Object.assign({
          type: 'paytype'
        }, value));
        setTimeout(function() {
          _this.switchActionSheet();
        },500)
      },
      checkReceiveWay(value) {  // 选择配送方式
        const _this = this;
        this.$emit('setPopUpInfo', Object.assign({type: 'receivetype'}, value));
        setTimeout(function() {
          _this.switchActionSheet();
        },100)
      },
      checkEffectType(value) {
        const _this = this;
        this.$emit('setPopUpInfo', Object.assign({
          type: 'effecttype',
        }, value));
        setTimeout(function() {
          _this.switchActionSheet();
        },100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-pay-way-check {
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