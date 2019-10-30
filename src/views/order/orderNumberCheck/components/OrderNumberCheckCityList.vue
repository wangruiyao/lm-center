<template>
  <div id="city-list">
    <div class="city-list-header">
      <span class="lm-icon icon iconfont" @click="handleNumberCheck">
         &#xe612;
      </span>
      <span>选择号码区域</span>
      <span></span>
    </div>
    <div class="province-list" ref="provinceListWarpper">
      <div class="province-scroll-inner">
        <div @click="checkProvince(i)" :class="i.provicecode === serialprovince? 'province-checked':''"
             class="province-item"
             v-for="i in provinceList">{{i.provicename}}</div>


      </div>

    </div>

    <div class="city-list" ref="cityListWarpper">
      <div class="city-scroll-inner">
        <div @click="checkCity(i)"
             :class="i.citycode === city.citycode ? 'city-checked' : ''"
             v-for="i in cityList" class="city-item">{{i.cityname}}</div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {orderserialnumberarea} from 'api/order'
  export default {
    name: "OrderNumberCheckCityList",
    props: {
      productId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        provinceList: [],
        cityList: [],
        serialprovince: '', //省份编码
        city: {}
      }
    },
    watch: {
      productId(productid) {
        this.getNumberArea(productid);
      },
      city: {
        handler(newCity) {
          this.$emit('checkCity', {serialprovince: this.serialprovince, city: newCity})
        },
        deep: true
      }
    },
    mounted() {
      this.setScroll();
    },
    methods: {
      setScroll() {
        this.provinceScroll = new BScroll(this.$refs.cityListWarpper, {
          mouseWheel: true,
          click: true,
          bounce: false
        });
        this.cityScroll = new BScroll(this.$refs.provinceListWarpper, {
          mouseWheel: true,
          click: true,
          bounce: false
        });
      },
      getNumberArea(productid) {
        orderserialnumberarea({productid}).then( rsp => {
          this.provinceList = rsp.data;
          this.cityList = this.provinceList[0].city;
          this.serialprovince =this.provinceList[0].provicecode;
          this.city = this.provinceList[0].city[0];
        })
      },
      handleNumberCheck() {
        this.$emit('handleNumberCheck', false)
      },
      checkProvince(province) {
        this.serialprovince = province.provicecode;
        this.cityList = province.city;
      },
      checkCity(city) {
        const _this = this;
        this.city = city;
        setTimeout(function() {
          _this.handleNumberCheck();
        },200)
      }
    }
  }
</script>

<style lang="scss" scoped>
#city-list {
  position: fixed;
  width: 375px;
  top: 0;
  bottom: 0;
  z-index: 2999;
  background: #fff;
  .city-list-header {
    height: $header-height;
    @include flex-row();
    padding: 0 10px;
    background: $blue-color-link;
    color: #fff;
    font-size: 18px;
  }
  .province-list {
    overflow: hidden;
    background: #eee;
    position: fixed;
    top: $header-height;
    bottom: 0;
    width: 100px;
    .province-item {
      width: 100%;
      height: 45px;

      @include flex-column(center);
      font-size: 14px;
    }
    .province-checked {
      background: #fff;
      font-weight: 800;
    }
  }
  .city-list {
    overflow: hidden;
    position: fixed;
    top: $header-height;
    right: 0;
    bottom: 0;
    width: 275px;
    .city-scroll-inner {
      padding: 10px 0;
      @include flex-row(baseline);
      flex-wrap: wrap;
      .city-item {
        color: #999;
        width: 80px;
        height: 35px;
        font-size: 14px;
        border: solid #d2d1c3 1px;
        margin-bottom: 10px;
        margin-left: 8.7px;
        @include flex-column(center);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
      .city-checked {
        color: $blue-color;
        border: solid $blue-color-link 1px;
      }
    }

  }
}
</style>