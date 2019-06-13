<template>
  <div id="area-list" ref="areaWarpper">
    <div>
      <div class="title">选择区县</div>
      <div class="area-item" v-for="(item, key) in areaList">
        <div class="first-letter">{{key}}</div>
        <div class="item-list-box">
          <div class="area"
               v-for="i in item"
               @click="submit(i)"
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
    name: "AreaList",
    data() {
      return {
        checkItem: ''
      }
    },
    props: {
      areaList: {
        type: Object
      }
    },
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.areaWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 200);
    },
    methods: {
      submit(info) {
        this.checkItem = info.value;
        this.$emit('areaChecked', info);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act {
    color: $blue-color-link !important;
  }
  #area-list {
    .title {
      margin: 10px 20px 10px;
    }
    overflow: hidden;
    position: fixed;
    width: 100%;
    top: 150px;
    bottom: 0;
    .area-item {
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