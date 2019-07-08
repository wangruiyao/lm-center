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
                      :user-info="item" @chooseUser="chooseUser">

        </account-item>
      </div>
    </lm-scroll>


  </div>
</template>

<script>
  import {chooseuser} from 'api/user'
  import AccountItem from "./components/AccountItem";
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  export default {
    name: "UserLoginCheckAccount",
    components: {LmScroll, LmHeader, AccountItem},
    data() {
      return {
        accountList: []
      }
    },
    mounted() {
      if(this.$route.params.userInfo === undefined) {
        Toast('未获取到用户信息，请重新登录');
        goforward('userLogin')
      } else {
        this.accountList = this.$route.params.userInfo
      }
      console.log(this.$route.params.userInfo)
    },
    methods: {
      getUserInfo() {
        this.$store.dispatch('users/userInfo').then(data=>{
          goforward('homeCenter');
          Toast({
            message: '登陆成功',
            position: 'bottom'
          });
        })
      },
      chooseUser(params) {
        const _this = this;
        const requestParam = {
          userid: params.id,
          mobilephone: params.mobilephone
        };
        chooseuser(requestParam).then(data=> {
          console.log(data);
          _this.getUserInfo();
        }).catch()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #checkAccount {
    @include flex-column(baseline)
  }
</style>