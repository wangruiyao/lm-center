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
      <lm-cell :title="`验证码`" :disable="true" v-show="step === 2">
        <div class="cell-input" slot="cellInput">
          <input ref="code" v-model="code" placeholder="填写验证码"/>

        </div>
        <div class="get-code-btn" slot="right-text">
          <span v-if="isCounting > 0">{{getCodeTime}}秒后重新获取</span>
          <span v-else @click="handleGragSlider">获取验证码</span>
        </div>
      </lm-cell>
      <div class="tip2-info" v-show="step === 3">
        <lm-cell v-show="step === 3" :title="`新密码`" :disable="true">
          <div class="cell-input" slot="cellInput">
            <input ref="newpwd" type="password" v-model="newpwd" placeholder="请填写新密码"/>
          </div>
        </lm-cell>
        <lm-cell v-show="step === 3" :title="`确认密码`" :disable="true">
          <div class="cell-input" slot="cellInput">
            <input ref="reNewPwd" type="password" v-model="reNewPwd" placeholder="再次输入新密码"/>
          </div>
        </lm-cell>
      </div>
    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="handleConfirmClick">{{step === '3' ? '确定' : '下一步'}}</lm-button>
    </div>

    <!--滑块验证-->
    <lm-drag-slider-box @dragSliderCheckSuccess="dragSliderCheckSuccess" :visibile="dragSliderVisible"></lm-drag-slider-box>
  </div>
</template>

<script>
  import {searchsendcode,checksetpwd, setpwd} from 'api/user'
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmButton from "../../../components/lmButton/LmButton";
  import LmCell from "../../../components/lmCell/LmCell";
  import LmDragSliderBox from "../../../components/lmDragSliderBox/lmDragSliderBox";
  export default {
    name: "minePasswordFind",
    components: {LmDragSliderBox, LmCell, LmButton, LmHeader},
    data() {
      return {
        dragSliderVisible: false, // 是否显示滑块验证
        iconImg: require('assets/images/pwd-logo.png'),
        step: 1,
        isCounting: false, // 是否正在计时
        getCodeTime: 3,  // 倒计时时间
        infoText: {},
        userName: '',  //第一步验证账户名
        code: '', // 第二步验证验证码
        dragSlider: false,  // 第二步滑块验证
        newpwd: '', // 新密码
        reNewPwd: '', // 重新输入新密码
        tipInfo1: {
          tip1: '忘记密码？',
          tip2: '',
          tip3: '请输入要找回的连萌账号'
        },
        tipInfo2: {
          tip1: '您好！为确保是您本人操作，请完成一下验证',
          tip2: '我们已发送了短信验证码到您的手机',
          tip3: '151****360'
        },
        tipInfo3: {
          tip1: '请输入新密码',
          tip2: '',
          tip3: ''
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
          this.handleGragSlider(true);
        } else if(this.step === 2) {
          if(this.checkStep2()) {
            this.checkSetPwd();

          }

        } else if(this.step === 3) {
          // newpwd: '', // 新密码
          //   reNewPwd: '', // 重新输入新密码
          if(this.newpwd !== this.reNewPwd || this.newpwd === '' || this.reNewPwd === '') {
            Toast('两次密码输入不相同！')
          } else {
            this.setPwd();
          }
        }
      },
      handleGragSlider(type) { // 滑块验证
        if(type === true) {
          this.dragSlider = false;
        }
        this.dragSliderVisible = type;
      },
      checkStep2() {  // 验证第二步信息
        console.log(this.dragSlider)
        if(this.code === '') {
          Toast('请输入验证码');
          return false;
        } else if(!this.dragSlider) {
          Toast('未通过滑块验证！');
          return false;
        } else {
          return true;
        }
      },
      searchSendCode() {  // 根据用户账号发送验证码
        const _this = this;
        searchsendcode({
          username: this.userName
        }).then(data => {
          _this.timeCountDown();
          _this.tipInfo2.tip3 = data.data.mobilephone;
          _this.step = 2;
        })
      },
      checkSetPwd() { //找回密码-验证码验证
        const _this = this;
        const reqParams = {
          username:	this.userName,
          smscode: this.code
        };
        checksetpwd(reqParams).then(rsp => {
          _this.step = 3;
          _this.infoText = this.tipInfo3;
        })
      },
      setPwd() {
        const reqParams = {
          newpwd: this.$RSA(this.newpwd)
        };
        setpwd(reqParams).then(rsp => {
          Toast('修改成功！');
          goback();
        })
      },
      timeCountDown() {
        const _this = this;
        const timmer = setTimeout(function(){
          if(_this.getCodeTime <= 0) {
            _this.isCounting = false;
            setTimeout(timmer);
            _this.getCodeTime = 3
          } else {
            _this.isCounting = true;
            _this.getCodeTime --;
            _this.timeCountDown();
          }
        },1000)
      },
      dragSliderCheckSuccess() {  // 滑块验证通过
        this.dragSlider = true;
        this.searchSendCode();
        this.dragSliderVisible = false;
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
  .get-code-btn {
    width:94px;
    height:26px;
    background:rgba(65,174,252,1);
    color: #fff;
    display: flex !important;
    @include flex-column(center);
    >span {
      white-space: nowrap;
      display: block;
      padding: 0 10px;
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