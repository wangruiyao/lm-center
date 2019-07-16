<!-- 我的账号 -->

<template>
  <div id="mine-account" class="lm-container">
    <lm-header :title="`我的账号`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <mine-account-list @avatarClick="handleAvatarEdit"
                       @intentionClick="handleIntentionClick"
                       :user-info="userInfo"></mine-account-list>
    <div class="change-account-btn" @click="changAccount">
      <lm-button :is-active="true" :actType="`active-blue`">切换账号</lm-button>
    </div>

    <!-- avatar -->
    <MineAccountPopup :show-avatar="isShowAvatar" @closePop="handleAvatarEdit" @updateUserInfo="updateUserInfo"></MineAccountPopup>
    <MineIntentionPopup :show-intention="isShowIntention" @handleCheckIntention="handleCheckIntention" @closePop="handleIntentionClick"></MineIntentionPopup>

  </div>
</template>

<script>
  import {updateuserinfor} from 'api/user.js';
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import MineAccountList from "./components/MineAccountList";
  import MineAccountPopup from "./components/MineAccountPopup";
  import MineIntentionPopup from "./components/MineIntentionPopup";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "MineAccount",
    components: {LmButton, MineIntentionPopup, MineAccountPopup, MineAccountList, LmCell, LmHeader},
    data() {
      return {
        isShowAvatar: false,
        isShowIntention: false,
        userInfo: this.$store.state.users.userInfo
      }
    },
    mounted() {
      // this.userInfo = this.$store.state.users.userInfo;
    },
    methods: {
      handleAvatarEdit(status) {
        this.isShowAvatar = status;
      },
      handleIntentionClick(status) {
        this.isShowIntention = status
      },

      changAccount() {  // 切换账号
        sessionStorage.clear();
        goforward('userLogin');
      },
      updateUserInfo(params) {  //更新用户信息
        const _this = this;
        updateuserinfor(params).then(data => {
          Toast({
            message: '修改成功',
            position: 'bottom'
          });
          _this.isShowAvatar = false;
          _this.$store.dispatch('users/userInfo')
        })
      },
      handleCheckIntention(intention) {
        // console.log(intention);
        const _this = this;
        updateuserinfor(intention).then((data) => {
          _this.$store.dispatch('users/userInfo');
          _this.isShowIntention = false;
          Toast({
            message: '修改成功',
            position: 'bottom'
          });

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lm-container {
    background: #eee;
    .change-account-btn {
      height: $input-height;
      width: 315px;
      position: fixed;
      bottom: 37px;
      left: 30px;
    }
  }

</style>