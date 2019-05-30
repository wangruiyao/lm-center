<template>
  <div id="lm-dashboard">
    <canvas class="canvas" id="dashboard-container" width="340" height="340">
    </canvas>
  </div>
</template>

<script>
  let canvas = null;
  let cxt = null;
  let unit;
  export default {
    name: "LmDashBoard",
    props: {
      animateColor: {
        type: String,
        default: '#ecff6f'
      },
      grideColor: {
        type: String,
        default: 'rgba(255,255,255,0.3)'
      },
      speed: {
        type: Number,
        default: 30
      },
      number: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        color: 180,
        gridRotate: (6/180)*Math.PI,  //每格的大小
        defaultRotate:(6/180)*Math.PI*(-17),  // 初始旋转角度
        lastGrid:25,  // 高亮的格数
        nowRotate: (6/180)*Math.PI*(-17),
        nowNum: 1,
      }
    },
    computed: {
      showColor() {
        return `rgb(${this.color}, 247, 100)`
      }
    },
    mounted() {
      this.begin();
    },
    methods: {
      run() {
        this.runAnimate(this.number)
      },
      timeout() {
        return new Promise((resolve)=> {
          setTimeout(()=>{
            resolve()
          }, 800)
        })
      },
      begin() {
        unit = (6/180)*Math.PI;
        canvas = document.getElementById('dashboard-container');
        cxt = canvas.getContext('2d');
        // 填充背景色
        cxt.fillStyle = 'rgba(255,255,255,0)';
        cxt.fillRect(0,0,340,340);
        this.drawGrid(cxt);
      },
      drawGrid(cxt) {
        for(let i=0 ; i<35 ; i++) {
          cxt.save();
          cxt.lineWidth = 4;
          cxt.strokeStyle = this.grideColor;
          cxt.translate(170,200);
          cxt.rotate(this.defaultRotate + i*unit);
          cxt.beginPath();
          cxt.moveTo(0,-135);
          cxt.lineTo(0,-153);
          cxt.stroke();
          cxt.closePath();
          cxt.restore()
        }
      },
      runAnimate(num) {
        const _this = this;
        cxt.clearRect(0,0,1024,728);
        _this.color = 255;
        let r = 245;
        let g = 105;
        for(let i=0 ; i<35 ; i++) {

          cxt.save();
          cxt.lineWidth = 4;
          if(i<_this.nowNum) {
            if(g<245) {
              g+=8;
            } else {
              r-=8
            }

            // cxt.strokeStyle = _this.animateColor;
            cxt.strokeStyle = `rgb(${r}, ${g}, 100)`
          } else {
            cxt.strokeStyle = _this.grideColor;
          }

          cxt.translate(170,200);
          cxt.rotate(this.defaultRotate + i*unit);
          cxt.beginPath();
          // _this.nowNum
          if(i === _this.nowNum -1) {
            cxt.moveTo(0,-135);
            cxt.lineTo(0,-170);

          } else {

            cxt.moveTo(0,-135);
            cxt.lineTo(0,-153);
          }


          cxt.stroke();
          cxt.closePath();
          cxt.restore();
        }
        _this.nowNum ++;
        if(_this.nowNum<num+1){
          window.requestAnimationFrame(function(){_this.runAnimate(num)});
          // setTimeout(function(){_this.runAnimate(num)},10)
        }

      }
    }
  }

</script>

<style lang="scss" scoped>
  #lm-dashboard {
    position: relative;
    @include flex-row(center);
    overflow: hidden;
    width: 100%;
    padding-bottom: 65%;
    .canvas {
      top: -20px;
      width: 100%;
      /*height: 295px;*/
      position: absolute;
    }
  }
</style>