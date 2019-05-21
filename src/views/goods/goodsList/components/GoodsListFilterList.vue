<template>
  <div id="filter-list">
    <goods-list-filter-item v-for="(item, idx) in filterItems"
                            :filter-item="item"
                            :idx="idx"
                            @handleClick="handleClickItem">

    </goods-list-filter-item>


  </div>
</template>

<script>
  import GoodsListFilterItem from "./GoodsListFilterItem";
  export default {
    name: "GoodsListFilterList",
    components: {GoodsListFilterItem},
    data() {
      return {
        filterItems: [
          {
            title: '手机品牌',
            list: [
              {act: true, text: '运营商产品'},
              {act: false, text: '实物商品'}
            ]
          },
          {
            title: '手机颜色',
            list: [
              {act: true, text: '宽带'},
              {act: false, text: '移网'},
              {act: false, text: '融合'},
              {act: false, text: '宽带'},
              {act: false, text: '移网'},
              {act: false, text: '融合'}
            ]
          },
          {
            title: '手机内存',
            list: [
              {act: true, text: '山东'},
              {act: false, text: '内蒙'}
            ]
          }
        ]
      }
    },
    methods: {
      handleClickItem(param) {
        this.filterItems[param.outter].list.map((val, idx)=> {
          this.$set(this.filterItems[param.outter].list[idx], 'act', false)
        });
        this.$set(this.filterItems[param.outter].list[param.inner], 'act', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>