<!-- 订单列表 -->
<template>
  <div id="order-list" class="lm-container">
    <lm-header :title="`订单查询`">
      <div class="header-right" slot="right">
        <span class="lm-icon icon iconfont header-icon" @click="go('orderListCheck')">&#xe68d;</span>
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <order-list-tab-bar :act-tab="actTab" @handleFilterClick="handleFilterClick" @changeTab="changeTab"></order-list-tab-bar>
    <lm-slide-right :slide-visiblity="slideVisiblity"  @handleMaskClick="maskClick">
      123
    </lm-slide-right>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true">
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
        <order-list-item v-for="item in [1,1,1,1,1,1]" @goDetail="goDetail(item)"></order-list-item>
      </div>
    </lm-scroll>
    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>
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
        slideVisiblity: false
      }
    },
    methods: {
      maskClick() {
        this.slideVisiblity = false;
      },
      handleFilterClick() {
        this.slideVisiblity = !this.slideVisiblity
      },
      changeTab(tab) {
        this.actTab = tab;
      },
      goDetail(info) {  //
        console.log(info)
        goforward('orderDetail', {id:info})
      },
      go(path) {
        goforward(path)
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

    .order-list-scroll {
      margin-top: $header-height;
      padding: 10px;
    }

  }
</style>