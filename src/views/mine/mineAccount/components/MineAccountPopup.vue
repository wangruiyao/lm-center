<template>
  <div id="mine-account-pop">
    <lm-popup :popup-visible="showAvatar"
              :title="`变更头像`"
              @closePop="handleClosePop">
      <div slot="pop">
        <div class="pop-container headerImg">
          <div class="head-img">
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            <img :src="newAvatar">
          </div>
          <span>点击上传头像</span>

        </div>
      </div>
    </lm-popup>
  </div>
</template>

<script>
  import LmPopup from "components/lmPopup/LmPopup";
  export default {
    name: "MineAccountPopup",
    components: {LmPopup},
    props: {
      showAvatar: {
        type: Boolean,
        default: false
      },
      avatar: {
        type: String,
        default: '/img/logo.1e05f0c9.png'
      }
    },
    mounted() {
      this.newAvatar = this.avatar
    },
    data() {
      return{
        newAvatar: ''
      }
    },
    methods: {
      handleFile(e) {
        const _this = this;
        let $target = e.target || e.srcElement;
        let file = $target.files[0];
        // console.log(file)
        let reader = new FileReader();
        reader.onloadstart = function(e) {
          _this.$indicator.open();
        };
        reader.onload = function(e) {
          _this.$indicator.close();
          // console.log("读取成功：" + e.target.result);
          const avatarUrl = e.target.result;
          _this.newAvatar = avatarUrl;
          // _this.$emit('updateAvatar', avatarUrl);

        };
        reader.readAsDataURL(file)
      },
      handleClosePop() {
        this.$emit('closePop', false)
        // alert(6)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pop-container {
    min-height: 350px;
    width: 100%;
    padding: 10px;
  }
  .headerImg {

    @include flex-column(baseline);

    .head-img {
      position: relative;
      width: 90px;
      height: 90px;
      border: solid $line-light 1px;
      overflow: hidden;
      border-radius: 50%;
      @include flex-row(center);
      img {
        width: 120%;
      }
    }
    span {
      color: #666;
      padding: 12px;
      font-size: 12px;
    }

    .hiddenInput {
      z-index: 99;
      position: absolute;
      width: 90px;
      top: 0;
      bottom: 0;
      opacity: 0;
    }
  }

</style>