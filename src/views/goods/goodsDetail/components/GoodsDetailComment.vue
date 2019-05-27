<template>
  <div id="detail-comment">
    <div class="comment-header">
      <span class="title">商品评价（3）</span>
      <span class="header-ck">
        查看全部评价<span class="lm-icon icon iconfont">&#xe66c;</span>
      </span>
    </div>
    <div class="comment-list">
      <div class="comment-item" v-for="item in [1,1,1]">
        <div class="comment-top">
          <div>
            <img src="../../../../assets/images/default-avatar.png">
            <span>12222222223</span>
          </div>
          <div>
            <span class="comment-time">2018-12-12 12:23:22</span>
          </div>
        </div>
        <div class="comment-info">
          <span>好评，激活就有40g流量。充五十赠五十，当天就到账了，可以！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailComment"
  }
</script>

<style lang="scss" scoped>
  #detail-comment {
    color: $font-black-color;
    padding: 10px 15px;
    background: #fff;

    .comment-header {
      @include flex-row();
      margin-bottom: 5px;
      .title {
        font-size: 14px;
      }
      .header-ck {
        @include flex-row();
        color: $font-red-color;
      }
    }

    .comment-list {
      .comment-item {
        @include flex-column(space-between, baseline);
        .comment-top {
          width: 100%;
          @include flex-row();
          img {
            margin-right: 5px;
            width: 20px;
            height: 20px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }
          .comment-time {
            color: $line-deep;
          }
        }

        .comment-info {
          width: 100%;
          padding: 10px 0 10px 25px;
        }
      }
    }
  }
</style>