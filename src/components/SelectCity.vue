<template>
  <div>
    <div class="container">
      <div>
        <h3 class="d-ib vc-title">按省份选择：</h3>
        <select class="vc-select mr-1em" v-model="currentProvince">
          <option disabled>请选择省份</option>
          <option
            v-for="(item, index) in cityByDistrict"
            :key="index"
            :value="index"
          >{{ item.province }}</option>
        </select>
        <select class="vc-select mr-3em" v-model="currentCity">
          <option disabled>请选择城市</option>
          <template v-if="cityByDistrict[currentProvince]">
            <option
              v-for="(item, index) in cityByDistrict[currentProvince].sub"
              :key="index"
            >{{ item.city }}</option>
          </template>
        </select>
        <h3 class="d-ib vc-title">直接搜索：</h3>
        <input class="vc-input" type="text" placeholder="请输入城市中文或拼音" />
      </div>
      <hr />
      <div>
        <h3 class="d-ib vc-title">热门城市：</h3>
        <Navigation class="d-ib" :navList="hotCity" linkClass="nav-link" />
      </div>
      <hr />
      <div>
        <h3 class="d-ib vc-title">最近访问：</h3>
        <Navigation class="d-ib" :navList="recentVisit" linkClass="nav-link" />
      </div>
      <hr />
      <div>
        <h3 class="d-ib vc-title">按拼音首字母选择：</h3>
        <NavItem
          v-for="(item, index) in allCityByLetter"
          :key="index"
          :item="{value: item.name, url: `#${item.name + index}`}"
          linkClass="nav-link"
        />
      </div>
      <div class="d-flex" v-for="(item, index) in allCityByLetter" :key="index">
        <span :id="`${item.name + index}`" class="letter-head d-ib">{{ item.name }}</span>
        <div class="d-ib flex-1">
          <Navigation
            :navList="item.value"
            :multiLine="true"
            linkClass="nav-link"
            :itemEvent="{click: changeCity}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import NavItem from "./NavItem.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentProvince: "请选择省份",
      currentCity: "请选择城市",
    };
  },
  watch: {
    currentProvince() {
      this.currentCity = "请选择城市";
    },
    currentCity(value) {
      this.$root.city = value;
      this.$router.push(`/`);
    },
  },
  components: {
    Navigation,
    NavItem,
  },
  methods: {
    changeCity(event, _this, obj) {
      event.preventDefault();
      this.currentCity = obj.item.value;
    },
  },
  computed: {
    ...mapState({
      cityByDistrict: (state) => state.allDisplayData.cityByDistrict,
      hotCity: (state) => state.allDisplayData.hotCity,
      allCityByLetter: (state) => state.allDisplayData.allCityByLetter,
      recentVisit: (state) => state.allDisplayData.recentVisit,
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  background-color: #fff;
}
.container > div {
  padding: 10px 0px;
}
.vc-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
.vc-select {
  width: 150px;
  padding: 10px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px;
  background-color: #fff;
  color: #666;
}
.vc-input {
  padding: 10px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 5px;
}
.letter-head {
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: 7px;
  padding-left: 1px;
  border-radius: 50%;
  background-color: rgb(255, 217, 0);
}
/deep/ {
  .nav-link {
    padding: 10px 12px;
    font-size: 14px;
    color: #666;
  }
  .nav-link:hover {
    color: #333;
  }
}
</style>