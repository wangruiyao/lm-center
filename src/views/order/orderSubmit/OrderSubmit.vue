<template>
  <div id="order-submit">
    <div @click="test">test</div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "OrderSubmit",
    mounted() {},
    methods: {
      test() {
        goforward('orderCityPicker')
      }
    }
  }
</script>

<style scoped>

</style>