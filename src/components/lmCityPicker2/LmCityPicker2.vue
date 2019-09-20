<template>
  <div id="lm-city-picker-2">

    <lm-popup :popupVisible="popupVisible"
              :showConfirmBtn="false"
              :title="`请选择`"
              @closePop ="back">

        <div class="city-picker-pop" slot="pop">
          <div class="result-box">
            <div class="result-info">
              <div @click="toggleTab(0)"
                   v-show="alreadyTab>=0"
                   :class="(actTab===0)? 'actText': ''">{{provence.text}} </div>
              <div @click="toggleTab(1)"
                   v-show="alreadyTab>=1"
                   :class="(actTab===1)? 'actText': ''">{{city.text}} </div>
              <div @click="toggleTab(2)"
                   v-show="alreadyTab>=2"
                   :class="(actTab===2)? 'actText': ''">{{area.text}} </div>
            </div>
            <div class="result-point" v-show="alreadyTab>=0">
              <div class="point-0" >
                <span class="point" :class="alreadyTab>=1? 'actPoint': ''"></span>

              </div>
              <div class="point-1" v-show="alreadyTab>=1">
                <span class="point" :class="alreadyTab>=2? 'actPoint': ''"></span>
                <span class="point-bar" :class="alreadyTab>=2? 'actPoint': ''"></span>
              </div>
              <div class="point-2" v-show="alreadyTab>=2">
                <span class="point" :class="alreadyTab>=3? 'actPoint': ''"></span>
                <span class="point-bar" :class="alreadyTab>=3? 'actPoint': ''"></span>
              </div>

            </div>
          </div>
          <city-check :city-list="cityList"
                      :act-tab="actTab"
                      @changeTab="changeTab"
                      @setProvence="setProvence"
                      @setCity="setCity"
                      @setArea="setArea" ref="cityCheck"></city-check>
        </div>

    </lm-popup>

  </div>
</template>

<script>
  import cityData from 'utils/city.data.js';
  const LmPopup = resolve => require(['components/lmPopup/LmPopup'], resolve);
  const CityCheck = resolve => require(['./components/CityCheck'], resolve);
  export default {
    name: "LmCityPicker2",
    components: {CityCheck, LmPopup},
    data() {
      return {
        alreadyTab:0,
        actTab: 0,
        popupVisible: true,
        cityList: {},
        provence: {
          text:'选择省份'
        },
        city: {
          text: '选择地市'
        },
        area: {
          text: '选择区县'
        }
      }
    },
    mounted() {
      this.cityList = cityData;
      this.getCityList();
    },
    activated() {
      this.popupVisible = true;
    },
    methods: {
      getCityList() {
        this.sortByFirstLetter();
        this.devideCityList();
      },
      devideCityList() {  // 按首字母分组
        const cityList = {};
        const initialList = [];
        this.cityList.map(item => {
          const initial = pinyin.getFullChars(item.text).slice(0,1); // 首字母
          if(!initialList.includes(initial)) {
            initialList.push(initial);
            cityList[initial] = []

          }
          cityList[initial].push(item)
        });
        this.cityList = cityList;
      },
      sortByFirstLetter() { // 根据城市名称首字母排序
        this.cityList.sort((a, b)=>{
          if(pinyin.getFullChars(a.text).slice(0, 1) < pinyin.getFullChars(b.text).slice(0, 1)) {
            return -1
          } else if (pinyin.getFullChars(a.text).slice(0, 1) === pinyin.getFullChars(b.text).slice(0, 1)){
            return 0
          } else {
            return 1
          }
        })
      },
      toggleTab(tab) {
        this.actTab = tab;
        if(tab === 1) {
          this.$refs.cityCheck.setTabScroll()
        }

      },
      changeTab(tab) {  // 点击地市名称切换
        this.alreadyTab = tab;
        this.actTab = tab;
      },
      setProvence(info) {
        this.provence = info;
        this.city={
          text: '选择地市'
        };
        this.area = {
          text: '选择区县'
        }
      },
      setCity(info) {
        this.city = info;
        this.area = {
          text: '选择区县'
        }
      },
      setArea(info) {
        this.area = info;
        this.back()
      },
      back() {
        const responseParams = {
          provence: {
            text: this.provence.value === undefined ? '' : this.provence.text,
            value: this.provence.value === undefined ? '' :this.provence.value
          },
          city: {
            text: this.city.value === undefined ? '' :this.city.text,
            value: this.city.value === undefined ? '' :this.city.value
          },
          area: {
            text: this.area.value === undefined ? '' :this.area.text,
            value: this.area.value === undefined ? '' :this.area.value
          }
        };
        this.$emit('getAddr', responseParams);
        this.popupVisible = false;
        setTimeout(function() {
          goback({
            addr: responseParams
          });
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .actText {
    color: unset !important;
  }
  .actPoint {
    background: $blue-color-link !important;
    border: unset !important;
  }
  #lm-city-picker-2 {
    $totalW: 375px;
    .city-picker-pop {
      position: relative;
      height: 500px;

      .result-box {
        @include flex-column(center)
        width: 375px;
        height: 80px;
        border-bottom: solid $line-light 1px;
        .result-info {
          width: 375px;
          @include flex-row(baseline);
          >div {
            color: $blue-color-link;
            font-size: 14px;
            width: 33.33%;
            @include flex-column(center);
            @include over-ellipsis;
          }
        }

        .result-point {
          width: 100%;
          @include flex-row(baseline);
          >div {
            position: relative;
            width: 33.33%;
            @include flex-column(center);
            .point {
              display: inline-block;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              border:solid $red-color 1px;
              background: #fff;
            }
            .point-bar {
              position: absolute;
              z-index: -1;
              left: -($totalW/6);
              width: $totalW/3;
              height: 3px;
              background-image: linear-gradient(0.1turn, #6dc5ea, #ec008c);
              /*background-image: linear-gradient(#6dc5ea, #ec008c);*/
            }
          }
        }
      }
    }
  }
</style>