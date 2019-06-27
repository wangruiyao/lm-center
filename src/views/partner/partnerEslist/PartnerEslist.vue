<template>
  <div id="partner-eslist" class="lm-container-blank" >
    <div class="back-btn" @click="back">
      <span class="lm-icon icon iconfont">&#xe612;</span>
    </div>
    <div class="eslist-warpper" ref="partnerEslistWarpper">
      <div class="eslist-warpper-inner">
        <img :src="imgList.img1">
        <img :src="imgList.img2">
        <div class="activity-rule">
          <div class="title">
            <div class="title-border">
              <span></span>
              <span></span>
            </div>
            <div class="txt">活动规则</div>
            <div class="title-border">
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="rules-list">
            <div class="rule-item">
              <div class="badge">1</div>
              <div class="txt">规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "PartnerEslist",
    data() {
      return {
        imgList: {
          img1: require('assets/images/partner/eslist-01.png'),
          img2: require('assets/images/partner/eslist-02.png')
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.partnerEslistWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 20)
    },
    methods: {
      back() {
        goback();
      }
    }
  }
</script>

<style lang="scss" scoped>
  #partner-eslist {
    position: relative;
    .eslist-warpper {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background: #f7555d;
    }
    .back-btn {
      z-index: 999;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      @include flex-column(center);
      color: #fff;
      top: 10px;
      left: 15px;
      position: fixed;
      width: 30px;
      height: 30px;
      background: rgba(0,0,0,.5);
    }

    width: 375px;

    img {
      width: 100%;
    }

    .activity-rule {
      background: #f7555d;
      .title {
        padding: 10px;
        font-size: 18px;
        color: #ffe364;
        @include flex-row(center);
        .txt {
          letter-spacing: 3px;
        }
        .title-border {
          margin: 0 15px;
          >span {
            display: inline-block;
            width: 3px;
            height: 15px;
            background: #ffe364;
            margin: 1px;
            transform: skewX(-30deg);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 200px;
          }
        }
      }

      .rules-list {

        .rule-item {
          padding: 10px 30px;
          @include flex-row(baseline,baseline);
          .badge {
            flex-shrink: 0;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            background: #fdc462;
            width: 18px;
            height: 18px;
            color: #f7555d;
            @include flex-column(center);
            font-size: 16px;
          }
          
          .txt {
            padding: 0 10px;
            font-size: 14px;
            color: #fff;
            font-weight: 100;
            flex-grow: 1;
          }
        }
      }
    }
  }
</style>