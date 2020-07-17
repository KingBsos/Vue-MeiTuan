<template>
  <div>
    <div class="container">
      <div :class="headClass">
        <navigation
          :navList="headIndex"
          titleClass="nav-head"
          tailClass="nav-tail"
          linkClass="nav-link"
          :itemEvent="{mouseenter}"
          :currentIndex="currentPage"
        >
        <template #mark>
            <div class="nav-mark"></div>
        </template>
        </navigation>
      </div>
      <div class="content">
        <div class="vc-row" v-for="i in row" :key="i">
          <div class="vc-column" v-for="j in column" :key="j">
            <div :class="subitemClass">6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  props: {
    headIndex: {
      type: Array,
      required: true
    },
    pageData: {
      type: Array
    },
    row: {
      type: Number,
      default: 2
    },
    column: {
      type: Number,
      default: 3
    },
    turnPage: {
      type: Boolean,
      default: true
    },
    headClass: {
      type: [String, Array]
    },
    subitemClass: {
      type: [String, Array]
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  components: {
    Navigation
  },
  methods: {
      changeIndex(index) {
          if(index == this.currentPage) return ;
          this.currentPage = index;
      },
      mouseenter(data) {
          let index = data.index;
          this.changeIndex(index);
      }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid rgb(201, 201, 201);
  background-color: #fff;
  position: relative;
}
.vc-row {
  display: flex;
}
.vc-column {
  flex: 1;
}
.all-extra {
  position: absolute;
  top: 10px;
  right: 20px;
  color: #fff;
  font-size: 14px;
}
.nav-mark {
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translate(-50%);
    border: 5px solid transparent;
    border-top: 0;
    border-bottom-color: #fff;
}
/deep/ {
  .nav-link {
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .nav-head {
      pointer-events: none;
  }
  .nav-head .nav-link{
    font-size: 18px;
    cursor: none;
  }
  .nav-tail {
      margin-left: auto;
      margin-right: 15px;
      pointer-events: none;
  }
}
</style>