<template>
  <div class="dashboard">
    <lm-dash-board ref="dashboard" :number="animateGrid"></lm-dash-board>

    <div class="dashboard-data">
      <div class="vip">{{info.vip}}</div>
      <div class="now">{{showNum}}</div>
      <div class="desc">
        <span v-show="info.vip === 'VIP4'">{{info.total}}</span>
        <span v-show="info.vip !== 'VIP4'">距离{{info.total}}还差{{info.total-info.now}}</span>
      </div>
      <div class="total">
        <span>{{info.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import LmDashBoard from "../../../../components/lmDashBoard/LmDashBoard";
  export default {
    name: "RightsDashBoard",
    components: {LmDashBoard},
    props: {
      info: {
        type: Object
      }
    },
    data() {
      return {
        showNum: 0,
        dashBoardInfo: {}
      }
    },
    watch: {
      info(newVal) {
        this.dashBoardInfo = newVal
      }
    },
    mounted() {
      this.dashBoardInfo = this.info;
      this.wait().then(()=>{
        this.$refs.dashboard.run();
        if(this.dashBoardInfo.now !== 0) {
          this.run(this.addNum)
        }

      })

    },
    computed: {
      animateGrid() { //高亮格数
        return Math.round((35*this.dashBoardInfo.now)/this.dashBoardInfo.total)
      },
      addNum() {  // 数字滚动递增的数量
        return Math.round(this.dashBoardInfo.now/this.animateGrid)
      }
    },
    methods: {
      wait() {
        return new Promise((reject)=> {
          setTimeout(function() {
            reject()
          }, 200)
        })
      },
      run(addNum){
        const _this = this;
        // console.log(_this.total);
        _this.showNum += addNum;
        if(_this.showNum <= _this.info.total) {
          if(_this.info.now - _this.showNum < addNum) {
            const lastNum = _this.info.now - _this.showNum;
            setTimeout(function(){_this.run(lastNum)},10);
            return;
          }
          window.requestAnimationFrame(function(){_this.run(addNum)})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    margin-top: -10px;
    position: relative;
    height: 185px;
    width: 285px;

    .dashboard-data {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      @include flex-column(baseline);
      color: #fff;
      padding-top: 55px;

      .vip {
        font-size: 10px;
      }
      .now {
        margin-top: 15px;
        font-size: 38px;
      }
      .desc {
        font-size: 12px;
      }
      .total {
        width: 70%;
        text-align: right;
        
        span {
          line-height: 12px;
          background: #ECFF6F;
          color: #4E99FC;
          display: inline-block;
          padding: 0 3px;
          border-radius: 1px;
        }
      }
    }
  }
</style>