<template>
  <div id="order-search"
       v-touch:swipe.right="swipeHandler"
       v-touch:swipe.left="swipeHandler">
    <div class="search-box">
      <div class="input-bgd">
        <input v-model="keywords" type="text">
      </div>

      <div class="search-btn"
           :class="touchItem === 'search' ? touchStyle : ''"
           @click="orderListByKeyWords"
           @touchstart="touchBtn('search', 'handle-btn-light')"
           @touchend="touchBtn('')">搜订单</div>
    </div>
    <div class="history-box">
      <div class="history-btn">
        <span class="color-light">搜索历史</span>
        <span @click="clearSearchHistory">清除</span>
      </div>

      <div class="history-list">
        <div class="history-item"
             :class="touchItem === idx ? touchStyle : ''"
             @click="searchByHistoryKeyWords(item)"
             @touchstart="touchBtn(idx, 'handle-btn')"
             @touchend="touchBtn('')"
             v-for="(item, idx) in historyList">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderSearch",
    data() {
      return {
        keywords: '',
        touchItem: '',
        touchStyle: '',
        historyList: []
      }
    },
    mounted() {
      this.historyList =getSession('orderSearchHistory') === null ? [] : getSession('orderSearchHistory');
    },
    methods: {
      swipeHandler() {
        goback();
      },
      touchBtn(i, sty) {
        this.touchStyle = sty;
        this.touchItem = i;

      },
      searchByHistoryKeyWords(keyWords) { // 点击搜索历史查询
        this.keywords = keyWords;
        this.orderListByKeyWords();

      },
      orderListByKeyWords() {
        let params = {
          keywords: this.keywords
        };
        this.setSearchHistory(this.keywords)
        this.$emit('searchByKeyWords', params);
        goback();
      },
      setSearchHistory(keyWords) {
        if(this.historyList.indexOf(keyWords) > -1) {
          this.historyList.splice(this.historyList.indexOf(keyWords),1)
        }
        if(keyWords !== '') {
          this.historyList.unshift(keyWords);
          setSession('orderSearchHistory',this.historyList)
        }
      },
      clearSearchHistory() {
        sessionStorage.removeItem('orderSearchHistory');
        this.historyList =getSession('orderSearchHistory') === null ? [] : getSession('orderSearchHistory');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-search {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    background: $bgd-color;
    z-index: 999;
    border-right: solid #e0e0e0 1px;
    .search-box {
      padding: 0 10px;
      .input-bgd {
        flex-grow: 1;
        height: 70%;
        width: 220px;
        padding: 1px 0 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-image: -moz-linear-gradient( -90deg, rgba(91,239,225,.4) 0%, rgba(105,132,238,.4) 50%, rgba(195,114,230,.4) 100%);
        background-image: -webkit-linear-gradient( -90deg, rgba(91,239,225,.4) 0%, rgba(105,132,238,.4) 50%, rgba(195,114,230,.4) 100%);
        background-image: -ms-linear-gradient( -90deg, rgba(91,239,225,.4) 0%, rgba(105,132,238,.4) 50%, rgba(195,114,230,.4) 100%);
      }
      input {
        padding: 0 10px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        height: 100%;
        width: 100%;

      }
      .search-btn {
        font-size: 14px;
        letter-spacing: 3px;
        font-weight: 100;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        flex-grow: 0;
        @include flex-column(center);
        height: 70%;
        width: 100px;
        @include blue-gradient;
        color: #fff;
      }
      @include flex-row(center);
      height: $header-height;
    }

    .history-box {
      width: 375px;
      .history-btn {
        font-size: 10px;
        @include flex-row();
        padding: 5px 10px;
      }
      .history-list {
        flex-wrap: wrap;
        padding: 0 5px;
        @include flex-row(baseline);
        .history-item {
          color: $color-middle;

          margin-bottom: 10px;
          @include flex-row(center);
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
          margin: 5px;
          height: 25px;
          width: 80px;
          background: #fff;
        }
      }

    }
  }
</style>