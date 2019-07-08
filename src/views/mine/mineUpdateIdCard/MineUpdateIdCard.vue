<template>
  <div id="update-id-card" class="lm-container">
    <lm-header :title="`上传证件照`">
      <div slot="right">
        <span class="lm-icon icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true">
      <div class="img-item" v-for="item in imgList">
        <span class="tips1">点击图片上传证件头像所在面</span>
        <img :src="item.url">
        <span class="tips2">拍照时请确保姓名、证件号码等信息清晰可见！</span>
        <input class="upload-btn" :name="item.name" type="file" accept="image/*" @change="handleUploadClick">
      </div>

      <div class="footer">
        该证件只做联通开户使用。为避免证件照被非法利用，上传后将自动添加“仅限中国联通入网使用”水印。
      </div>
    </lm-scroll>
    <div class="confirm-btn">
      提交
    </div>
  </div>
</template>

<script>
  import {uploadImg} from 'utils/basicMethods/index'
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  export default {
    name: "MineUpdateIdCard",
    components: {LmScroll, LmHeader},
    data() {
      return {
        imgList: [
          {
            name:'idCardFace',
            url: require('assets/images/mine/idcard-01.jpg'),
            file: null,
            handled: false
          },
          {
            name:'idCardBack',
            url: require('assets/images/mine/idcard-02.jpg'),
            file: null,
            handled: false
          },
          {
            name:'idCardHandle',
            url: require('assets/images/mine/idcard-03.jpg'),
            file: null,
            handled: false
          }
        ]

      }
    },
    methods: {
      handleUploadClick(e) {
        const _this = this;
        uploadImg(e).then(data => {
          let imgInfo = data;
          _this.imgList.map(i => {
            if(i.name === e.srcElement.name) {
              i.url = imgInfo.imgUrl;
              i.handled = true;
            }
          })
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
#update-id-card {
  background: #fff;
  z-index: 999;

  .img-item {
    padding: 15px;
    position: relative;
    background: $bgd-color;
    margin: 10px;
    @include flex-column(center);
    >img {
      width: 236px;
      margin: 10px 0;
    }
    .tips2 {
      font-size: 9px;
      color: $color-middle;
    }
    .upload-btn {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: 0;
    }
    box-shadow:0 2px 2px 0 rgba(4,0,0,0.16);
  }

  .footer {
    border:1px solid rgba(34, 122, 255, 1);
    padding: 5px;
    color: #58ABF9;
    margin: 10px;
  }

  .confirm-btn {
    width: 375px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    @include flex-row(center);
    height: 45px;
    font-size: 15px;
    color: #fff;
    @include blue-gradient()
  }
}
</style>