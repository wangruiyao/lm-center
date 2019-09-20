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
        <input class="upload-btn" :name="item.name" type="file" accept="image/png, image/jpeg, image/gif" @change="handleUploadClick">
      </div>

      <div class="footer">
        该证件只做联通开户使用。为避免证件照被非法利用，上传后将自动添加“仅限中国联通入网使用”水印。
      </div>
    </lm-scroll>
    <div class="confirm-btn" @click = onSubmit()>
      提交
    </div>
  </div>
</template>

<script>
  import {uploadimage} from 'api/order'
  import {uploadImg} from 'utils/basicMethods/index'
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);
  export default {
    name: "MineUpdateIdCard",
    components: {LmScroll, LmHeader},
    data() {
      return {
        urlList: {
          customeridfrontimg: '',	//开户人身份证正面照片	STRING	必填
          customeridreverseimg: '',	//开户人身份证反面照片	STRING	必填
          customerinhandimg: '' //手持身份证
        },
        imgList: [
          {
            name:'customeridfrontimg',
            url: require('assets/images/mine/idcard-01.jpg'),
            file: null,
            handled: false,
            des: '身份证证件照所在面'
          },
          {
            name:'customeridreverseimg',
            url: require('assets/images/mine/idcard-02.jpg'),
            file: null,
            handled: false,
            des: '身份证国徽所在面'
          },
          {
            name:'customerinhandimg',
            url: require('assets/images/mine/idcard-03.jpg'),
            file: null,
            handled: false,
            des: '手持证件照'
          }
        ]

      }
    },
    methods: {
      handleUploadClick(e) {
        Loading.show();
        const _this = this;
        uploadImg(e).then(data => {
          let imgInfo = data;
          _this.imgList.map(i => {
            if(i.name === e.srcElement.name) {
              i.url = imgInfo.imgUrl;
              i.file = imgInfo.file;
              i.handled = true;
              this.upLoadImages(i.name, i.file)
            }
          });

        });
      },
      upLoadImages(name, file) {
        uploadimage({
          idcard: file
        }).then(rsp => {
          Loading.hide();
          this.urlList[name] = rsp.data.respidcard;
        })
      },
      checkUrlList() {
        let flag = this.imgList.every(i => {
          if(i.handled !== true) {
            Toast(`请上传${i.des}`)
          }
          return i.handled;
        });
        return flag;
      },
      onSubmit() {
        if(this.checkUrlList()) {
         Toast('上传成功');
         this.$emit('setCustomerImg', this.urlList)
         goback();
        }
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