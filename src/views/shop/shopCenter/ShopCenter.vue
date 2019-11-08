<template>
  <div id="shop-center" class="lm-container">
    <shop-center-header v-show="showHeader"></shop-center-header>
    <div class="test" v-show="showGoodsListBtn">
      <shop-center-goods-list-button
              :hot-category = 'hotcategoryList'
              :act-button="hotCatgoryAct"
              @changeBtn = 'changeHotCatgoryAct'></shop-center-goods-list-button>
    </div>
    <div class="head-bgd"></div>

    <div class="shop-center-scroll-box" ref="shopCenterWarpper">
      <div class="shop-center-scroll-inner">

        <div class="refresh-box">
          <transition
                  enter-active-class="fadeInDown"
                  leave-active-class="fadeOut"
          >
            <div class="refresh-inner" v-show="showRefresh">
              {{refreshInfo}}
            </div>
          </transition>
        </div>
        <div class="hot-search">
          <span>热搜：</span>
          <span class="hot-search-item" v-for="item in hotSearchList" @click="go('shopCenterGoodsDetail')">{{item.keywords}}</span>
        </div>
        <!-- 轮播图 -->
        <shop-center-slider></shop-center-slider>
        <div class="common-bgd">
          <shop-center-button-list></shop-center-button-list>
          <shop-center-hot-sale @go="go"></shop-center-hot-sale>
          <div ref="goodsList">
            <shop-center-goods-list
                    @goGoodsDetail = "goGoodsDetail"
                    @changeBtn = 'changeHotCatgoryAct'
                    :hot-category = 'hotcategoryList'
                    :act-button="hotCatgoryAct"
                    :goods-list="goodslist"></shop-center-goods-list>
          </div>

          <div class="loading-box">

            <span>
              {{loadingText}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <transition :enter-active-class="`slideInRight`"
                :leave-active-class="`slideOutRight`">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import {viewsearchcollect, hotcategory} from 'api/shop.js'
  import {goodslist} from 'api/goods.js'
  import types from 'store/types'
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  import ShopCenterHeader from './components/ShopCenterHeader'
  import ShopCenterSlider from './components/ShopCenterSlider'
  import ShopCenterButtonList from './components/ShopCenterButtonList'
  import ShopCenterHotSale from './components/ShopCenterHotSale'
  import ShopCenterGoodsList from './components/ShopCenterGoodsList'
  import ShopCenterGoodsListButton from "./components/ShopCenterGoodsListButton";

  export default {
    name: "ShopCenter",
    data() {
      return {
        queryGoodsListParams: {
          catalog: '全部',
          pagenum: -1
        },
        refreshBoxH: 0, // 下拉刷新高度
        refreshInfo: '下拉刷新',
        isRefreshing: false,
        showHeader: true,
        showRefresh: false,
        hotSearchList: [],
        loadingText: '加载中...',
        goodslist: [],
        eleOffsetTop: { // 元素距离顶部位置
          goodsList: 0
        },
        showGoodsListBtn: false,
        hotcategoryList: [],
        hotCatgoryAct: 0,
        scrollPos: 0
      }
    },
    components: {
      ShopCenterGoodsListButton,
      ShopCenterGoodsList,
      ShopCenterHotSale, ShopCenterButtonList, ShopCenterSlider, ShopCenterHeader},
    mounted() {
      this.refresh();
    },
    computed: {
      ...mapState({
        shopScrollTop: state => {
          return state.shop.shopScrollTop;
        }
      })
    },
    methods: {
      refresh() {
        this.$store.commit(types.SET_HOME_TAB, 0);
        this.viewSearchCollect();
        this.setScroll();
        this.getScrollTop();
        this.getHotCategory();
        this.listPullingUp();
      },
      viewSearchCollect() {
        viewsearchcollect().then(data => {
          this.hotSearchList = data.data;
        })
      },
      getHotCategory() {
        const _this = this;
        hotcategory().then(data => {
          _this.hotcategoryList = data;
        })
      },
      setScroll() {
        const _this = this;
        setTimeout(() => {
          _this.scroll = new BScroll(_this.$refs.shopCenterWarpper, {
            mouseWheel: true,
            click: true,
            pullUpLoad: true,
            pullDownRefresh: true,
            bounce: false
          });
          _this.scroll.on('pullingUp', () => {
            _this.listPullingUp();
          });
          _this.scroll.on('pullingDown', ()=> {
            _this.listRefresh();
          });
          _this.scroll.on('scroll', (pos) => {
            _this.scroll.options.bounce = pos.y >= 0;
            _this.showHeader = pos.y <= 0;
            _this.showRefresh = pos.y >= 10;
            if(pos.y >= 60 && !_this.isRefreshing) {
              _this.refreshInfo = '松手释放刷新';
            }
            _this.scrollPos = pos.y;
            _this.showGoodsListBtn = Math.abs(pos.y) >= Math.abs(_this.eleOffsetTop.goodsList);
          })
        }, 20)
      },
      listRefresh() {
        const _this = this;
        _this.isRefreshing = true;
        _this.scroll.stop();
        _this.refreshInfo = '正在刷新...';
        this.queryGoodsListParams.pagenum = 0;
        this.getGoodsList(this.queryGoodsListParams).then(data => {
          _this.refreshInfo = '刷新成功';
          _this.goodslist = data;
          setTimeout(function() {
            _this.scroll.finishPullDown();
            _this.scroll.finishPullUp();
            _this.scroll.refresh();
          },1000);
        })
      },
      listPullingUp() {
        const _this = this;
        this.loadingText = '加载中...';
        this.queryGoodsListParams.pagenum ++;
        this.getGoodsList(this.queryGoodsListParams).then(data => {
          if(data.length === 0) {
            this.loadingText = '暂无更多数据';
          } else {
            _this.goodslist = _this.goodslist.concat(data);
            this.scroll.finishPullUp();
            this.scroll.refresh();
          }
        });
      },
      getGoodsList(params) {
        return new Promise(resolve => {
          goodslist(params).then(res => {
            resolve(res.data.goodslist);
          })
        })
      },
      getScrollTop() {
        this.eleOffsetTop.goodsList = -this.$refs.goodsList.offsetTop;
      },
      changeHotCatgoryAct(params) {
        this.scroll.finishPullUp();
        const _this = this;
        this.hotCatgoryAct = params.idx;
        this.queryGoodsListParams.catalog = params.title;
        this.queryGoodsListParams.pagenum = 0;
        this.getGoodsList(this.queryGoodsListParams).then(rsp => {
          _this.goodslist = rsp;
          if(Math.abs(_this.scrollPos) > Math.abs(_this.eleOffsetTop.goodsList)) {
            _this.scroll.scrollTo(0, _this.eleOffsetTop.goodsList)
          }
        })

      },
      goGoodsDetail(params) {
        goforward('shopCenterDetail', {params})
      },
      go(path) {
        goforward(path)
      }

    }
  }
</script>

<style lang="scss" scoped>
  .common-bgd {
    background: $bgd-color;
  }
  #shop-center {
    width: 375px;
    .test {
      position: fixed;
      top: $header-height;
      width: 100%;
      background: #f2f2f2;
      z-index: 1000;
    }
    .head-bgd {
      position: fixed;
      width: 375px;
      top: 0;
      height: $header-height *6;
      background:linear-gradient(-20deg,rgba(102,188,255,.42),rgba(105,40,253,.82));
    }
    .shop-center-scroll-box {
      position: fixed;
      top: $header-height;
      bottom: 0;
      width: 375px;
      overflow: hidden;
      .shop-center-scroll-inner {
        .refresh-box {
          @include flex-column(center);
          background: rgba(0,0,0,0);
          .refresh-inner {
            color: #fff;
          }
        }
        padding-bottom: 55px;
        .hot-search {
          height: $cell-height;
          width: 375px;
          color: #fff;
          @include flex-row(baseline);
          padding: 10px;
          >span {
            padding: 1px 5px;
            margin-right: 5px;
          }
          .hot-search-item {
            background:rgba(255,255,255,.15);
            -webkit-border-radius: 9px;
            -moz-border-radius: 9px;
            border-radius: 9px;
          }
        }
        .arc-box {
          width: 375px;
          /*height: 100px;*/

          background: $bgd-color;
          position: relative;
          .inner-box {
            position: absolute;
            background: $bgd-color;
            width: 375px;
            z-index: 100;
          }
        }
        .arc-box::after {
          content: '';
          display: block;
          width: 130%;
          height: 40px;
          position: absolute;
          left: -15%;
          top: -10px;
          z-index: 1;
          border-radius: 50% 50% 0 0 ;
          background: $bgd-color;

        }

        .loading-box {
          height: $header-height;
          @include flex-column(center);
        }
      }
    }

  }
</style>