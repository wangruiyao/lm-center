<template>
  <div id="partner-center" class="lm-container">
    <lm-header :title="`我的合伙人`">
      <div class="header-right" slot="right" @click="go('partnerEslist')">
        <span class="lm-icon icon iconfont">&#xe784;</span>
      </div>
    </lm-header>
    <nut-swiper
            direction="horizontal"
            :loop="true"
            :canDragging="false"
            :paginationVisible="false">
      <div class="nut-swiper-slide gray" >
        <img class="header-img" :src="headerImg">
      </div>
    </nut-swiper>
    <partner-center-tab-bar :act-tab="actTab" @changeTab="changeTab"></partner-center-tab-bar>
    <partner-center-list :partner-list="partnerInfo"></partner-center-list>

  </div>
</template>

<script>
  import {parterinfor} from 'api/partner'
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const PartnerCenterTabBar = resolve => require(['./components/PartnerCenterTabBar'], resolve);
  const PartnerCenterList = resolve => require(['./components/PartnerCenterList'], resolve);

  export default {
    name: "PartnerCenter",
    components: {PartnerCenterList, PartnerCenterTabBar, LmHeader},
    data() {
      return {
        headerImg: require('assets/images/partner/partner-swiper.png'),
        actTab: 0,
        partnerInfo: []
      }
    },
    mounted() {
      this.getParterinfor()
    },
    methods: {
      changeTab(tab) {
        this.actTab = tab;
      },
      go(path) {
        goforward(path)
      },
      getParterinfor() {
        parterinfor().then( data => {
          this.partnerInfo = data.data;

        }).catch(data=> {})
      }
    }
  }
</script>

<style lang="scss" scoped>
  #partner-center {
    background: #fff;
    width: 375px;
    .header-right {
      span {
        font-size: 20px;
      }
    }

    .header-img {
      width: 100%;
    }
  }
</style>