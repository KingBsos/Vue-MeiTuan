<template>
  <div>
      <span>{{ city }}</span>
      <router-link to="/select/city">切换城市</router-link>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  }
}
</script>

<style>

</style>