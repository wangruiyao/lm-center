<template>
  <div id="order-delivery-info-list">
    <div class="order-delivery-info-item" v-for="(item,idx) in deliveryInfo">
      <div class="item-info" :class="idx === 0?'act':''">
        <div class="left">
          <span class="data">{{item.date}}</span>
          <span class="time">{{item.time}}</span>
        </div>
        <div class="center">
          <div class="line" v-show="!(idx === (deliveryInfo.length-1))"></div>
          <div class="state-icon" >
            <div class="icon-inner">收</div>
          </div>
        </div>
        <div class="right">
          <div class="state-text">{{item.state}}</div>
          <div>{{item.stateInfo}}</div>
        </div>
      </div>

      <div class="item-info" v-for="(i,d) in item.children">
        <div class="left">
          <span class="data">{{i.date}}</span>
          <span class="time">{{i.time}}</span>
        </div>
        <div class="center">
          <div class="line"></div>
          <div class="state-point" >
            <div class="point-inner"></div>
          </div>
        </div>
        <div class="right">
          <div class="state-text">{{i.state}}</div>
          <div>{{i.stateInfo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDeliveryInfoList",
    data() {
      return {
        deliveryInfo: [
          {
            date: '03-12',
            time: '12:30',
            state: '确认收货',
            stateInfo: '[收货地址]山东省济南市历下区国华经典3号楼'
          },
          {
            date: '03-12',
            time: '12:30',
            state: '物流信息',
            stateInfo: '顺风1234567890123',
            children: [
              {
                date: '03-12',
                time: '12:30',
                state: '派送中',
                stateInfo: '[济南市]山东市场部还蓝图服务部派件员 王浩'
              },
              {
                date: '03-12',
                time: '12:30',
                state: '运输中',
                stateInfo: '在山东济南历下区华信商务进行揽件扫描 '
              },
              {
                date: '03-12',
                time: '12:30',
                state: '已揽件',
                stateInfo: '在山东济南历下区华信商务进行揽件扫描 '
              }
            ]
          },
          {
            date: '03-12',
            time: '12:30',
            state: '已发货',
            stateInfo: '商家已发货'
          }
        ]
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
          font-size: 12px !important;
        }
        .time {
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
          width: 40px;
          height: 40px;
          @include flex-column(center,flex-end);
          span {
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