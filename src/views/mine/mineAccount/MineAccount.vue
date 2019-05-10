<!-- 我的账号 -->

<template>
  <div id="mine-account" class="lm-container">
    <lm-header :title="`我的账号`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <mine-account-list></mine-account-list>

  </div>
</template>

<script>
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmCell from "../../../components/lmCell/LmCell";
  import MineAccountList from "./components/MineAccountList";
  export default {
    name: "MineAccount",
    components: {MineAccountList, LmCell, LmHeader}
  }
</script>

<style lang="scss" scoped>
  .lm-container {
    background: #eee;
  }

</style>