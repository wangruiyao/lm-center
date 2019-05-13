<template>
  <div id="home-center" class="lm-container-blank">
    <div class="minePage" @click="goforward('mineAccount')">我的账户</div>
    <div class="minePage" @click="goforward('minePersonalData')">完善个人信息</div>
  </div>
</template>

<script>
  import LmHeader from "components/lmHeader/LmHeader";
  import types from 'store/types'
  export default {
    name: "HomeCenter",
    components: {LmHeader},
    methods: {
      goforward(page) {
        goforward(page)
      }
    }
  }
</script>

<style scoped>

</style>