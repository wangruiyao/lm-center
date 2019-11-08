<!-- 收货信息 -->
<template>
  <div id="order-receive-info">
    <lm-cell  :title="`联系人：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="consigneename"
                placeholder="请输入收货人姓名"
                :disabled="false"
                :hasBorder="false"
                :clearBtn="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`联系电话：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="consigneephone"
                placeholder="请输入收货人联系电话"
                :disabled="false"
                :hasBorder="false"
                :clearBtn="false"></nut-textinput>
      </div>
    </lm-cell>
    <div v-if="goodType === `2` || goodType === `0`">
      <lm-cell :title="`收货地址：`"
               :disable="false" @click="go('orderCityPicker')">
        <div class="cell-input" slot="cellInput">
          <nut-textinput
                  v-model="addrText"
                  :disabled="true"
                  :hasBorder="false"
                  :clearBtn="false"></nut-textinput>
        </div>
      </lm-cell>

      <lm-cell :title="`详细地址：`"
               :disable="true">
        <div class="cell-input" slot="cellInput">
          <nut-textinput
                  v-model="consigneeaddress"
                  placeholder="请输入详细收货地址（街道、小区、楼号）"
                  :disabled="false"
                  :hasBorder="false"
                  :clearBtn="false"></nut-textinput>
        </div>
      </lm-cell>
    </div>

  </div>
</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderReceiveInfo",
    components: {LmCell},
    props: {
      goodType: {
        type: String,
        default: ''
      },
      showInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      cityInfo: { //城市选择信息
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        addrText: '',
        consigneename: '',  // 联系人姓名 （快递配送必填）
        consigneephone: '', // 联系人电话 （快递配送必填）
        consigneeprovince: '',  //收货地址-省份code（快递配送必填）
        consigneecity: '',	// 收货地址-城市code（快递配送必填）
        consigneecounty: '',  //收货地址-区县code（快递配送必填）
        consigneeaddress: '', // 详细地址 （快递配送必填）
      }
    },
    methods: {
      go(path) {
        this.$emit('go', path)
      },
      onPhysicalSubmit() {  // 实物下单
        if(this.checkPhysicalParams()) {
          let result = {
            consigneename: this.consigneename,
            consigneephone: this.consigneephone, // 联系人电话 （快递配送必填）
            consigneeprovince: this.consigneeprovince,  //收货地址-省份code（快递配送必填）
            consigneecity: this.consigneecity,	// 收货地址-城市code（快递配送必填）
            consigneecounty: this.consigneecounty,  //收货地址-区县code（快递配送必填）
            consigneeaddress: this.consigneeaddress, // 详细地址 （快递配送必填）
          };
          return result;
        } else {
          return false;
        }
      },
      operatorSubmit() {  // 运营商下单
        if(this.checkOperatorParams()) {
          let result = {
            consigneename: this.consigneename,
            consigneephone: this.consigneephone, // 联系人电话 （快递配送必填）
            consigneeprovince: this.consigneeprovince,  //收货地址-省份code（快递配送必填）
            consigneecity: this.consigneecity,	// 收货地址-城市code（快递配送必填）
            consigneecounty: this.consigneecounty,  //收货地址-区县code（快递配送必填）
            consigneeaddress: this.consigneeaddress, // 详细地址 （快递配送必填）
          };
          return result;
        } else {
          return false;
        }
      },
      checkPhysicalParams() { // 检测实物商品参数
        if(this.consigneename === '') {
          Toast('请填写联系人姓名');
          return false;
        }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.consigneephone))) {
          Toast('联系电话填写有误');
          return false;
        }else if(this.consigneeprovince === ''
          || this.consigneecity === ''
          || this.consigneecounty === '') {
          Toast('请选择收货地址');
          return false;
        } else if(this.consigneeaddress === '') {
          Toast('请填写详细地址');
          return false;
        }
        return true;
      },
      checkOperatorParams() {
        if(this.consigneename === '') {
          Toast('请填写联系人姓名');
          return false;
        }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.consigneephone))) {
          Toast('联系电话填写有误');
          return false;
        } else{
          if(this.goodType === '0') {
            if(this.consigneeprovince === ''
              || this.consigneecity === ''
              || this.consigneecounty === '') {
              Toast('请选择收货地址');
              return false;
            } else if(this.consigneeaddress === '') {
              Toast('请填写详细地址');
              return false;
            } else {
              return true;
            }
          }else {
            return true;
          }
        }

      }
    },
    watch: {
      cityInfo(newInfo) {
        this.addrText = `${newInfo.provence.text}-${newInfo.city.text}-${newInfo.area.text}`;
        this.consigneeprovince = newInfo.provence.value;
        this.consigneecity = newInfo.city.value;
        this.consigneecounty = newInfo.area.value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-receive-info {
    width: 375px;
    margin-top: 10px;
    .cell-input {
      color: #666;
      width: 100%;
    }
  }
</style>