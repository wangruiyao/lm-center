<template>
  <div id="good-item" @click="handleClick">
    <div class="good-img">
      <img :src="goodsInfo.pic">
    </div>
    <div class="goods-info">
      <div class="title">{{goodsInfo.title}}</div>
      <div class="activity">
        <span v-for="marketingtags in goodsInfo.marketingtags">{{marketingtags.tagname}}</span>
      </div>
      <div class="desc">
        <span v-for="guarantee in goodsInfo.xiaobaotags">{{guarantee.name}}</span>
      </div>
      <div class="price">
        ￥<span>{{(goodsInfo.price/100).toFixed(2)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
#good-item {
  @include flex-row(baseline);
  padding:  0 10px;
  height: 111px;
  margin-bottom: 15px;
  .good-img {
    img {
      width: 111px;
      height: 111px;
    }
  }
  .goods-info {
    @include flex-column(space-between, baseline);
    height: 100%;
    padding-left: 10px;
    .title {
      color: #444444;
      font-size: 12px;
    }
    .activity {
      span {
        color: #697DF8;
        font-size: 10px;
        border: solid #697DF8 1px;
        margin-right: 5px;
        padding: 0 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    }
    .desc {
      flex-grow: 1;
      @include flex-row(space-between, flex-end);
      font-size: 10px;
      color: #666;
      >span {
        padding: 0 5px 0 0;
      }
    }
    .price{
      color: #FF2858;
      span {
        font-size: 18px;

      }
    }
  }

}
</style>