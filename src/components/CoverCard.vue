<template>
  <div class="h-100">
    <div class="container">
      <img class="container-img" :src="imgUrl" />
      <div class="vc-card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String
  }
};
</script>

<style scoped>
@import "../assets/css/component.css";
.container {
  position: relative;
  height: 100%;
  z-index: 0;
}
.container-img {
  width: 100%;
  height: 100%;
}
</style>