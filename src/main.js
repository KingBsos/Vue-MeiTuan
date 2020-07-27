import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';
import store from './store.js';
import { mapActions } from 'vuex';
import './mockData.js';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      city: '北京',
      rended: false
    }
  },
  methods: {
    ...mapActions(['loadDisData'])
  },
  created() {
    this.loadDisData().then(() => {
      this.$nextTick(() => {
        setTimeout(()=> this.rended = true, 500);
      });
    });
  }
}).$mount('#app')