<template>
  <div id="order-detail-good-info">
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
    <div class="goods-box" v-for="i in [1,1]">
      <div class="center">
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

          <div class="price">￥<span class="red">200.00</span><span>x1</span></div>
        </div>
      </div>

      <div class="footer">
        <div>
          [顺丰]121323142154325
          <span class="blue"> 复制单号</span>
        </div>
        <div class="btn">申请退款</div>
      </div>
    </div>
    <div class="price-box">
      <div class="price-item">
        <span>套餐价格</span>
        <span>￥260.00</span>
      </div>
      <div class="price-item">
        <span>号码价格</span>
        <span>￥-10.00</span>
      </div>
      <div class="price-item">
        <span>新增预存款</span>
        <span>￥0.00</span>
      </div>
      <div class="price-item">
        <span>优惠金额</span>
        <span>￥-10.00</span>
      </div>
      <div class="price-item">
        <span>运费</span>
        <span>￥0.00</span>
      </div>
      <div class="price-total">
        <span>订单金额</span>
        <span class="price-number">￥250.00</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailGoodsInfo",
    data() {
      return {
        goodImg: require('assets/images/order/good.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .red {
    color: #FF2D00;
  }
  .blue {
    color: $blue-color-link;
  }
  #order-detail-good-info {
    width: 375px;
    background: #fff;
    box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.13);
    margin-bottom: 10px;
    padding: 0 10px 10px;
    border-radius: 0 0 4px 4px;
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
    .goods-box::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0px;
      @include blue-gradiennt3();
    }
    .goods-box {
      padding: 0 5px 5px;
      position: relative;
      margin-bottom: 10px;
      .center {
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

      .footer {
        padding: 5px;
        @include flex-row();
        .btn {
          @include flex-column(center);
          width: 80px;
          height: 30px;
          font-size: 14px;
          color: $color-middle;
          border-radius: 4px;
          border: solid $color-middle 1px;
        }

      }
    }
    .price-box {
      .price-item{
        color: #7C7C7C;
        padding: 0 5px;
        @include flex-row();
      }

      .price-total {
        font-size: 14px;
        padding: 5px;
        @include flex-row();
        .price-number {
          color: #EC4747;
        }
      }
    }

  }
</style>