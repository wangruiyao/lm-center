<template>
  <div id="cart-good-item">
    <div class="store-box">
      <div class="checkbox">
        <lm-check-box></lm-check-box>
      </div>

      <div class="store-info">
        <img src="../../../../assets/images/logo.png">
        <span class="store-title">钟华铭</span>
      </div>

      <div class="edit-btn">编辑</div>
    </div>
    <div class="store-activity">
      <span class="brand">厂家活动</span>
      <span>满1999元减100元，满200元包邮</span>
    </div>

    <div class="goods-box" v-for="item in [1,1,1]">
      <div class="checkbox">
        <lm-check-box></lm-check-box>
      </div>
      <cart-good-info></cart-good-info>
    </div>
  </div>

</template>

<script>
  const LmCheckBox = resolve => require(['components/lmCheckBox/LmCheckBox'], resolve);
  const CartGoodInfo = resolve => require(['./CartGoodInfo'], resolve);
  export default {
    name: "CartGoodItem",
    components: {CartGoodInfo, LmCheckBox}
  }
</script>

<style lang="scss" scoped>
  #cart-good-item {
    width: 375px;
    background: #fff;
    margin-bottom: 10px;
    .store-box {
      @include flex-row();
      height: 30px;
      .checkbox {
        width: 30px;
        @include flex-column(center)
      }
      .edit-btn {
        width: 50px;
        text-align: center;
      }
      .store-info {
        @include flex-row(baseline);
        padding: 0 10px;
        width: 295px;
        img {

          margin-right: 5px;
          width: 20px;
        }
      }

    }

    .store-activity {
      margin: 2px 0;
      margin-left: 30px;
      .brand {
        background: #F53737;
        color: #fff;
        font-weight: 100;
        padding:0 3px;
        margin-right: 5px;
      }

    }

    .goods-box {
      padding: 5px 0;
      @include flex-row();
      border-bottom: solid $line-light 1px;
      .checkbox {
        width: 30px;
        @include flex-column(center)
      }
    }
  }
</style>