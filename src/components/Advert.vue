<template>
  <div>
    <div>
      <div :class="['top-nav', headStyle]">
        <h2 class="nav-brand">{{ title }}</h2>
        <div class="nav-list">
          <Navigation :navList="navList" :linkStyle="linkStyle" />
        </div>
        <span class="nav-right">全部 &raquo;</span>
      </div>
      <div class="advert-list" v-for="(rowNum, rowIndex) in row" :key="rowIndex">
        <div class="advert-item" v-for="(columnNum, columnIndex) in column" :key="columnIndex">
          <slot
            v-if="advertList[rowIndex*columnIndex+columnIndex]"
            :item="advertList[rowIndex*columnIndex+columnIndex]"
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    navList: Array,
    linkStyle: {
      type: [String, Array],
      default: "nav-link"
    },
    headStyle: {
      type: [String, Array],
      default: "vc-head"
    },
    row: {
      type: Number,
      default: 1
    },
    column: {
      type: Number,
      default: 3
    },
    advertList: {
      type: Array
    }
  },
  components: {
    Navigation
  }
};
</script>

<style  lang="scss" scoped>
.vc-head {
  background-color: rgb(190, 190, 190);
}
.top-nav {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.nav-brand,
.nav-right {
  margin: 0;
  padding: 0 20px;
}
.nav-list {
  flex: 1;
}
/deep/ {
  .nav-link {
    color: #fff;
  }
}
.advert-list {
  display: flex;
}
.advert-item {
  width: 0;
  flex: 1;
}
</style>