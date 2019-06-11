<template>
  <div id="goods-list" class="lm-container-blank">
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
          <goods-detail-swiper :goods-picture="goodDetail.goodsPicture"></goods-detail-swiper>
        </div>
        <!--<lm-dash-board></lm-dash-board>-->

        <div ref="info" class="goods-detail-Info">
          <goods-detail-info :goods-info="goodDetail"></goods-detail-info>
          <goods-detail-cell @showPopup="showPopup"></goods-detail-cell>
        </div>
        <div ref="comment" class="goods-detail-comment">
          <goods-detail-comment></goods-detail-comment>
        </div>
        <div ref="img" class="goods-detail-img">
          <div class="goods-detail-img-title">详情</div>
          <img src="../../../assets/images/goods/goods-detail.png">
        </div>

        <div class="goods-detail-bottom">
          已经到底啦
        </div>
      </div>
    </lm-scroll>
    <goods-detail-popup :popup-visible="popup.visible"
                        :title="popup.title"
                        @showPopup="showPopup" @closePop="closePop">

    </goods-detail-popup>
    <goods-detail-footer
            @addTocart="addToCart"
            @orderSubmit="orderSubmit"
            :is-shake="isShake"></goods-detail-footer>


  </div>
</template>

<script>
  // const GoodsDetailHeader = resolve => require(['./components/GoodsDetailHeader'], resolve);
  // const GoodsDetailSwiper = resolve => require(['./components/GoodsDetailSwiper'], resolve);
  // const GoodsDetailInfo = resolve => require(['./components/GoodsDetailInfo'], resolve);
  import { getGoodsDetail } from 'api/goods'
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

  export default {
    name: "GoodsDetail",
    components: {
      FlexBox,
      LmDashBoard,
      GoodsDetailPopup,
      GoodsDetailComment,
      GoodsDetailFooter,
      GoodsDetailCell, LmScroll, GoodsDetailInfo, GoodsDetailSwiper, GoodsDetailHeader},
    data() {
      return {
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
        showFlyBox: false,  // 购物车飞入
        isShake: false, // 购物车抖动
        mainImg: ''
      }
    },
    mounted() {
      this.getOffsetTop();
      this.goodsId = this.$route.params.id;
      this.getGoodsDetail({goodsId: this.$route.params.id})

    },
    methods: {
      scrollTo(ele) {
        const _this = this;
        if(ele === 0) {
          _this.$refs.wrapper.scrollTo(0,0,0)
        } else if (ele === 1) {
          _this.$refs.wrapper.scrollTo(0, this.eleOffsetTop.comment, 0)
        } else if (ele === 2) {
          _this.$refs.wrapper.scrollTo(0, this.eleOffsetTop.img, 0)
        }
      },
      getOffsetTop() {
        this.eleOffsetTop.comment = -this.$refs.comment.offsetTop;
        this.eleOffsetTop.img = -this.$refs.img.offsetTop;
      },
      scroll(pos) {
        if (Math.abs(pos.y) < Math.abs(this.eleOffsetTop.comment)) {
          this.actTab = 0
        }
        if (Math.abs(pos.y) >= Math.abs(this.eleOffsetTop.comment) && Math.abs(pos.y) < Math.abs(this.eleOffsetTop.img)) {
          this.actTab = 1
        }
        if (Math.abs(pos.y) >= Math.abs(this.eleOffsetTop.img)) {
          this.actTab = 2
        }

        this.scrollY = pos.y
      },
      changeTab(idx) {
        const _this = this;
        this.clickTabButton = true;
        this.actTab = idx;
        this.scrollTo(idx)
      },
      getGoodsDetail(params) {
        getGoodsDetail(params)
          .then(data => {
            if(data.code === '0') {
              if(data.subcode === '10000') {
                this.goodDetail = data.data;
                this.mainImg = this.goodDetail.goodsPicture[0].url
              } else {
                Message(`获取商品相关信息接口报错：${data.submsg}`)
              }
            } else {
              Message(`获取商品相关信息接口报错：${data.msg}` )
            }
          })
          .catch(data => {
            Message(`调用获取商品相关信息接口失败,失败原因:${JSON.stringify(data)}`)
          })
      },
      showPopup(popup) {
        this.popup.title = popup;
        this.popup.visible = true
      },
      closePop() {
        this.popup.visible = false
      },
      handleMoreClick() {
        alert(1)
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
      orderSubmit() {
        goforward('orderSubmit')
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