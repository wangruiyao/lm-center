<!--退款申请-->
<template>
  <div id="order-refund-apply" class="lm-container">
    <lm-header :title="`退款申请`">
      <div class="header-right" slot="right">
        <span class="icon iconfont">&#xe61e;</span>
      </div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true"
               :listenScroll="true">
      <div class="apply-box">
        <!--订单信息-->
        <div class="good-info">
          <img :src="refundGoodsInfo.goodspic" />
          <div class="info">
            <div class="goods-detail-top">
              <span class="title">{{refundGoodsInfo.goodsname}}</span>
              <span class="detail">{{refundGoodsInfo.goodstitle}}</span>
              <div class="title good-spec" v-show="refundGoodsInfo.serialnumber">
                开户号码
                <span>{{refundGoodsInfo.serialnumber}}</span>
              </div>
              <!--<div class="title" v-show="true">-->
              <!--装机地址-->
              <!--<span>123456789</span>-->
              <!--</div>-->
              <!--<div class="title" v-show="true">-->
              <!--商品规格-->
              <!--<span>123</span>-->
              <!--</div>-->
            </div>
            <div class="goods-detail-bottom">
              <span class="order-price">￥<span>{{(Number(refundGoodsInfo.price)/100).toFixed(2)}}</span></span>
              <span class="good-number">x<span>{{refundGoodsInfo.amount}}</span></span>
            </div>
          </div>
        </div>
        <!--退款原因-->
        <div class="refund-result-info">
          <div class="refund-result">
            <span>退款原因 :</span>
            <div @click="switchActionSheet('refundResultVisible')" class="result-check-box">{{chooseResult}}</div>
          </div>
          <div class="refund-desc">
            <span>退款说明 :</span>
            <div class="result-desc-box">
              <textarea v-model="refundAppleParams.handleremark" class="text"></textarea>
            </div>
          </div>
          <div class="refund-img">
            <span>上传图片 :</span>
            <div class="result-desc-box">
              <nut-imagepicker
                      @imgMsg="imgMsg"
                      :max="3"
                      :width="55"
                      :height="55"
                      :imgList="picDescList"
              >
              </nut-imagepicker>
            </div>
          </div>
        </div>

        <!--提交-->
        <div class="refund-footer">
          <div @click="confirm" class="handle-confirm-btn"></div>
        </div>

      </div>
    </lm-scroll>
    <nut-actionsheet :is-visible="refundResultVisible"
                     :menu-items="refundResultList"
                     cancelTxt="取消"
                     @choose="chooseRefundResult"
                     @close="switchActionSheet('refundResultVisible')"
    ></nut-actionsheet>
  </div>
</template>

