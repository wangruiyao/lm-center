<template>
  <div id="lm-logo">
    <img v-if="flexType === 'row'" class="lm-logo-row" src="../../assets/images/row-logo.png" />
    <img v-if="flexType === 'clumn'" class="lm-logo-clumn" src="../../assets/images/clunm-logo.png" />
  </div>
</template>

<script>
  export default {
    name: "LmLogo",
    props: {
      'flexType': {
        type: String,
        default: 'clumn'
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-logo {
    width: 100%;
    padding: 40px 0;
    @include flex-row(center);
    .lm-logo-row {
      width: 240px;
      height: auto !important;
    }
    .lm-logo-clumn {
      width: 144px;
    }
  }
</style>