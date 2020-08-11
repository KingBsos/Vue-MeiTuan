<template>
  <div>
    <div ref="div" class="container uS-n">
      <div class="body">
        <button class="close-button" @click="$emit('cancel')">X</button>
        <h3 class="tA-c">请向右拖动滑块</h3>
        <div class="slide-bar">
          <span class="background">请向右拖动滑块</span>
          <div class="slide-controller tA-c d-iB">
            <span
              :style="{marginLeft: offsetX+'px'}"
              class="d-b"
              :class="{active}"
              @mousedown="addMoveLH"
            >{{ procession ? 'p' : '➤' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      offsetX: 0,
      active: false,
      success: false,
      procession: false,
    };
  },
  methods: {
    addMoveLH(event) {
      this.x = event.pageX;
      this.y = event.pageY;
      this.active = false;
      this.$refs.div.addEventListener("mousemove", this.moveHandle);
      this.$refs.div.addEventListener("mouseup", this.removeMoveLH);
    },
    removeMoveLH() {
      this.x = 0;
      this.y = 0;
      this.offsetX = 0;
      this.active = true;
      this.procession = false;
      this.$refs.div.removeEventListener("mousemove", this.moveHandle);
    },
    moveHandle(event) {
      let offsetX = event.pageX - this.x;
      if (offsetX < 0) offsetX = 0;
      if (offsetX >= 180) {
        offsetX = 180;
        this.success = true;
        this.$refs.div.removeEventListener("mousemove", this.moveHandle);
        this.$refs.div.removeEventListener("mouseup", this.removeMoveLH);
        this.procession = true;
        setTimeout(() => this.$emit("success"), 1000);
      }
      this.offsetX = offsetX;
    },
  },
  deactivated() {
    this.removeMoveLH();
  },
  beforeDestroyed() {
    this.removeMoveLH();
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(204, 204, 204, 0.486);
}
.close-button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0px;
  padding: 10px;
  color: #f00;
  font-weight: 900;
  background-color: #fff;
}
.body {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 150px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #fff;
}
.slide-bar {
  position: relative;
  height: 30px;
  margin-top: 30px;
}
.background {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: 30px;
  text-align: center;
  background-color: #ccc;
  font-size: 14px;
  font-weight: lighter;
  z-index: -1;
}
.slide-controller {
  direction: rtl;
}
.slide-controller > span {
  width: 30px;
  height: 30px;
  border: 1px solid rgb(161, 161, 161);
  background-color: #fff;
  color: #eaf;
  cursor: move;
}
.active {
  transition: margin-left 0.5s linear;
}
</style>