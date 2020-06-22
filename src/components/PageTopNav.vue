<template>
  <div class="container">
    <Weather />
    <!-- <Navigation class="nav-init" :navList="RowNavData.navList"/> -->
    <Navigation
      class="nav-init"
      :navList="navList"
      :reduction="true"
      navStyle="nav-item"
      linkStyle="nav-link"
    >
      <template #0="{childNav}">
        <Navigation
          direction="column"
          :navList="childNav"
          navStyle="nav-item"
          linkStyle="nav-child-link"
        />
      </template>
      <template #2="{childNav}">
        <Navigation
          direction="column"
          :navList="childNav"
          navStyle="nav-item"
          linkStyle="nav-child-link"
        />
      </template>
      <template #3="{childNav}">
        <div class="child-menu">
          <div>
            <h3 class="menu-item-header">酒店旅游</h3>
            <div class="menu-item-body">
              <Navigation
                direction="column"
                :navList="childNav[0]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
              <Navigation
                direction="column"
                :navList="childNav[1]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
              <Navigation
                direction="column"
                :navList="childNav[2]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">吃美食</h3>
            <div class="menu-item-body">
              <Navigation
                direction="column"
                :navList="childNav[3]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
              <Navigation
                direction="column"
                :navList="childNav[4]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">看电影</h3>
            <div class="menu-item-body">
              <Navigation
                direction="column"
                :navList="childNav[5]"
                navStyle="nav-item"
                linkStyle="nav-child-link"
              />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">手机应用</h3>
            <div class="menu-item-body">
              <Navigation :navList="childNav[6]" />
            </div>
          </div>
        </div>
      </template>
    </Navigation>
  </div>
</template>

<script>
import Weather from "./Weather.vue";
import Navigation from "./Navigation.vue";
import navListData from "../assets/top-nav-list.js";

export default {
  data() {
    return {
      navList: navListData
    };
  },
  computed: {},
  components: {
    Weather,
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

/deep/ {
  .nav-link,
  .nav-child-link {
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-top: 0;
    border-bottom: 0;
    flex: 1;
    text-align: center;
  }
  .nav-item:hover .nav-link:not(.nav-link-restore) {
    color: rgb(42, 255, 156);
    border-color: #ccc;
    background-color: #fff;
    box-shadow: 0 -1px 2px #ccc;
  }
  .nav-child-link {
    border: 0;
  }
}
.child-menu {
  display: flex;
  padding: 10px 5px;
}
.menu-item-body {
  display: flex;
  padding: 5px 30px;
}
.menu-item-header {
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 255, 136);
  padding: 10px 15px;
  text-align: center;
}
</style>