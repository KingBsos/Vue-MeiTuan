<template>
  <footer>
      <div class="footer-1">
          <div>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[0]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[1]"/>
          </div>
          <div>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[2]"/>
          </div>
          <div>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[3]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[4]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[5]"/>
          </div>
          <div>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[6]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[7]"/>
          </div>
          <div>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[8]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[9]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[10]"/>
              <Navigation class="custom-margin" :vertical="true" :navList="navList[11]"/>
          </div>
      </div>
        <hr />
      <div class="footer-2">
          <div>
              <p>美团网网购ｄｓｋｆｊｄｓｆｊ经ＩＣＰ正０７０７７９１好经ＩＣＰ咱１０２１１７３９好电子公告服务规则</p>
              <p>广播电视节目制作经营许可证（经）字母０３０８８９好</p>
          </div>
          <span>精工玩干杯１１０１０５０２０２５５５３４好</span>
      </div>
  </footer>
</template>

<script>
import Navigation from './Navigation.vue';
import navList from '../assets/footer-nav-list.js';
export default {
    data(){
        return {
            navList
        }
    },
    components: {
        Navigation
    }
}
</script>

<style scoped>
footer {
    padding: 5px 100px;
    background-color: rgba(245, 245, 245, 0.575);
}
.footer-1, .footer-2 {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
.custom-margin {
    margin-top: 15px;
}
</style>