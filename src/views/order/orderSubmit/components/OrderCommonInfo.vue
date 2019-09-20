<!--订单基本信息-->
<template>
  <div id="order-common-info">
    <!-- 运营商商品信息 -->
    <div class="info-operator"
         v-if="goodType === `0` || goodType === `1`">
      <div v-show="goodType === `0`">
        <lm-cell :title="`选择号码`"
                 :disable="false" :font-large="true"
                 @click="goNumberCheck()"
        >
          <div class="right-info number-check" slot="right-text">
            <span>{{serialNumber}}</span>

          </div>
        </lm-cell>
        <lm-cell :title="`生效方式`"
                 :fontSize="`14px`"
                 :disable="false"
                 :font-large="true"
                 @click="showPopup('生效方式')">
          <div class="right-info force-type" slot="right-text">{{effectType.name}}</div>
        </lm-cell>
      </div>

      <div v-show="goodType === `1`">
        <lm-cell :title="`查询宽带标准地址`"
                 :disable="true"
                 :font-large="true"
                 :rightStyle="rightStyle"
                 @click="go('OrderBroadBand')">
          <div class="right-info" slot="right-text">
            <span class="lm-icon icon iconfont address">&#xe609;</span>
          </div>
        </lm-cell>
        <lm-cell :title="`装机地址`"
                 :disable="true"
                 :rightStyle="rightStyle"
                 :font-large="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    v-model="installaddr"
                    placeholder="请填写或查询宽带装机地址"
                    :disabled="false"
                    :clearBtn="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
      </div>

        <lm-cell :title="`增加预存款`"
                 :disable="true"
                 :rightStyle="rightStyle"
                 :font-large="true">
          <div class="right-info advance" slot="right-text">
            <label>
              <input  type="number" placeholder="0" min="0" v-model.number="serialprice"/>
            </label>
            元</div>
        </lm-cell>

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
      },
      installAddr: {
        type: String,
        default: ''
      },
      serialNumber: { // 选择号码
        type: String,
        default: ''
      },
      serialProvince: { // 省份编码
        type: String,
        default: ''
      },
      serialCuity: {  // 地市编码
        type: String,
        default: ''
      },
      effectType: { // 生效方式
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        installaddr: '',  // 宽带地址
        serialprice: '',  // 预存款
        goodsNum: 1,
        rightStyle: {
          color: '#333'
        }
      }
    },
    methods: {
      go(path) {
        goforward(path)
      },
      showPopup(pop) {
        this.$emit('showPop', pop)
      },
      goNumberCheck() {
        this.$emit('goNumberCheck')
      },
      onPhysicalSubmit() {  // 实物下单
        return {}
      },
      operatorSubmit() {  // 运营商下单
        const result = {};
        result.serialprice = this.serialprice === '' ? '0' : accMul(Number(this.serialprice), 100).toString();
        if(this.goodType === '0') {
          if(this.checkNumberInfo()) {
            result.effecttype = this.effectType.id;
            result.serialnumber = this.serialNumber;
            result.serialprovince = this.serialProvince;
            result.serialcity = this.serialCuity;
            return result;
          } else {
            return false;
          }
        } else if(this.goodType === '1') {
          if(this.checkBroadBandInfo()) {
            result.installaddr = this.installaddr;
            return result;
          } else {
            return false;
          }
        }

      },
      checkNumberInfo() {
        if(this.serialNumber === '') {
          Toast('请选择号码!');
          return false;
        } else {
          return true;
        }
      },
      checkBroadBandInfo() {
        if(this.installaddr === '') {
          Toast('请选择装机地址！');
          return false;
        } else {
          return true;
        }
      }
    },
    watch: {
      installAddr(newVal) {
        this.installaddr = newVal;
        if(Number(newVal === 1)) {
          return false;
        }
        console.log('宽带标准地址',this.installaddr);
      },
      serialprice(newVal) { // 修改预存款
        newVal = newVal.toString();
        // console.log(newVal.indexOf('.'))

        if(newVal < 0) {
          Message('预存款金额不能低于0元');
          this.serialprice = 0;
        } else {
          if(newVal.indexOf('.') !== -1) {
            const decimal = newVal.substring(newVal.indexOf('.') +1, newVal.length);
            if(decimal.length >2) {
              Toast('预存款金额最小单位为分');
              this.serialprice = Number(newVal).toFixed(2);
            }
          }
          const params = {
            serialprice: accMul(Number(newVal), 100).toString()
          };
          this.$emit('setSerialPrice', params)
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .right-info {
    white-space:nowrap;
    min-width: 50px;
  }
  .number-check {
    width: 130px;
    color: #333;
  }

  #order-common-info {
    width: 375px;
    background: #fff;
    box-shadow:0 5px 5px -5px $line-deep;
    .cell-input {
      width: 100%;
      color: #333;
    }
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


  }
</style>