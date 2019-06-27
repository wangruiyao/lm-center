<template>
  <div id="search-header">
    <div class="header-icon left" @click="back">
      <slot name="leftIcon"></slot>
    </div>
    <div class="center">
      <nut-searchbar
              :placeText="placeText"
              @submit="search"
      ></nut-searchbar>
    </div>
    <div class="header-icon right" @click="handleMoreClick">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LmSearchHeader",
    props: {
      placeText:{
        type: String,
        default:'查询'
      }
    },
    methods: {
      back() {
        goback(this.backParams)
      },
      handleMoreClick() {
        this.$emit('handleMoreClick')
      },
      search() {
        this.$emit('search')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #search-header {
    position: fixed;
    top: 0;
    width: 375px;
    z-index: 999;
    background: #fff;
    color: $color-deep;
    height: $header-height;
    @include flex-row();
    border-bottom: solid $line-deep 1px;
    .header-icon {
      height: 100%;
      @include flex-row(center)
    }
    .left {
      width: 40px;

      span {
        font-size: 20px;
      }

    }
    .center {
      flex-grow: 1;
    }
  }
</style>