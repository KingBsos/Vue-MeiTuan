<template>
  <div>
    <TopMainBody />
    <HeadIndexNav
      class="pb-2em"
      headClass="bg-danger head-index-nav"
      :headIndex="$root.allData.catEyeMovieNav"
      :bodyData="$root.allData.catEyeMovieData"
      :row="1"
      :column="5"
      subitemClass="movie-card"
    >
      <template #default="{data:{poster, name, wantSee}}">
        <CoverCard :imgUrl="poster" height="300px" coverBodyClass="movie-detail">
          <p class="text-white font-size-12 p-sm">
            <span class="text-warning font-size-1_2">{{ wantSee }}</span>人想看
          </p>
          <p class="text-white p-sm font-bold">{{ name }}</p>
        </CoverCard>
      </template>
    </HeadIndexNav>
    <HeadIndexNav
      class="pb-2em"
      headClass="bg-warning head-index-nav"
      subitemClass="famous-card"
      :headIndex="$root.allData.famousHostelNav"
      :bodyData="$root.allData.famousHostelData"
    >
      <template #default="{data: {name, poster, comment, price, location, detail}}">
        <cover-card :imgUrl="poster" height="250px" />
        <p>{{ name }}</p>
        <p>整套{{ detail[0] }}居室 可住{{ detail[1] }}人 | {{ location }}</p>
        <p>${{ price }}</p>
      </template>
    </HeadIndexNav>
    <HeadIndexNav
      class="pb-2em"
      headClass="bg-info head-index-nav"
      :headIndex="$root.allData.guessYouLikeNav"
      :bodyData="$root.allData.guessYouLikeData"
      :row="3"
      :column="5"
      subitemClass="like-card"
    >
      <template #default="{data: {name, poster, comment, price, star, position}}">
        <cover-card :imgUrl="poster" height="100px" />
        <p>{{ name }}</p>
        <p>{{ star + comment }}</p>
        <p>{{ position }}</p>
        <p>${{ price }}起</p>
      </template>
    </HeadIndexNav>
  </div>
</template>

<script>
import TopMainBody from "./TopMainBody.vue";
import HeadIndexNav from "./HeadIndexNav.vue";
import CoverCard from "./CoverCard.vue";
export default {
  components: {
    TopMainBody,
    HeadIndexNav,
    CoverCard
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  .head-index-nav {
    padding: 7px 15px;
    border-radius: 5px 5px 0 0;
  }
  .movie-card {
    padding: 5px 15px;
  }
  .like-card {
    padding: 10px 15px;
  }
  .famous-card {
    padding: 10px;
  }
  .movie-detail {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>