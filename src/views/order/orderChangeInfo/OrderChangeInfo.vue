<template>
  <div id="order-change-info" class="lm-container">
    <lm-header>
      <span slot="left">修改订单信息</span>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="change-info-form">
      <!-- 返回能人 开户信息错误-->
      <!--v-show="backPersonReason === 1 || backPersonReason === 3"-->
      <div class="back-person-box" >
        <lm-cell :title="`开户人姓名：`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="customerInfo.customername" placeholder="请输入机主姓名" />
          </div>
        </lm-cell>
        <lm-cell :title="`身份证号：`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="customerInfo.customeridnumber" placeholder="请输入机主身份证号" />
          </div>
        </lm-cell>
        <lm-cell :title="`证件地址：`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="customerInfo.customeridaddr" placeholder="请输入机主身份证地址" />
          </div>
        </lm-cell>
        <lm-cell :title="`上传证件照`"
                 :font-large="true" @click="goUpdateIdCard()">
          <span slot="right-text" v-show="!customerImgType" class="cell-right-text-red">未上传</span>
          <span slot="right-text" v-show="customerImgType" class="cell-right-text-blue">已上传</span>
        </lm-cell>
      </div>
      <!-- 返回能人 联系方式错误-->
      <!--v-show="backPersonReason === 2 || backPersonReason === 3"-->
      <div class="back-person-box" >
        <lm-cell :title="`联系人姓名：`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="consigneeInfo.consigneename" placeholder="请输入联系人姓名" />
          </div>
        </lm-cell>
        <lm-cell :title="`联系电话：`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="consigneeInfo.consigneephone" placeholder="请输入联系电话" />
          </div>
        </lm-cell>
        <div v-show="orderType !== 1">
          <lm-cell :title="`收货地址：`"
                   :font-large="true" @click="goUpdateCityInfo">
            <div class="cell-input" slot="cellInput">
              <input v-model="consigneeText" />
            </div>
          </lm-cell>
          <lm-cell :title="`详细地址：`" :disable="true" :font-large="true">
            <div class="cell-input" slot="cellInput">
              <input v-model="consigneeInfo.consigneeaddress" placeholder="请输入详细收货地址（街道、小区、楼号...）" />
            </div>
          </lm-cell>
        </div>

        <div v-show="orderType === 1">
          <lm-cell :title="`查询宽带标准地址`"
                   :disable="true"
                   :font-large="true"
                   :rightStyle="rightStyle"
                   @click="go('orderDetailChangeInfoBroadBand')">
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
                      v-model="consigneeInfo.installaddr"
                      placeholder="请填写或查询宽带装机地址"
                      :disabled="false"
                      :clearBtn="false"
                      :hasBorder="false"></nut-textinput>
            </div>
          </lm-cell>
        </div>

      </div>
      <div @click="confirm" class="confirm-btn">提交</div>

      <lm-border-bar></lm-border-bar>
      <!--<lm-cell-->
      <transition :enter-active-class="$route.meta.pageIn"
                  :leave-active-class="$route.meta.pageOut">
        <keep-alive>
          <router-view @getAddr="getAddr"
                       @getBroadBandAddress="getBroadBandAddress"
                       @setCustomerImg="setCustomerImg"></router-view>
        </keep-alive>

      </transition>
    </div>

  </div>
</template>

