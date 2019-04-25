<template>
  <div id="city-picker" >
    <mt-popup
            v-model="popupVisible"
            position="bottom">
      <div class="check-city-button">
        <div @click="closeTouch">取消</div>
        <div @click="handleCheckCityClick">确认</div>
      </div>
      <div class="city-list">
        <mt-picker :slots="myAddressSlots"
                   valueKey="text"
                   @change="onMyAddressChange"
                   ref="picker">

        </mt-picker>

      </div>

    </mt-popup>

  </div>
</template>

<script>
  import cityData from 'utils/city.data.js'
  export default {
    name: "LmCityPicker",
    data() {
      return {
        popupVisible: false,
        myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 14,
            values: cityData,
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: cityData[14].children,
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: cityData[14].children[0].children,
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        params: {
          province: { //省
            name: '',
            code: ''
          },
          city: {  // 市
            name: '',
            code: ''
          },
          country: {  // 区
            name: '',
            code: ''
          }

        }
      }
    },
    watch:{
      popupVisible:function(newvs,oldvs){//picker关闭没有回调函数，所以侦听该属性替代
        if(newvs){
          this.openTouch(); // 打开
        }else{

          this.closeTouch();  // 关闭
        }
      }
    },
    mounted() {
      // console.log(cityData[0].children)
    },
    methods: {
      onMyAddressChange(picker, value) {
          if (this.myAddressSlots[0]) {
            this.params.province.name = value[0].text;
            this.params.province.code = value[0].value;
            if(this.myAddressSlots[1]) {
              this.params.city.name = value[1].text;
              this.params.city.code = value[1].value;
            }
            if(this.myAddressSlots[2]) {
              this.params.country.name = value[2].text;
              this.params.country.code = value[2].value;
            }
            picker.setSlotValues(1, value[0].children);
            picker.setSlotValues(2, value[1].children);
          }
      },
      openTouch() {
        if (!this.popupVisible){
          this.popupVisible = true
        }

      },
      closeTouch() {
        if (this.popupVisible){
          this.popupVisible = false
        }
      },
      handleCheckCityClick() {  // 确认选择城市
        this.closeTouch();
        this.$emit('handleCheckCity', this.params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .check-city-button {
    @include flex-row(space-around)
    border-bottom: solid $line-light 1px;
    height: $input-height;
  }
  .city-list {
    &{
      width: 375px;
    }

  }
</style>