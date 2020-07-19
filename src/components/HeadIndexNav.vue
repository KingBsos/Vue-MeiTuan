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
        <div v-if="turnPage" class="left-turn-button" @click="__turnPage(-1)">&laquo;</div>
        <div class="vc-row" v-for="i in row" :key="i">
          <div class="vc-column" v-for="j in column" :key="j">
            <div v-if="bodyData[currentPage-1]" :class="subitemClass">
              <slot
                v-if="bodyData[currentPage-1][(i*j*childPage[currentPage-1])+(i-1)*column+j-1]"
                :data="bodyData[currentPage-1][(i*j*childPage[currentPage-1])+(i-1)*column+j-1]"
              ></slot>
            </div>
          </div>
        </div>
        <div v-if="turnPage" class="right-turn-button" @click="__turnPage(1)">&raquo;</div>
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
    bodyData: {
      type: Array,
      default: () => []
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
      currentPage: 1,
      childPage: []
    };
  },
  components: {
    Navigation
  },
  methods: {
    changeIndex(index) {
      if (index == this.currentPage) return;
      console.log(this.currentPage)
      this.currentPage = index;
    },
    mouseenter(data) {
      let index = data.index;
      this.changeIndex(index);
    },
    __turnPage(num) {
      let page = this.childPage[this.currentPage - 1] + num;
      if (page < 0) return;
      if (
        page >
        this.bodyData[this.currentPage - 1].length / (this.row * this.column)
      )
        return;
      this.$set(this.childPage, this.currentPage - 1, page);
    },
    __convPageData() {
      if (this.bodyData.length == 0) return [];
      let childPage = new Array(this.bodyData.length);
      childPage.fill(0);
      return childPage;
    }
  },
  mounted() {
    console.log(this.bodyData)
    this.childPage = this.__convPageData();
  },
  updated() {
    console.log(this.bodyData)
    let temp = this.__convPageData();
    if (temp.length == this.childPage.length) return;
    this.childPage = temp;
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
.left-turn-button,
.right-turn-button {
  position: absolute;
  opacity: 0;
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.596);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
}
.left-turn-button {
  left: 0;
  top: 50%;
  z-index: 100;
}
.right-turn-button {
  right: 0;
  top: 50%;
}
.content:hover {
  .left-turn-button,
  .right-turn-button {
    opacity: 1;
  }
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
  .nav-head .nav-link {
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