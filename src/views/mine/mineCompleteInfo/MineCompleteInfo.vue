<!-- 完善个人信息 -->
<template>
  <div id="complete-info" class="lm-container">
    <lm-header :title="`完善个人资料`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <div class="cell-container">

      <lm-cell :title="`姓名`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="保持和佣金账户同名" v-model="updateParams.name"/>
        </div>
      </lm-cell>
      <lm-cell :title="`身份证号`" :disable="true" :font-large="true">
        <div class="cell-input" slot="cellInput">
          <input placeholder="补充信息后方可领取佣金" v-model="updateParams.pspt"/>
        </div>
      </lm-cell>
    </div>
    <div class="button-container">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="updateUserInfo">
        <span class="button-span">确定</span>
      </lm-button>
    </div>
  </div>
</template>

<script>
  import {IdCardValidate} from 'utils/validForm/idcardValidate';
  import {updateuserinfor} from 'api/user'
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "MineCompleteInfo",
    components: {LmButton, LmCell, LmHeader},
    data() {
      return {
        updateParams: {
          name: '',
          pspt: ''
        }
      }
    },
    mounted() {
      console.log(IdCardValidate)
    },
    methods: {
      updateUserInfo() {
        const _this = this;
        if(this.updateParams.name === '') {
          Toast('姓名不能为空！');
        } else if(!IdCardValidate(this.updateParams.pspt)) {
          Toast('请填写正确身份证号码！');
          this.updateParams.pspt = ''
        } else {
          updateuserinfor(this.updateParams).then(data=> {
            _this.$store.dispatch('users/userInfo').then(data=>{})
            goback();
          })
        }
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