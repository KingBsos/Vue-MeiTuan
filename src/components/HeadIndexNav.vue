<template>
  <div>
      <div class="container">
        <div :class="headClass">
            <navigation :navList="headIndex.slice(0, headIndex.length-1)" titleClass="nav-head" linkClass="nav-link"/>
            <a class="all-extra" v-if="headIndex.length != 0" href="headIndex[headIndex.length-1].url">{{ headIndex[headIndex.length-1].value }}</a>
            <div class="triangle-mark"></div>
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
import Navigation from './Navigation.vue';
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
            currentPage: 0
        }
    },
    components: {
        Navigation
    }
}
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
/deep/ {
    span.nav-link:not(.nav-head) {
        font-size :14px;
        color: #fff;
        cursor: pointer;
    }
    .nav-head {
        font-size: 18px;
        color: #fff;
    }
}
</style>