<template>
  <div id="order-submit" class="lm-container">
    <lm-header :background="`#f2f2f2`">
      <div slot="left" class="title">确认订单</div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="order-scroll-inner">

      </div>
      <!--商品基本信息-->
      <order-goods-common-info ref="orderGoodsCommonInfo"
              :order-goods-info="orderGoodsInfo.goodsinfor"
              :good-type="goodType"
              @addNum="addGoodsNum"></order-goods-common-info>
      <!--订单基本信息-->
      <order-common-info ref="orderCommonInfo"
                         :good-type="goodType"
                         :install-addr="installAddr"
                         :serial-number="serialnumber"
                         :effect-type="effecttype"
                         :serial-province="serialprovince"
                         :serial-cuity="serialcuity"
                         @goNumberCheck="goNumberCheck"
                         @setSerialPrice="setSerialPrice"
                         @showPop="showPopup"></order-common-info>
      <!--运营商产品机主信息-->
      <order-user-info-operator
              :img-list = imgList
              ref="orderUserInfoOperator"
              @go="go"
              v-show="goodType === `0` || goodType === `1`">
      </order-user-info-operator>
      <!--收货信息-->
      <order-receive-info ref="orderReceiveInfo" :good-type="goodType" :city-info="cityInfo" @go="go"></order-receive-info>
      <lm-border-bar></lm-border-bar>

      <!-- 配送信息-->
      <order-delivery-info ref="orderDeliveryInfo"
                           @showPop="showPopup"
                           @showBillCheckPop="showBillCheckPop"
                           :pay-type="paytype"
                           :receive-type="receivetype"
                           :bill-type="billtype"></order-delivery-info>
      <order-amount :goods-price="goodsPrice"
                    :order-price="goodsPrice"
                    :type-group="goodType"
                    :price="price"
                    :serial-price="serialprice"></order-amount>

      <!-- 协议 -->
      <order-agreement :aggre="isAggre"
                       @handleAggrement="handleAggrement"
                       @handleAggrementPop="handleAggrementPop"
                       v-show="goodType === `0` || goodType === `1`"></order-agreement>


    </lm-scroll>
    <!--协议详情-->
    <order-aggrement-info @handleAggrement="handleAggrementPop" v-show="isShowAggrementInfo" :aggrement-type="aggrementType"></order-aggrement-info>

    <!-- footer -->
    <order-footer :aggre="isAggre" :order-price="orderPrice" @onSubmit="onSubmit"></order-footer>
    <!-- 选择支付方式 -->
    <order-pay-way-check :isVisible="showPopTitle !== ''"
                         :title="showPopTitle"
                         :goods-info="orderGoodsInfo"
                         :pay-type="paytype"
                         :receive-type="receivetype"
                         :effect-type="effecttype"
                         @setPopUpInfo="setPopUpInfo"
                         @closeSelf="showPopup"></order-pay-way-check>
    <!-- 选择发票 -->
    <order-bill-check
            :is-visible="showBillCheck"
            :goods-info="orderGoodsInfo"
            :bill-type="billtype.name"
            @setBillInfo="setBillInfo"
            @closeSelf="showBillCheckPop"></order-bill-check>

    <!-- 下单提示 -->
    <div class="order-submit-result" v-show="orderSubmitSesultVisible">
        <img :src="submitResultPic" />
        <p>下单成功！</p>
        <div v-show="!needToPay">您可以<span @click="go('shopCenter')">继续购物</span>或查看<span>该笔订单</span></div>
        <div v-show="needToPay">正在跳转支付页面...</div>

    </div>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"
                     @getBroadBandAddress="getBroadBandAddress"
                     @getAddr="getAddr"
                     @checkNumber="checkNumber"
                     @setCustomerImg="setCustomerImg"></router-view>
      </keep-alive>

    </transition>

    <router-view v-if="!$route.meta.keepAlive"/>



  </div>
</template>

