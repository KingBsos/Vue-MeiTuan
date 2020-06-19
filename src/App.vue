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
      <TopMainBody />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageTopNav from "./components/PageTopNav.vue";
import HeaderSearch from "./components/HeaderSearch.vue";
import TopMainBody from "./components/TopMainBody.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    PageTopNav,
    HeaderSearch,
    TopMainBody,
    Footer
  },
  computed: {},
  methods: {}
};
</script>

<style>
* {
  box-sizing: border-box;
}
hr {
  border: 0px;
  border-top: 1px solid rgb(224, 224, 224);
}
a {
  text-decoration: none;
  color: rgb(124, 124, 124);
}
body {
  margin: 0;
  padding: 0;
}
a:hover {
  color: rgb(42, 255, 156);
}

.padding-x-x {
  padding-left: 200px;
  padding-right: 200px;
}
.shadow {
  box-shadow: 0 0 20px rgba(192, 192, 192, 0.575);
}

.top {
  background-color: #eeeeee9a;
}
.top2 {
  padding-bottom: 50px;
}
.layout-main-body {
  padding-top: 15px;
  background-color: rgba(235, 235, 235, 0.829);
}
</style>
