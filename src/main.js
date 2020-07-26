import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ajax from './utils/ajax.js';
import router from './router.js';
import "./mockData.js";

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      allData: {},
      city: '北京'
    }
  },
  created() {
    ajax('ksdjfksdsall').then(xhr => {
      this.allData = JSON.parse(xhr.response)
    });
  }
}).$mount('#app')