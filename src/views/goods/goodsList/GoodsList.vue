<template>
  <div id="goods-list" class="lm-container">
    <!-- 头部 -->
    <lm-header :background="`#f3f3f3`">
      <div slot="center">
        {{isHotSaleList && queryParams.shelftype === 'HS01' ? '限时特惠'
        : isHotSaleList && queryParams.shelftype === 'HS02' ? '尖货推荐'
        : isHotSaleList && queryParams.shelftype === 'HS03' ? '高额佣金' : ''}}</div>
      <div v-show="!isHotSaleList" class="head-search" slot="center">
        <input style="outline:none;"

               v-model="query"
               :placeholder="queryParams.query"
               @keypress="mobileSearch"
               @keyup.enter="pcSearch"/>
      </div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <!-- 筛选、排序-->
    <goos-list-filter
        v-show="!isHotSaleList"
        :action-btn="actionTab"
        @handleTab="handleTab"
        @handleFilterClick="handleFilter">

    </goos-list-filter>

    <!-- 筛选条件 -->
    <lm-slide-right :slide-visiblity="slideVisiblity"
                    @handleMaskClick="maskClick"
                    @confirm="filterConfirm"
                    @reset="filterReset">
      <goods-list-filter-list
              ref="goodsListFilterList"
              :goods-types="goodsTypes"
              :filter-list = 'filterList'
              @filterConfirm="filterGoodsList"
              @updateCondition="updateCondition">

      </goods-list-filter-list>
    </lm-slide-right>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scrollToEnd="scrollToEnd">
      <div :class="isHotSaleList ? '' : 'goods-list-contain'">

        <goods-item v-for="item in goodsListData"
                    :key="item.goodsid"
                    :goods-info="item"
                    @click="goodsDetail({goodsid:item.goodsid, productid: item.productid})">
        </goods-item>
        <div class="goods-list-tip">
          <img v-show="goodsListData.length === 0" :src="require('assets/images/goods/goods-undefined.png')"/>
          {{listTip}}
        </div>
      </div>

    </lm-scroll>
    <transition :enter-active-class="`slideInRight`"
                :leave-active-class="`slideOutRight`">
     <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import {hotsalelist} from 'api/goods'
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import GoosListFilter from "./components/GoosListFilter";
  import GoodsItem from "./components/GoodsItem";
  import GoodsListPullDown from "./components/GoodsListPullDown";
  import LmSlideRight from "../../../components/lmSlideRight/LmSlideRight";
  import GoodsListFilterItem from "./components/GoodsListFilterItem";
  import GoodsListFilterList from "./components/GoodsListFilterList";
  export default {
    name: "GoodsList",
    components: {
      GoodsListFilterList,
      GoodsListFilterItem, LmSlideRight, GoodsListPullDown, GoodsItem, GoosListFilter, LmScroll, LmHeader},
    data() {
      return {
        scroll: null,
        query: '',
        isHotSaleList: false, // 是否热销商品列表
        goodsTypes: '',
        queryParams: {},
        actionTab: 'multiple',
        slideVisiblity: false,
        goodsListData: [],
        filterList: {},
        test: [1,1,1,1,1],
        listTip: '',
        pagenum: 0
      }
    },
    mounted() {
      this.queryParams = JSON.parse(this.$route.params.query);
      if(this.queryParams.hasOwnProperty('shelftype')) {
        this.isHotSaleList = true;
        this.getHotSaleList(this.queryParams);
      } else {
        this.isHotSaleList = false;
        this.getGoodsList(this.queryParams, true)
      }
      //
    },
    methods: {
      handleTab(tab) {
        this.pagenum = 0;
        this.actionTab = tab;
        this.goodsListData = [];
        if(tab === 'sale') {
          this.queryParams = Object.assign(this.queryParams, {sort: 'SR01'});
          this.getGoodsList(this.queryParams);
        } else {
          this.getGoodsList(this.queryParams);
        }

      },
      getGoodsList(params, updateFilter) {  // params: 查询参数， updateFilter: 是否更新筛选条件
        const _this = this;
        this.listTip = '加载中...';
        params.pagenum = this.pagenum.toString();
        this.$store.dispatch('shop/queryGoodsListInfo', params).then(rsp=>{
          if(updateFilter) {
            _this.goodsTypes = rsp.goodsList.goodstypes;
            _this.filterList = rsp.moreCondition;
          }
          _this.goodsListData = _this.goodsListData.concat(rsp.goodsList.goodslist);
          if(rsp.goodsList.goodslist.length === 0) {
            if(_this.queryParams.pagenum === '0') {
              if(_this.queryParams.query !== undefined) {
                this.listTip = `未查询到 ${_this.queryParams.query} 有关的数据，换个关键字试试吧~`
              } else {
                this.listTip = `未查询到有关的数据，换个关键字试试吧~`
              }

            } else {
              this.listTip = '—— 已经到底了 ——'
            }

          } else {
            if(this.scroll !== null) {
              this.scroll.finishPullUp();
            }

            this.listTip = ''
          }
        })
      },
      updateCondition(moreCondition) {
        this.$set(this.filterList, 'spec', moreCondition);
      },
      filterConfirm() {
        this.$refs.goodsListFilterList.filterConfirm();
      },
      filterReset() {
        alert(1)
      },
      handleFilter() {
        this.slideVisiblity = true;
      },
      maskClick() {
        this.slideVisiblity = false;
      },
      goodsDetail(params) {
        goforward('shopCenterGoodsDetail', {params: JSON.stringify(params)})
      },
      filterGoodsList(params) {
        this.goodsListData = [];
        this.pagenum = 0;
        this.slideVisiblity = false;
        const queryParams = Object.assign(this.queryParams, params);
        this.getGoodsList(queryParams, false);
      },
      getHotSaleList(params) {  //查询热销商品列表
        const _this = this;
        hotsalelist(params).then(rsp => {
          _this.goodsListData = rsp.data.goodslist;

        })
      },
      pcSearch() {
        if (!(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))) { //PC端触发搜索
          this.search()
        }
      },
      mobileSearch() {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端触发搜索
          if(event.keyCode === 13) {
            this.search()
          }
        }
      },
      search() {
        this.goodsListData = [];
        this.queryParams = {
          query: this.query
        };
        this.getGoodsList(this.queryParams, true);
      },
      scrollToEnd(scroll) {
        this.scroll = scroll;
        this.pagenum ++ ;
        this.getGoodsList(this.queryParams, false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-list {
    background: #fff;
    z-index: 1000;
    .head-search {
      padding: 0 10px;
      background: #fff;
      border: solid #eee 1px;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
      overflow: hidden;
      height: 30px;
      input {
        font-size: 14px;
        font-weight: 400;
        width: 268px;
      }
    }
    .goods-list-tip {
      @include flex-column(center);
      color: #a09c9c;
      font-size: 14px;
      >img {
        width: 396px;
      }
    }
    .goods-list-contain {
       margin-top: $input-height + 5px;

     }
  }
</style>