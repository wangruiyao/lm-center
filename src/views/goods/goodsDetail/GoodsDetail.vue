<template>
  <div id="goods-list" class="lm-container-blank">
    <!-- 更多工具 -->
    <goods-detail-more-tools
            v-show="showMoreTools"
            :is-visible="showMoreTools"
            @close="handleMoreClick"></goods-detail-more-tools>
    <!-- 头部 -->
    <goods-detail-header :scroll-y="scrollY"
                         :act-tab="actTab"
                         @changeTab="changeTab"
                         @handleMoreClick="handleMoreClick">
    </goods-detail-header>
    <flex-box ref="fly" :show-box="showFlyBox">
      <div class="fly-img" slot="img">
        <img :src="mainImg">
      </div>
    </flex-box>

    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true"
               @scroll="scroll">
      <div class="scrollInner">

        <div class="swipper-inner">
          <goods-detail-swiper @handleMainImgListVisible="(idx)=> {handleMainImgListVisible(true, idx)}" :goods-picture="goodDetail.mainimages"></goods-detail-swiper>
        </div>
        <!--<lm-dash-board></lm-dash-board>-->

        <div ref="info" class="goods-detail-Info">
          <goods-detail-info :goods-info="checkedGoodsInfo"></goods-detail-info>
          <goods-detail-cell :goods-info="goodDetail" @showPopup="showPopup"></goods-detail-cell>
        </div>
        <!--<div ref="comment" class="goods-detail-comment" v-show="false">-->
          <!--<goods-detail-comment></goods-detail-comment>-->
        <!--</div>-->
        <div ref="img" class="goods-detail-img">
          <div class="goods-detail-img-title">详情</div>
          <img v-for="i in goodDetail.itemimages" :src="i.url">
        </div>

        <div class="goods-detail-bottom">
          已经到底啦
        </div>
      </div>
    </lm-scroll>
    <!--商品详情弹出框-->
    <goods-detail-popup :popup-visible="popup.visible"
                        :title="popup.title"
                        :goods-info="goodDetail"
                        @showPopup="showPopup"
                        @closePop="closePop">

    </goods-detail-popup>
    <!--下单弹出商品规格选择框-->
    <goods-detail-confirm-popup
            :options="goodDetail.total"
            :goods-info="checkedGoodsInfo"
            @updateShowOptions="updateShowOptions"
            @close="handleConfirmPopup"
            :popup-visible="confirmPopup"
    ></goods-detail-confirm-popup>
    <goods-detail-footer
            @addTocart="addToCart"
            @orderSubmit="goodsConfirm"
            :is-shake="isShake">
    </goods-detail-footer>
    <!--商品图片大图-->
    <goods-detail-image-list v-if="mainImgListVisible"
                             :main-img="goodDetail.mainimages"
                             :default-index="mainImgDefaultIndex"
                             @handleMainImgListVisible="handleMainImgListVisible"></goods-detail-image-list>
    <transition enter-active-class="`slideInRight`"
                leave-active-class="`slideOutRight`">
      <router-view></router-view>
    </transition>



  </div>
</template>

