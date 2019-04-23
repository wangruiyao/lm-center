<template>
  <div id="lm-input-errtips" v-if="errTip !== ''">
    <i class="iconfont">&#xeba1;</i>
    <span>{{errTip}}</span>
  </div>
</template>

<script>
  export default {
    name: "ErrTips",
    props: {
      errTip: {
        type: String,
        default: ''
      },

    }
  }
</script>

<style lang="scss" scoped>
  #lm-input-errtips {
    color: #ff0018;
    font-size: 10px;
  }
</style>