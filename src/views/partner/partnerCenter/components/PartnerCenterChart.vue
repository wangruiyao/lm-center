<template>
  <div id="partner-center-chart">
    <div class="chart-inner">
      1/2
    </div>
  </div>
</template>

<script>
  export default {
    name: "PartnerCenterChart"
  }
</script>

<style lang="scss" scoped>
  #partner-center-chart {
    background: #eee;
    width: 100%;
    box-shadow:inset 0 2px 2px 0 rgba(153, 153, 153, 0.7);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    padding: 2px;

    .chart-inner {
      position: relative;
      @include flex-column(center);
      background: #e6484a;
      color: #FFFEFE;
      font-size: 10px;
      line-height: 12px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      width: 50%;
    }

  }
</style>