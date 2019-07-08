<template>
  <div id="order-change-info" class="lm-container">
    <lm-header>
      <span slot="left">修改订单信息</span>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="change-info-form">
      <lm-cell :title="`机主姓名：`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="请输入机主姓名" />
        </div>
      </lm-cell>
      <lm-cell :title="`身份证号：`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="请输入机主身份证号" />
        </div>
      </lm-cell>
      <lm-cell :title="`证件地址：`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="请输入机主身份证地址" />
        </div>
      </lm-cell>
      <lm-cell :title="`上传证件照`" :font-large="true">
        <span slot="right-text" class="cell-right-text">未上传</span>
      </lm-cell>
      <!--<lm-cell-->
    </div>

  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderChangeInfo",
    components: {LmCell, LmHeader}
  }
</script>

<style lang="scss" scoped>
#order-change-info {
  background: $bgd-color;
  z-index: 999;
  .change-info-form {
    margin-top: 10px;
    background: #fff;
    .form-item {
      padding: 0 15px;
      border-bottom: solid #eee 1px;
    }
    .cell-input {
      width: 100%;
      input {
        width: 100%;
        color: #666;
      }
    }
    .cell-right-text {
      white-space: nowrap;
      color: $font-red-color;
    }
  }
}
</style>