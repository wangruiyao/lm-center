<template>
  <div id="pick-up-info" class="lm-container">
    <lm-header :title="`提现明细`">
      <div @click.stop="showRightSlider" class="header-right" slot="right">
        <span class="icon iconfont">&#xe6d2;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @setScroll="setScroll"
               @scrollToEnd="scrollToEnd">
      <commission-pick-up-item :award-issue-item="item" v-for="item in awardIssueList" :key="item.key"></commission-pick-up-item>
      <div class="no-more-data" v-show="isScrollToEnd">暂无更多数据</div>
    </lm-scroll>
    <lm-slide-right :slide-visiblity="slideVisiblity"
                    @handleMaskClick="maskClick"
                    @confirm="queryConfirm"
                    @reset="resetQueryParams">
      <!--提现时间-->

      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            提现时间
          </div>
          <!--pc 时间选择-->
          <div class="pc-date-picker" v-show="isPc">
            <div>
              <el-date-picker
                      v-model="issuetimestart"
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="开始时间：yyyy-MM-dd"
                      placeholder="开始时间">
              </el-date-picker>
            </div>
            <div>
              <el-date-picker
                      v-model="issuetimeend"
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="结束时间：yyyy-MM-dd"
                      placeholder="结束时间">
              </el-date-picker>
            </div>

          </div>
          <!--移动端 时间选择-->
          <div v-show="!isPc" class="mobile-daste-picker">
            <div>
              <nut-textinput
                      @click="showDatePicker('issuetimestart')"
                      v-model="issuetimestart"
                      placeholder="开始时间"
                      :clearBtn="true"
                      :disabled="false">

              </nut-textinput>
            </div>
            <div>
              <nut-textinput
                      @click="showDatePicker('issuetimeend')"
                      placeholder="结束时间"
                      :clearBtn="true"
                      :disabled="false"
                      v-model="issuetimeend">

              </nut-textinput>
            </div>

          </div>
        </div>
      </div>
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            提现状态
          </div>
          <div class="item-container">
            <div :class="issuestate === i?'act':''" v-for="(i, idx) in typeValue" @click="chooseQueryState(i)">
              {{i}}
            </div>
          </div>
        </div>
      </div>


    </lm-slide-right>

    <nut-datepicker
            :is-visible="isShowDatePicker"
            title="请选择日期时间"
            type="date"
            startDate="2000-11-10 12:08"
            endDate="2030-10-05 10:04"
            defaultValue="2018-11-02 11:08"
            @close="switchPicker()"
            @choose="chooseQueryTime">
    </nut-datepicker>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import {getawardissuelist} from 'api/commission'
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmSlideRight = resolve => require(['components/lmSlideRight/LmSlideRight'], resolve);

  const CommissionPickUpItem = resolve => require(['./components/CommissionPickUpItem'], resolve);
  export default {
    name: "CommissionPickUpInfo",
    components: {LmSlideRight, CommissionPickUpItem, LmScroll, LmHeader},
    data() {
      return {
        isPc: false,
        datePickerStatus: 'start'  // 日期控件类型 start: 开始日期， end: 结束日期
        ,isShowDatePicker: false  // 日期控件
        ,slideVisiblity: false // 是否显示筛选条件
        ,issuetimestart: '' // 开始时间
        ,issuetimeend: ''  // 结束时间
        ,issuestate: ''  // 提现状态
        ,typeValue: ['等待审核','审核通过','等待发放']
        ,pagenum: 0
        ,pagesize: 10
        ,awardIssueList: []
        ,isScrollToEnd: false
      }
    },
    mounted(){
      this.isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      this.getAwardIssueIist();
    },
    methods: {
      setScroll(scroll) { // 初始化
        this.scroll = scroll;
      },
      maskClick() {
        this.slideVisiblity = false;
      },
      showRightSlider() {
        this.slideVisiblity = true;
      },
      switchPicker(){
        this.isShowDatePicker = false;

      },
      showDatePicker(status) {
        this.datePickerStatus = status;
        this.isShowDatePicker = true;
      },
      chooseQueryTime(time) { // 选择查询时间
        let [year,month,day,...other] = [...time];
        this.datePickerStatus === 'issuetimestart'
          ? this.issuetimestart = `${year}-${month}-${day}`
          : this.issuetimeend = `${year}-${month}-${day}`
      },
      chooseQueryState(state) {
        this.issuestate = state;
      },
      queryConfirm() {  // 条件查询佣金提现列表
        this.pagenum = 0;
        this.awardIssueList = [];
        this.slideVisiblity = false;
        this.getAwardIssueIist();
      },
      getAwardIssueIist() { //佣金提现查询列表

        /*
        * issuetimestart	提现时间起始	STRING	非必填
          issuetimeend	提现时间截至	STRING	非必填
          issuestate	提现状态	STRING	非必填
          pagenum	当前页码	STRING	必填
          pagesize  每页条数	STRING	必填
        * */
        const queryParams = {
          issuetimestart: this.issuetimestart
          ,issuetimeend: this.issuetimeend
          ,issuestate:	this.issuestate
          ,pagenum: this.pagenum
          ,pagesize: this.pagesize
        };
        getawardissuelist(queryParams).then(rsp => {
          const total = rsp.data.total;
          this.awardIssueList.push(...rsp.data.resultlist);
          if(Number(total) === this.awardIssueList.length){
            this.isScrollToEnd = true;
          } else {
            this.isScrollToEnd = false;
            this.scroll.finishPullUp();
          }

        })
      },
      resetQueryParams() {  // 重置查询参数
        this.issuetimestart = '';
        this.issuetimeend = '';
        this.issuestate = '';
      },
      scrollToEnd() { // 上拉加载
        this.pagenum++;
        this.getAwardIssueIist();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pick-up-info {
    width: 375px;
    background: $bgd-color;
    z-index: 1000;
    @include flex-column();
    .no-more-data {
      height: $header-height;
      position: relative;
      @include flex-row(center);

    }
    .no-more-data::before {
      content: '';
      width: 100px;
      height: 1px;
      background: #666;
      margin-right: 20px;
    }
    .no-more-data::after {
      content: '';
      width: 100px;
      height: 1px;
      background: #666;
      margin-left: 20px;
    }

    .header-right {
      width: 100%;
      .iconfont {
        font-size: 23px;
      }
    }

    .filter-item {
      margin-bottom: 15px;
      .act {
        color: #fff;
        @include blue-gradient;
        border: none !important;
      }
      .title {
        color: #000;
        margin-bottom: 10px;
      }
      .item-container {
        width: 100%;
        @include flex-row(baseline);
        flex-wrap: wrap;
        div {
          margin-bottom: 10px;
          margin-right: 5px;
          border: solid $line-deep 1px;
          width: 75px;
          height: 23px;
          @include flex-row(center);
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }
      }
    }
    .pc-date-picker {
      div{
        margin-bottom: 6px;
      }
    }
    .mobile-daste-picker {
      div{
        margin-bottom: 6px;
      }
    }
  }
</style>