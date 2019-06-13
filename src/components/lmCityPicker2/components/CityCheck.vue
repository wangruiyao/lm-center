<template>
  <div id="cityList">
    <div class="city-list-scroll-inner">
      <!-- 省列表 -->
      <transition enter-active-class="slideInLeft"
                  leave-active-class="slideOutLeft">
      <provence-list
              :provence-list="localCityList"
              v-show="actTab === 0"
              @provenceChecked="provenceChecked"
              @goToCommonCity="goToCommonCity"></provence-list>
      </transition>

      <!-- 市列表 -->
      <transition :enter-active-class="lastActTab === 0?'slideInRight':lastActTab>=2?'slideInLeft': ''"
                  :leave-active-class="actTab === 0?'slideOutRight':actTab===2?'slideOutLeft': ''">
        <city-list
                ref="cityList"
                :city-list="city"
                v-show="actTab === 1"
                @cityChecked="cityChecked"></city-list>
      </transition>

      <!-- 区列表 -->
      <transition enter-active-class="slideInRight"
                  leave-active-class="slideOutRight">
        <area-list
                :area-list="area"
                v-show="actTab >= 2"
                @areaChecked="areaChecked"></area-list>
      </transition>


    </div>

  </div>
</template>

<script>
  const ProvenceList = resolve => require(['./ProvenceList'], resolve);
  const CityList = resolve => require(['./CityList'], resolve);
  const AreaList = resolve => require(['./AreaList'], resolve);
  export default {
    name: "CityCheck",
    components: {AreaList, CityList, ProvenceList},
    props: {
      cityList: {
        type: Object,
        default: {}
      },
      actTab: {
        type: Number,
        default: 0
      }
    },
    watch: {
      actTab: {
        immediate:true,
        handler:function(){
          if(this.actTab !== 1) {
            this.lastActTab = this.actTab;
          }

        }
      }
    },
    data() {
      return {
        lastActTab: '',
        localCityList: {},
        city: {}, // 选择的区列表
        area: {}  // 选择的区县列表
      }
    },
    mounted() {
      this.localCityList = this.cityList;
    },
    methods: {
      setTabScroll(tab) {
        this.$refs.cityList.setBScroll()
      },
      devideByFirstLetter(cityList) { // 按首字母分组
        this.sortByFirstLetter(cityList);
        const newCityList = {};
        const initialList = [];
        cityList.map(item => {
          const initial = pinyin.getFullChars(item.text).slice(0,1); // 首字母
          if(!initialList.includes(initial)) {
            initialList.push(initial);
            newCityList[initial] = []

          }
          newCityList[initial].push(item)
        });
        return newCityList
      },
      sortByFirstLetter(cityList) { // 根据名称首字母排序
        cityList.sort((a, b)=>{
          if(pinyin.getFullChars(a.text).slice(0, 1) < pinyin.getFullChars(b.text).slice(0, 1)) {
            return -1
          } else if (pinyin.getFullChars(a.text).slice(0, 1) === pinyin.getFullChars(b.text).slice(0, 1)){
            return 0
          } else {
            return 1
          }
        })
      },
      provenceChecked(provenceInfo) { //选择省
        this.city = this.devideByFirstLetter(provenceInfo.children);
        this.$emit('changeTab', 1);
        this.$emit('setProvence',provenceInfo);
        // console.log(this.devideByFirstLetter(provenceInfo.children))
      },
      cityChecked(cityInfo) { // 选择市
        if(cityInfo.children!==undefined) {
          this.area = this.devideByFirstLetter(cityInfo.children);
          this.$emit('changeTab', 2);
          this.$emit('setCity',cityInfo);
        }

      },
      areaChecked(areaInfo) { //选择区
        // console.log(areaInfo)
        this.$emit('changeTab', 3);
        this.$emit('setArea',areaInfo);
      },
      goToCommonCity(info) {  //选择常用地市

        this.city = this.devideByFirstLetter(info.citys.children);
        this.$emit('changeTab', 2);
        this.$emit('setProvence',info.citys);
        info.citys.children.map(i => {
          if(i.value === info.commonCity.value) {
            // console.log(i);
            this.$refs.cityList.goToArea(i);

          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cityList {
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 100px;
    bottom: 0;

  }
</style>