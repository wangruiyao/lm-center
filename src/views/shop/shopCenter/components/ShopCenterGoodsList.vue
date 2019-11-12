<template>
  <div id="shop-center-goods-list">

    <div class="button-list">

      <div class="button-item"
           v-for="(item, idx) in hotCategory"
           :class="idx === actButton ? 'act' : ''"
           @click = changeHotCatgoryAct({...item,idx})>
        <span class="title">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
      </div>
    </div>

    <div class="goods-list">
      <div class="goods-undefined" v-show="goodsList.length === 0">
        <img :src="require('assets/images/goods/goods-undefined.png')"/>
      </div>

      <div class="goods-item"
           v-for="item in goodsList"
           @click="go(item)">
        <img :src="item.pic">
        <div class="price-box">
          <span class="title">{{item.title}}</span>
          <span class="price">￥<span>{{(Number(item.price)/100).toFixed(2)}}</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopCenterGoodsList",
    props: {
      actButton: {
        type: Number,
        default: 0
      },
      hotCategory: {
        type: Array,
        default: []
      },
      goodsList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        hotcategoryList: []
      }
    },
    mounted() {
    },
    methods: {
      go(params) {
        const reqParams = {
          goodsid: params.goodsid,
          productid: params.productid
        };
        this.$emit('goGoodsDetail', JSON.stringify(reqParams))
      },
      changeHotCatgoryAct(params) {
        this.$emit('changeBtn', params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-center-goods-list {
    min-height: 667px - 2*$header-height -55px;
    border: solid transparent 1px;
    .act {
      .title {
        color: #072AFF !important;
      }
      .desc {
        background:linear-gradient(-90deg,rgba(64,233,245,0.99),rgba(102,133,251,0.99),rgba(116,96,253,0.99),rgba(124,74,255,0.99));
        color: #fff !important;
      }
     }
    .button-list {
      background: #bfbfbf;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 2px;
      /*margin: 10px 0;*/
      border-top: solid #f2f2f2 10px;
      border-bottom: solid #f2f2f2 10px;
      .button-item {
        height: 35px;
        background: $bgd-color;
        @include flex-column(center);

        .title {
          color: #202020;
          font-size: 14px;
        }
        .desc {
          white-space: nowrap;
          font-size: 10px;
          color: #999;
          padding: 0 5px;
          border-radius: 10px;
        }
      }
    }

    .goods-list {
      padding: 0 10px;
      .goods-undefined{
        @include flex-column(center);
        width: 100%;
        >img {
          width: 300px;
        }
      }

      @include flex-row(baseline);
      flex-wrap: wrap;
      .goods-item {
        background: #fff;
        overflow: hidden;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        width: 170px;
        margin-left: 5px;
        margin-bottom: 13px;
        >img {
          width: 100%;
          height: 159px;
        }

        .price-box {
          padding: 5px 10px 5px;
          font-size: 10px;
          @include flex-column(baseline,baseline);
          .title {
            margin-bottom: 5px;
            height: 34px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .price {
            color: #FF2A00;
            >span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>