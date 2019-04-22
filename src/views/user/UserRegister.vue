<template>
  <div id="user-register">
    <lm-input></lm-input>
  </div>
</template>

<script>
  const LmInput = resolve => require(['components/lmInput/LmInput'], resolve)
  // import LmInput from "components/lmInput/LmInput";
  export default {
    name: "UserRegister",
    components: {LmInput}
  }
</script>

<style scoped>

</style>