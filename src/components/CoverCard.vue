<template>
  <div class="h-100">
    <div class="container h-100" :style="{backgroundImage: _imgUrl}">
      <div class="vc-card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    _imgUrl() {
      return 'url(' + this.imgUrl + ')';
    }
  }
};
</script>

<style scoped>
@import "../assets/css/index.css";
.container {
  position: relative;
  background-size: 100%;
}
.vc-card-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>