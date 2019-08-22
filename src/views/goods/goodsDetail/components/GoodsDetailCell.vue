<template>
  <div id="detail-cell">
    <lm-cell :title="`参数`"
             :disable="false"
             :border="false"
             @click="showPopup('基本信息')">
      <div class="cell-text" slot="cellInput">
        <span v-for="(i, k, idx) in goodsInfo.basicspec"><i v-show="idx !== 0">、</i>{{k}}</span>
      </div>
    </lm-cell>
    <!--<lm-cell :title="`优惠`"-->
             <!--:disable="false"-->
             <!--:border="false"-->
             <!--@click="showPopup('优惠')">-->
      <!--<div class="cell-text" slot="cellInput">-->
        <!--<span class="coupon-text">联通宽带优惠券</span>-->
      <!--</div>-->
      <!--<span class="right-text" slot="right-text">领取</span>-->
    <!--</lm-cell>-->
    <lm-cell :title="`服务`"
             :disable="false"
             :border="false"
             @click="showPopup('基础保障')">
      <div class="cell-text" slot="cellInput">
        <span class="xiaobao" v-for="i in goodsInfo.xiaobaotags">{{i.name}}</span>
      </div>
    </lm-cell>

  </div>
</template>

<script>
  import LmCell from "../../../../components/lmCell/LmCell";
  import LmPopup from "../../../../components/lmPopup/LmPopup";
  export default {
    name: "GoodsDetailCell",
    components: {LmPopup, LmCell},
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      showPopup(popup) {
        this.$emit('showPopup', popup)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detail-cell {
    .right-text {
      width: 30px;
    }
    .cell-text {
      width: 100%;
      text-align: left;
      color: #666;
      >.xiaobao {
        margin-right: 5px;
      }
      .coupon-text {
        color: $font-red-color;
      }
    }
  }
</style>