<script>
  // const GoodsDetailHeader = resolve => require(['./components/GoodsDetailHeader'], resolve);
  // const GoodsDetailSwiper = resolve => require(['./components/GoodsDetailSwiper'], resolve);
  // const GoodsDetailInfo = resolve => require(['./components/GoodsDetailInfo'], resolve);
  import { getGoodsDetail, goodinfor } from 'api/goods'
  import GoodsDetailHeader from "./components/GoodsDetailHeader";
  import GoodsDetailSwiper from "./components/GoodsDetailSwiper";
  import GoodsDetailInfo from "./components/GoodsDetailInfo";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  import GoodsDetailCell from "./components/GoodsDetailCell";
  import GoodsDetailFooter from "./components/GoodsDetailFooter";
  import GoodsDetailComment from "./components/GoodsDetailComment";
  import GoodsDetailPopup from "./components/GoodsDetailPopup";
  import LmDashBoard from "../../../components/lmDashBoard/LmDashBoard";
  import FlexBox from "../../../components/flyBox/FlexBox";
  import GoodsDetailConfirmPopup from "./components/GoodsDetailConfirmPopup";
  import GoodsDetailMoreTools from "./components/GoodsDetailMoreTools";
  import GoodsDetailImageList from "./components/GoodsDetailImageList";

  export default {
    name: "GoodsDetail",
    components: {
      GoodsDetailImageList,
      GoodsDetailMoreTools,
      GoodsDetailConfirmPopup,
      FlexBox,
      LmDashBoard,
      GoodsDetailPopup,
      GoodsDetailComment,
      GoodsDetailFooter,
      GoodsDetailCell, LmScroll, GoodsDetailInfo, GoodsDetailSwiper, GoodsDetailHeader},
    data() {
      return {
        showMoreTools: false,
        checkedGoodsid: '', // 当前选中id
        checkedGoodsInfo: {}, // 当前选中商品信息
        scrollY: 0,
        eleOffsetTop: {
          comment: 0,
          img: 0
        },
        actTab: 0,
        goodDetail: {},
        goodsId: 0,
        popup: {
          visible: false,
          title: ''
        },
        confirmPopup: false,
        showFlyBox: false,  // 购物车飞入
        isShake: false, // 购物车抖动
        mainImg: '',
        mainImgListVisible: false,  // 是否显示放大轮播主图
        mainImgDefaultIndex: 0  // 轮播主图显示idx
      }
    },
    mounted() {
      const queryParams = JSON.parse(this.$route.params.params);
      this.getGoodsDetail(queryParams);


    },
    watch: {
      checkedGoodsid(newId, oldId) {
        this.getCheckedGoodsInfo(newId);
      },
      goodDetail() {
        const _this = this;
        _this.$nextTick(function() {
          _this.getOffsetTop();
        })
      }
    },
    methods: {
      scrollTo(ele) {
        const _this = this;
        if(ele === 0) {
          _this.$refs.wrapper.scrollTo(0,0,0)
        }
        else if (ele === 1) {
          _this.$refs.wrapper.scrollTo(0, this.eleOffsetTop.comment, 0)
        }
        else if (ele === 2) {
          _this.$refs.wrapper.scrollTo(0, this.eleOffsetTop.img, 0)
        }
      },
      getOffsetTop() {
        // this.eleOffsetTop.comment = -this.$refs.comment.offsetTop;
        this.eleOffsetTop.img = -this.$refs.img.offsetTop +50;
      },
      scroll(pos) {
        if (Math.abs(pos.y) < Math.abs(this.eleOffsetTop.img)) {
          this.actTab = 0
        }
        // if (Math.abs(pos.y) >= Math.abs(this.eleOffsetTop.comment) && Math.abs(pos.y) < Math.abs(this.eleOffsetTop.img)) {
        //   this.actTab = 1
        // }
        if (Math.abs(pos.y) >= Math.abs(this.eleOffsetTop.img)) {
          this.actTab = 2
        }

        this.scrollY = pos.y
      },
      changeTab(idx) {
        this.clickTabButton = true;
        this.actTab = idx;
        this.scrollTo(idx)
      },
      getGoodsDetail(params) {
        const _this = this;
        goodinfor(params)
          .then(data => {
            console.log(data.data)
            _this.goodDetail = data.data;
            _this.mainImg = _this.goodDetail.mainimages[0].url;
            if(_this.goodDetail.selectCity !== '') {  //
              _this.goodDetail.basicspec = Object.assign(_this.goodDetail.basicspec, {'选号地市': _this.goodDetail.selectCity})
            }
            this.checkedGoodsid = this.goodDetail.goodsid;
          })
          .catch(data => {
            Message(`调用获取商品相关信息接口失败,失败原因:${JSON.stringify(data)}`)
          })
      },
      getCheckedGoodsInfo(id) {
        const _this = this;
        this.goodDetail.goodslist.map(i => {
          if(i.goodsid === id) {
            i.title = _this.goodDetail.title;
            i.mainImg = this.goodDetail.mainimages[0].url;
            _this.checkedGoodsInfo = i;
          }
        })
      },
      showPopup(popup) {
        this.popup.title = popup;
        this.popup.visible = true
      },
      closePop() {
        this.popup.visible = false
      },
      handleMoreClick(status) {
        this.showMoreTools = status === undefined ? true : status;
      },
      addToCart() { //加入购物车
        const _this = this;
        _this.flyInCart().then(data=> {
          _this.isShake = true;
          Toast({
            message: '成功添加至购物车',
            position: 'bottom'
          });
          setTimeout(function() {
            _this.isShake = false;
          },1000)
        });

      },
      flyInCart() {
        const _this = this;
        this.showFlyBox = true;
        return new Promise((resolve) => {
          setTimeout(function() {
            _this.$refs.fly.run().then(()=> {
              _this.showFlyBox = false;
              _this.$refs.fly.reset();
              resolve();
            })
          },100)
        })
      },
      goodsConfirm() {
        this.handleConfirmPopup(true);
      },
      updateShowOptions(params) { // 筛选符合条件的属性列表
        this.checkConfirmGoods(params);
        const _this = this;
        const totalOp = Object.keys(this.goodDetail.total);
        const array = this.goodDetail.goodslist.map(good => good.options);  // 所有商品属性
        const checkParams = {};
        totalOp.map(i => {
          const filterParams =  Object.assign({}, params);
          delete filterParams[i];
          checkParams[i] = _this.queryOptionGoodsList(array, filterParams, i);
        });
        this.filterTotalOptions(params, checkParams);
      },
      filterTotalOptions(checkedParams, checkableParams) {  // checkedParams obj: 用户选中的属性， checkableParams obj: 可选择的属性

        const totalOptions = this.goodDetail.total;
        Object.keys(totalOptions).forEach(key => {
          totalOptions[key].map(info => {
            if(checkedParams[key] === info.value) {
              info.type = "0";
            } else if(checkableParams[key].includes(info.value)) {
              info.type = "1";
            } else {
              info.type = "2";
            }
          })
        })

      },
      queryOptionGoodsList(array, params, nowOption) {
        const keys = Object.keys(params);
        const returnParams = [];
        const list =  array.filter(m => {
          return keys.every(key => {
            return m.hasOwnProperty(key) && m[key] === params[key]
          });
        });
        list.map(i => {
          returnParams.push(i[nowOption])
        });
        return returnParams;
      },
      checkConfirmGoods(params) {
        const _this = this;
        const keys= Object.keys(this.goodDetail.total);
        this.goodDetail.goodslist.map(good => {
          if(keys.every(i => {
            return good.options[i] === params[i] && params.hasOwnProperty(i);
          })) {
            _this.getCheckedGoodsInfo(good.goodsid);
          }
        });
      },
      handleConfirmPopup(type) {
        this.confirmPopup = type;
      },
      handleMainImgListVisible(type, idx) {
        if(idx) {
          this.mainImgDefaultIndex = idx;

        }
        this.mainImgListVisible = type;
      }

    }
  }
