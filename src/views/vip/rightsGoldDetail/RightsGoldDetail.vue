<template>
  <div class="gold-detail lm-container">
    <lm-header :title="`升级金明细`" :back-params="backParams">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <rights-gold-detail-table></rights-gold-detail-table>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const RightsGoldDetailTable = resolve => require(['./components/RightsGoldDetailTable'], resolve);
  export default {
    name: "RightsGolddetail",
    components: {RightsGoldDetailTable, LmHeader},
    data() {
      return {
        backParams: {
          subPath: 'rightsCenter'
        }
      }
    }
  }
</script>

<style scoped>

</style>