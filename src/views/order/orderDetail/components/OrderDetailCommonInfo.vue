<template>
  <div id="common-info">
    <div class="order-type">
      <img :src="resultImg">
      <div>
        <span class="font-18">交易成功</span>
        <span>预估佣金: ￥200.00</span>
      </div>
    </div>
    <!-- 用户信息错误显示 -->
    <div class="userInfo-err-box" v-show="false">
      <div class="left">
        <p class="err font-14">您的开户人信息有误</p>
        <p class="err-info">身份证属于联通黑名单请更换开户人信息。身份证属于联通黑名单请更换开户人信息。</p>
      </div>
      <div class="right">
        <div class="order-revise">去修改</div>
      </div>
    </div>

    <!--物流信息-->
    <div class="info-box delivery-info" @click="go('orderDetailDelivery')">
      <div class="info-icon">
        <span class="lm-icon icon iconfont">&#xe602;</span>
      </div>
      <div class="main-info">
        <p class="delivery-info font-14">
          快件已被<span>从右数第二棵树下消防栓</span>签收，如有问题请电联业务员：付宝龙【15688889998】。
        </p>
        <p class="delivery-time footer">2019-02-19 12:29:13</p>
      </div>
      <div class="right-icon">
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </div>
    </div>

    <!-- 收件人信息 -->
    <div class="info-box receiver-info">
      <div class="info-icon">
        <span class="lm-icon icon iconfont">&#xe5ab;</span>
      </div>
      <div class="main-info font-14">
        <p>
          韩铂金 <span class="receiver-number">12222222222</span>
        </p>
        <p class="footer">山东省 济南市 历下区 解放路234号 国华经典3号楼1单元1801</p>
      </div>
      <div class="right-icon"></div>
    </div>

    <!-- 开户信息 -->
    <div class="account-open-info">
      <div class="account-open-info-top">开户信息</div>
      <div class="account-open-info-bottom">
        <span>
          开户人：王浩
          <span>37010219960405292X</span>
        </span>

        <span class="lm-icon icon iconfont id-card">&#xe679;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailCommonInfo",
    data() {
      return {
        resultImg: require('assets/images/order/order_res_success.png')
      }
    },
    methods: {
      go(path) {
        this.$emit('go', path)
      }
    }
  }
</script>

<style lang="scss" scoped>

  #common-info {
    margin-bottom: 10px;
    box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.13);
    .order-type {
      position: relative;
      @include flex-row();
      img {
        width: 100%;
      }
      >div {
        /*font-weight: 100;*/
        position: absolute;
        left: 33px;
        line-height: 24px;
        @include flex-column(center);
        color: #fff;
        @include flex-column(baseline,baseline);
      }
    }
    .userInfo-err-box {
      @include flex-row();
      background: #fff;
      margin: 10px;
      padding: 10px 0 10px 10px;
      min-height:64px;
      background:rgba(255,255,255,1);
      border-radius:10px;
      .left {
        position: relative;
        flex-grow: 1;
        padding-right: 10px;
        .err {
          color: #FF2D00;
        }
      }
      .left::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 3px;
        background: #eee;
        top: 0;
        right: 0;
      }
      .right {
        flex-shrink: 0;
        width: 100px;
        height: 100%;
        @include flex-column(center);
        >div {
          font-weight: 100;
          background: #6486EE;
          color: #fff;
          @include flex-column(center);
          width: 55px;
          height: 22px;
          border-radius: 2px;
        }
      }
    }
    .info-box {
      background: #fff;
      border-bottom: solid $line-light 1px;
      padding: 10px;
      min-height: 93px;
      @include flex-row();
      .info-icon {
        width: 35px;
        height: 35px;
        flex-shrink: 0;
        @include blue-gradient;
        color: #fff;
        @include flex-column(center);
        border-radius: 50%;
        span {
          font-size: 20px;
          line-height: 20px;
          font-weight: 100;
        }
      }

      .main-info {
        flex-grow: 1;
        padding: 0 10px;
        >p {
          line-height: 18px;
        }

        >.delivery-info {
          color: $blue;
          >span {
            margin: 0 5px;
          }
        }
        >.delivery-time {
          color: $color-light;
        }
        >.footer {
          margin-top: 5px;
        }
      }
      .right-icon {
        width: 40px;
        text-align: right;
        >span {
          font-size: 20px;
          color: $color-light;
        }

      }
    }

    .receiver-info {
      .receiver-number {
        color: $blue;
        font-size: 12px;
      }
    }

    .account-open-info {
      @include flex-column(space-around,baseline);
      background: #fff;
      padding: 10px;
      height: 77px;
      .account-open-info-top {
        color: $color-middle;
      }
      .account-open-info-bottom {
        width: 100%;
        @include flex-row();
        font-size: 14px;
        .id-card {
          font-size: 22px;
          color: #1376FD;
        }
      }
    }
  }
</style>