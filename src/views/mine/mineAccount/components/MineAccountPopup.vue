<template>
  <div id="mine-account-pop">
    <lm-popup :popup-visible="showAvatar"
              :title="`变更头像`"
              @closePop="handleClosePop" @confirm="confirm">
      <div slot="pop">
        <div class="pop-container headerImg">
          <div class="head-img" @click="handleFileClick">
            <input type="file" accept="image/*" @change="handleFile"  class="hiddenInput"/>
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
      }
    },
    mounted() {
      this.newAvatar = this.$store.state.users.userInfo.avatar
    },
    data() {
      return{
        newAvatar: '',
        AvatarFile: null
      }
    },
    methods: {
      handleFile(e) {
        Loading.hide();
        const _this = this;
        uploadImg(e).then(data => {
          _this.newAvatar = data.imgUrl;
          _this.AvatarFile = data.file;
        })
      },
      handleClosePop() {
        this.$emit('closePop', false);
        this.newAvatar = this.$store.state.users.userInfo.avatar;

      },
      confirm() {
        const reqParams = {
          avatar: this.AvatarFile
        };
        this.$emit('updateUserInfo', reqParams)
      },
      handleFileClick() {
        Loading.show();
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