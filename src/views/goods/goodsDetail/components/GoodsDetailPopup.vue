<template>
  <div id="detail-popup">
    <lm-popup :title="title" :popup-visible="popupVisible" :has-close-btn="false" @confirm="closePop">
      <div class="popup-inner-box" slot="pop">
        <div v-show="title === '基本信息'">
          <div class="basicspec-cell" v-for="(i, k) in goodsInfo.basicspec">
            <span class="basicspec-title">{{k}}</span>
            <div class="basicspec-value">{{i}}</div>
          </div>
        </div>
        <div v-show="title === '优惠'">优惠</div>
        <div v-show="title === '基础保障'">
          <div class="xiaobao-cell" v-for="(i, k) in goodsInfo.xiaobaotags">
            <div class="xiaobao-icon">
              <span class="icon iconfont">&#xe635;</span>
            </div>
            <div>
              <span class="xiaobao-title">{{i.name}}</span>
              <div class="xiaobao-value">{{i.context}}</div>
            </div>
          </div>
        </div>
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
      },
      goodsInfo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      closePop() {
        this.$emit('closePop')
      }
    }
  }
</script>

<style lang="scss" scoped>
#detail-popup {
  .popup-inner-box {
    min-height: 430px;
  }

  .basicspec-cell {
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: solid $line-light 1px;
    @include flex-row();
    .basicspec-title {
      width: 20%;
      padding-left: 10px;
    }
    .basicspec-value {
      width: 80%;
    }
  }

  .xiaobao-cell {
    @include flex-row(baseline, flex-start);
    padding: 10px;
    .xiaobao-icon {
      margin-right: 15px;
      >span {
        color: #6ea8ff;
        font-size: 20px;
        line-height: 20px;
      }
    }
    .xiaobao-title {
      font-size: 14px;
      color: #333;
    }
    .xiaobao-value {
      color: #666;
      margin-top: 15px;
    }

  }
}
</style>