<script>
  import {uploadpictures} from 'api/common';
  import {applyrefundreason, applyrefundgood, getrefundgoodsinfor} from 'api/order';
  import LmHeader from "../../../components/lmHeader/LmHeader";
  import LmScroll from "../../../components/lmScroll/LmScroll";
  export default {
    name: "OrderRefundApply",
    components: {LmScroll, LmHeader},
    data() {
      return {
        refundResultVisible: false, // 退款原因弹出框显示
        refundResultList: [],  // 退款原因列表
        picDescList: [],
        chooseResult: '',
        refundGoodsInfo: {},  // 退款商品信息
        refundAppleParams: {
          orderid: '',  //	订单id	STRING	必填
          goodsid: '',  //	退款商品id	STRING	必填
          handlereason: '',  //	退款原因	STRING	必填
          handleremark: '',  //	退款描述	STRING	非必填
          picdesc: '',  //	描述图片，文件id逗号分隔
        }
      }
    },
    mounted() {
      const orderInfo = JSON.parse(this.$route.params.orderinfo);
      this.refundAppleParams.orderid = orderInfo.orderid;
      this.refundAppleParams.goodsid = orderInfo.goodsid;
      this.applyRefundReason();
      this.getRefundGoodsInfor();
    },
    methods: {
      getRefundGoodsInfor() { //前台-获取退款商品信息
        getrefundgoodsinfor({
          orderid: this.refundAppleParams.orderid,
          goodsid: this.refundAppleParams.goodsid
        }).then(rsp => {
          this.refundGoodsInfo = rsp.data;
          console.log(rsp);
        })
      },
      applyRefundReason() { // 申请退款原因列表
        applyrefundreason().then(rsp => {
          this.refundResultList = rsp.map(i => {
            i.value = i.id;
            delete i.id;
            return i;
          });
        })
      },
      switchActionSheet(param) {  // 关闭退款原因弹出框
        this[`${param}`] = !this[`${param}`];
      },
      chooseRefundResult(data) {  // 选择退款原因
        this.chooseResult = data.name;
        this.refundAppleParams.handlereason = data.name;
      },
      showRefundPopup() {
        this.refundResultVisible = true
      },
      imgMsg(data) {  // 更改图片
        if(data.code === 3) { // 删除图片
          this.picDescList = this.picDescList.filter(i => {
            return i.id !== data.msg;
          })
        } else {

        }
      },
      async uploadPic() { // 上传图片 base64 获得图片标识id
        const _this = this;
        for(let i=0; i<this.picDescList.length;i++) {
          await uploadpictures({
            fileType: 1,
            fileStream: _this.picDescList[i].src
          }).then(data => {
            if(i === this.picDescList.length -1) {
              this.refundAppleParams.picdesc += data.data.respidcard;
            } else {
              this.refundAppleParams.picdesc += data.data.respidcard + ',';
            }
          })
        }
      },
      confirm() {

        if(this.refundAppleParams.handlereason === '') {
          Toast('请选择退款原因');
          return false;
        }
        Message.confirm('确定提交退款？').then(action => {
          this.uploadPic().then(() => { // 提交退货申请
            const reqParams = JSON.parse(JSON.stringify(this.refundAppleParams));
            applyrefundgood(reqParams).then(rsp => {
              console.log(rsp);
              Toast('退款成功').then(() => {
                goback();
              })
            })

          })
        }).catch(action => {
        })

      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-refund-apply {
    background: $bgd-color;
    @include flex-column();
    .apply-box {
      padding: 10px;
      width:350px;
      background:#fff;
      box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.13);
      border-radius:4px;

      .good-info {
        position: relative;
        @include flex-row(baseline);
        align-items: stretch;
        padding-bottom: 25px;
        >img {
          flex-shrink: 0;
          width: 110px;
          height: 110px;
        }
        .info {
          flex-grow: 1;
          margin-left: 10px;
          padding-left: 10px;
          /*width: 280px;*/
          overflow: hidden;
          @include flex-column(space-between, stretch);
          .goods-detail-top {
            overflow: hidden;
            @include flex-column(baseline,baseline);
            >span {
              width: 100%;
            }
            .title {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .detail {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              color: #999;
            }
            .good-spec {
              margin-top: 8px;
            }
          }
          .goods-detail-bottom {
            width: 100%;
            .order-price {
              >span {
                color: #FF2D00;
                font-size: 16px;
              }
            }
            .good-number {
              margin-left: 10px;
              >span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .good-info ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -10px;
        right: -10px;
        height: 1px;
        background:linear-gradient(87deg,rgba(52,140,247,1),rgba(236,6,143,1));
        opacity:0.1;
      }
      .refund-result-info {
        padding: 25px;
        font-size: 14px;
        .refund-result {
          >span {
            margin-right: 10px;
          }
          @include flex-row();
          .result-check-box {
            flex-grow: 1;
            height:25px;
            border:1px solid rgba(102, 102, 102, 0.51);
            padding: 0 5px;
          }
        }
        .refund-desc {
          >span {
            margin-right: 10px;
          }
          margin-top: 10px;
          @include flex-row(baseline,flex-start);
          .result-desc-box {
            flex-grow: 1;
            textarea {
              height: 75px;
              width: 100%;
              border:1px solid rgba(102, 102, 102, 0.51);
            }
          }

        }
        .refund-img {
          >span {
            margin-right: 10px;
          }
          margin-top: 10px;
          @include flex-row(baseline);
        }
      }
      .refund-footer {
        padding-right: 20px;
        @include flex-row(flex-end);
        .handle-confirm-btn {
          position: relative;
          border-radius: 4px;
          @include blue-gradiennt3();
          width: 52px;
          height: 30px;
          border-radius: 5px;
        }
        .handle-confirm-btn::after {
          content: '提交';
          position: absolute;
          top: 1px;
          bottom: 1px;
          left: 1px;
          right: 1px;
          background: #fff;
          -webkit-border-radius: 5px;
          -moz-border-radius:5px;
          border-radius: 5px;
          color: #7069FD;
          font-size: 14px;
          @include flex-column(center);
        }
      }
    }
  }
</style>