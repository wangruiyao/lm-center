<!-- 修改手机号码 -->

<template>
  <div id="change-number" class="lm-container">
    <lm-header :title="`变更手机号`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="cell-container">
       <div v-show="step === 1">
        <lm-cell :title="`账号`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="userInfo.username" readonly/>
          </div>
        </lm-cell>
        <lm-cell :title="`手机号`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input placeholder="请输入新手机号" v-model="userInfo.mobile" type="number"/>
          </div>
        </lm-cell>
        <lm-cell :title="`登录密码`" :disable="true" :font-large="true">
          <div class="cell-input" slot="cellInput">
            <input v-model="password" placeholder="填写此账号登录密码" type="password"/>
          </div>
        </lm-cell>
      </div>

      <div v-show="step === 2">
        <lm-cell :title="`新手机号码`" :disable="true" :font-large="true">
          <div class="cell-input step2-input" slot="cellInput">
            <input v-model="mobile" placeholder="请输入手机号码"/>
          </div>
        </lm-cell>
        <lm-cell :title="`验证码`" :disable="true" :font-large="true">
          <div class="cell-input step2-input" slot="cellInput">
            <input v-model="smscode" placeholder="请输入验证码" type="password"/>
          </div>
          <div slot="right-text" class="get-code-btn">
            <span @click="getCode" v-show="!isCounter">获取验证码</span>
            <span v-show="isCounter">{{count}}秒后重新获取</span>
          </div>
        </lm-cell>
      </div>


    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="handleBtnClick">
        <span class="font-18">
          {{step === 1?'下一步':'确定'}}
        </span>
      </lm-button>
    </div>
  </div>
</template>

<script>
  let timmer = null;
  import {verifyuser, updatemobile} from 'api/user'
  import LmHeader from "components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "MineChangeNumber",
    components: {LmButton, LmCell, LmHeader},
    data() {
      return {
        count: 5,
        isCounter: false,
        step: 1,
        password: '', // 验证用户信息密码
        mobile: '', // 新手机号
        smscode: '' // 验证码
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.users.userInfo
      }
    },
    methods: {
      handleBtnClick() {
        if(this.step === 1) {
          this.verifyUser();
          // this.step = 2
        } else {
          this.updateMobile();
        }
      },
      verifyUser() {  // 验证用户身份信息
        const _this = this;
        const params = {
          password: this.$RSA(this.password)
        };
        verifyuser(params).then(data => {
          _this.step = 2;
        })
      },
      getCode() {
        if(this.mobile === '') {
          Toast('请输入手机号')
        } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.mobile))) {
          Toast('手机号码格式有误')
        } else {
          this.isCounter = true;
          this.counter();
          Toast('验证码发送成功！')
        }
      },
      counter() {
        const _this = this;
        timmer = setInterval(function(){
          _this.count --;
          if(_this.count < 0) {
            clearInterval(timmer);
            _this.isCounter = false;
            _this.count = 5;
          }
        },1000)
      },
      updateMobile() {
        const params = {
          mobile: this.mobile,
          smscode: this.smscode
        };
        updatemobile(params).then(data => {
          console.log(data)
        })
        // Toast({
        //   message: '修改成功',
        //   position: 'bottom',
        //   duration: 1000
        // }).then(() => {
        //   goback();
        // });
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
  .get-code-btn {
    position: relative;
    @include btn-active-blue;
    display: flex !important;
    @include flex-column(center);
    height:26px;
    padding: 3px;
    span {
      white-space: nowrap;
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
  .step2-input {
    padding-left: 10px;
  }
</style>