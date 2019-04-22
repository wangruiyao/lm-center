<template>
  <div id="lm-input">
    输入框
  </div>
</template>

<script>
  export default {
    name: "LmInput",
    props: {
      'width': {   // input宽度
        type: String,
        default: '314.5px'
      },
      'iconCode': { // input 图标
        type: String
      },
      'placeHolder': {  // 自定义placeholder
        type: String,
        default: '搜索'
      },
      'errTip': { // 错误提示
        type: String
      },
      'isShowErrTip': Boolean
    }
  }
</script>

<style scoped>

</style>