<template>
  <div class="pick-up-item">
    <div class="item-cell pick-up-num">
      <div class="cell-left">
        <span class="icon iconfont">&#xe50e;</span> 提现金额
      </div>
      <div class="cell-right">
        <span class="pick-up-amount">2130.00</span>
        <span>元</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="item-cell">
      <div class="cell-left">
        <span class="icon iconfont">&#xe67a;</span> 发放账户
      </div>
      <div class="cell-right">
        <span>支付宝</span>
        <span>15165111360</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="item-cell">
      <div class="cell-left">
        <span class="icon iconfont">&#xe619;</span> 申请时间
      </div>
      <div class="cell-right">
        <span>2018-12-21</span>
        <span>30:31</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="pick-up-result">
      <div class="result">
        <span>2019-02-12</span>
        <span class="fail-tip">失败原因</span>
        <span>审核中</span>
      </div>
      <div class="fail-info">系统超时，该笔金额已返回至待提现佣金，请重新申请提现。</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommissionPickUpItem"
  }
</script>

<style lang="scss" scoped>
  .pick-up-item {
    width: 360px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 22px;

    .item-cell {
      background:linear-gradient(90deg,rgba(56,168,253,0.95),rgba(68,192,255,0.95));
      border-bottom: solid #83D5FF 1px;
      color: #fff;
      height: 29px;
      @include flex-row();
      padding-left: 18px;

      .cell-left {
        >span {
          display: inline-block;
          margin-right: 10px;
        }
      }

      .cell-right {
        height: 100%;
        @include flex-row();
        span{
          margin-right: 5px;
        }
        .iconfont {
          opacity: 0;
        }
        .pick-up-amount {
          font-size: 18px;
        }
      }

    }
    .pick-up-num {
      height: 37px;
      .cell-right {
        .iconfont {
          opacity: 1;
        }
      }
    }
    .pick-up-result {
      color: #0081C3;
      padding-right: 20px;
      .result {
        @include flex-row(flex-end);
        height: 37px;
        background: #fff;
        >span {
          margin-left: 5px;
        }
        .fail-tip {
          font-size: 9px;
        }
      }

      .fail-info {
        font-size: 9px;
        text-align: right;
        padding-bottom: 8px;
      }
    }

  }
</style>