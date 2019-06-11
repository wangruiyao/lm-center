<template>
  <div id="lm-city-picker-2">

    <lm-popup :popupVisible="popupVisible"
              :showConfirmBtn="false"
              :title="`请选择`"
              @closePop ="back">
      <div slot="pop" @click="back">返回</div>
    </lm-popup>

  </div>
</template>

<script>
  import LmPopup from "../lmPopup/LmPopup";
  export default {
    name: "LmCityPicker2",
    components: {LmPopup},
    data() {
      return {
        popupVisible: true
      }
    },
    methods: {
      back() {
        this.popupVisible = false;
        setTimeout(function() {
          goback();
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>