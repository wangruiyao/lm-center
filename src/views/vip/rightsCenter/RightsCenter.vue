<template>
  <div id="rights-center">
    <lm-header :title="`连萌VIP`"
               :background="`rgba(109, 51, 255, ${headerOpacity})`"
               :border="`solid transparent 1px`"
               :color="headerColor">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="listenScroll">
      <div class="rights-center-container">
        <div class="top">
          <rights-dash-board :info="dashboardInfo"></rights-dash-board>
          <rights-bar-charts></rights-bar-charts>
        </div>
        <div class="bottom">
          <div class="bottom-head">
            <rights-saturnus>
              <div @click="userUpGrade" class="saturn-type" v-if="vipInfo.nextgold <= vipInfo.gold">
                <span class="icon iconfont">&#xe685;</span>
              </div>
              <div class="saturn-type" v-else>
                <span>{{vipInfo.nextgold}}升级金</span>
              </div>

              <!--<canvas id="wave"></canvas>-->
            </rights-saturnus>
          </div>
          <div class="xuxian">
            <div class="xuxian-inner"></div>
          </div>
          <div class="bottom-footer">
            <rights-list></rights-list>
          </div>
          <div class="right-button" @click="goforward('rightsDetails')">
            立即了解连萌VIP
          </div>



        </div>
      </div>
    </lm-scroll>
  </div>
</template>

<script>
  import {userupgrade} from 'api/vip'
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import RightsDashBoard from "./components/RightsDashBoard";
  import RightsBarCharts from "./components/RightsBarCharts";
  import RightsSaturnus from "./components/RightsSaturnus";
  import RightsList from "./components/RightsList";
  import LmButton from "../../../components/lmButton/LmButton";
  export default {
    name: "RightsCenter",
    components: {LmButton, RightsList, RightsSaturnus, RightsBarCharts, RightsDashBoard, LmScroll, LmHeader},
    data() {
      return {
        headerColor: '#fff',
        headerOpacity: 0,
        // vipInfo: this.$store.state.vip.vipInfo === undefined ? {} : this.$store.state.vip.vipInfo,
        dashboardInfo: {}
      }
    },
    computed: {
      vipInfo() {
        return this.$store.state.vip.vipInfo;
      }
    },

    mounted() {
      // this.setWave();
      this.dashboardInfo = {
        total: this.vipInfo.nextgold,
        now: this.vipInfo.gold,
        vip: this.vipInfo.vipdesc
      };

    },
    methods: {
      goforward(page) {
        goforward(page)
      },
      listenScroll(pos) {
        this.headerOpacity = -pos.y * 0.04;
      },
      userUpGrade() {
        userupgrade().then(rsp =>{
          console.log(rsp)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #rights-center {

    .rights-center-container {
      background-image: url("../../../assets/images/vip/rights-background.png");
      -webkit-background-size: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      margin-top: -10px;
      padding-top: ($header-height) - 10px;
      .top {
        @include flex-column()
      }
      .bottom {
        position: relative;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        margin-top: 10px;
        overflow: hidden;
        @include flex-column();
        >div {
          @include flex-column();
          width: 355px;
          background: #fff;
        }
        .saturn-type {
          @include flex-column(center);
          font-size: 10px;
          font-weight: 100;
          img {
            width: 80%;
          }
          >.icon {
            font-size: 32px;
          }
        }
        .bottom-head {
          padding: 10px 0 20px;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }
        .bottom-footer {
          padding-bottom: 35px;
        }
        .xuxian {
          padding: 1px;
          border-bottom: 1px dashed transparent;
          background: linear-gradient(white,white) padding-box,
          repeating-linear-gradient(-40deg,#ccc 0, #ccc 0.5em,white 0,white 0.75em);
        }
        .right-button {
          margin-top: -19px;
          @include flex-column(center);
          font-size: 12px;
          border-radius: 20px;
          color: #fff;
          background-image: -moz-linear-gradient( 180deg, rgb(64,233,245) 0%, rgb(102,133,251) 52%, rgb(116,96,253) 75%, rgb(124,74,255) 99%);
          background-image: -webkit-linear-gradient( 180deg, rgb(64,233,245) 0%, rgb(102,133,251) 52%, rgb(116,96,253) 75%, rgb(124,74,255) 99%);
          background-image: -ms-linear-gradient( 180deg, rgb(64,233,245) 0%, rgb(102,133,251) 52%, rgb(116,96,253) 75%, rgb(124,74,255) 99%);
          height: 38px;
          width: 195px;
        }
      }
    }
  }
</style>