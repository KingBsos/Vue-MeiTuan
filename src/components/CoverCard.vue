<template>
  <div :style="{height}">
    <div class="container h-100" :style="{backgroundImage: _imgUrl}">
      <div :class="_coverBodyClass">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [String],
      default: '100%'
    },
    imgUrl: {
      type: String,
      default: ''
    },
    coverBodyClass: {
      type: [String, Array]
    }
  },
  computed: {
    _imgUrl() {
      return 'url(' + this.imgUrl + ')';
    },
    _coverBodyClass() {
      return ['vc-cover-body'].concat(this.coverBodyClass);
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  background-size: 100%;
}
.vc-cover-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>