<template>
  <div id="goods-list" class="lm-container">
    <!-- 头部 -->
    <lm-header :background="`#f3f3f3`">
      <div class="head-search" slot="center">
        <input style="outline:none;" placeholder="搜索"/>
      </div>
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <!-- 筛选、排序-->
    <goos-list-filter
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
               :listenScroll="true">
      <div class="goods-list-contain">
        <goods-item v-for="item in goodsListData"
                    :key="item.goodsid"
                    :goods-info="item"
                    @click="goodsDetail({goodsid:item.goodsid, productid: item.productid})">
        </goods-item>
      </div>

    </lm-scroll>
    <transition :enter-active-class="`slideInRight`"
                :leave-active-class="`slideOutRight`">
     <router-view></router-view>
    </transition>

  </div>
</template>

<script>

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
        goodsTypes: '',
        queryParams: {},
        actionTab: 'multiple',
        slideVisiblity: false,
        goodsListData: [],
        filterList: {},
        test: [1,1,1,1,1]
      }
    },
    mounted() {
      this.queryParams = JSON.parse(this.$route.params.query);
      this.getGoodsList(this.queryParams, true)
    },
    methods: {
      handleTab(tab) {
        this.actionTab = tab;
        this.goodsListData = [];
        if(tab === 'sale') {
          const queryParams = Object.assign(this.queryParams, {sort: 'SR01'});
          this.getGoodsList(queryParams);
        } else {
          this.getGoodsList(this.queryParams);
        }

      },
      getGoodsList(params, updateFilter) {
        const _this = this;
        this.$store.dispatch('shop/queryGoodsListInfo', params).then(rsp=>{
          if(updateFilter) {
            _this.goodsTypes = rsp.goodsList.goodstypes;
            _this.filterList = rsp.moreCondition;
          }

          _this.goodsListData = rsp.goodsList.goodslist;
          console.log('11111', _this.goodsListData)

        })
      },
      updateCondition(moreCondition) {
        this.$set(this.filterList, 'spec', moreCondition);
      },
      filterConfirm() {
        this.$refs.goodsListFilterList.filterConfirm();
      },
      filterReset() {

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
        this.slideVisiblity = false;
        const queryParams = Object.assign(this.queryParams, params);
        this.getGoodsList(queryParams, false);
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
    .goods-list-contain {
       margin-top: $input-height + 5px;
     }
  }
</style>