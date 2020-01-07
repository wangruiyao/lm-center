<template>
  <div id="commission-info" class="lm-container">
    <lm-header :title="`佣金明细`">
      <div class="header-right" slot="right" @click.stop="showRightSlider">
        <span class="icon iconfont" v-show="fromPage === 'commissionCenter'">&#xe6d2;</span>
      </div>
    </lm-header>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="!isScrollToEnd"
               @setScroll="setScroll"
               @scrollToEnd="scrollToEnd">
      <commission-info-item v-for="i in resultlist"
                            :key="i.key"
                            :value="i"></commission-info-item>
      <div class="no-more-data" v-show="isScrollToEnd">
        <span >暂无更多记录</span></div>
      <div class="block-div"></div>
    </lm-scroll>
    <footer class="commission-info-footer" v-show="fromPage === 'commissionCenter'">
      <span class="icon iconfont total-award">&#xe63c;</span>
      <span>共查询佣金<span class="commission-quantity">{{total}}</span>条，总计金额：<span class="comission-amount">{{(Number(totalsum)/100).toFixed(2)}}</span>元</span>
    </footer>

    <lm-slide-right :slide-visiblity="slideVisiblity"
                    @handleMaskClick="maskClick"
                    @confirm="queryConfirm"
                    @reset="resetQueryParams">
      <!--佣金产生时间-->
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            佣金产生时间
          </div>
          <!--pc 时间选择-->
          <div class="pc-date-picker" v-show="isPc">
            <div>
              <el-date-picker
                      v-model="createtimestart"
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="开始时间：yyyy-MM-dd"
                      placeholder="开始时间">
              </el-date-picker>
            </div>
            <div>
              <el-date-picker
                      v-model="createtimeend"
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="结束时间：yyyy-MM-dd"
                      placeholder="结束时间">
              </el-date-picker>
            </div>

          </div>
          <!--mobile 时间选择-->
          <div v-show="!isPc" class="mobile-daste-picker">
            <div>
              <nut-textinput
                      @click="showDatePicker('createtimestart')"
                      v-model="createtimestart"
                      placeholder="开始时间"
                      :clearBtn="true"
                      :disabled="false">

              </nut-textinput>
            </div>
            <div>
              <nut-textinput
                      @click="showDatePicker('createtimeend')"
                      v-model="createtimeend"
                      placeholder="结束时间"
                      :clearBtn="true"
                      :disabled="false">

              </nut-textinput>
            </div>

          </div>
        </div>
      </div>
      <!--佣金状态-->
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            佣金状态
          </div>
          <div class="item-container">
            <div @click="setQueryParams('awardstate',i)"
                 v-for="(i, idx) in commissionStateList"
                 :class="i===awardstate?'act':''">
              {{i}}
            </div>
          </div>
        </div>
      </div>
      <!--佣金类型-->
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            佣金类型
          </div>
          <div class="item-container">
            <div v-for="(i, idx) in commissionTypeList"
                 @click="setQueryParams('awardtype',i)"
                 :class="i===awardtype?'act':''">
              {{i}}
            </div>
          </div>
        </div>
      </div>

      <!--提现类型-->
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            提现类型
          </div>
          <div class="item-container">
            <div v-for="(i, idx) in awardTypeList"
                 @click="setQueryParams('getawardtype',i)"
                 :class="i===getawardtype?'act':''">
              {{i}}
            </div>
          </div>
        </div>
      </div>

      <!--佣金所属订单-->
      <div class="filter-item">
        <div class="filter-spec">
          <div class="title">
            佣金所属订单
          </div>
          <div>
            <nut-textinput
                    placeholder="佣金所属订单"
                    v-model="linkid"
                    :clearBtn="true"
                    :disabled="false"></nut-textinput>
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
            @choose="chooseQueryTime"
    >
    </nut-datepicker>

  </div>
</template>

