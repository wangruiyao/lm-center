<template>
  <div id="lm-check-box"
       :class="checked?'isChecked': ''"
       @click="handleCheck">
    <span class="lm-icon icon iconfont">&#xe68f;</span>
  </div>
</template>

<script>
  export default {
    name: "LmCheckBox",
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleCheck() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .isChecked {
    @include blue-gradiennt2;
    border: none !important;
  }
  #lm-check-box {
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid #d2d1c3 1px;
    background-color: #fff;
    @include flex-column(center);
    span {
      color: #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      font-size: 12px;
    }
  }
</style>