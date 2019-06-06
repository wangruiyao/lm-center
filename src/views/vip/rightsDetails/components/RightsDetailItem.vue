<template>
  <div id="rights-detail-item">
    <div class="rights-title">连萌VIP1专项3大权益</div>
    <div class="rights-detail-box">
      <div class="item" v-for="item in [1,1,1,1,1,1,1,1]">
        <div class="item-icon">
          <span class="lm-icon icon iconfont">&#xe641;</span>
        </div>
        <span class="item-title">高额佣金</span>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightsDetailItem"
  }
</script>

<style lang="scss" scoped>
  #rights-detail-item {
    width: 375px;
    background: #fff;
    margin-bottom: 10px;
    .rights-title {
      color: #000;
      @include flex-column(center);
      padding: 5px;
      margin-bottom: 10px;
    }
    .rights-detail-box {
      @include flex-row();
      flex-wrap: wrap;
      .item {
        margin-bottom: 25px;
        color: $blue-color-link;
        width: 25%;
        @include flex-column(center);
        .item-icon {
          @include flex-column(center);
          width: 40px;
          height: 40px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          border: solid $blue-color-link 1px;
          margin-bottom: 5px;
          span {
            font-size: 30px;
            margin-top: 5px;
          }
        }

        .item-title {

        }
      }
    }
  }
</style>