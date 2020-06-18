<template>
  <div class="container">
      <div class="body-left">
        <Navigation :navList="navList" direction="column" :autoHead="true" afterEach=">"
            navStyle="main-body-nav"
            linkStyle="main-body-link"
            headStyle="main-body-head"
            beforeEachStyle="iconfont"
            afterEachStyle="main-body-after-each"
            spacerStyle="main-body-spacer"/>
      </div>
      <div class="body-right"></div>
  </div>
</template>

<script>
import navList from '../assets/main-body-nav-list.js';
import Navigation from './Navigation.vue';

export default {
    data() {
        return {
            navList
        }
    },
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.container > .body-left {
  width: 20%;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 185, 129, 0.808);
}
.container > .body-right {
  width: 80%;
}

/deep/ {
  .main-body-nav {
    justify-content: space-between;
  }
  .main-body-nav:not(:first-child):hover {
    .main-body-link {
      color: #333;
    }
    color: #333;
    background-color: #fff;
  }
  .main-body-link, .main-body-after-each {
    padding: 5px 5px;
    color: #fff;
    font-weight: 700;
  }
  .main-body-head {
    padding: 15px 10px;
    font-size: 16px;
    flex: 1;
    background-color: rgba(43, 184, 118, 0.315)
  }
  .main-body-spacer {
    display: flex;
    align-items: center;
  }
}
</style>