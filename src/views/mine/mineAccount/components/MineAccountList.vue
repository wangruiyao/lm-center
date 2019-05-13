<template>
  <div id="account-info">
    <!--基本信息-->
    <div class="info-container info-basic">
      <!-- 头像 -->
      <div class="info-basic-item" @click="handleAvatarClick">
        <lm-cell :title="`头像`" :disable="false">
          <div class="info-basic-head" slot="cellInfo">
            <img :src="userInfo.avatar">
          </div>
        </lm-cell>
      </div>
      <!-- 个人信息 -->
      <div class="info-basic-item">
        <lm-cell :title="`账号`" :disable="true">
          <div slot="cellInfo">
            {{userInfo.username}}
          </div>
        </lm-cell>
      </div>
      <div class="info-basic-item">
        <lm-cell :title="`地址`" :disable="true">
          <div slot="cellInfo">
            {{userInfo.area}}
          </div>
        </lm-cell>
      </div>
      <div class="info-basic-item" @click="handleMobileClick">
        <lm-cell :title="`电话`" :disable="false">
          <div slot="cellInfo">
            {{userInfo.mobile}}
          </div>
        </lm-cell>
      </div>
      <div class="info-basic-item" @click="handleIntentionClick">
        <lm-cell :title="`主营意向`" :disable="false">
          <div slot="cellInfo">
            {{userInfo.intention}}
          </div>
        </lm-cell>
      </div>
    </div>

    <div class="info-container info-imprefect">
      <div class="info-basic-item">
        <lm-cell :title="`姓名`" :disable="canComplete" @click="handleCompleteInfoClick()" >
          <div slot="cellInfo">
            {{userInfo.name === '' ? '补充信息后方可领取佣金' : userInfo.name}}
          </div>
        </lm-cell>
      </div>
      <div class="info-basic-item">
        <lm-cell :title="`身份证`" :disable="canComplete" @click="handleCompleteInfoClick()">
          <div slot="cellInfo">
            {{userInfo.pspt === '' ? '补充信息后方可领取佣金' : userInfo.pspt}}
          </div>
        </lm-cell>
      </div>
    </div>
  </div>

</template>

<script>
  import LmCell from "../../../../components/lmCell/LmCell";
  export default {
    name: "MineAccountList",
    components: {LmCell},
    data() {
      return {
        canComplete: true,
        userInfo: {
          "avatar": "/img/logo.1e05f0c9.png",
          "username": "zhonghuaming",
          "area": "山东省济南市历下区",
          "provience": "17",
          "proviencedesc": "山东省",
          "city": "0531",
          "citydesc": "济南市",
          "country": "053101",
          "countrydesc": "历下区",
          "mobile": "18612344321",
          "intention": "通信业",
          "vip": "vip0",
          "vipdesc": "VIP",
          "usertype": "UT00",
          "usertypedesc": "线上能人",
          "status": "US01",
          "statusdesc": "正常",
          "channelid": "11111",
          "channelname": "钟华铭渠道",
          "teamid": "22222",
          "teamname": "团队",
          "develop": "www",
          "point": "0",
          "gold": "0",
          "despoitflag": "0",
          "name": "",
          "pspt": ""
        }
      }
    },
    mounted() {
      if(this.userInfo.name === '' && this.userInfo.pspt === '') {
        this.canComplete = false
      }
    },
    methods: {
      handleAvatarClick() {   // 编辑头像弹出框
        this.$emit('avatarClick', true)
      },
      handleIntentionClick(){ // 编辑主营意向
        this.$emit('intentionClick', true)
      },
      handleMobileClick() { // 更改手机号码
        goforward('mineChangeNumber');
      },
      handleCompleteInfoClick() {
        goforward('minePersonalData')
      }
    }
  }
</script>

<style lang="scss" scoped>

  .info-container {
    margin: 12.5px 0;
    background: #fff;
  }
  .info-basic-head {
    margin: 9px 0;
    width: 48px;
    height: 48px;
    @include flex-row();
    border: solid $line-light 1px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      margin-top: 5px;
    }
  }

</style>