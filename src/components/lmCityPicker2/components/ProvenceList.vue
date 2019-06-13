<template>
  <div id="provence-list" ref="provenceWarpper">
    <div>
      <div class="common-city-list">
        <span>常用城市</span>
        <div class="city-list">
          <div v-for="item in commonCitys" @click="checkCommonCity(item)">{{item.text}}</div>
        </div>
      </div>
      <div class="title">选择省份/地区</div>
      <div class="provence-item" v-for="(item, key) in provenceList">
        <div class="first-letter">{{key}}</div>
        <div class="item-list-box">
          <div class="provence"
               v-for="i in item"
               :key="i.value"
               @click="goToCity(i)"
               :class="i.value === checkItem? 'act' : ''">
            {{i.text}}
            <span class="lm-icon icon iconfont" v-show="i.value === checkItem">&#xe68f;</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CommonCitys from '../commonCitys'
  export default {
    name: "ProvenceList",
    data() {
      return {
        checkItem: '',
        commonCitys: []
      }
    },
    props: {
      provenceList: {
        type: Object
      }
    },
    mounted() {
      this.commonCitys = CommonCitys;
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.provenceWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 200);
    },
    methods: {
      goToCity(info) {  // 点击选择地市
        this.checkItem = info.value;
        this.$emit('provenceChecked', info);
      },
      checkCommonCity(value) {
        for(const idx in this.provenceList) {
          for (const i in this.provenceList[idx]) {
            if(this.provenceList[idx][i].text === value.provence) {
              // console.log(this.provenceList[idx][i]);
              // this.goToCity(this.provenceList[idx][i]);
              this.checkItem = this.provenceList[idx][i].value;
              const params = {
                citys: this.provenceList[idx][i],
                commonCity: value
              }
              this.$emit('goToCommonCity',params);
              return
            }
            // console.log(this.provenceList[idx][i].text)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: $blue-color-link !important;
  }
  #provence-list {
    overflow: hidden;
    position: fixed;
    top: 150px;
    bottom: 0;
    width: 100%;
    .title {
      margin: 10px 20px 10px;
    }
    .common-city-list {
      >span {
        display: block;
        margin-bottom: 10px;
      }
      padding-left: 19px;
      .city-list {
        font-size: 14px;
        color: #000;
        @include flex-row(baseline);
        flex-wrap: wrap;
        div {
          margin-right: 20px;
          margin-bottom: 10px;
        }
      }

    }
    .provence-item {
      @include flex-row(baseline, baseline);
      color: #000;
      .first-letter {
        width: 50px;
        height: 30px;
        @include flex-column(center);
        font-size: 14px;
      }

      .item-list-box {
        >div{
          width: 300px;
          font-size: 14px;
          height: 30px;
          @include flex-row(space-between,center);

          >span {
            color: $blue-color-link;
          }
        }
      }
    }
  }
</style>