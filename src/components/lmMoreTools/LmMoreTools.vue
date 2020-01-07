<template>
  <div @click.stop="hideSelf" class="more-tools">
    <transition enter-active-class="slideInDown"
                leave-active-class="slideOutUp">
      <div class="tool-list" v-show="isShow">
        <div class="more-tools-title">功能直达</div>
        <div class="tool-item-box">
          <div class="tool-item" @click.stop="go('shopCenter')">
            <span class="icon iconfont">&#xe66b;</span>
            <span>首页</span>
          </div>
          <div class="tool-item" @click.stop="go('minePasswordChange')">
            <span class="icon iconfont">&#xeb9f;</span>
            <span>修改密码</span>
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "LmMoreTools",
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      go(routeName) {
        this.hideSelf();
        goforward(routeName)
      },
      hideSelf() {
        this.$moreTools.hide()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .more-tools {
    left: 50%;
    margin-left: -187.5px;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 375px;
    z-index: 2000;
    .tool-list {
      position: relative;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      color: #fff;
      width: 375px;
      height: 200px;
      padding: 20px 0;
      background: rgba(0,0,0,.6);
      .more-tools-title {
        margin-left: 11px;
        font-size: 16px;
      }

      .tool-item-box {
        @include flex-row(baseline);
        .tool-item {
          margin-top: 10px;
          margin-left: 11px;
          width: 80px;
          height: 100px;
          background: rgba(0,0,0,.8);
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          font-size: 12px;
          @include flex-column(center);
          .iconfont {
            font-size: 24px;
          }
        }
      }
    }



  }

</style>