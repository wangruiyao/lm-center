<template>
  <div id="cartList" class="lm-container">
    <lm-header :title="`购物车(${totalGoods})`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <cart-good-item v-for="item in [1,1]"></cart-good-item>
    </lm-scroll>
    <cart-list-footer></cart-list-footer>
  </div>
</template>

<script>
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  const CartGoodItem = resolve => require(['./components/CartGoodItem'], resolve);
  const CartListFooter = resolve => require(['./components/CartListFooter'], resolve);
  export default {
    name: "CartList",
    components: {CartListFooter, LmScroll, CartGoodItem, LmHeader},
    data() {
      return {
        totalGoods: 0   // 购物车商品总数
      }
    }
  }
</script>

<style scoped>

</style>