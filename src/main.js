import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ajax from './utils/ajax.js';
import routerConfig from './routerConfig.js';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false

const router = new VueRouter(routerConfig);

new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      allData: {
        topNav: [],
        allNav: [],
        rightTopNav: [],
        headImg: '',
        carouselpics: [],
        advertPics: [],
        catEyeMovieNav: [],
        famousHostelNav: [],
        guessYouLikeNav: []
      }
    }
  },
  mounted() {
    ajax('ksdjfksdsall').then(xhr => {
      this.allData = JSON.parse(xhr.response)
    });
  }
}).$mount('#app')

