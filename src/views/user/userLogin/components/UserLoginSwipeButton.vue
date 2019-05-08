<template>
  <div id="spipe-button">
    <div @click="toggleLoginType('account')"
         :class="actModle === 'account' ? 'act-btn' : ''">账号密码登录</div>
    <div @click="toggleLoginType('number')"
         :class="actModle === 'number' ? 'act-btn' : ''">手机号码登录</div>
  </div>
</template>

<script>
  export default {
    name: "UserLoginSwipeButton",
    data() {
      return{
        actModle: 'account'
      }
    },
    methods: {
      toggleLoginType(type) {
        this.actModle = type;
        this.$emit('toggleLogin', type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act-btn {
    color: $blue-color;
  }
  #spipe-button {
    height: $input-height;
    margin-bottom: $input-height;
    @include flex-row(space-around);
    color: $line-deep;
  }
</style>