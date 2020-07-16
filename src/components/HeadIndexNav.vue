<template>
  <div>
      <div class="container">
          <navigation :navList="headIndex"/>
          <div>
              <div class="vc-row" v-for="i in row" :key="i">
                  <div class="vc-column" v-for="j in column" :key="j">
                      <h1>KingBsos</h1>
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

<style land="scss" scoped>
.container {
    padding: 10px 20px;
    border: 1px solid rgb(230, 230, 230);
}
.vc-row {
    display: flex;
}
.vc-column {
    flex: 1;
}
</style>