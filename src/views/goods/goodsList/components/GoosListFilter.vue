<template>
  <div id="filter">
    <div class="sort-btn">
      <span :class="actionBtn === `multiple`? 'action':''"
            @click="handleTab('multiple')">综合排序</span>
      <span :class="actionBtn === `sale`?'action': ''"
            @click="handleTab('sale')">销量排序</span>
    </div>
    <div class="filter-btn">
      <span class="lm-icon icon iconfont" @click="handleFilterClick">&#xe6d2;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoosListFilter",
    props: {
      actionBtn: {
        type: String,
        default: 'multiple'
      }
    },
    methods: {
      handleTab(tab) {
        this.$emit('handleTab', tab)
      },
      handleFilterClick() {
        this.$emit('handleFilterClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .action {
    color: $blue-color-link;
  }
  #filter {
    position: fixed;
    width: 375px;
    z-index: 888;
    background: #fff;
    @include flex-row();
    height: $input-height;
    padding: 0 10px;
    font-size: 14px;
    .sort-btn {
      color: $line-deep;
      width: 50%;
      @include flex-row()
    }
    .filter-btn {
      width: 50%;
      @include flex-row(flex-end)
    }
  }
</style>