<script>
  import {gotopay} from 'api/pay'
  import {ordergoodsinfor, effecttype,createphysicalorder,createorder} from 'api/order';
  import { mapMutations } from 'vuex';
  import OrderAggrementInfo from "./components/OrderAggrementInfo";
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const OrderGoodsCommonInfo = resolve => require(['./components/OrderGoodsCommonInfo'], resolve);
  const OrderCommonInfo = resolve => require(['./components/OrderCommonInfo'], resolve);
  const OrderUserInfoOperator = resolve => require(['./components/OrderUserInfoOperator'], resolve);
  const OrderReceiveInfo = resolve => require(['./components/OrderReceiveInfo'], resolve);
  const LmBorderBar = resolve => require(['components/lmBorderBar/LmBorderBar'], resolve);
  const OrderDeliveryInfo = resolve => require(['./components/OrderDeliveryInfo'], resolve);
  const OrderFooter = resolve => require(['./components/OrderFooter'], resolve);
  const OrderAmount = resolve => require(['./components/OrderAmount'], resolve);
  const OrderPayWayCheck = resolve => require(['./components/OrderPayWayCheck'], resolve);
  const OrderBillCheck = resolve => require(['./components/OrderBillCheck'], resolve);
  const OrderAgreement = resolve => require(['./components/OrderAgreement'], resolve);
  export default {
    name: "OrderSubmit",
    components: {
      OrderAggrementInfo,
      OrderAgreement,
      OrderPayWayCheck,
      OrderBillCheck,
      OrderAmount,
      OrderFooter,
      OrderDeliveryInfo,
      LmBorderBar,
      OrderReceiveInfo,
      OrderUserInfoOperator,
      OrderCommonInfo,
      OrderGoodsCommonInfo,
      LmScroll,
      LmHeader},
    data() {
      return {
        isAggre: true,  // 是否同意协议
        isShowAggrementInfo: false, // 是否展示协议内容
        aggrementType: 0, // 协议内容
        price: {},
        orderGoodsInfo: {},
        goodsListParams: [],  // 商品 id, 数量， 价格
        serialnumber: '', // 选择号码
        serialprovince: '', //省份编码
        serialcuity: '',//地市编码
        serialprice: '0', //预存
        queryOrderDetailParams: {}, // 查询商品信息参数
        cityInfo: {},
        goodType: '0', // numberCard: 号卡，broadBand: 宽带， commodity: 单商品
        showPopTitle:'', // 弹出层,
        showBillCheck: false,
        payWay: '',
        installAddr: '', // 标准宽带地址
        effecttype: {}, // 生效方式
        paytype: {}, // 支付方式
        receivetype: {},  // 配送方式
        billtype: {},  // 发票类型（0：不开发票；1：纸质发票-个人；2：纸质发票-公司；3：电子发票-个人；4：电子发票-公司）
        imgList: {
          customeridfrontimg: '',//	开户人身份证正面照片	STRING	必填
          customeridreverseimg: '',//	开户人身份证反面照片	STRING	必填
          customerinhandimg: '',//	开户人手持身份证照片	STRING	必填
        },  // 证件照信息
        reqSubmitparams: {}, // 订单提交参数
        orderSubmitSesultVisible: false,  // 是否展示下单结果
        needToPay: true // 订单是否需要支付
      }
    },
    mounted() {
      const queryInfo = JSON.parse(this.$route.params.info);
      if(queryInfo.hasOwnProperty('ordergoodsList')) {
        this.queryOrderDetailParams.goodsdetail = queryInfo.ordergoodsList;
      } else if(queryInfo.hasOwnProperty('cartid')) {
      }
      this.queryOrderGoodsInfo(this.queryOrderDetailParams);
    },
    methods: {
      queryOrderGoodsInfo() { // 查询下单-商品信息
        const _this = this;
        ordergoodsinfor(this.queryOrderDetailParams).then(rsp => {
          // 商品信息
          _this.orderGoodsInfo = rsp.data;
          console.log('商品信息：', JSON.stringify(_this.orderGoodsInfo));
          _this.orderGoodsInfo.goodsinfor.map(i => {
            const paramsItem = {
              goodsid: i.goodsid,
              goodsnumber: i.number,
              goodsprice: i.goodsprice
            };
            _this.goodsListParams.push(paramsItem);
          });
          _this.price = _this.orderGoodsInfo.price;
          // 商品类型
          _this.goodType = _this.orderGoodsInfo.typegroup;
          if(_this.goodType === '0') {
            this.getEffectType();
          }
          // 初始化支付方式
          _this.paytype = _this.orderGoodsInfo.paytype[0];
          // 初始化配送方式
          _this.receivetype = _this.orderGoodsInfo.receivetype[0];
          // 初始化发票信息
          _this.billtype = _this.orderGoodsInfo.invoice[0];



        })
      },
      checkPayWay(item) { // 选择支付方式
        this.payWay = item;
        this.showPop = '';
      },
      go(path) {
        goforward(path)
      },
      showPopup(pop) {  //弹出层
        this.showPopTitle = pop;
      },
      showBillCheckPop(type) {  // 发票弹出层
        this.showBillCheck = type;
      },
      getBroadBandAddress(addr) { // 获取宽带标准地址
        this.installAddr = addr;
      },
      getAddr(newAddr) {
        this.cityInfo = newAddr;
      },
      setPopUpInfo(value) { // 获取支付方式，配送方式
        if(value.type === 'paytype') {  // 支付
         this.paytype = value;
        } else if(value.type === 'receivetype') { // 配送
          this.receivetype = value;
        } else if(value.type === 'effecttype')  { // 生效
          this.effecttype = value;
        }

      },
      setBillInfo(val) { // 获取发票信息
        this.billtype = val;
      },
      addGoodsNum(params) { // 增加商品数量
        this.goodsListParams.map(i=> {
          if(i.goodsid === params.goodsid) {
            i.goodsnumber = params.goodsnumber;
          }
        });
      },
      setSerialPrice(params) {  // 增加预存款
        this.serialprice = params.serialprice;
      },
      goNumberCheck() {
        const params ={
          productid: this.orderGoodsInfo.goodsinfor[0].productid,
          goodsid: this.orderGoodsInfo.goodsinfor[0].goodsid
        };
        goforward('orderNumberCheck', {
          numberCheckInfo: JSON.stringify(params)
        })
      },
      checkNumber(params) {
        this.serialnumber= params.serialnumber;
        this.serialprovince= params.serialprovince;
        this.serialcuity= params.serialcuity;
      },
      getEffectType() { // 获取生效方式
        const _this = this;
        effecttype().then(rsp=> {
          _this.$set(_this.orderGoodsInfo,'effecttype', rsp);
          _this.effecttype = _this.orderGoodsInfo.effecttype[0];
        })
      },
      setCustomerImg(imgList) {
        console.log('整机照信息', JSON.stringify(imgList));
        this.imgList = imgList;
      },
      onSubmit() {// 提交表单
        if(this.isAggre) {
          if(this.checkSubmitParams()){
            Indicator.open();
            if(this.goodType === '2'){  // 实物商品下单
              createphysicalorder(this.reqSubmitparams).then(rsp => {
                Indicator.close();
                this.gotoPay(rsp.data); // 订单提交成功，跳转支付页面
              }).catch(err =>{
                Indicator.close();

              })
            }else if(this.goodType === '0' || this.goodType === '1') {  // 运营商商品下单
              createorder(this.reqSubmitparams).then(rsp => {
                Indicator.close();
                this.needToPay = rsp.data.needPay;
                this.gotoPay(rsp.data);
              }).catch(err => {
                Indicator.close();

              })
            }
          } else {
          }
        } else {
        }

      },
      checkSubmitParams() {
        const _this = this;
        let flag = true;
        if(this.goodType === '2') { // 实物商品
          Object.keys(_this.$refs).map(i => {
            if(i !== 'wrapper') {
              if(_this.$refs[i].onPhysicalSubmit()) {
                Object.assign(_this.reqSubmitparams, _this.$refs[i].onPhysicalSubmit());
                return true;
              } else {
                flag = false;
                return false;
              }
            }  else {
              return true;
            }
          });

        } else {  // 运营商
          Object.keys(_this.$refs).every(i => {
            if(i !== 'wrapper') {
              if(_this.$refs[i].operatorSubmit()) {
                Object.assign(_this.reqSubmitparams, _this.$refs[i].operatorSubmit());
                return true;
              } else {
                flag = false;
                return false;
              }
            } else {
              return true;
            }
          });
        }
        return flag;
      },
      handleAggrement() {
        this.isAggre = !this.isAggre;
      },
      handleAggrementPop(status, aggrementType) { // status:协议显示状态，aggrementType：协议类型（0：客户入网服务协议及业务协议，1：防范电信诈骗违法犯罪温馨提示）
        console.log(status)
        this.isShowAggrementInfo = status;
        if(aggrementType !== undefined) {
          this.aggrementType = aggrementType
        }
      },
      gotoPay(order) { // 跳转支付页面
        this.orderSubmitSesultVisible = true;
        if(order.needPay) {
          gotopay({
            paytype: 1,
            orderids: order.orderid
          })
        }
      }
    },
    computed: {
      goodsPrice() {  // 商品总价
        let goodsPrice = 0;
        this.goodsListParams.map(i=> {
          goodsPrice += Number(i.goodsnumber) * Number(i.goodsprice);
        });
        return goodsPrice.toString();
      },
      orderPrice() {// 订单总价
        // 运费
        const logistics = this.price.logistics;
        // 优惠
        const discount = this.price.discount

        let orderPrice = Number(logistics) - Number(discount) + Number(this.goodsPrice) + Number(this.serialprice);

        return orderPrice.toString();

      },
      submitResultPic() {  // 订单提交结果图片
        return this.needToPay ? require('assets/images/pay/pay-result-waiting.png')
            :  require('assets/images/pay/pay-result-success.png')
      }
    },
    beforeRouteLeave(to,from,next) {  // 监听页面离开
      this.$store.commit('order/ClEAR_ORDER_INFO');
      next();
    }
  }
</script>

<style lang="scss" scoped>
  #order-submit {
    background: $bgd-color;
    position: fixed;
    /*z-index: 1000;*/
    .title {
      white-space: nowrap;
      font-size: 14px !important;
      margin-left: 10px;
    }

    .order-scroll-inner {
      margin-top: -10px;
    }
    .order-submit-result {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 375px;
      background: #fff;
      z-index: 2000;
      @include flex-column(center);
      >p {
        font-size: 22px;
      }
      >img {
        width: 186px;
        margin-bottom: 10px;
      }
      >div {
        margin-top: 10px;
        >span{
          color: $blue-color-link;
          font-size: 14px;
        }
      }
    }
  }
</style>