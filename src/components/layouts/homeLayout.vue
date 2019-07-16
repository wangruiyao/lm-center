<template>
  <div id="home-layout">
    <transition :enter-active-class="this.$store.state.pageInAnimate"
                :leave-active-class="this.$store.state.pageOutAnimate">
      <router-view/>

    </transition>
    <div class="home-layout-footer">
      <div class="footer-item"
           v-for="(i,idx) in itemList"
           :class="idx === mainHomeTab?'act-item':''"
           @click="changeTab(idx)">
        <span class="lm-icon icon iconfont">{{i.icon}}</span>
        <span class="item-title">{{i.title}}</span>
      </div>
    </div>
    <div class="global-mask" v-show="isPageScroll"></div>

  </div>
</template>

<style lang="scss" scoped>
  #home-layout {
    position: relative;
    width: 375px;
    @include flex-column();
    background: $bgd-color;
    min-height: 667px;
    .home-layout-footer {
      @include flex-row();
      position: fixed;
      bottom: 0;
      width: 375px;
      background: #fff;
      height: 54px;
      padding: 0 5px;
      .act-item {
        @include blue-icon();
        >.item-title {
          @include kefu-icon();
        }
      }
      >div {
        @include flex-column(center);
        height: 100%;
        flex-grow: 1;
        >.item-title {
          line-height: 10px;
          font-size: 10px !important;
        }
        >.lm-icon {
          font-size: 24px;

        }
      }
    }
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
    name: 'HomeLayout',
    computed: {
      ...mapState({
        'mainHomeTab': state => state.mainHomeTab,
        'isPageScroll': state => state.isPageScroll
      })
    },
    data() {
      return {
        itemList: [
          {
            icon: '\ue605',
            title: '首页',
            route: 'shopCenter'
          },
          {
            icon: '\ue650',
            title: '运营商',
            route: ''
          },
          {
            icon: '\ue66b',
            title: '实物',
            route: ''
          },
          {
            icon: '\ue603',
            title: '服务',
            route: ''
          },
          {
            icon: '\ue64d',
            title: '我的连萌',
            route: 'homeCenter'
          }
        ]
      }
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
      },
      changeTab(idx) {

        const oldTab = this.$store.state.mainHomeTab;
        this.$store.commit(types.SET_HOME_TAB, idx);
        this.itemList.map((i, d) => {
          if(idx === d) {
            if(oldTab>d) {
              goforward(i.route, {direction: 'back'})
              return false;
            }
            goforward(i.route)

          }
        })
      }
    }
  }
</script>
