<!-- 订单配送信息 -->

<template>
  <div id="order-delivery-info">
    <lm-cell :title="`配送方式：`"
             :disable="false"
             @click="showPopup('配送方式')">
      <div class="right-info force-type" slot="right-text">{{receiveType.name}}</div>
    </lm-cell>

    <lm-cell :title="`支付方式：`"
             :disable="false"
             @click="showPopup('支付方式')">
      <div class="right-info force-type" slot="right-text">{{payType.name}}</div>
    </lm-cell>

    <lm-cell :title="`店铺优惠：`"
             :disable="false"
             v-show="false">
      <div class="right-info force-type" slot="right-text">填写优惠码</div>
    </lm-cell>

    <lm-cell :title="`发票：`"
             :disable="false" @click="showBillCheckPop">
      <div class="right-info force-type" slot="right-text">{{billType.name}}</div>
    </lm-cell>
    <div class="bill-info" v-show="billType.value !== '0'">
      <!--发票类型选公司发票必填-->
      <div v-show="billType.value === '2' || billType.value === '4'">
        <lm-cell :title="`公司名称：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.companyname"
                    placeholder="请填写公司名称"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
        <lm-cell :title="`纳税人识别号：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.companytaxno"
                    placeholder="请填写纳税人识别号"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
        <lm-cell :title="`开户行名称：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.companyopenbank"
                    placeholder="请填写开户行名称"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
        <lm-cell :title="`开户行账号：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.companybankno"
                    placeholder="请填写开户行账号"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
        <lm-cell :title="`注册地址：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.comregaddr"
                    placeholder="请填写公司注册地址"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
        <lm-cell :title="`注册电话：`"
                 :disable="true">
          <div class="cell-input" slot="cellInput">
            <nut-textinput
                    :clearBtn="false"
                    v-model="billInfo.companyphone"
                    placeholder="请填写公司注册电话"
                    :disabled="false"
                    :hasBorder="false"></nut-textinput>
          </div>
        </lm-cell>
      </div>
      <lm-cell :title="`邮箱地址：`"
               :disable="true">
        <div class="cell-input" slot="cellInput">
          <nut-textinput
                  :clearBtn="false"
                  v-model="billInfo.receivemail"
                  placeholder="请填写邮箱地址"
                  :disabled="false"
                  :hasBorder="false"></nut-textinput>
        </div>
      </lm-cell>

    </div>

    <lm-cell :title="`买家留言：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="orderremark"
                placeholder="填写备注信息"
                :clearBtn="false"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
  </div>

</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderDeliveryInfo",
    components: {LmCell},
    props: {
      payType: {
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
      billType: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        billInfo: {
          companyname: '',  // 公司发票公司名称（发票类型选公司发票必填）
          companytaxno: '',//	公司发票公司税号（发票类型选公司发票必填）	STRING	非必填
          companyopenbank: '',//	公司发票公司开户行（发票类型选公司发票必填）	STRING	非必填
          companybankno: '',//	公司发票公司账号（发票类型选公司发票必填）	STRING	非必填
          companyphone: '',//	公司发票公司注册电话（发票类型选公司发票必填）	STRING	非必填
          comregaddr: '',//	公司发票公司注册地详细地址（发票类型选公司发票必填）	STRING	非必填
          receivemail: ''//	电子发票结收邮箱（发票类型选电子发票必填）	STRING	非必填
        },
        orderremark: '' // 备注
      }
    },
    methods: {
      showPopup(pop) {
        this.$emit('showPop', pop)
      },
      showBillCheckPop() {  // 显示发票选择弹框
        this.$emit('showBillCheckPop', true)
      },
      checkEmail(email){
     　　const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
     　　if(email === ""){ //输入不能为空
     　　　　Toast("邮箱地址不能为空!");
     　　　　return false;
     　　}else if(!reg.test(email)){ //正则验证不通过，格式不对
     　　　　Toast("邮箱格式错误!");
     　　　　return false;
     　　}else{
     　　　　return true;
     　　}
      },
      checkBillInfo() { // 检查发票信息
        const _this = this;
        let flag = true;
        if(this.billType.value === '2' || this.billType.value === '4') {  // 公司发票
          Object.keys(this.billInfo).map(i => {
            if(i === 'receivemail') {
              if(!_this.checkEmail(this.billInfo.receivemail)) {
                flag= false;
              } else {
                flag = true;
              }
            }else if(_this.billInfo[i] === '') {
              Toast('请完整填写发票信息！');
              flag = false;
            }
          });
        } else if(this.billType.value === '1' || this.billType.value === '3') { // 个人发票
          if(!_this.checkEmail(this.billInfo.receivemail)) {
            flag = false;
          }
        }
        return flag;

      },
      onPhysicalSubmit() {  // 实物下单
        if(this.checkPhysicalParams()) {
          let result = {
            ...this.billInfo,
            paytype: this.payType.value,
            receivetype: this.receiveType.value,
            billtype: this.billType.value,
            orderremark: this.orderremark
          };
          return result;
        } else {
          return false;
        }
      },
      operatorSubmit() { // 运营商下单
        if(this.checkPhysicalParams()) {
          let result = {
            ...this.billInfo,
            paytype: this.payType.value,
            receivetype: this.receiveType.value,
            billtype: this.billType.value,
            orderremark: this.orderremark
          };
          return result;
        } else {
          return false;
        }
      },
      checkPhysicalParams() {
        return this.checkBillInfo();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-input {
    width: 100%;
    color: #666;
  }
  .right-info {
    white-space:nowrap;
    color: $color-deep;
  }
  #order-delivery-info {
    width: 375px;
    background: #fff;
    margin-top: 10px;
  }
</style>