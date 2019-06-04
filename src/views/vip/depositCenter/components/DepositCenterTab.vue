<template>
  <div id="deposit-center-tab">
    <explain-table v-show="active === `explain`"></explain-table>
    <record-table v-show="active === `record`"></record-table>
  </div>
</template>

<script>
  import ExplainTable from "./ExplainTable";
  import RecordTable from "./RecordTable";
  export default {
    name: "DepositCenterTab",
    components: {RecordTable, ExplainTable},
    props: {
      active: {
        type: String,
        default: 'explain'
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  #deposit-center-tab {
    width: 100%;
    height: 100%;
    padding: 10px 10px $header-height;
  }
</style>