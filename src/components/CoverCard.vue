<template>
  <div class="h-100">
    <div class="container">
      <div class="vc-card-body" :style="{backgroundImage: `url(${bgImgUrl})`}">
        <div class="vc-cover-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgImgUrl: String
  }
};
</script>

<style scoped>
@import "../assets/css/component.css"; 
.container {
  height: 100%;
}
</style>