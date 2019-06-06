<template>
  <div id="lm-bar-chart">
    <div class="info-box"
         v-show="showBox"
         :style="{top:barInfo.top+'px', left: barInfo.left+'px'}">
      数量：{{barInfo.info.number}}
    </div>
    <div class="bar-list" :style="{borderBottomColor: lineColor}">
      <div class="bar-item" v-for="item in dataList"
           v-touch:start="touchHandler(item)"
           v-touch:end="endHandler">
        <bar :height="getH(item.number)"
             @touchBar="touchBar"
             @touchEnd="touchEnd"
             @getParam="getParam(item)"
             :bar-color=barColor >

        </bar>

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
      },
      dataList: {
        type: Array
      }
    },
    mounted() {
    },
    data() {
      return {
        showBox: false,
        barInfo: {
          left: 0,
          top: 0,
          info: {}
        }
      }
    },
    computed: {
      maxH() {
        let max = 0;
        this.dataList.map(val => {
          if(parseInt(val.number) > max) {
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
    },
    methods: {
      touchHandler(item) {
        const _this = this;
        return function(d) {
          // console.log(d.targetTouches[0])
          _this.barInfo.top = -d.targetTouches[0].target.offsetHeight;
          _this.barInfo.left = d.targetTouches[0].clientX -50;
          _this.barInfo.info = item;
          _this.showBox = true;
        }

      },
      endHandler() {
        this.showBox = false;
      },
      touchBar(pos) {
        this.barInfo.left = pos.left;
        this.barInfo.top = pos.top;
        // console.log(this.barInfo.pos)
      },
      getParam(item) {
        this.barInfo.info = item.number;
        this.showBox = true;
      },
      touchEnd() {
        this.showBox = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-box {
    position: absolute;
    padding: 10px;
    width: unset !important;
    color: #fff;
    background: rgba(0,0,0,0.3);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  #lm-bar-chart {
    position: relative;
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
        width: 13%;
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