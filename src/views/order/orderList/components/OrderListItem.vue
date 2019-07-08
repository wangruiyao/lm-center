<template>
  <div id="order-list-item">
    <div class="header">
      <div class="header-left">
        <img src="../../../../assets/images/logo.png">
        <span>山东联通</span>
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </div>
      <div class="header-right">
        <span class="close-time">（交易关闭：05:31:23）</span>
        <span class="order-type">待付款</span>
      </div>
    </div>
    <div class="center" @click="goDetail">
      <img :src="goodImg">
      <div class="order-info">
        <div class="title">
          99元冰激凌预存300（1元语音包）
        <span>800分钟通话，国内流量冰激凌</span>
        </div>

        <div class="title">
          手机地址
          <span>山东省济南市历下区解放路234号国华经典3号楼401</span>
        </div>

        <div class="price">￥<span class="red-font">200.00</span><span>X1</span></div>
      </div>

    </div>
    <div class="order-info-box">
      <span>共1件商品</span>
      <span>合计：￥200.<span>00</span></span>
      <span class="light-font">(邮费：￥10)</span>
    </div>
    <div class="footer">
      <span class="lm-icon icon iconfont">&#xe66a;</span>
      <div class="btn-list">
        <div class="del-btn">删除订单</div>
        <!--<div class="footer-button">-->
          <!--<div class="btn-inner">去付款</div>-->
        <!--</div>-->
        <div class="footer-button">
          <div class="btn-inner" @click="go('orderListDelivery')">物流信息</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  const LmIcon = resolve => require(['components/lmIcon/LmIcon'], resolve);
  export default {
    name: "OrderListItem",
    components: {LmIcon},
    data() {
      return {
        goodImg: require('assets/images/order/good.png')
      }
    },
    methods: {
      goDetail() {
        this.$emit('goDetail');
      },
      go(path) {
        goforward(path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .red-font {
    color: #FF2D00;
  }
  .light-font {
    color: $color-light;
  }
  #order-list-item {
    margin-bottom: 15px;
    width: 354px;
    background: #fff;
    border-radius: 4px;
    box-shadow:0 3px 2px rgba(0,0,0,.1);
    .header {
      .header-left {
        img {
          margin-right: 10px;
          margin-bottom: 5px;
        }
        .iconfont {
          margin-left: 10px;
          color: $color-light;
        }
      }
      .header-right{
        .close-time {
          font-size: 9px;
          color: $color-light;
        }
        .order-type {
          color: #F75929;
        }
      }
      >div {
        height: 100%;
        @include flex-row()
      }
      padding:0 9px;
      height: 35px;
      @include flex-row();
      img {
        width: 20px;
      }
    }
    .center {
      padding: 9px;
      @include flex-row(baseline,end);
      >img {
        flex-shrink: 0;
        width: 83px;
        height: 83px;
      }

      .order-info {

        color: $color-middle;
        margin-left: 10px;
        height: 83px;
        @include flex-column(space-between, baseline);
        >span {
          color: $color-light;
        }
        .title {
          line-height: 14px;
          >span {
            color: $color-light;
          }
        }
        .price {
          line-height: 16px;
          span {
            font-size: 16px;
            margin-right: 5px;
          }
        }
      }
    }

    .order-info-box {
      padding: 5px 10px;
      @include flex-row(flex-end)
      span{
        padding-left: 3px;
      }
    }
    .footer {
      padding: 10px;
      @include flex-row();
      position: relative;
      width: 100%;
      height: 54px;
      >span {
        @include kefu-icon();
        font-size: 28px;
      }
      .btn-list {
        @include flex-row();
        .del-btn {
          color: $color-light;
          font-size: 14px;
          padding: 5px 10px;
          background: #fff;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          border: solid $color-light 1px;
          margin-right: 10px;
        }
        .footer-button {
          border-radius: 4px;
          position: relative;
          padding: 1px;
          @include blue-gradiennt4;
          .btn-inner {
            color: #7069FD;
            border-radius: 3px;
            font-size: 14px;
            background: #fff;
            padding:5px 10px;
          }
        }

      }


    }
    .footer::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0px;
      @include blue-gradiennt3();
    }
  }
</style>