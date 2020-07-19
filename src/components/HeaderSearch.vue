<template>
  <div class="container">
    <a class="head-brand" hrer="#sdf">
      <img :src="imgUrl" />
    </a>
    <div class="head-search">
      <div class="search-input">
        <input type="text" placeholder="搜索商家或地点" v-model="search" />
        <div class="active-search">
          <div class="active-search-content">
          <h6>热门搜索</h6>
          <Navigation :navList="hotSearch" />
          </div>
        </div>
      </div>
      <button class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          t="1594650740064"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          p-id="2220"
          width="20"
          height="20"
        >
          <path
            d="M976.738462 892.061538L712.861538 630.153846c53.169231-74.830769 80.738462-169.353846 66.953847-269.784615-23.630769-169.353846-161.476923-303.261538-332.8-319.015385C214.646154 17.723077 17.723077 214.646154 41.353846 448.984615c15.753846 169.353846 149.661538 309.169231 319.015385 332.8 100.430769 13.784615 194.953846-13.784615 269.784615-66.953846l261.907692 261.907693c11.815385 11.815385 29.538462 11.815385 41.353847 0l41.353846-41.353847c11.815385-11.815385 11.815385-31.507692 1.969231-43.323077zM157.538462 411.569231C157.538462 271.753846 271.753846 157.538462 411.569231 157.538462s254.030769 114.215385 254.030769 254.030769S551.384615 665.6 411.569231 665.6 157.538462 553.353846 157.538462 411.569231z"
            p-id="2221"
            fill="#2c2c2c"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import imgUrl from "../assets/pic/meituan.png";
import Navigation from "./Navigation.vue";

export default {
  data() {
    return {
      search: "",
      imgUrl,
      hotSearch: [
        { value: "1", url: "#asdfs" },
        { value: "2", url: "#asdfs" },
        { value: "3", url: "#asdfs" }
      ]
    };
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.head-brand img {
  width: auto;
  height: 50px;
  border-radius: 10px;
}
.head-search {
  width: 450px;
  height: 40px;
  display: flex;
  margin: auto;
}
.search-input {
  flex: 1;
  position: relative;
}
.search-input input {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(199, 199, 199);
  border-right: 0;
  border-radius: 5px 0 0 5px;
  padding: 5px 15px;
}
.search-button {
  padding: 5px 25px;
  background-color: #ffc300;
  border: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.active-search {
  position: absolute;
  top: 100%;
  width: 0;
  height: 0;
  border: 1px solid rgb(196, 196, 196);
  border-top: 0;
  box-shadow: 0 2px 3px rgb(223, 223, 223);
  transition: opacity 0.3s;
  background-color: #fff;
  opacity: 0;
  z-index: 10;
}
.active-search-content {
  padding: 10px 20px;
  h6 {
    margin: 0;
    color: rgb(161, 161, 161);
    white-space: nowrap;
  }
}
input:focus ~ .active-search {
  width: 100%;
  height: auto;
  opacity: 1;
}
</style>