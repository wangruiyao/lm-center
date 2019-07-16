<template>
  <div id="deposit-center">
    <deposit-center-header></deposit-center-header>
    <deposit-center-buttons></deposit-center-buttons>
    <div class="table-container">
      <div class="buttons">
        <span :class="actTab==='explain'?'act':''" @click="changeTab('explain')">保证金权益及说明</span>
        <span :class="actTab==='record'?'act':''" @click="changeTab('record')">保证金缴纳提取记录</span>
      </div>
      <deposit-center-tab :active="actTab"
                          :despoit = despoitdetail>

      </deposit-center-tab>
    </div>
  </div>
</template>

<script>
  import { despoitdetail } from 'api/vip'
  const DepositCenterHeader = resolve => require(['./components/DepositCenterHeader'], resolve);
  const DepositCenterTab = resolve => require(['./components/DepositCenterTab'], resolve);
  const DepositCenterButtons = resolve => require(['./components/DepositCenterButtons'], resolve);
  export default {
    name: "DepositCenter",
    components: {DepositCenterTab, DepositCenterButtons, DepositCenterHeader},
    data() {
      return {
        actTab: 'explain',
        despoitdetail: []
      }
    },
    mounted() {
      this.getDespoitDetail()
    },
    methods: {
      changeTab(tab) {
        this.actTab = tab;
      },
      getDespoitDetail() {
        const _this = this;
        despoitdetail().then( data => {
          _this.despoitdetail = data.data;
        }).catch( () => {

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: #000;
  }
  #deposit-center {
    position: relative;
    height: 100%;
    .table-container {
      width: 100%;
      background: #fff;
      position: absolute;
      top: 206px;
      bottom: 20px;
      .buttons {
        @include flex-row(space-around);
        height: 44px;
        font-size: 14px;
        span {
          width: 50%;
          text-align: center;
        }
      }
    }
  }
</style>