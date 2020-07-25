<template>
  <div id="app">
    <div class="shadow">
      <div class="padding-x-x top">
        <PageTopNav />
      </div>
      <div class="padding-x-x top2">
        <HeaderSearch />
      </div>
    </div>
    <div class="padding-x-x layout-main-body">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import PageTopNav from "./PageTopNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    PageTopNav,
    HeaderSearch,
    Footer,
  },
};
</script>

<style>
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