</script>

<style lang="scss" scoped>



  .fly-img{
    @include flex-column(center);
    img {
      width: 70%;
    }
  }
  #goods-list {
    z-index: 1000;
    background: $bgd-color;
    .swipper-inner {
      margin-top: -10px;
    }
    .scrollInner {
      position: relative;
    }
    .goods-detail-Info {
      margin-bottom: 10px;
    }
    .goods-detail-img {
      width: 100%;
      .goods-detail-img-title {
        @include flex-row(center);
        color: #5B5B5B;
        padding: 10px 0;
      }
      .goods-detail-img-title::after{
        content: "";
        width: 100px;
        height: 1px;
        background: #999;
        margin-left: 10px;
      }
      .goods-detail-img-title::before{
        content: "";
        width: 100px;
        height: 1px;
        background: #999;
        margin-right: 10px;
      }
      img {
        width: 100%;
      }
    }
    .goods-detail-bottom{
      width: 100%;
      position: absolute;
      bottom: -35px;
      @include flex-row(center);

    }
    .goods-detail-bottom::after{
      content: "";
      width: 40px;
      height: 1px;
      background: #999;
      margin-left: 10px;
    }
    .goods-detail-bottom::before{
      content: "";
      width: 40px;
      height: 1px;
      background: #999;
      margin-right: 10px;
    }
  }
</style>