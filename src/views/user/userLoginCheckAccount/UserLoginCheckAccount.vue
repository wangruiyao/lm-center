<template>
  <div id="checkAccount" class="lm-container">
    <lm-header :title="`选择账号登录`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :data="accountList"
               >

      <div class="account-list">
        <account-item v-for="(item, idx) in accountList"
                      :key="idx"
                      :username="item.username"
                      :avatar="item.avatar"
                      :vip="item.vipdesc"
                      :type="item.usertypedesc">

        </account-item>
      </div>
    </lm-scroll>


  </div>
</template>

<script>
  import AccountItem from "./components/AccountItem";
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  export default {
    name: "UserLoginCheckAccount",
    components: {LmScroll, LmHeader, AccountItem},
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