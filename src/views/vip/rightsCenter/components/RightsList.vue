<template>
  <div id="rights-list">
    <div class="rights-list-title">
      连萌VIP5专项8大权益
    </div>
    <div class="list-container">
      <div class="list-item" v-for="item in [1,1,1,1,1,1,1,1]">
        <div class="list-item-icon">
          <span class="lm-icon icon iconfont">&#xe641;</span>
        </div>
        <span>高额佣金</span>
      </div>
    </div>
    <div class="rect">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightsList"
  }
</script>

<style lang="scss" scoped>
  #rights-list {
    position: relative;
    width: 100%;
    .rect {
      position: absolute;
      top: -15px;
      width: 385px;
      left: -15px;
      @include flex-row();

      div {

        background: $bgd-color;
        width: 30px;
        height: 30px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
    .rights-list-title {
      color: #000;
      text-align: center;
      margin: 20px;
    }

    .list-container {
      @include flex-row();
      flex-wrap: wrap;
      .list-item {
        margin-bottom: 25px;
        @include flex-column();
        width: 25%;

        color: #5e80fd;
        font-weight: 100;
        .list-item-icon {
          width: 40px;
          height: 40px;
          background: #5e80fd;
          border-radius: 50%;
          margin-bottom: 10px;
          @include flex-column(center);
          span {
            color: #fff;
            font-size: 28px;
          }
        }
      }
    }
  }

</style>