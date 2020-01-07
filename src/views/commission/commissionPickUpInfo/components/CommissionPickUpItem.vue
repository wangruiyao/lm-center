<template>
  <div class="pick-up-item">
    <div class="item-cell pick-up-num" @click="goCommissionInfo">
      <div class="cell-left">
        <span class="icon iconfont">&#xe50e;</span> 提现金额
      </div>
      <div class="cell-right">
        <span class="pick-up-amount">{{(Number(awardIssueItem.issuevalue)/100).toFixed(2)}}</span>
        <span>元</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="item-cell">
      <div class="cell-left">
        <span class="icon iconfont">&#xe67a;</span> 发放账户
      </div>
      <div class="cell-right">
        <span>{{awardIssueItem.accounttypedesc}}</span>
        <span>{{awardIssueItem.accountno}}</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="item-cell">
      <div class="cell-left">
        <span class="icon iconfont">&#xe619;</span> 申请时间
      </div>
      <div class="cell-right">
        <span>{{awardIssueItem.createtime}}</span>
        <span>30:31</span>
        <span class="icon iconfont">&#xe66c;</span>
      </div>
    </div>
    <div class="pick-up-result">
      <div class="result">
        <span v-show="!(awardIssueItem.awardstatedesc ==='发放失败')">{{awardIssueItem.updatetime}}</span>
        <span class="fail-tip" v-show="awardIssueItem.awardstatedesc ==='发放失败'" @click="queryLatestOpertion">点击查看失败原因</span>
        <span class="award-state-desc" :class="awardIssueItem.awardstatedesc ==='发放失败'?'award-state-desc-err':''">{{awardIssueItem.awardstatedesc}}</span>
      </div>
      <div class="fail-info">{{latestOpertion.handlereason}}</div>
    </div>
  </div>
</template>

<script>
  import {querylatestopertion} from 'api/commission'
  export default {
    name: "CommissionPickUpItem"
    ,props: {
      awardIssueItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        latestOpertion: {
          opertionid: "",
          createtime: "",
          handlereason: ""
        }
      }
    },
    methods: {
      queryLatestOpertion() {
        const queryParams = {
          issueid: this.awardIssueItem.key
        };
        querylatestopertion(queryParams).then(rsp => {
          console.log(rsp)
          this.latestOpertion = rsp.data;
        })
      },
      goCommissionInfo() {  // 跳转佣金详情
        goforward('pickUpCommissionInfo', {
          id: this.awardIssueItem.key
        })
      }
    }
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
        .award-state-desc {
          font-size: 14px;
        }
        .award-state-desc-err {
          font-size: 14px;
          color: #FF0000;
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