<script>
  import {ordermotifyuser} from 'api/order'
  const LmBorderBar = resolve => require(['components/lmBorderBar/LmBorderBar'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderChangeInfo",
    components: {LmBorderBar, LmCell, LmHeader},
    data() {
      return {
        orderId: '',  // 订单id
        orderType: 0, // 订单类型 0：号卡，1：宽带，2：实物
        backPersonReason: 0,  // 0：正常，1：开户信息错误，2：联系方式错误，3：开户信息+联系方式
        consigneeText: '', // 地市文字
        customerImgType: false,
        customerInfo: { // 开户信息
          customername: '',//	开户人	STRING	非必填
          customeridnumber: '',//	开户人身份证	STRING	非必填
          customeridfrontimg: '',//	身份证正面照片	STRING	非必填
          customeridreverseimg: '',//	身份证反面照片	STRING	非必填
          customerinhandimg: '',//	手持照片	STRING	非必填
          customeridaddr: '',//	开户人身份证地址
        },
        consigneeInfo: {
          installaddr: '',//	装机地址	STRING	非必填
          consigneename: '',//	联系人姓名	STRING	非必填
          consigneephone: '',//	联系人电话	STRING	非必填
          consigneeprovince: '',//	收货地址-省份code	STRING	非必填
          consigneecity: '',//	收货地址-城市code	STRING	非必填
          consigneecounty: '',//	收货地址-区县code	STRING	非必填
          consigneeaddress: '',//	收货地址-详细地址
        },
        rightStyle: {
          color: '#333'
        }
      }
    },
    mounted() {
      this.getBackPersonReason();
    },
    methods: {
      getBackPersonReason() { // 获得返回能人参数信息
        const params = JSON.parse(this.$route.params.flag);
        this.backPersonReason = params.flag;
        this.orderId = params.orderId;
        this.orderType = params.orderType;
      },
      goUpdateIdCard() {  // 跳转上传证件照页面
        goforward('orderDetailChangeInfoUpdateIdCard')
      },
      goUpdateCityInfo() {  // 跳转城市选择页面
        goforward('orderDetailChangeInfoCityPicker')
      },
      getAddr(newAddr) { // 获取地市信息
        this.consigneeInfo.consigneeprovince = newAddr.provence.value;
        this.consigneeInfo.consigneecity = newAddr.city.value;
        this.consigneeInfo.consigneecounty = newAddr.area.value;
        this.consigneeText = newAddr.provence.text + '-' + newAddr.city.text + '-' + newAddr.area.text;

      },
      getBroadBandAddress(newBroadBand) { // 获取装机地址
        this.consigneeInfo.installaddr =newBroadBand;

      },
      setCustomerImg(newCustomerImg) {// 获取证件照信息
        this.customerImgType = true;
        this.customerInfo.customeridfrontimg = newCustomerImg.customeridfrontimg;
        this.customerInfo.customeridreverseimg = newCustomerImg.customeridreverseimg;
        this.customerInfo.customerinhandimg = newCustomerImg.customerinhandimg;
      },
      checkCustomerInfo() { // 校验开户信息
        const customerInfo = this.customerInfo;
        if(!(/^[\u4e00-\u9fa5]{2,4}$/).test(customerInfo.customername)) {
          Toast('开户人姓名填写有误！');
          return false;
        } else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(customerInfo.customeridnumber)) {
          Toast('开户人身份证填写有误！');
          return false;
        } else if(customerInfo.customeridaddr === '') {
          Toast('请填写证件地址！');
          return false;
        } else if(customerInfo.customeridfrontimg === '' || customerInfo.customeridreverseimg === '' || customerInfo.customerinhandimg === '') {
          Toast('请上传证件照！');
          return false;
        } else {
          return true;
        }
      },
      /**
       * @return {boolean}
       */
      CheckConsigneeInfo() {  // 校验联系方式
        const consigneeInfo = this.consigneeInfo;
        if(!(/^[\u4e00-\u9fa5]{2,4}$/).test(consigneeInfo.consigneename)) {
          Toast('联系人姓名填写有误！');
          return false;
        } else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(consigneeInfo.consigneephone))){
          Toast('联系人电话填写有误！');
          return false;
        } else {
          if(this.orderType === 1) {  // 宽带商品校验装机地址
            if(consigneeInfo.installaddr === '') {
              Toast('请填写装机地址！');
              return false;
            } else {
              return true;
            }
          } else if(this.orderType === 0 || this.orderType === 2) { // 号卡、实物商品校验配送地址
            if(consigneeInfo.consigneeprovince === '' || consigneeInfo.consigneecity === '' || consigneeInfo.consigneecounty === '') {
              Toast('请选择完整收货地址');
              return false;
            } else if(consigneeInfo.consigneeaddress === '') {
              Toast('请填写详细地址');
              return false;
            } else {
              return true;
            }
          }
        }
      },
      orderMotifyUser(params) { // 调用修改信息接口
        console.log(params)
        ordermotifyuser(params).then(rsp => {

        })
      },
      confirm() { // 提交修改信息
        if(this.backPersonReason === 1) { //1：开户信息错误，2：联系方式错误，3：开户信息+联系方式
          if(!this.checkCustomerInfo())
            return false;
        } else if (this.backPersonReason === 2) {
          if(!this.CheckConsigneeInfo())
            return false;
        } else if(this.backPersonReason === 0) {
          if(!this.checkCustomerInfo() || !this.CheckConsigneeInfo()){
            return false;
          }
        }
        const reqParams = {
          orderid: this.orderId,
          ...this.customerInfo,
          ...this.consigneeInfo
        };
        this.orderMotifyUser(reqParams);
      },
      go(path) {
        goforward(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
#order-change-info {
  background: $bgd-color;
  z-index: 999;
  .cell-input {
    color: #666;
  }
  .change-info-form {

    .back-person-box {
      background: #fff;
      margin-top: 10px;
      .form-item {
        padding: 0 15px;
        border-bottom: solid #eee 1px;
      }
      .cell-input {
        width: 100%;
        input {
          width: 100%;
          color: #666;
        }
      }
      .cell-right-text-red {
        white-space: nowrap;
        color: $font-red-color;
      }
      .cell-right-text-blue {
        white-space: nowrap;
        color: $blue-color-link;
      }
    }

    .confirm-btn {
      position: fixed;
      bottom: 0;
      width: 375px;
      height: $header-height;
      @include flex-column(center);
      @include blue-gradiennt2();
      font-size: 16px;
      color: #fff;
    }

  }
}
</style>