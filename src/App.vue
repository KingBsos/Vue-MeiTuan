<template>
  <div id="app">
    <div class="shadow">
      <div class="padding-x-x top">
        <PageTopNav :city="city"/>
      </div>
      <div class="padding-x-x top2">
        <HeaderSearch />
      </div>
    </div>
    <div class="padding-x-x layout-main-body">
      <router-view v-model="city"></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import PageTopNav from "./components/PageTopNav.vue";
import HeaderSearch from "./components/HeaderSearch.vue";
import Footer from "./components/Footer.vue";
import './mockData.js';
export default {
  name: "App",
  props: {
    city: {
      type: String,
      default: '北京'
    }
  },
  data() {
    return {
      
    };
  },
  components: {
    PageTopNav,
    HeaderSearch,
    Footer
  }
};
</script>

<style>
@import './assets/css/index.css';
.padding-x-x {
  padding: 0 60px;
}
@media (max-width: 1000px) {
.padding-x-x {
  padding: 0px;
}
}
.shadow {
  box-shadow: 0 0 20px #ccc;
}

.top {
  background-color: #f8f8f8;
}
.top2 {
  padding-bottom: 50px;
}
.layout-main-body {
  padding-top: 15px;
  background-color: rgba(235, 235, 235, 0.829);
}
</style>
