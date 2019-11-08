<!-- 运营商商品用户信息-->
<template>
  <div id="order-user-operator">
    <lm-cell :title="`机主姓名：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
          v-model="customername"
          placeholder="请输入机主姓名"
          :disabled="false"
          :hasBorder="false"
          :clearBtn="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`身份证号：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="customeridnumber"
                placeholder="请输入机身份证号"
                :clearBtn="false"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`证件地址：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="customeridaddr"
                :clearBtn="false"
                placeholder="请输入机主证件地址"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>

    <lm-cell :title="`上传证件照`"
             :disable="false"
             @click="go('orderSubmitUpdateIdCard')">
      <div v-show="showTip" class="right-info force-type" slot="right-text">已上传</div>
    </lm-cell>
  </div>
</template>

<script>
  import {IdCardValidate} from 'utils/validForm/idcardValidate';
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderUserInfoOperator",
    components: {LmCell},
    props: {
      imgList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        showTip: false,
        customername: '',//	开户人姓名	STRING	必填
        customeridnumber: '',//	开户人身份证号	STRING	必填
        customeridaddr: ''//	开户人身份证地址
      }
    },
    watch: {
      imgList: {
        handler() {
          this.showTip = true;
        },
        deep: true
      }
    },
    methods: {
      go(path) {
        this.$emit('go',path)
      },
      onPhysicalSubmit() {  // 实物下单
        return {};
      },
      checkCardNumber(idNo) { // 检测身份证
        if(!IdCardValidate(idNo)){
          Toast('身份证号填写有误');
          return false;
        } else {
          return true;
        }
      },
      checkRealName(name) {
        const regName =/^[\u4e00-\u9fa5]{2,4}$/;
        if(!regName.test(name)){
          Toast('机主姓名填写有误');
          return false;
        }else {
          return true;
        }
      },
      checkImgList() {
        return Object.values(this.imgList).every(i => {
          return i !== ''
        })
      },
      operatorSubmit() {  // 运营商下单
        if(!this.checkRealName(this.customername)) {
          return false;
        }else if(!this.checkCardNumber(this.customeridnumber)) {
          return false;
        }else if(this.customeridaddr === '') {
          Toast('请填写证件照地址');
          return false;
        }else if(!this.checkImgList()) {
          Toast('请上传证件照片！');
          return false;
        } else {
          return {
            customername: this.customername,//	开户人姓名	STRING	必填
            customeridnumber: this.customeridnumber,//	开户人身份证号	STRING	必填
            customeridaddr: this.customeridaddr,//	开户人身份证地址
            ...this.imgList
          }
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-user-operator {
    width: 375px;
    background: #fff;
    margin-top: 10px;

    .cell-input {
      color: #333;
      font-size: 10px !important;
      width: 100%;
    }
    .right-info {
      white-space: nowrap;
      color: $blue-color-link;
    }
  }
</style>