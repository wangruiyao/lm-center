<template>
  <div id="number-check" class="lm-container">
    <lm-search-header :place-text="`号码查询`">
      <span slot="leftIcon" class="lm-icon icon iconfont">&#xe615;</span>
      <div class="header-right" slot="right" @click="handleNumberCheck(`ture`)">
        <span slot="leftIcon" class="lm-icon icon iconfont">&#xe6d2;</span>
        {{cityname}}
      </div>
    </lm-search-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               @setScroll="setScroll"
               @scrollToEnd="scrollToEnd">
      <div class="number-check-scroll">
        <order-number-check-item
                @click="checkNumber(item)"
                v-for="item in numberList"
                :city-name="cityname"
                :number-info="item"></order-number-check-item>
      </div>

    </lm-scroll>
    <transition :enter-active-class="`slideInRight`"
                :leave-active-class="`slideOutRight`">
      <order-number-check-city-list
              v-show="isNumberCheckVisible"
              :product-id="productid"
              @handleNumberCheck="handleNumberCheck"
              @checkCity="checkCity"></order-number-check-city-list>
    </transition>

  </div>
</template>

<script>
  import {orderserialnumber} from 'api/order'
  import OrderNumberCheckCityList from "./components/OrderNumberCheckCityList";
  const LmSearchHeader = resolve => require(['components/lmSearchHeader/LmSearchHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const OrderNumberCheckItem = resolve => require(['./components/OrderNumberCheckItem'], resolve);
  export default {
    name: "OrderNumberCheck",
    components: {OrderNumberCheckCityList, OrderNumberCheckItem, LmScroll, LmSearchHeader},
    data() {
      return {
        productid: '',// 产品id
        goodsid: '',// 商品id
        serialnumber: '', // 选择号码
        serialprovince: '', //省份编码
        serialcuity: '',//地市编码
        cityname: '', // 城市
        numberList: [], // 号码列表
        isNumberCheckVisible: false,
        pageSize:0  // 选择号码 - 页码
      }
    },
    mounted() {
      const numberCheckInfo = JSON.parse(this.$route.params.numberCheckInfo);
      this.productid = numberCheckInfo.productid; // 产品id
      this.goodsid = numberCheckInfo.goodsid; // 商品id
    },
    methods: {
      setScroll(scroll) {
        this.scroll = scroll;
      },
      scrollToEnd(){
        console.log(1);
        this.pageSize ++;
        const reqParams = {
          province: this.serialprovince,
          city: this.serialcuity,
          pagesize: this.pageSize,
          goodsid: this.goodsid
        };
        this.getOrderSerialNumber(reqParams);

      },
      handleNumberCheck(status) {
        this.isNumberCheckVisible = status
      },
      checkCity(params) {
        this.numberList = [];
        this.pageSize = 0;
        this.serialprovince = params.serialprovince;
        this.serialcuity = params.city.citycode;
        this.cityname = params.city.cityname;
        const reqParams = {
          province: this.serialprovince,
          city: this.serialcuity,
          pagesize: this.pageSize,
          goodsid: this.goodsid
        };
        this.getOrderSerialNumber(reqParams)
      },
      getOrderSerialNumber(reqParams) { // 获取号码列表
        const _this = this;
        orderserialnumber(reqParams).then( rsp=> {
          _this.numberList.push(...rsp.data);
          this.scroll.finishPullUp();
          this.scroll.refresh();
        }).catch(err => {
          _this.numberList = [];
        })

      },
      checkNumber(number) {
        this.serialnumber = number.serialnumber;
        const rspParams = {
          serialnumber: this.serialnumber, // 选择号码
          serialprovince: this.serialprovince, //省份编码
          serialcuity: this.serialcuity//地市编码
        };

        this.$emit('checkNumber',rspParams);
        setTimeout(()=> {
          goback();
        },200)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #number-check {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    background: $bgd-color;
    z-index: 999;
    overflow: hidden;
    .header-right {
      padding: 10px;
    }

    .number-check-scroll {
      padding: 0 15px;
      @include flex-row();
      flex-wrap: wrap;
    }
  }
</style>