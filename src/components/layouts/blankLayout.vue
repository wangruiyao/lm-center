<template>
  <div id="blank-layout">
    <transition :enter-active-class="this.$store.state.pageInAnimate"
                :leave-active-class="this.$store.state.pageOutAnimate">
        <router-view/>

    </transition>
    <div class="global-mask" v-show="isPageScroll"></div>

  </div>
</template>

<style lang="scss" scoped>
  #blank-layout {
    position: relative;
    width: 375px;
    @include flex-column();
    background: $bgd-color;
    min-height: 667px;

    .global-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,.3);
    }

  }
</style>

<script>
import types from 'store/types'
import { mapState } from 'vuex'
export default {
  name: 'BlankLayout',
  computed: {
    ...mapState({
      'isPageScroll': state => state.isPageScroll
    })
  },
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
