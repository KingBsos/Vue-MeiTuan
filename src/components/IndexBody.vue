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
      <template #default="{data:{poster, name, wantSee, url}}">
        <a class="wrapper-a cursor-pointer" :href="url">
          <CoverCard :imgUrl="poster" height="300px" coverBodyClass="movie-detail">
            <p class="text-white font-size-12 p-sm">
              <span class="text-warning font-size-1_2">{{ wantSee }}</span>人想看
            </p>
            <p class="text-white p-sm font-bold">{{ name }}</p>
          </CoverCard>
        </a>
      </template>
    </HeadIndexNav>

    <HeadIndexNav
      class="pb-2em"
      headClass="bg-warning head-index-nav"
      subitemClass="famous-card"
      :headIndex="$root.allData.famousHostelNav"
      :bodyData="$root.allData.famousHostelData"
    >
      <template #default="{data: {name, poster, comment, price, location, detail, url}}">
        <a class="wrapper-a cursor-pointer" :href="url">
          <cover-card :imgUrl="poster" height="250px" />
          <p class="text-overflow line-height-2">{{ name }}</p>
          <p
            class="text-muted font-size-12"
          >整套{{ detail[0] }}居室 ` 可住{{ detail[1] }}人 | {{ location }}</p>
          <p class="font-size-20 font-bolder text-danger">${{ price }}</p>
        </a>
      </template>
    </HeadIndexNav>

    <HeadIndexNav
      class="pb-2em"
      headClass="bg-info head-index-nav"
      :headIndex="$root.allData.guessYouLikeNav"
      :bodyData="$root.allData.guessYouLikeData"
      :row="3"
      :column="5"
    >
      <template #default="{data: {name, poster, comment, price, star, position, url}}">
        <a class="wrapper-a like-card" :href="url">
          <cover-card :imgUrl="poster" height="100px" />
          <p class="line-height-2 text-overflow">{{ name }}</p>
          <p>
            {{ star.toFixed(1) }}
            <span class="font-size-12 text-muted m-sm">{{ comment }}个评价</span>
          </p>
          <p class="font-size-12 text-muted">{{ position }}</p>
          <p class="font-size-14 text-danger font-bold">
            ${{ price }}
            <span class="font-size-12 font-bolder">起</span>
          </p>
        </a>
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
.like-card {
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
}
.like-card:hover {
  background-color: rgb(245, 245, 245);
}
/deep/ {
  .head-index-nav {
    padding: 7px 15px;
    border-radius: 5px 5px 0 0;
  }
  .movie-card {
    padding: 5px 15px;
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