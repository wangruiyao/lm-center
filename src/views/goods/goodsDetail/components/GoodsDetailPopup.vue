<template>
  <div id="detail-popup">
    <lm-popup :title="title" :popup-visible="popupVisible" :has-close-btn="false" @closePop="closePop">
      <div slot="pop">
        <div v-show="title === '基本信息'">基本信息</div>
        <div v-show="title === '优惠'">优惠</div>
        <div v-show="title === '基础保障'">基础保障</div>
      </div>
    </lm-popup>
  </div>
</template>

<script>
  import LmPopup from "../../../../components/lmPopup/LmPopup";
  export default {
    name: "GoodsDetailPopup",
    components: {LmPopup},
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      }
    },
    methods: {
      closePop() {
        this.$emit('closePop')
      }
    }
  }
</script>

<style scoped>

</style>