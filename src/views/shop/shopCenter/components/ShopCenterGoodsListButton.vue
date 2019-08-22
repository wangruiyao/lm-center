<template>
  <div id="goods-list-button">
    <div class="button-item"
         v-for="(item, idx) in hotCategory"
         :class="idx === actButton ? 'act' : ''"
         @click="changeBtn({...item,idx})">
      <span class="title">{{item.title}}</span>
      <span class="desc">{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopCenterGoodsListButton",
    props: {
      hotCategory: {
        type: Array,
        default: []
      },
      actButton: {
        type: Number,
        default: 0
      }
    },
    methods: {
      changeBtn(params) {
        this.$emit('changeBtn', params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    .title {
      color: #072AFF !important;
    }
    .desc {
      background:linear-gradient(-90deg,rgba(64,233,245,0.99),rgba(102,133,251,0.99),rgba(116,96,253,0.99),rgba(124,74,255,0.99));
      color: #fff !important;
    }
  }
  #goods-list-button {
    border: solid #f2f2f2 1px;
    width: 375px;
    background: #bfbfbf;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2px;
    margin: 10px 0;
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

</style>