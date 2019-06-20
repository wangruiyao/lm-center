<template>
  <div id="blank-layout" v-touch:swipe.right="swipeHandler">
    <transition :enter-active-class="this.$store.state.pageInAnimate"
                :leave-active-class="this.$store.state.pageOutAnimate">
        <router-view/>

    </transition>


  </div>
</template>

<style lang="scss" scoped>
  #blank-layout {
    background: $bgd-color;
    min-height: 667px;

  }
</style>

<script>
import types from 'store/types'
export default {
  name: 'BlankLayout',
  mounted() {
    var _this = this;
    window.addEventListener(
      "popstate",
      function(e) {
        _this.$store.commit(types.SET_PAGE_STATION, "turn-off");
      },
      false
    );
  },
  methods: {
    swipeHandler() {
      goback()
    },
    clickLink() {
      // console.log(this.$store)
      this.$store.commit(types.SET_PAGE_STATION, "turn-on");
    }
  }
}
</script>
