<template>
  <div id="popup-header">
    <mt-popup v-model="popupVisible"
              position="bottom"
              :closeOnClickModal="false">
      <div class="popup-title">
        <span class="title-icon"></span>
        <span>{{title}}</span>
        <span class="title-icon">
          <span class="lm-icon icon iconfont" @click="closePop" v-show="hasCloseBtn">&#xe6e1;</span>
        </span>
      </div>
      <slot name="pop">

      </slot>

      <div class="pop-confirm" v-show="showConfirmBtn" @click="handleConfirm">
        确认
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    name: "LmPopup",
    props: {
      popupVisible: { // 显示
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      hasCloseBtn: {
        type: Boolean,
        default: true
      },
      showConfirmBtn: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {}
    },
    methods: {
      closePop() {
        this.$emit('closePop')
      },
      handleConfirm() {
        this.$emit('confirm');
        // this.closePop()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #popup-header {
    .popup-title {
      span {
        @include flex-row();
        height: 50px;
      }

      @include flex-row(space-between);
      .title-icon {
        span {
          font-size: 12px !important;
        }
        width: 40px;
      }
    }

    .pop-confirm {
      @include flex-row(center);
      height: 45px;
      font-size: 15px;
      color: #fff;
      @include blue-gradient()
    }


  }

</style>