<template>
  <div id="lm-bar-chart">
    <div class="bar-list" :style="{borderBottomColor: lineColor}">
      <div class="bar-item" v-for="item in dataList">
        <bar :height="getH(item.number)" :bar-color=barColor></bar>
      </div>
    </div>
    <div class="bar-date" :style="{color: color}">
      <div v-for="item in dataList">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
  import Bar from "./components/Bar";
  export default {
    name: "LmBarChart",
    components: {Bar},
    props: {
      color: {
        type: String,
        default: '#fff'
      },
      barColor: {
        type: String,
        default: '#fff'
      },
      lineColor: {
        type: String,
        default: '#fff'
      }
    },
    data() {
      return {
        dataList: [
          {
            date: '02/21',
            number: 10
          },{
            date: '02/21',
            number: 2
          },{
            date: '02/21',
            number: 9
          },{
            date: '02/21',
            number: 14
          },{
            date: '02/21',
            number: 2
          },{
            date: '02/21',
            number: 1
          },{
            date: '02/21',
            number: 4
          },
        ]
      }
    },
    computed: {
      maxH() {
        let max = 0;
        this.dataList.map(val => {
          if(val.number > max) {
            max = val.number
          }
        });
        return max;
      },
      getH() {
        return function(number) {
          return Math.round((number/this.maxH)*100);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #lm-bar-chart {
    width: 100%;
    height: 100%;
    @include flex-column(center);
    >div {
      width: 100%;
      @include flex-row(space-around)
    }
    .bar-list {
      border-bottom-style: solid;
      border-width: 2px;
      height: 80%;
      margin-bottom: 2px;
      .bar-item {
        height: 100%;
        @include flex-row(space-around, flex-end);
      }
    }
    .bar-date {
      font-weight: 100;
      font-size: 10px;
    }

  }
</style>