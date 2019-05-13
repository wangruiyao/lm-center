<template>
  <div id="intention-pop">
    <lm-popup :popup-visible="showIntention"
              :title="`选择主营意向`"
              @closePop="handleClosePop"
              @confirm="handleConfirmClick">
      <div slot="pop" class="popup-container">
        <div class="item-container">
          <div class="main-work-button"
               v-for="item in buttonList"
               :key="item.name"
               @click="checkIntention(item.name)">
            <lm-button :is-active="item.name === actButton" :act-type="`active-blue`">{{item.name}}</lm-button>
          </div>
        </div>

      </div>
    </lm-popup>
  </div>
</template>

<script>
  import LmPopup from "components/lmPopup/LmPopup";
  import LmButton from "../../../../components/lmButton/LmButton";
  export default {
    name: "MineIntentionPopup",
    components: {LmButton, LmPopup},
    props: {
      showIntention: {
        type: Boolean,
        default: false
      },
      actIntention: {
        type: String,
        default: '运营商'
      }
    },
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
    mounted() {
      this.actButton = this.actIntention
    },
    methods: {
      handleClosePop() {
        this.$emit('closePop', false)
      },
      checkIntention(intention) {
        this.actButton = intention;
      },
      handleConfirmClick() {
        this.$emit('handleCheckIntention', intention)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #intention-pop{
    .popup-container {
      @include flex-row(space-between, baseline);
      min-height: 350px;
      padding: 10px;
      .item-container {
        width: 100%;
        @include flex-row();
        flex-wrap: wrap;
        .main-work-button {
          text-align: center;
          width: 72px;
          height: 24px;
          margin: 10px 0;
          font-size: 12px;
        }
      }

    }
  }

</style>