<template>
  <div id="commission-center" class="lm-container">
    <lm-header :title="`我的佣金`">
      <div class="header-right" slot="right">
        <div class="header-right-icon">
          <span class="icon iconfont account-icon" @click.stop="go('commissionAccount')">&#xe67a;</span>
          <span class="icon iconfont" @click.stop="go('commissionPickUpInfo')">&#xe623;</span>
        </div>
      </div>
    </lm-header>

    <div class="commission-scroll-container" ref="commissionWarpprer">
      <div class="scroll-inner">
        <div class="commission-info">
          <div class="commission-info-top">
            <span class="icon iconfont pay-icon">&#xe625;</span>
            <span>{{showPwd? pwd: secretPwd}}</span>
            <span class="icon iconfont eye-icon" @click="handleShowPwd">{{showPwd?'&#xe72a;':'&#xe620;'}}</span>
          </div>
          <div class="commission-info-center">
            <span>可提现佣金(元)</span>
            <span class="commission-num">60.00</span>
          </div>
          <div class="commission-info-bottom">
            <span>共领取佣金（元）</span>
            <span>￥28912.00</span>
          </div>
        </div>
        <div class="commission-pick-up">
          提取佣金
        </div>
        <div class="commission-handle-btn">
          <div class="btn-item" @click="go('commissionPickUpInfo')">
            <div>
              <div class="bgd1"></div>
              <img :src="require('assets/images/commission/commissionpickup.png')">
            </div>
            <span>提现明细</span>
          </div>
          <div class="btn-item" @click="go('commissionInfo')">
            <div>
              <div class="bgd2"></div>
              <img :src="require('assets/images/commission/commissionInfo.png')">
            </div>
            <span>佣金明细</span>
          </div>
        </div>
      </div>
    </div>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  export default {
    name: "CommissionCenter",
    components: {LmHeader},
    data() {
      return {
        pwd: '',
        showPwd: false,
      }
    },
    mounted() {
      this.pwd = '123456';
      this.setScroll();
    },
    computed: {
      secretPwd() {
        const secret = this.pwd.split('').map((i) => {
          return '*'
        }).join('');
        return secret;
      }
    },
    methods: {
      setScroll() {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.commissionWarpprer, {
            mouseWheel: true,
            click: true,
          });
        }, 20)
      },
      handleShowPwd() {
        this.showPwd = !this.showPwd;
      },
      go(path) {
        goforward(path)
      }

    }
  }
</script>

<style lang="scss" scoped>
  #commission-center {
    /*background: #fff;*/
    .header-right {
      position: relative;
      height: $header-height;
      @include flex-column(center);
      .header-right-icon {
        position: absolute;
        right: 0;
        >span {
          font-size: 23px;
          margin-right: 10px;
        }
      }

    }
    .commission-scroll-container {
      position: fixed;
      top: $header-height;
      bottom: 0;
      width: 375px;

      .scroll-inner {
        @include flex-column();
        .commission-info {
          margin-top: 10px;
          overflow: hidden;
          color: #fff;
          width:341px;
          height:165px;
          background:linear-gradient(180deg,rgba(194,111,229,0.95),rgba(99,135,238,0.95),rgba(91,239,225,0.95));
          border-radius:4px;
          @include flex-column();

          >div {
            width: 100%;
            padding: 0 12px;
          }

          .commission-info-top {
            height: 35px;
            @include flex-row(baseline);
            >span {
              margin-right: 5px;
            }
            .pay-icon {
              font-size: 20px;
            }
            .eye-icon {
              font-size: 20px;
            }
          }

          .commission-info-center {
            @include flex-column(center);
            margin-bottom: 20px;
            >span {
              margin-bottom: 5px;
            }
            .commission-num {
              font-size: 24px;
            }
          }
          .commission-info-bottom {

            background: rgba(0,0,0,.32);
            height: 35px;
            @include flex-row();
          }
        }
        .commission-pick-up {
          width:341px;
          height:40px;
          background:linear-gradient(-25deg,rgba(71,201,255,0.95),rgba(8,82,249,0.95));
          border-radius:4px;
          @include flex-column(center);
          color: #fff;
          font-size: 14px;
          margin-top: 20px;
        }
        .commission-handle-btn {
          width:341px;
          margin-top: 20px;
          @include flex-row();
          .btn-item {
            @include flex-column();
            >span {
              margin-top: 5px;
              color: #666;
            }
            >div {
              position: relative;
              width: 165px;
              height: 165px;
              @include flex-column(center);
              >img {
                width: 122px;
              }
              >div {
                position: absolute;
                width: 100%;
                height: 122px;
                bottom: 0;
                z-index: -1;
                border-radius: 4px;
              }
              >.bgd1 {
                background: rgba(73,133,255,.3);
              }
              >.bgd2 {
                background: rgba(255,176,73,.3);
              }
            }
          }

        }
      }
    }
  }
</style>