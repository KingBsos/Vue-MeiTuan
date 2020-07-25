<template>
  <div class="container">
    <Weather :city="$root.city" />
    <!-- <Navigation class="nav-init" :navList="RowNavData.navList"/> -->
    <Navigation
      :navList="$root.allData.topNav"
      itemClass="nav-item"
      linkClass="nav-link"
      childNavClass="child-nav"
      childLinkClass="nav-child-link"
    >
      <template #4="{childNav}">
        <div class="child-menu">
          <div>
            <h3 class="menu-item-header">酒店旅游</h3>
            <div class="menu-item-body">
              <Navigation :vertical="true" :navList="childNav[0]" linkClass="nav-child-link" />
              <Navigation :vertical="true" :navList="childNav[1]" linkClass="nav-child-link" />
              <Navigation :vertical="true" :navList="childNav[2]" linkClass="nav-child-link" />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">吃美食</h3>
            <div class="menu-item-body">
              <Navigation :vertical="true" :navList="childNav[3]" linkClass="nav-child-link" />
              <Navigation :vertical="true" :navList="childNav[4]" linkClass="nav-child-link" />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">看电影</h3>
            <div class="menu-item-body">
              <Navigation :vertical="true" :navList="childNav[5]" linkClass="nav-child-link" />
            </div>
          </div>
          <div>
            <h3 class="menu-item-header">手机应用</h3>
            <div class="menu-item-body">
              <Navigation :navList="childNav[6]" linkClass="img-link" />
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

export default {
  components: {
    Weather,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

/deep/ {
  .nav-link,
  .nav-child-link {
    padding: 10px 15px;
    font-size: 12px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-top: 0;
    border-bottom: 0;
    flex: 1;
    text-align: center;
  }
  .nav-child-link {
    border: 0;
  }
  .has-child.nav-item:hover .nav-link {
    border-color: #ccc;
    background-color: #fff;
    box-shadow: 0 -1px 2px #ccc;
  }
  .child-nav {
    margin-top: -1px;
    right: 0;
    z-index: -1;
  }
  .img-link img {
    margin: 5px 10px;
    width: 60px;
    height: 60px;
    border-radius: 15px;
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