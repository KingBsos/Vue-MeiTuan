<template>
  <div class="position-relative">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <transition appear name="full-model">
      <div class="full-model" v-if="loading || !$root.rended">
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  }
};
</script>

<style scoped>
@import "./assets/css/index.css";
.position-relative {
  position: relative;
}
.full-model {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(134, 134, 134, 0.774);
}
.full-model-enter,
.full-model-leave-to {
  opacity: 0;
}
.full-model-enter-active,
.full-model-leave-active {
  transition: all .5s;
}
</style>
