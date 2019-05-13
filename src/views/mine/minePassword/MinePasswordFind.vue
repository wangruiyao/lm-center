<!-- 密码找回 -->
<template>
  <div id="pwd-find" class="lm-container">
    <lm-header :title="`密码找回`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="cell-container">
      <div class="cell">
        <img src="../../../assets/images/pwd-logo.png">
        <div class="cell-desc">
          <span>忘记密码？</span>
          <span class="tips">请输入要找回的连萌账号</span>
        </div>
      </div>
      
      <lm-cell :title="`连萌账号`" :disable="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="填写此账号登录密码"/>
        </div>
      </lm-cell>
    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="updateUserInfo">确定</lm-button>
    </div>
  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmButton from "../../../components/lmButton/LmButton";
  import LmCell from "../../../components/lmCell/LmCell";
  export default {
    name: "minePasswordFind",
    components: {LmCell, LmButton, LmHeader},
    methods: {
      updateUserInfo() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-width: 315px;
  #pwd-find {
    background: #eee;
  }
  .cell {
    background: #fff;
    border-bottom: solid $line-light 1px;
    @include flex-row(baseline);
    padding: 10px;
    img {
      width: 70px;
      margin-right: 10px;
    }
    .cell-desc {
      color: #999;
      font-size: 12px;
      @include flex-column(center,baseline);
      .tips {
        color: #666;
        font-weight: 900;
        font-size: 14px;
        line-height: 26px;
      }
    }
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