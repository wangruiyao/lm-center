<template>
  <div id="popup-header">
    <mt-popup v-model="popupVisible"
              position="bottom"
              :closeOnClickModal="false">
      <div class="popup-title">
        <span class="title-icon"></span>
        <span>{{title}}</span>
        <span class="title-icon" @click="closePop">关闭</span>
      </div>
      <slot name="pop">

      </slot>

      <div class="pop-confirm" @click="handleConfirm">
        确认
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    name: "LmPopup",
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
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
        this.closePop()
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