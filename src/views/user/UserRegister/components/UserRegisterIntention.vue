<!--选择主营项-->
<template>
  <div id="main-work">
    <div class="main-work-tip">
      <span>选择我的主营项</span>
      <span>只可单选，为您提供共精确的营销服务指导</span>
    </div>
    <div class="main-work-buttonlist">
      <div class="main-work-button"
           v-for="item in buttonList"
           :key="item.name"
           @click="checkIntention(item.name)">
        <lm-button :is-active="item.name === actButton">{{item.name}}</lm-button>
      </div>
    </div>
  </div>
</template>

<script>
  import LmButton from "../../../../components/lmButton/LmButton";
  export default {
    name: "UserRegisterMainWork",
    components: {LmButton},
    data() {
      return {
        actButton: '',
        buttonList: [
          {name: '运营商'},
          {name: '食品'},
          {name: '酒水'},
          {name: '通讯'},
          {name: '小电器'},
          {name: '电子卡券'},
          {name: '化妆品'},
          {name: '保健品'}
        ]
      }
    },
    methods: {
      checkIntention(intention) {
        this.actButton = intention;
        this.$emit('handleCheckIntention', intention)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #main-work {
    width: 315px;
  }
  .main-work-buttonlist {
    @include flex-row();
    flex-wrap: wrap;
    .main-work-button {
      width: 72px;
      height: 24px;
      margin: 10px 0;
      font-size: 12px;
    }
  }
</style>