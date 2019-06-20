<!--订单基本信息-->
<template>
  <div id="order-common-info">
    <!-- 运营商商品信息 -->
    <div class="info-operator"
         v-if="goodType === `numberCard` || goodType === `broadBand`">
      <div v-show="goodType === `numberCard`">
        <lm-cell :title="`选择号码`"
                 :disable="false" :font-large="true"
                 @click="go('orderNumberCheck')"
        ></lm-cell>
        <lm-cell :title="`生效方式`"
                 :fontSize="`14px`"
                 :disable="false"
                 :font-large="true">
          <div class="right-info force-type" slot="right-text">立即生效</div>
        </lm-cell>
      </div>

      <div v-show="goodType === `broadBand`">
        <lm-cell :title="`宽带地址`"
                 :disable="false" :font-large="true"></lm-cell>
        <lm-cell :title="`装机地址`"
                 :disable="true"
                 :rightStyle="rightStyle"
                 :font-large="true" @click="go('OrderBroadBand')">
          <div class="right-info" slot="right-text">
            <span class="lm-icon icon iconfont address">&#xe609;</span>
          </div>
        </lm-cell>
      </div>

        <lm-cell :title="`增加预存款`"
                 :disable="true"
                 :rightStyle="rightStyle"
                 :font-large="true">
          <div class="right-info advance" slot="right-text">
            <input type="number" />
            元</div>
        </lm-cell>

    </div>

    <!-- 单商品信息 -->
    <div class="info-commodity"
         v-if="goodType === `commodity`">
      <div class="info-num">
        <span>购买数量</span>
        <nut-stepper
                :value="goodsNum"
                @change="addNum"
        ></nut-stepper>
      </div>


    </div>
  </div>
</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderCommonInfo",
    components: {LmCell},
    props: {
      goodType: {
        type: String,
        default: 'commodity'
      }
    },
    data() {
      return {
        goodsNum: 1,
        rightStyle: {
          color: '#333'
        }
      }
    },
    methods: {
      showPopup(pop) {
        this.$emit('showPop', pop)
      },
      addNum(val) {

      },
      go(path) {
        this.$emit('go', path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .right-info {
    white-space:nowrap;
    min-width: 50px;
  }

  #order-common-info {
    width: 375px;
    background: #fff;
    box-shadow:0 5px 5px -5px $line-deep;

    .info-operator {
      .force-type {
        color: $color-deep;
        margin-right: 15px;
      }
      .advance {
        width: 100px;
        @include flex-row(flex-end);
        input {
          text-align: center;
          width: 50px;
        }
      }

      .address {
        color: $blue-color-link;
        font-size: 20px !important;
      }
    }

    .info-commodity {
      .info-num {
        font-size: 14px;
        height: $header-height;
        @include flex-row();
        padding: 15px;
      }
    }
  }
</style>