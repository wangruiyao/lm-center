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
        default: '#ffed73'
      },
      grideColor: {
        type: String,
        default: '#eee'
      },
      speed: {
        type: Number,
        default: 30
      },
      number: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        gridRotate: (6/180)*Math.PI,  //每格的大小
        defaultRotate:(6/180)*Math.PI*(-17),  // 初始旋转角度
        lastGrid:25,  // 高亮的格数
        nowRotate: (6/180)*Math.PI*(-17),
        nowNum: 1,
      }
    },
    mounted() {
      const _this = this;
      this.run();
      this.timeout().then(()=> {
        _this.runAnimate(_this.number)
      })
    },
    methods: {
      timeout() {
        return new Promise((resolve)=> {
          setTimeout(()=>{
            resolve()
          }, 1000)
        })
      },
      run() {
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
          cxt.lineWidth = 5;
          cxt.strokeStyle = this.grideColor;
          cxt.translate(170,200);
          cxt.rotate(this.defaultRotate + i*unit);
          cxt.beginPath();
          cxt.moveTo(0,-135);
          cxt.lineTo(0,-155);
          cxt.stroke();
          cxt.closePath();
          cxt.restore()
        }
      },
      runAnimate(num) {
        const _this = this;
        cxt.clearRect(0,0,1024,728);
        for(let i=0 ; i<35 ; i++) {
          cxt.save();
          cxt.lineWidth = 5;
          if(i<_this.nowNum) {
            cxt.strokeStyle = _this.animateColor;
          } else {
            cxt.strokeStyle = _this.grideColor;
          }

          cxt.translate(170,200);
          cxt.rotate(this.defaultRotate + i*unit);
          cxt.beginPath();
          // _this.nowNum
          if(i === _this.nowNum -1) {
            cxt.moveTo(0,-135);
            cxt.lineTo(0,-175);
          } else {
            cxt.moveTo(0,-135);
            cxt.lineTo(0,-155);
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
    padding-bottom: 80%;
    .canvas {
      top: -10px;
      width: 100%;
      /*height: 295px;*/
      position: absolute;
    }
  }
</style>