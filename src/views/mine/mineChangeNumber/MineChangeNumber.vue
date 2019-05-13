<!-- 修改手机号码 -->

<template>
  <div id="change-number" class="lm-container">
    <lm-header :title="`变更手机号`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="cell-container">
      <lm-cell :title="`账号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input v-model="userInfo.username" readonly/>
        </div>
      </lm-cell>
      <lm-cell :title="`手机号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="请输入新手机号" v-model="userInfo.mobile" type="number"/>
        </div>
      </lm-cell>
      <lm-cell :title="`登录密码`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="填写此账号登录密码" type="password"/>
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
  import LmHeader from "components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "MineChangeNumber",
    components: {LmButton, LmCell, LmHeader},
    data() {
      return {
        userInfo: {
          "username": "zhonghuaming",
          "mobile": "18612344321",
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-width: 315px;
  #change-number {
    background: #eee;
  }
  .cell-container {
    margin-top: 10px;
  }
  .cell-input {
    width: 100%;
    input {
      width: 100%;
      color: #666;

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