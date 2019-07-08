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
        <img :src="iconImg">
        <div class="cell-desc">
          <span>{{infoText.tip1}}</span>
          <span>{{infoText.tip2}}</span>
          <span class="tips">{{infoText.tip3}}</span>
        </div>
      </div>
      <lm-cell :title="`连萌账号`" :disable="true" v-show="step === 1">
        <div class="cell-input" slot="cellInput">
          <input v-model="userName" placeholder="连萌账号"/>
        </div>
      </lm-cell>
    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="handleConfirmClick">{{step === '3' ? '确定' : '下一步'}}</lm-button>
    </div>
  </div>
</template>

<script>
  import {searchsendcode} from 'api/user'
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmButton from "../../../components/lmButton/LmButton";
  import LmCell from "../../../components/lmCell/LmCell";
  export default {
    name: "minePasswordFind",
    components: {LmCell, LmButton, LmHeader},
    data() {
      return {
        iconImg: require('assets/images/pwd-logo.png'),
        step: 1,
        infoText: {},
        userName: '',  //第一步验证账户名
        code: '', // 第二步验证验证码
        newpwd: '', // 新密码
        tipInfo1: {
          tip1: '忘记密码？',
          tip2: '',
          tip3: '请输入要找回的连萌账号'
        },
        tipInfo2: {
          tip1: '您好！为确保是您本人操作，请完成一下验证',
          tip2: '我们已发送了短信验证码到您的手机',
          tip3: '151****360'
        }
      }
    },
    watch: {
      step(newVal) {
        this.infoText = this[`tipInfo${newVal}`]
      }
    },
    mounted() {
      this.infoText = this.tipInfo1;
    },
    methods: {
      handleConfirmClick() {
        if(this.step === 1) {
          this.searchSendCode();
        } else if(this.step === 2) {
          this.infoText = this.tipInfo3;
        } else if(this.step === 3) {

        }
      },
      searchSendCode() {
        const _this = this;
        searchsendcode({
          username: this.userName
        }).then(data => {
          console.log(data);
          _this.tipInfo2.tip3 = data.data.mobilephone;
          _this.step = 2;
        })
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