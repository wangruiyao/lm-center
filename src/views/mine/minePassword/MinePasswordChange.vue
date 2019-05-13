<!-- 密码修改 -->

<template>
  <div id="pwd-change" class="lm-container">
    <lm-header :title="`密码修改`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <div class="cell-container">
      <lm-cell :title="`连萌账号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="填写此账号登录密码"/>
        </div>
      </lm-cell>

    </div>
    <div class="cell-container">
      <lm-cell :title="`连萌账号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="填写此账号登录密码"/>
        </div>
      </lm-cell>
      <lm-cell :title="`连萌账号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="填写此账号登录密码"/>
        </div>
      </lm-cell>

    </div>

    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="">确定</lm-button>
    </div>
  </div>
</template>

<script>
  import LmHeader from "components/lmHeader/LmHeader";
  import LmButton from "components/lmButton/LmButton";
  import LmCell from "../../../components/lmCell/LmCell";
  export default {
    name: "MinePasswordChange",
    components: {LmCell, LmButton, LmHeader}
  }
</script>

<style lang="scss" scoped>
  $button-width: 315px;
  .cell-container {
    margin-top: 10px;
  }
  #pwd-change {
    background: #eee;
  }
  .button-container {
    width: $button-width;
    height: $input-height;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -$button-width/2;
  }
  .cell-container {
  }
</style>