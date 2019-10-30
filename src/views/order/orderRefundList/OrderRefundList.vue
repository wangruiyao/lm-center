<!--退款单列表-->
<template>
  <div id="order-refund-list" class="lm-container">
    <lm-header :title="`退款记录`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :bounce="false"
               :listenScroll="true"
               @setScroll="setScroll"
               @scrollToEnd="scrollToEnd">
      <order-refund-item v-for="item in refundOrderList" :order-details="item" @click="goRefundDetail(item.refundid)"></order-refund-item>
      <div class="footer" v-show="tip !== ''">{{tip}}</div>
    </lm-scroll>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
  import {getrefundlist} from 'api/order';
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import OrderRefundItem from "./components/OrderRefundItem";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  export default {
    name: "OrderRefundList",
    components: {LmScroll, OrderRefundItem, LmHeader},
    data() {
      return {
        tip: '',
        pagenum: 1,
        pagesize: 10,
        total: 0,
        refundOrderList: []
      }
    },
    mounted() {
      this.getRefundList();
    },
    methods: {
      setScroll(scroll){
        this.scroll = scroll;
      },
      goRefundDetail(refundid) {
        goforward('orderRefundDetail', {
          refundid
        })
      },
      getRefundList() { // 获取退款单列表
        getrefundlist({
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }).then(rsp => {
          this.total = rsp.data.total;
          this.refundOrderList.push(...rsp.data.refundlist);
          if(this.total>this.refundOrderList.length) {
            this.scroll.finishPullUp();
            this.scroll.refresh();
            this.tip = '';

          } else {
            this.tip = '已经到底了';
          }

          console.log(JSON.stringify(rsp))
        })
      },
      scrollToEnd() { // 上拉加载
        this.pagenum ++;
        this.getRefundList();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-refund-list {
    @include flex-column();
    .footer {
      height: $header-height;
      @include flex-column(center);
      position: relative;
    }
    .footer::after {
      content: '';
      height: 1px;
      position: absolute;
      width: 100px;
      background: #000;
      left: 30px;
      top: 20px;
    }
    .footer::before {
      content: '';
      height: 1px;
      position: absolute;
      width: 100px;
      background: #000;
      right: 30px;
      top: 20px;
    }
  }
</style>