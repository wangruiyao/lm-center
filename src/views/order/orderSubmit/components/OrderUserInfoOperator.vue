<!-- 运营商商品用户信息-->
<template>
  <div id="order-user-operator">
    <lm-cell :title="`机主姓名：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
          v-model="userName"
          placeholder="请输入机主姓名"
          :disabled="false"
          :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`身份证号：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="userName"
                placeholder="请输入机身份证号"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`证件地址：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="userName"
                placeholder="请输入机主证件地址"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>

    <lm-cell :title="`上传证件照`"
             :disable="false"></lm-cell>
  </div>
</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderUserInfoOperator",
    components: {LmCell},
    data() {
      return {
        userName: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-user-operator {
    width: 375px;
    background: #fff;
    margin-top: 10px;

    .cell-input {
      font-size: 10px !important;
      width: 100%;
    }
  }
</style>