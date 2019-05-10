<template>
  <div id="blank-layout">
    <transition :enter-active-class="this.$store.state.pageInAnimate"
                :leave-active-class="this.$store.state.pageOutAnimate">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
  #blank-layout {
    background: #ffffff;
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
    clickLink() {
      // console.log(this.$store)
      this.$store.commit(types.SET_PAGE_STATION, "turn-on");
    }
  }
}
</script>
