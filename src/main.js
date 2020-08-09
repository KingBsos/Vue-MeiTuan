import Vue from 'vue'
import VueRouter from 'vue-router';
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
  render: h => h('router-view'),
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
        catEyeMovieData: [],
        famousHostelNav: [],
        guessYouLikeNav: [],
        guessYouLikeData: [],
        famousHostelData: [],
        hotCity: [],
        recentVisit: [],
        allCityByLetter: [],
        cityByDistrict: []
      }
    }
  },
  mounted() {
    ajax('alldata').then(xhr => {
      this.allData = JSON.parse(xhr.response)
      //console.log(this.allData.famousHostelData)
    });
  }
}).$mount('#app')