<script>
  import {getawarddetaillist,getissueawardlist} from 'api/commission';
  const LmSlideRight = resolve => require(['components/lmSlideRight/LmSlideRight'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const CommissionInfoItem = resolve => require(['./components/CommissionInfoItem'], resolve);
  export default {
    name: "CommissionInfo",
    components: {LmSlideRight, CommissionInfoItem, LmHeader, LmScroll},
    data() {
      return {
        fromPage:''
        ,isPc:false  // 是否pc端打开
        ,isScrollToEnd: false // 是否加载全部数据
        ,slideVisiblity: false // 是否显示右侧边栏
        ,createtimestart: '' // 开始时间
        ,createtimeend: ''  // 结束时间
        ,datePickerStatus: 'start'  // 日期控件类型 start: 开始日期， end: 结束日期
        ,isShowDatePicker: false  // 日期控件
        ,awardstate: '' // 佣金状态
        ,awardtype:'' // 佣金类型
        ,getawardtype: '' // 佣金提取类型
        ,linkid:''  // 来源
        ,pagenum: 0
        ,pagesize: 10
        ,commissionStateList: ['等待提现','等待审核','等待发放','审核拒绝','发放失败']  // 佣金状态列表
        ,commissionTypeList: ['一次性佣金','固定佣金','分成佣金','达量佣金']  // 佣金类型列表
        ,awardTypeList: ['即使佣金','按月提取']  // 提现类型列表
        ,total: 0
        ,totalsum:0
        ,resultlist: []
      }
    },
    mounted() {
      if(this.$route.params.id) {
        this.issueid=this.$route.params.id;
        this.fromPage = 'commissionPickUpInfo'
      } else {
        this.fromPage = 'commissionCenter'
      }
      this.queryList();
      this.isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

    },
    // beforeRouteEnter (to, from, next) {
    //   const fromName = from.name;
    //   next(vm => {
    //     // 通过 `vm` 访问组件实例
    //
    //     vm.fromPage = fromName;
    //     vm.queryList();
    //     // console.log(vm)
    //   })
    // },
    methods: {
      setScroll(scroll) { // 初始化scroll
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
        this.datePickerStatus === 'createtimestart'
          ? this.createtimestart = `${year}-${month}-${day}`
          : this.createtimeend = `${year}-${month}-${day}`
      },
      setQueryParams(key,val) {
        this[key] = val;
      },
      queryConfirm() {  // 筛选查询
        this.pagenum = 0;
        this.resultlist = [];
        this.slideVisiblity = false;
        this.queryList();
      },
      resetQueryParams() {  // 重置筛选条件
        this.createtimestart= ''; // 开始时间
        this.createtimeend= '';  // 结束时间
        this.awardstate= ''; // 佣金状态
        this.awardtype=''; // 佣金类型
        this.getawardtype= ''; // 佣金提取类型
        this.linkid='';  // 来源
      },
      scrollToEnd() {
        this.pagenum ++;
        this.queryList();
      },
      queryList() { // 查询列表

        if(this.fromPage === 'commissionCenter') {  // 佣金明细
          this.getAwardDetailList();
        } else if(this.fromPage === 'commissionPickUpInfo') { // 提现单佣金明细
          this.getIssueAwardList();
        }
      },
      getAwardDetailList() {  //佣金明细

        /*awardstate	佣金状态	STRING	非必填
        createtimestart	产生时间起始	STRING	非必填
        createtimeend	产生时间截至	STRING	非必填
        awardtype	佣金类型	STRING	非必填
        getawardtype	佣金提取类型	STRING	非必填
        linkid	来源	STRING	非必填
        pagenum	当前页码	STRING	必填
        pagesize	每页条数	STRING	必填*/

        const queryParams = {
          awardstate: this.awardstate
          ,createtimestart: this.createtimestart
          ,createtimeend: this.createtimeend
          ,awardtype: this.awardtype
          ,getawardtype: this.getawardtype
          ,linkid:this.linkid
          ,pagenum: this.pagenum
          ,pagesize: this.pagesize
        };
        getawarddetaillist(queryParams).then(rsp => {
          this.total = rsp.data.total;
          this.totalsum = rsp.data.totalsum;
          this.resultlist.push(...rsp.data.resultlist);
          if(Number(this.total) === this.resultlist.length){
            this.scroll.options.pullUpLoad = false;
            this.isScrollToEnd = true;
          } else {
            this.isScrollToEnd = false;
            this.scroll.finishPullUp();
          }
        })
      },
      getIssueAwardList() { // 用户提现佣金明细
        const queryParams = {
          issueid: this.issueid
          ,pagenum: this.pagenum
          ,pagesize: this.pagesize
        };
        getissueawardlist(queryParams).then(rsp => {
          this.total = rsp.data.total;
          this.totalsum = rsp.data.totalsum;
          this.resultlist.push(...rsp.data.resultlist);
          if(Number(this.total) === this.resultlist.length){
            console.log(this.scroll)
            this.isScrollToEnd = true;
            // console.log(this.scroll)
          } else {
            this.isScrollToEnd = false;
            this.scroll.finishPullUp();
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #commission-info {
    width: 375px;
    background: $bgd-color;
    z-index: 6000;
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
    .block-div {
      height: $header-height;
      width: 375px;
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

    .commission-info-footer {
      position: fixed;
      width: 375px;
      height: 64px;
      background: #fff;
      bottom: 0;
      @include flex-row();
      padding: 0 10px;
      color: #666;
      font-size: 14px;
      .commission-quantity {
        color: #089BE6;
      }
      .comission-amount {
        color: #EF1E1E;
        font-size: 18px;
      }
      .total-award {
        font-size: 35px !important;
        font-weight: 600;
        @include blue-icon();
      }
    }
  }
</style>