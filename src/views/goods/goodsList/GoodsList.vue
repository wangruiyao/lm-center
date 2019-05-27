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
    <lm-slide-right :slide-visiblity="slideVisiblity"  @handleMaskClick="maskClick">
      <goods-list-filter-list></goods-list-filter-list>
    </lm-slide-right>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true">
      <div class="goods-list-contain">
        <goods-item v-for="item in goodsListData"
                    :key="item.goodsId"
                    :goods-info="item"
                    @click="goodsDetail(item.goodsId)">
        </goods-item>
      </div>

    </lm-scroll>

  </div>
</template>

<script>
  import {listGoods} from 'api/goods'
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
        actionTab: 'multiple',
        slideVisiblity: false,
        goodsListData: []

      }
    },
    mounted() {
      this.getGoodsList()
    },
    methods: {
      handleTab(tab) {
        this.actionTab = tab;
        this.goodsListData = [];
        this.getGoodsList();
      },
      getGoodsList() {
        listGoods().then( data => {
          if( data.code === '0') {
            if(data.subcode === '10000') {
              this.goodsListData = data.data;
            } else {
              Message(`查询商品列表错误,错误码: ${data.subcode},错误原因: ${data.submsg}`)
            }
          } else {
            Message(`查询商品列表错误,错误码: ${data.code},错误原因: ${data.msg}`)
          }
        }).catch( data => {
          Message(`调用商品列表查询接口失败,失败原因:${JSON.stringify(data)}`)
        })
      },
      handleFilter() {
        this.slideVisiblity = true;
      },
      maskClick() {
        this.slideVisiblity = false;
      },
      goodsDetail(id) {
        goforward('goodsDetail', {id: id})
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-list {
    background: #fff;
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