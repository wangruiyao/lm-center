<template>
  <div id="center-order">
    <home-center-box :title="`连萌助手`" :desc="`查看全部助手`">
      <div class="item-container">
        <div class="item">
          <img src="../../../../assets/images/center/gongjux_icon_20.png">
          <span>我的店铺</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/gongjux_icon_23.png">
          <span>我的招募</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/gongjux_icon_26.png">
          <span>我的SIM卡</span>
        </div>
        <div class="item" @click="go('vipHome')">
          <img src="../../../../assets/images/center/gongjux_icon_28.png">
          <span>权益中心</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/gongjux_icon_34.png">
          <span>排行榜</span>
        </div>
        <div class="item">
          <img src="../../../../assets/images/center/gongjux_icon_35.png">
          <span>开团购</span>
        </div>
        <div class="item" @click="go('shopCenter')">
          <img src="../../../../assets/images/center/gongjux_icon_36.png">
          <span>云商城</span>
        </div>
        <div class="item" @click="go('homeCenterBroadBand')">
          <img src="../../../../assets/images/center/gongjux_icon_37.png">
          <span>宽带地址</span>
        </div>
      </div>

    </home-center-box>
  </div>
</template>

<script>
  import HomeCenterBox from "./HomeCenterBox";
  export default {
    name: "HomeCenterHelper",
    components: {HomeCenterBox},
    methods: {
      go(path, params) {
        goforward(path,params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #center-order {
    .item-container {
      @include flex-row(space-around);
      flex-wrap: wrap;
      padding: 10px 0;
      .item {
        width: 25%;
        margin: 10px 0;
        img {
          width: 50%;
          margin-bottom: 5px;
        }
        @include flex-column()
      }
    }

  }
</style>