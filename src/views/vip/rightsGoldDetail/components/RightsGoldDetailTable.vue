<template>
  <div id="gold-detail-table">
    <div class="gold-detail-table-title">
      <span class="w-3">时间</span>
      <span class="w-3">升级金(元)</span>
      <span class="w-4">来源订单</span>
    </div>

    <div class="gold-detail-table-list" ref="goldDetailWrapper">
      <div class="scroll-inner">
        <div class="gold-detail-table-item" v-for="item in goldDetail">
          <span class="w-3">{{item.date}}</span>
          <span class="w-3 font-red">{{parseInt(item.gold).toFixed(2)}}</span>
          <span class="w-4 font-blue">{{item.ordersource}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {golddetail} from 'api/vip'
  export default {
    name: "RightsGoldDetailTable",
    data() {
      return {
        goldDetail: []
      }
    },
    mounted() {
      this.getGolddetail();
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.goldDetailWrapper, {
          mouseWheel: true,
          click: true
        })
      }, 20);
    },
    methods: {
      getGolddetail() {
        golddetail().then(data => {
          this.goldDetail = data.data;
        }).catch(()=> {})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .font-red {
    color: #e61228;
  }
  .font-blue {
    color: #1d6aff;
  }
  #gold-detail-table {
    margin: 10px;
    height: 100%;
    position: relative;
    border: solid transparent 1px;
    .w-3 {
      width: 30%;
    }
    .w-4 {
      width: 40%;
    }

    .gold-detail-table-title {
      z-index: 999;
      position: absolute;
      width: 100%;
      color: #ffffff;
      @include blue-gradient;
      height: $header-height;
      @include flex-row();
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      span {
        display: inline-block;
        text-align: center;
      }

    }

    .gold-detail-table-list {
      background: #fff;
      overflow: hidden;
      position: absolute;
      width: 100%;
      top: $header-height;
      bottom: 0px;
      border-style: solid;
      border-width: 1px;
      border-color: transparent $line-light;
      .gold-detail-table-item {
        height: 38px;
        border-bottom: solid $line-light 1px;
        @include flex-row();
        span {
          display: inline-block;
          text-align: center;
        }
      }
    }
  }

</style>