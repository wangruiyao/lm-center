<template>
  <div id="login-button-list">
    <div class="login-button">
      <lm-button :is-active="true"
                 :actType="`active-blue`"
                 @click="handleLoginClick">登录</lm-button>
    </div>
    <div class="login-other-button">
      <span>找回密码</span>
      <span @click="goUserRegister">立即注册</span>
    </div>
  </div>
</template>

<script>
  import LmButton from "../../../../components/lmButton/LmButton";
  export default {
    name: "UserLoginButtonList",
    components: {LmButton},
    methods: {
      goUserRegister() {
        goforward('userRegister')
      },
      handleLoginClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #login-button-list {
    width: 315px;
    margin-top: 140px;
    .login-button {
      height: $input-height;
    }
    .login-other-button {
      @include flex-row(space-between);
      color: $blue-color;
      align-items: center;
      padding: 15px;
    }

  }
</style>