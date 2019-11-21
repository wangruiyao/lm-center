<template>
  <div id="center-order">
    <home-center-box :title="`我的佣金`" :desc="`查看佣金明细`" @click="goCommission()">
      <div class="item-container">
        <img src="../../../../assets/images/center/sy_imgtu_15.png"/>
      </div>

    </home-center-box>
  </div>
</template>

<script>
  import HomeCenterBox from "./HomeCenterBox";
  export default {
    name: "HomeCenterCommission",
    components: {HomeCenterBox},
    methods: {
      goCommission() {
        goforward('commissionCenter')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #center-order {
    .item-container {
      img {
        width: 100%;
      }
    }

  }
</style>