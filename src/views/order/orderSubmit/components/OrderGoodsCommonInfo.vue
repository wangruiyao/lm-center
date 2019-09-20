<!-- 商品基本信息-->
<template>
  <div id="order-goods-common-info">
    <div class="goods-store">
      <img src="../../../../assets/images/logo.png">
      <span>山东联通</span>
    </div>
    <div v-for="good in localOrderGoodsInfo">
      <div class="goods-info" >
        <img :src="getMainImg(good.mainimages)">
        <div class="goods-info-desc">
          <div class="goods-title">
            <span class="title">{{good.goodsname}} </span>
            <span class="tips">{{good.goodstitle}}</span>
          </div>

          <div class="good-price">
            ￥<span class="price">{{goodsPrice(good.goodsprice)}}</span>
            x<span class="number">{{good.number}}</span>
          </div>
        </div>

      </div>
      <!-- 单商品信息 -->
      <div class="info-num" v-if="goodType === `2`">
        <span>购买数量</span>
        <nut-stepper
                :transition="false"
                :min="1"
                :max="good.goodsstock"
                :value="good.number"
                @change="value => changeGoodsNum(value, good.goodsid)"
        ></nut-stepper>
      </div>
    </div>
    <!--@add="addNumber(number,)"-->
    <!--@reduce="reduceNumber(number)"-->
  </div>
</template>

<script>
  export default {
    name: "OrderGoodsCommonInfo",
    props: {
      orderGoodsInfo: {
        type: Array,
        default() {
          return []
        }
      },
      goodType: {
        type: String,
        default: '0'
      }
    },
    data() {
      return {
        localOrderGoodsInfo: []
      }
    },
    mounted() {
      this.localOrderGoodsInfo = this.orderGoodsInfo;
    },
    methods: {
      goodsPrice(price) {
        return (Number(price)/100).toFixed(2)
      },
      getMainImg(imgList) {
        return imgList[0].url;
      },
      changeGoodsNum(num, id) {
        this.localOrderGoodsInfo.map(i => {
          if(i.goodsid === id) {
            i.number = num.toString();
          }
        });
        this.$emit('addNum', {goodsid:id, goodsnumber:num});
      },
      onPhysicalSubmit() {  // 实物下单
        let goodsdetail = [];
        this.orderGoodsInfo.map(i => {
          goodsdetail.push({
            goodsId: i.goodsid,
            goodsNumber: i.number
          })
        });
        return {goodsdetail};
      },
      operatorSubmit() {  // 运营商下单
        return {goodsid: this.orderGoodsInfo[0].goodsid}
      }
    },
    watch: {
      orderGoodsInfo(newGoodsInfo) {
        this.localOrderGoodsInfo = newGoodsInfo;
        // this.goodsImg = newGoodsInfo.mainimages[0].url;
        // this.goodsPrice = (Number(newGoodsInfo.price.goods)/100).toFixed(2);
        // this.typeGroup = newGoodsInfo.typegroup;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-goods-common-info {
    width: 375px;

    .goods-store {
      height: 37px;
      background: #fff;
      @include flex-row(baseline);

      >img {
        margin: 0 10px;
        width: 20px;
      }
      >span {
        line-height: 20px;
        font-size: 12px;
        color: #333;
      }
    }

    .goods-info {
      height: 102px;
      @include flex-row(baseline);
      padding: 0 15px;
      >img {
        border: solid #999 1px;
        width: 82px;
        height: 82px;
      }

      .goods-info-desc {
        padding-left: 22px;
        height: 82px;
        @include flex-column(space-between,baseline);

        .goods-title {
          .tips {
            color: #999;
          }
        }
        .good-price {
          margin-bottom: 10px;
          font-size: 10px;
          color: $color-middle;
          span {
            display: inline-block;
            font-size: 14px;
            color: #FF2D00;
          }
          .price {
            margin-right: 15px;
          }
          .number {

            color: $color-middle;
          }
        }
      }


    }
    .info-num {
      background: #fff;
      @include flex-row();
      font-size: 14px;
      height: $header-height;
      @include flex-row();
      padding: 15px;
    }
  }
</style>