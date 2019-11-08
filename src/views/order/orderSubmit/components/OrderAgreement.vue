<template>
  <div id="order-aggrement">
    <div class="left">
      <div class="check-box" @click="handleAggrementType(false)">
        <span v-show="aggre" class="lm-icon icon iconfont">&#xe68f;</span>
      </div>
      <span>我已阅读并同意</span>
    </div>
    <div class="right">
      <span @click="handleAggrementType(true,0)">《客户入网服务协议及业务协议》</span>
      <span @click="handleAggrementType(true,1)">《防范电信诈骗违法犯罪温馨提示》</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderAgreement",
    props: {
      aggre: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleAggrementType(status, type) {
        this.$emit('handleAggrementPop', status, type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-aggrement {
    padding: 10px;
    margin-bottom: 10px;
    border: solid 1px transparent;
    @include flex-row();
    width: 375px;
    background: #fff;
    height: 50px;
    .left {
      @include flex-row()
      font-size: 12px;
      color: $color-light;
      .check-box {
        margin: 5px;
        width: 20px;
        height: 20px;
        border: solid $line-deep 1px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        @include flex-column(center);
        color: $blue-color-link;
        span {
          font-size: 12px;
        }
      }
    }
    .right {
      color: $blue-color-link;
      font-size: 10px;
      @include flex-column(center,flex-end)
    }
  }
</style>