<template>
  <div id="bar-charts">
    <div class="bar-charts-head">
      <span class="desc">升级金根据您的订单贡献量计算</span>
      <span>查看明细 <span class="lm-icon icon iconfont">&#xe66c;</span></span>
    </div>
    <div class="chart-container">
      <lm-bar-chart></lm-bar-chart>
    </div>

  </div>
</template>

<script>
  import LmBarChart from "../../../../components/lmBarChart/LmBarChart";
  export default {
    name: "RightsBarCharts",
    components: {LmBarChart}
  }
</script>

<style lang="scss" scoped>
  #bar-charts {
    width: 355px;
    background: rgba(255,255,255,.07);
    border-radius: 5px;
    padding: 5px 0;
    @include flex-column();
    .bar-charts-head {
      @include flex-row();
      width: 330px;
      color: #fff;
      margin-bottom: 10px;
      .desc {
        color: #DAEDFF;
      }
    }
    .chart-container {
      width: 330px;
      height: 55px;
    }

  }
</style>