<template>
  <div class="font-size-12">
    <span class="m-sm text-muted">{{ city.name }}</span>
    <router-link class="change-link m-sm" to="/selectcity">切换城市</router-link>
    <span class="text-muted">
      [
      <NavItem v-for="(city,index) in city.nearCity" :key="index" :item="{value: city.name}" linkClass="nav-item"/>
      ]
    </span>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['city'])
  },
  components: {
    NavItem
  }
};
</script>

<style lang="scss" scoped>
.change-link {
  border: 1px solid rgb(179, 179, 179);
  color: #aaa;
  background-color: rgb(243, 243, 243);
}
.change-link:hover {
  color: rgb(255, 196, 0);
}
/deep/ {
  .nav-item {
    display: inline-block;
    padding: 5px 10px;
  }
}
</style>