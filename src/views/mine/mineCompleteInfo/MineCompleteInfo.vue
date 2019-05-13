<!-- 完善个人信息 -->
<template>
  <div id="complete-info" class="lm-container">
    <lm-header :title="`完善个人资料`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <div class="cell-container">

      <lm-cell :title="`姓名`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="保持和佣金账户同名"/>
        </div>
      </lm-cell>
      <lm-cell :title="`身份证号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="补充信息后方可领取佣金"/>
        </div>
      </lm-cell>
    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="updateUserInfo">登录</lm-button>
    </div>
  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "MineCompleteInfo",
    components: {LmButton, LmCell, LmHeader},
    mounted() {},
    methods: {
      updateUserInfo() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-width: 315px;

  #complete-info {
    background: #eee;
  }
  .cell-container {
    margin-top: 10px;
    .cell-input {
      width: 100%;
      input {
        width: 100%;
        color: #666;
      }
    }

  }
  .button-container {
    width: $button-width;
    height: $input-height;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -$button-width/2;
  }

</style>