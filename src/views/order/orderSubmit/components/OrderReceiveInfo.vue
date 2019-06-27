<!-- 收货信息 -->
<template>
  <div id="order-receive-info">
    <lm-cell :title="`货主姓名：`"
             :disable="true"
             v-if="goodType === `commodity`">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="userName"
                placeholder="请输入收货人姓名"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
    <lm-cell :title="`联系电话：`"
             :disable="true">
      <div class="cell-input" slot="cellInput">
        <nut-textinput
                v-model="userName"
                placeholder="请输入收货人联系电话"
                :disabled="false"
                :hasBorder="false"></nut-textinput>
      </div>
    </lm-cell>
    <div v-if="goodType === `commodity` || goodType === `numberCard`">
      <lm-cell :title="`收货地址：`"
               :disable="false" @click="go('orderCityPicker')"></lm-cell>

      <lm-cell :title="`详细地址：`"
               :disable="true">
        <div class="cell-input" slot="cellInput">
          <nut-textinput
                  v-model="userName"
                  placeholder="请输入详细收货地址（街道、小区、楼号）"
                  :disabled="false"
                  :hasBorder="false"></nut-textinput>
        </div>
      </lm-cell>
    </div>

  </div>
</template>

<script>
  const LmCell = resolve => require(['components/lmCell/LmCell'], resolve);
  export default {
    name: "OrderReceiveInfo",
    components: {LmCell},
    props: {
      goodType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        userName: ''
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
  #order-receive-info {
    width: 375px;
    margin-top: 10px;
    .cell-input {
      width: 100%;
    }
  }
</style>