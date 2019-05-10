<template>
  <div id="checkAccount" class="lm-container">
    <lm-header :title="`选择账号登录`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <div class="account-list">
      <account-item v-for="item in accountList"
                    :username="item.username"
                    :avatar="item.avatar"
                    :vip="item.vipdesc"
                    :type="item.usertypedesc">

      </account-item>
    </div>

  </div>
</template>

<script>
  import AccountItem from "./components/AccountItem";
  import LmHeader from "../../../components/lmHeader/LmHeader";
  export default {
    name: "UserLoginCheckAccount",
    components: {LmHeader, AccountItem},
    data() {
      return {
        accountList: [
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhonghuaming",
            "vip": "vip0",
            "vipdesc": "VIP",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          },
          {
            "avatar": "../../../../assets/images/default-avatar.png",
            "username": "zhong",
            "vip": "vip1",
            "vipdesc": "VIP1",
            "usertype": "UT00",
            "usertypedesc": "线上能人"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #checkAccount {
    @include flex-column(baseline)
  }
</style>