<template>
  <div id="home-center" class="lm-container-blank">
    <div class="minePage" @click="goPage('/mine')">我的账户</div>
  </div>
</template>

<script>
  import LmHeader from "components/lmHeader/LmHeader";
  import types from 'store/types'
  export default {
    name: "HomeCenter",
    components: {LmHeader},
    methods: {
      goPage(page) {
        this.$store.commit(types.SET_PAGE_STATION, 'open');
        this.$router.push(page)
      }
    }
  }
</script>

<style scoped>

</style>