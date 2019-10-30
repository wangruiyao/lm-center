<!-- 密码修改 -->

<template>
  <div id="pwd-change" class="lm-container">
    <lm-header :title="`密码修改`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <div class="cell-container">
      <lm-cell :title="`原密码`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input v-model="oldpwd" placeholder="请输入原密码"/>
        </div>
      </lm-cell>

    </div>
    <div class="cell-container">
      <lm-cell :title="`新密码`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input v-model="newpwd" placeholder="请输入新密码"/>
        </div>
      </lm-cell>
      <lm-cell :title="`确认密码`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input v-model="reNewpwd" placeholder="确认新密码"/>
        </div>
      </lm-cell>

    </div>

    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="changePwdConfirm">确定</lm-button>
    </div>
  </div>
</template>

<script>
  import {changepwd} from 'api/user'
  import LmHeader from "components/lmHeader/LmHeader";
  import LmButton from "components/lmButton/LmButton";
  import LmCell from "../../../components/lmCell/LmCell";
  export default {
    name: "MinePasswordChange",
    components: {LmCell, LmButton, LmHeader},
    data() {
      return {
        oldpwd: '',
        newpwd: '',
        reNewpwd: ''
      }
    },
    methods: {
      checkPwd() {  // 验证两次密码是否相等
        console.log(this.oldpwd, this.newpwd)
        if(this.oldpwd === '') {
          Toast('请输入原密码');
          return false;
        }else if(this.newpwd === '') {
          Toast('请输入新密码');
          return false;
        }else if(this.reNewpwd !== this.newpwd) {
          Toast('两次密码输入不相同！');
          return false;
        } else {
          return true;
        }
      },
      changePwdConfirm() {  // 提交修改密码
        if(this.checkPwd()) {
          const reqParams = {
            oldpwd: this.$RSA(this.oldpwd),
            newpwd: this.$RSA(this.newpwd)
          };
          changepwd(reqParams).then(rsp => {
            if(rsp.subcode === '10000') {
              Toast({
                message: '修改成功',
                position: 'bottom',
              }).then(()=> {
                goback();
              })
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-width: 315px;
  .cell-container {
    margin-top: 10px;
  }
  #pwd-change {
    background: #eee;
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
  .cell-container {
  }
</style>