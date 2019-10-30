<!-- 订单列表 -->
<template>
  <div id="order-list" class="lm-container">
    <lm-header :title="`订单查询`">
      <div class="header-right" slot="right">
        <span class="lm-icon icon iconfont header-icon" @click.stop="go('orderListCheck')">&#xe68d;</span>
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <order-list-tab-bar :act-tab="actTab" @handleFilterClick="handleFilterClick" @changeTab="changeTab"></order-list-tab-bar>
    <lm-slide-right class="slider-right" :slide-visiblity="slideVisiblity" @reset="resetConditon" @confirm="changeTab"  @handleMaskClick="maskClick">
      <div class="contition-item">
        <nut-textinput
                v-model="ordersn"
                label="订单："
                placeholder="请输入订单号"
                :clearBtn="true"
                :hasBorder="false"
                :disabled="false"></nut-textinput>
      </div>
      <div class="contition-item">
        <nut-textinput
              v-model="contact"
              label="联系人："
              placeholder="请输入联系人姓名"
              :hasBorder="false"
              :clearBtn="true"
              :disabled="false"></nut-textinput>
      </div>
      <div class="contition-item">
        <nut-textinput
                v-model="contacttel"
                label="联系方式："
                placeholder="请输入联系电话"
                :hasBorder="false"
                :clearBtn="true"
                :disabled="false"></nut-textinput>
      </div>


    </lm-slide-right>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @setScroll="setScroll"
               @scrollToEnd="scrollToEnd">
      <div class="order-list-scroll">
        <order-ad>
          <div slot="close-btn">
            <nut-icon
                    type="cross"
                    size="15px"
                    color="#fff"
            >
            </nut-icon>
          </div>
        </order-ad>
        <div class="search-no-list" v-show="noOrder">您还没有相关订单~</div>
        <order-list-item v-for="item in orderList"
                         :goods-info="item"
                         @goDetail="goDetail(item)"></order-list-item>
      </div>
    </lm-scroll>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view @searchByKeyWords="searchByKeyWords"></router-view>
    </transition>


  </div>
</template>

<script>
  import {orderlistbycondition, orderlistbykeywords} from 'api/order';
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const LmSlideRight = resolve => require(['components/lmSlideRight/LmSlideRight'], resolve);
  const OrderListTabBar = resolve => require(['./components/OrderListTabBar'], resolve);
  const OrderListItem = resolve => require(['./components/OrderListItem'], resolve);
  const OrderAd = resolve => require(['./components/OrderAd'], resolve);
  export default {
    name: "OrderList",
    components: {OrderAd, OrderListItem, LmScroll, LmSlideRight, OrderListTabBar, LmHeader},
    data() {
      return {
        actTab: 0,
        slideVisiblity: false,
        pagenum: 1,
        pagesize: 10,
        orderList: [],
        total: 0,
        keywords: '',
        ordersn: '',//	订单号	STRING	非必填
        contact: '',//	联系人	STRING	非必填
        contacttel: '',// 联系电话
        searchType: '', // 查询方式
        noOrder: false

      }
    },
    mounted() {
      if(this.$route.params.hasOwnProperty('type')) {
        const tab = this.$route.params.type;
        this.actTab = tab+1;
      }
      this.orderListByCondition();
    },
    methods: {
      setScroll(scroll){
        this.scroll = scroll;
      },
      maskClick() {
        this.slideVisiblity = false;
      },
      handleFilterClick() {
        this.slideVisiblity = !this.slideVisiblity
      },
      changeTab(tab) {
        this.scroll.finishPullUp();
        this.actTab = tab;
        this.pagenum = 1;
        this.orderList = [];
        this.orderListByCondition();

      },
      goDetail(info) {  //
        goforward('orderDetail', {orderinfo:JSON.stringify({
          orderid: info.key
        })})
      },
      go(path) {
        goforward(path)
      },
      resetConditon() { //条件查询订单- 充值筛选条件
        this.ordersn = '';//	订单号	STRING	非必填
        this.contact='';//	联系人	STRING	非必填
        this.contacttel= '';// 联系电话
      },
      orderListByCondition() {  // 条件查询订单
        this.searchType = 'orderListByCondition';
        this.maskClick();
        const _this = this;
        const params = {
          state: (this.actTab - 1 >= 0 ? this.actTab - 1 : '').toString(),
          ordersn: this.ordersn,//	订单号	STRING	非必填
          contact: this.contact,//	联系人	STRING	非必填
          contacttel: this.contacttel,// 联系电话
          pagenum: this.pagenum, //	页码	STRING	必填
          pagesize: this.pagesize
        };
        orderlistbycondition(params).then(rsp => {
          _this.orderList.push(...rsp.data.orderlist);
          _this.noOrder = _this.orderList.length === 0;
          _this.total = rsp.data.total;
          if(_this.orderList.length < _this.total){
            _this.scroll.finishPullUp();
            _this.scroll.refresh();
          }

        })
      },
      searchByKeyWords(params) {
        this.keywords = params.keywords;
        this.pagenum = 1;
        this.orderList = [];
        this.orderListByKeyWords(params)
      },
      orderListByKeyWords(params)  { // 关键字查询订单
        this.searchType = 'orderListByKeyWords';
        const _this = this;
        const reqParams = Object.assign(params, {
          pagenum: _this.pagenum,
          pagesize: _this.pagesize
        });
        orderlistbykeywords(reqParams).then(rsp => {
          _this.orderList.push(...rsp.data.orderlist);
          _this.noOrder = _this.orderList.length === 0;
          _this.total = rsp.data.total;
          if(_this.orderList.length < _this.total){
            _this.scroll.finishPullUp();
            _this.scroll.refresh();
          }
        })
      },
      scrollToEnd() {   // 上拉加载
        this.pagenum ++;
        if(this.searchType === 'orderListByCondition') {
          this.orderListByCondition();
        } else if(this.searchType === 'orderListByKeyWords') {
          this.orderListByKeyWords({
            keywords: this.keywords
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-list {
    width: 375px;
    .header-right {
      margin-left: -10px;
      span {
        margin-right: 10px;
      }
      .header-icon {
        font-size: 18px;
      }

    }
    .slider-right {
      .contition-item {
        font-size: 14px;
      }
    }
    .order-list-scroll {
      margin-top: $header-height;
      padding: 10px;
      .search-no-list {
        width: 375px;
        height: 100px;
        @include flex-column(center);
      }
    }

  }
</style>