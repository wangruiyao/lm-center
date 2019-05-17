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
    <!-- avatar -->
    <MineAccountPopup :show-avatar="isShowAvatar" @closePop="handleAvatarEdit" @updateAvatar="updateAvatar"></MineAccountPopup>
    <MineIntentionPopup :show-intention="isShowIntention" @closePop="handleIntentionClick"></MineIntentionPopup>

  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import MineAccountList from "./components/MineAccountList";
  import MineAccountPopup from "./components/MineAccountPopup";
  import MineIntentionPopup from "./components/MineIntentionPopup";
  export default {
    name: "MineAccount",
    components: {MineIntentionPopup, MineAccountPopup, MineAccountList, LmCell, LmHeader},
    data() {
      return {
        isShowAvatar: false,
        isShowIntention: false,
        userInfo: {}
      }
    },
    mounted() {
      this.userInfo = this.$store.state.users.userInfo;
    },
    methods: {
      handleAvatarEdit(status) {
        this.isShowAvatar = status;
      },
      handleIntentionClick(status) {
        this.isShowIntention = status
      },
      updateAvatar(avatarUrl) {  // 改变头像
        // alert(avatarUrl)

        console.log(avatarUrl)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lm-container {
    background: #eee;
  }

</style>