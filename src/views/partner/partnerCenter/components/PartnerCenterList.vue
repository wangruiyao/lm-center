<template>
  <div id="partner-center-list" ref="partnerWarpper">
    <div class="scroll-inner">
      <div class="partner-center-item" v-for="i in partnerList">
        <div class="avatar-box">
          <img :src="i.avatar">
          <div class="user-vip">
            <span class="lm-icon icon iconfont">&#xe61d;</span>{{i.vip}}
          </div>
        </div>

        <div class="info-box">
          <div class="info-top">
            <div>
              <span>{{i.account}}</span>
              <span>{{i.createtime}}</span>
            </div>
            <div>
              <span class="color-light">首次会员办理</span>
              <span>{{i.firsttime}}</span>
            </div>
          </div>
          <partner-center-chart></partner-center-chart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  const PartnerCenterChart = resolve => require(['./PartnerCenterChart'], resolve);
  export default {
    name: "PartnerCenterList",
    components: {PartnerCenterChart},
    props: {
      partnerList: {
        type: Array,
        default: ()=>{
          return []
        }
      }
    },
    mounted() {
      console.log(this.partnerList)
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.partnerWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 20)
    },
    data() {
      return {
        avatar: require('assets/images/avatar.jpg')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .color-light {
    color: $color-light;
  }
  #partner-center-list {

    width: 100%;
    position: absolute;
    top: 240px;
    bottom: 0;
    overflow: hidden;
    .scroll-inner {
      .partner-center-item {
        @include flex-row();
        padding: 10px 20px;
        .avatar-box {
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          width: 54px;
          height: 54px;
          >img {
            width: 100%;
          }

          .user-vip {
            color: #fff;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 25%;
            background: rgba(0,0,0,0.5);
            @include flex-row(center);
            >span {
              font-size: 10px !important;
              color: #ffea00;
            }
          }
        }
        .info-box {
          padding-left: 15px;
          flex-grow: 1;
          @include flex-column();
          >div {
            width: 100%;
          }
          .info-top {
            @include flex-column();
            >div {
              width: 100%;
              @include flex-row()
            }
          }
        }
      }
    }
  }
</style>