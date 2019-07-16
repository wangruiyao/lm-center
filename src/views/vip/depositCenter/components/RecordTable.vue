<template>
  <div id="record-table">
    <div class="record-table-title">
      <span>时间</span>
      <span>金额（元）</span>
      <span>方式</span>
      <span>总和</span>
    </div>

    <div class="record-table-list" ref="recordWrapper">
      <div class="scroll-inner">
        <div class="no-item" v-show="despoitdetail.length === 0">未查询到相关记录！</div>
        <div class="record-table-item" v-for="(item, idx) in despoitdetail" :key="idx">
          <span>{{item.date}}</span>
          <span class="red-color">{{item.value > 0 ? `+${parseInt(item.value).toFixed(2)}` : parseInt(item.value).toFixed(2)}}</span>
          <span>{{item.value > 0 ? `缴纳` : `提取`}}</span>
          <span class="red-color">{{parseInt(item.result).toFixed(2)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "RecordTable",
    components: {},
    props: {
      despoitdetail: {
        type: Array
      }
    },
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.recordWrapper, {
          mouseWheel: true,
          click: true
        })
      }, 50);
    }
  }
</script>

<style lang="scss" scoped>
  .red-color {
    color: $font-red-color;
  }
  #record-table {
    height: 100%;
    position: relative;
    border: solid transparent 1px;

    .record-table-title {
      z-index: 999;
      position: absolute;
      width: 100%;
      color: #ffffff;
      @include blue-gradient;
      height: $header-height;
      @include flex-row();
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      span {
        display: inline-block;
        width: 25%;
        text-align: center;
      }
    }
    .record-table-list {
      overflow: hidden;
      position: absolute;
      width: 100%;
      top: $header-height;
      bottom: 0;
      border-style: solid;
      border-width: 1px;
      border-color: transparent $line-light;
      .no-item {
        height: 55px;
        @include flex-column(center);
      }
      .record-table-item {
        height: 55px;
        border-bottom: solid $line-light 1px;
        @include flex-row();
        span {
          display: inline-block;
          width: 25%;
          text-align: center;
        }
      }
    }
  }
</style>