<template>
  <div id="bar-charts">
    <div class="bar-charts-head">
      <span class="desc">升级金根据您的订单贡献量计算</span>
      <span @click="go('rightsGoldDetail')">查看明细 <span class="lm-icon icon iconfont">&#xe66c;</span></span>
    </div>
    <div class="chart-container">
      <lm-bar-chart :data-list="golddetailweek"></lm-bar-chart>
    </div>

  </div>
</template>

<script>
  import LmBarChart from "../../../../components/lmBarChart/LmBarChart";
  import {golddetailweek} from 'api/vip'
  export default {
    name: "RightsBarCharts",
    components: {LmBarChart},
    data() {
      return {
        golddetailweek: []
      }
    },
    mounted() {
      this.getGolddetailweek()
    },
    methods: {
      getGolddetailweek() { // 最近一周升级金明细
        golddetailweek().then(data => {
          console.log(data)
          this.golddetailweek = [];
          data.data.map(idx => {
            const item = {
              date: idx.date,
              number: idx.gold
            };
            this.golddetailweek.push(item)
          });
        }).catch(data => {
          Message(`调用最近一周升级金接口异常`)
        })
      },
      go(path, params) {
        goforward(path, params)
      }
    }
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