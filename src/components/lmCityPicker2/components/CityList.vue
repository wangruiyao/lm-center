<template>
  <div id="city-list" ref="cityWarpper">

    <div>
      <div class="title">选择地市</div>
      <div class="city-item" v-for="(item, key) in cityList">
        <div class="first-letter">{{key}}</div>
        <div class="item-list-box">
          <div class="city"
               v-for="i in item"
               @click="goToArea(i)"
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
  export default {
    name: "CityList",
    data() {
      return {
        checkItem: ''
      }
    },
    props: {
      cityList: {
        type: Object
      }
    },
    mounted() {
      this.setBScroll()
    },
    methods: {
      setBScroll() {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.cityWarpper, {
            mouseWheel: true,
            click: true
          })
        }, 200);
      },
      goToArea(info) {
        this.checkItem = info.value;
        this.$emit('cityChecked', info);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: $blue-color-link !important;
  }
  #city-list {
    position: fixed;
    top: 150px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .title {
      margin: 10px 20px 10px;
    }
    .city-item {
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