<template>
  <div id="good-item" @click="handleClick">
    <div class="good-img">
      <img src="../../../../assets/images/goods/goods-img.png">
    </div>
    <div class="goods-info">
      <div class="title">{{goodsInfo.title}}</div>
      <div class="activity">
        <span>包邮</span>
        <span>团购</span>
      </div>
      <div class="desc">
        <span v-for="guarantee in goodsInfo.basicGuarantee">{{guarantee.name}}</span>
      </div>
      <div class="price">
        ￥<span>{{(goodsInfo.publish_price/100).toFixed(2)}}</span>
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
  @include flex-row();
  padding:  0 10px;
  height: 111px;
  .good-img {
    img {
      width: 111px;
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
      font-size: 10px;
      color: #666;
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