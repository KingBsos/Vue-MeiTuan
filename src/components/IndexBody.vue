<template>
  <div>
    <TopMainBody />
    <HeadIndexNav :headIndex="$root.allData.catEyeMovieNav"></HeadIndexNav>
  </div>
</template>

<script>
import TopMainBody from "./TopMainBody.vue";
import HeadIndexNav from './HeadIndexNav.vue';
export default {
  components: {
    TopMainBody,
    HeadIndexNav
  }
};
</script>

<style scoped>
</style>