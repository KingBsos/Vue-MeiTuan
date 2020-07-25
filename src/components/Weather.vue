<template>
  <div class="font-size-12">
    <span class="m-sm text-muted">{{ city }}</span>
    <router-link class="change-link m-sm" to="/selectcity">切换城市</router-link>
  </div>
</template>

<script>
export default {
  props: {
    city: String,
  },
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
</style>