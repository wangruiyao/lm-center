<template>
  <div id="filter-item">
    <div class="filter-spec">
      <div class="title">
        {{filterItem.title}}
      </div>
      <div class="item-container">
        <div v-for="(item, idx) in filterItem.value"
             :class="item.act?'act':''" @click="handleClick(idx)">
          {{item.typename === undefined? item : item.typename}}
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "GoodsListFilterItem",
    props: {
      idx: {
        type: Number
      },
      filterItem: {
        type: Object,
        default() {
          return {}
        }
      },
      filterType: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handleClick(idx) {
        const param = {
          outter:this.idx,
          inner: idx
        };
        this.$emit('handleClick', param);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #filter-item {
    margin-bottom: 15px;
    .act {
      color: #fff;
      @include blue-gradient;
      border: none !important;
    }
    .title {
      color: #000;
      margin-bottom: 10px;
    }
    .item-container {
      width: 100%;
      @include flex-row(baseline);
      flex-wrap: wrap;
      div {
        margin-bottom: 10px;
        margin-right: 5px;
        border: solid $line-deep 1px;
        width: 75px;
        height: 23px;
        @include flex-row(center);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    }
  }

</style>