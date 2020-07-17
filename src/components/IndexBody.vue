<template>
  <div>
    <TopMainBody />
    <HeadIndexNav
      headClass="bg-danger head-index-nav"
      :headIndex="$root.allData.catEyeMovieNav"
      :row="1"
      :column="5"
    ></HeadIndexNav>
    <HeadIndexNav headClass="bg-warning head-index-nav" :headIndex="$root.allData.famousHostelNav"></HeadIndexNav>
    <HeadIndexNav
      headClass="bg-info head-index-nav"
      :headIndex="$root.allData.guessYouLikeNav"
      :row="3"
      :column="5"
    ></HeadIndexNav>
  </div>
</template>

<script>
import TopMainBody from "./TopMainBody.vue";
import HeadIndexNav from "./HeadIndexNav.vue";
export default {
  components: {
    TopMainBody,
    HeadIndexNav
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  .head-index-nav {
    padding: 7px 15px;
    border-radius: 5px 5px 0 0;
  }
}
</style>