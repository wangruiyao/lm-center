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
          <div class="record-table-item" v-for="item in [1,1,1,1,1,1,1,1,1]">
            <span>2019-02-23 12:09:12</span>
            <span>+199.00</span>
            <span>缴纳</span>
            <span>199.00</span>
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
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.recordWrapper)
      }, 20)
    },
  }
</script>

<style lang="scss" scoped>
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