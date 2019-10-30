<template>
  <div id="center-order">
    <home-center-box :title="`我的订单`" :desc="`查看全部订单`" @click="goOrder()">
      <div class="item-container">
        <div class="item" v-for="(item, idx) in buttonList " @click="goOrder(idx)">
          <nut-badge
                  :value="item.number"
                  :right="`15px`"
                  class="item"
                  :max="99"
          >
            <img :src="item.url">
            <span>{{item.title}}</span>

          </nut-badge>

        </div>
        <div class="item" @click="goOrderRefundList()">
          <nut-badge
                  :value="refundOrderNumber"
                  :right="`15px`"
                  class="item"
                  :max="99"
          >
            <img :src="require('assets/images/center/order_icon_14.png')">
            <span>退款记录</span>
          </nut-badge>

        </div>
      </div>

    </home-center-box>
  </div>
</template>

<script>
  import {getusertradenum} from 'api/order';
  import HomeCenterBox from "./HomeCenterBox";
  export default {
    name: "HomeCenterOrder",
    components: {HomeCenterBox},
    data() {
      return {
        buttonList: [
          {
            title: '代付款',
            url: require('assets/images/center/order_icon_03.png'),
            flag: 0,
            number: 0
          },
          {
            title: '代发货',
            url: require('assets/images/center/order_icon_06.png'),
            flag: 1,
            number: 0
          },
          {
            title: '待收货',
            url: require('assets/images/center/order_icon_08.png'),
            flag: 2,
            number: 0
          },
          {
            title: '待处理',
            url: require('assets/images/center/order_icon_10.png'),
            flag: 3,
            number: 0
          }
        ],
        refundOrderNumber: 0  // 退款单数量
      }
    },
    mounted() {
      this.getUserTradeNum();
      this.getRefundOrderTradeNum();
    },
    methods: {
      async getUserTradeNum() { //订单量展示
        for(let i=0;i<this.buttonList.length;i++) {
          await getusertradenum({
            flag: this.buttonList[i].flag
          }).then(rsp => {
            this.buttonList[i].number = rsp.data.number
          })
        }
      },
      getRefundOrderTradeNum() {  // 退款单订单量
        getusertradenum({
          flag: 4
        }).then(rsp => {
          this.refundOrderNumber = rsp.data.number
        })
      },
      goOrder(type) { // 跳转订单列表
        if(type !== undefined) {
          goforward('orderList', {
            type
          })
        } else {
          goforward('orderList');
        }

      },
      goOrderRefundList() { // 跳转退款单列表
        goforward('orderRefundList')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #center-order {
    .item-container {
      @include flex-row(space-around);
      padding: 10px 0;
      .item {
        margin: 10px 0;
        img {
          width: 80%;
          margin-bottom: 5px;
        }
        @include flex-column()
      }
    }

  }
</style>