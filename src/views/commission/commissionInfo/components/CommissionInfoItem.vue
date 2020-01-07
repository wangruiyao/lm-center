<template>
  <div class="info-item">
    <div class="info-item-top">
      <div class="item-left">
        <span class="commission-amount">{{(Number(value.awardvalue)/100).toFixed(2)}}</span>
        <span>{{value.awardtypedesc}}</span>
      </div>
      <div class="item-center">
        <div class="item-center-top">
          <span>产生时间：</span>
          <span>{{value.createtime}}</span>
          <span>30:01</span>
        </div>
        <p class="item-center-bottom">
          来源订单:{{value.awardsource}}
        </p>
      </div>
      <div class="item-right">
        <span>{{value.awardstatedesc}}</span>
      </div>
    </div>
    <div class="info-item-bottom" v-show="value.awarddetaildesc">

        {{value.awarddetaildesc}}

    </div>
  </div>
</template>

<script>
  export default {
    name: "CommissionInfoItem",
    props: {
      value: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-item {
    margin: 23px auto;
    width: 360px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    .info-item-top {
      height: 70px;
      @include flex-row();
      .item-left {
        width: 95px;
        height: 100%;
        background:linear-gradient(90deg,rgba(56,168,253,0.95),rgba(68,192,255,0.95));
        color: #fff;
        @include flex-column(center);
        .commission-amount {
          font-size: 24px;

        }
      }

      .item-center {
        width: 215px;
        height: 100%;
        @include flex-column(center, baseline);
        padding: 10px;
        overflow: hidden;

        >div {
          width: 100%;
          margin-bottom: 5px;
        }
        .item-center-bottom {
          width: 90%;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .item-right {
        width: 50px;
        height: 100%;
        @include flex-column(center);
        color: #0081C3;
      }
    }
    .info-item-bottom {
      @include flex-row(space-between,stretch);
      padding: 10px 25px;
      color: #FF0000;
      background: #FED6D6;
      border-top: solid #FF0000 1px;
    }
  }
</style>