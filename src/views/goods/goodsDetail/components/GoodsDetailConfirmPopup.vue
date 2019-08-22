<template>
  <div id="goods-detail-confirm-popup">
    <lm-popup :popup-visible="popupVisible"
              :show-confirm-btn="false"
              :has-close-btn="false"
              :show-popup-title="false"
              @confirm="confirm">
      <div class="confirm-popup-box" slot="pop">
        <div class="popup-scroll" ref="popupWarpper">
          <div class="popup-scroll-inner">
            <div class="goods-info">
              <img :src="goodsInfo.mainImg">
              <div class="info">
                <div class="info-top">
                  <div class="price">￥ <span>{{(goodsInfo.price.basic/100).toFixed(2)}}</span></div>
                  <div class="store">库存: {{goodsInfo.stock}}</div>
                </div>
                <div class="info-bottom">
                  已选：{{goodsInfo.title}}{{goodsInfo.goodsname}}
                </div>
              </div>
            </div>
            <div class="goods-options" v-for="(i, k) in options">
              <div>{{k}}</div>
              <div class="options">
                <div class="options-item"
                     :class="`type`+item.type"
                     v-for="item in i"
                     @click="changeSelect({key:k, value: item.value}, item.type)">
                  {{item.value}}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="close" @click="closePopup"><span class="icon iconfont">&#xe633;</span></div>
        <div class="confirm-btn" :class="goodsInfo.stock === '0' ? 'no-stock' : ''">{{goodsInfo.stock === '0' ? '到货通知' : '确定'}}</div>
      </div>
    </lm-popup>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import LmPopup from "../../../../components/lmPopup/LmPopup";
  export default {
    name: "GoodsDetailConfirmPopup",
    components: {LmPopup},
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      },
      popupVisible: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        selectParams: {}
      }
    },
    mounted() {
      this.setScroll();
    },
    watch: {
      goodsInfo(newOptions) {
        Object.keys(this.goodsInfo.options).forEach(key => {
          this.selectParams[key] = this.goodsInfo.options[key]
        });
        this.updateShowOptions(newOptions.options)
      }
    },
    methods: {
      setScroll() {
        const _this = this;
        setTimeout(() => {
          _this.scroll = new BScroll(_this.$refs.popupWarpper, {
            mouseWheel: true,
            click: true,
          });
        }, 20)
      },
      updateShowOptions(params) {
        this.$emit('updateShowOptions', params)
      },
      changeSelect(params, type) {

        if(type === '2') {
          return false;
        }
        const changeParams = this.selectParams;
        if(changeParams[params.key] === params.value) {
          delete changeParams[params.key];

        } else {
          changeParams[params.key] = params.value;
        }
        this.updateShowOptions(changeParams);
      },
      closePopup() {
        this.$emit('close', false);
      },
      confirm() {

      }
    }
  }
</script>

<style lang="scss" scoped>
#goods-detail-confirm-popup {
  .type0 {
    color: #706AFC;
    background:rgba(244,243,255,1);
    border:1px solid rgba(112, 106, 252, 1) !important;
  }
  .type1 {
    color: #444444;
    background:#eee;
  }
  .type2 {
    color: #999;
    background:#eee;
  }

  .confirm-popup-box {
    position: relative;
    height: 437px;
    .popup-scroll {
      overflow: hidden;
      padding: 15px;
      height: 437px;
      position: absolute;
      bottom: 0;
      .goods-info {
        margin-bottom: 22px;
        @include flex-row(baseline, stretch);
        >img {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }
        >.info{
          margin-left: 10px;
          @include flex-column(space-between, baseline);
          .info-top {
            .price {
              color: #FF2B5B;
              >span {
                font-size: 18px;
              }
            }
            .store {
              font-size: 10px;
              color: #999;
            }
          }
          .info-bottom {
            line-height: 15px;
            height: 30px;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .goods-options {
        .options {
          @include flex-row(baseline);
          flex-wrap: wrap;
          .options-item {
            border: solid #eee 1px;
            line-height: 12px;
            padding: 9px 23px;
            margin: 20px 20px 20px 0;
            border-radius:3px;
          }
        }
      }
    }
    .confirm-btn {
      position: absolute;
      bottom: 10px;
      left: 21px;
      @include flex-column(center);
      color: #fff;
      width:333px;
      height:34px;
      border-radius:10px;
      background:linear-gradient(-90deg,rgba(64,233,245,1),rgba(102,133,251,1),rgba(116,96,253,1),rgba(124,74,255,1));

    }
    .no-stock {
      background: #fdb604 !important;
    }
    .close {
      position: absolute;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      right: 8px;
      top: 8px;
      width: 17px;
      height: 17px;
      border: solid #999 1px;
      @include flex-column(center);
      >span {
        font-size: 10px;
        line-height: 10px;
        color: #999;
      }
    }
  }
}
</style>