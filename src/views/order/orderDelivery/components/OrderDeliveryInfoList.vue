<template>
  <div id="order-delivery-info-list">
    <div class="order-delivery-info-item" v-for="(item,idx) in deliveryInfo">
      <div class="item-info" :class="idx === 0?'act':''">
        <div class="left">
          <!--<span class="data">{{computeDate(item.time)}}</span>-->
          <!--<span class="time">{{computeTime(item.time)}}</span>-->
        </div>
        <div class="center">
          <div class="line"></div>
          <div class="state-icon" >
            <div class="icon-inner">
              <span class="icon iconfont">{{statusIcon(item.handlecode)}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="state-text">{{item.handlename}}</div>
          <div>{{item.stateInfo}}</div>
        </div>
      </div>

      <div class="item-info" v-for="(i,d) in item.items">
        <div class="left">
          <span class="data">{{computeDate(i.time)}}</span>
          <span class="time">{{computeTime(i.time)}}</span>
        </div>
        <div class="center">
          <div class="line" v-show="!(idx === deliveryInfo.length-1 && d === item.items.length-1)"></div>
          <div class="state-point" >
            <div class="point-inner"></div>
          </div>
        </div>
        <div class="right">
          <div class="state-text">{{i.statusname}}</div>
          <div>{{i.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {orderprogress} from 'api/order'

  export default {
    name: "OrderDeliveryInfoList",
    data() {
      return {
        deliveryInfo: []
      }
    },
    mounted() {
      this.getOrderprogress()
    },
    methods: {
      getOrderId() {  // 获取订单id
        return JSON.parse(this.$route.params.orderinfo).orderid;
      },
      getOrderprogress() {  //前台-订单流程展示
        orderprogress({
          orderid: this.getOrderId()
        }).then(rsp => {
          console.log('订单流程', JSON.stringify(rsp.data))
          this.deliveryInfo = rsp.data;
        })
      },
      computeDate(time) { // 计算日期
        return time.split(' ')[0]
      },
      computeTime(time) { // 计算时间
        return time.split(' ')[1]
      },
      statusIcon(handlecode) {  //计算状态icon
        switch (handlecode) {
          // 订单提交
          case '0':
            return '\ue637';
          // 订单支付
          case '1':
            return '\ue638';
          // 订单审核
          case '2':
            return '\ue771';
          // 订单分配
          case '3':
            return '\ue674';
          // 订单发货
          case '4':
            return '\ue661';
          // 订单收货
          case '5':
            return '\ue65c';
          // 订单归档
          case '6':
            return '\ue636';


        }
        // return '&#xe7d8;'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-delivery-info-list {
    margin: 5px 7px;
    background: #fff;
    .act{
      color: $color-deep !important;
      .left {
        .data {
          white-space: nowrap;
          font-size: 12px !important;
        }
        .time {
          white-space: nowrap;
          color: $color-light;
        }
      }
      .line {
        background: #2698FA !important;
      }
      .state-icon {
        .icon-inner {
          @include btn-active-blue;
          border: unset !important;
        }
      }
    }
    .order-delivery-info-item {
      .item-info {
        color: $color-light;
        @include flex-row(baseline,stretch);
        padding: 10px;
        .left {
          flex-shrink: 0;
          width: 60px;
          height: 40px;
          @include flex-column(center,flex-end);
          span {
            white-space: nowrap;
            font-size: 10px;
            line-height: 12px;
          }
        }
        .center{
          position: relative;
          width: 41px;
          flex-shrink: 0;
          @include flex-column();
          .state-point {
            width: 8px;
            height: 8px;
            position: absolute;
            top: 19px;
            background: #fff;
            border-radius: 50%;
            @include flex-column(center);
            .point-inner {
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: $color-light;
            }
          }
          .state-icon {
            .icon-inner {
              border: solid $color-light 1px;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              text-align: center;
              line-height: 28px;
            }

            background: #fff;
            padding: 2px;
            top: 6px;
            position: absolute;
            border-radius: 50%;
            z-index: 100;
          }
          .line {
            position: absolute;
            top: 20px;
            bottom: -40px;
            width: 1px;
            background: $color-light;
          }
        }

        .right {
          width: 240px;
          .state-text {
            font-size: 14px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
</style>