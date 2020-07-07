<template>
  <div>
    <div class="container">
      <div>
        <h3>按省份选择：</h3>
        <select v-model="currentProvince">
          <option disabled>省份</option>
          <option
            v-for="(province, index) in Object.keys(cityListByDistrict)"
            :key="index"
          >{{ province }}</option>
        </select>
        <select v-model="currentCity">
          <option disabled>城市</option>
          <option
            v-for="(item, index) in cityListByDistrict[currentProvince]"
            :key="index"
          >{{ item }}</option>
        </select>
        <span>直接搜索：</span>
        <input type="text" />
      </div>
      <hr />
      <div>
        <h3>热门城市：</h3>
        <span class="city-link" v-for="(item, index) in hotCityList" :key="index">{{ item }}</span>
      </div>
      <hr />
      <div>
        <h3>最近访问：</h3>
        <span class="city-link" v-for="(item, index) in latelySearch" :key="index">{{ item }}</span>
      </div>
      <hr />
      <div>
        <h3>按拼音首字母选择：</h3>
        <div class="flex-1 d-flex justify-content-between">
          <span
            class="city-link"
            v-for="(item, index) in Object.keys(cityListByLetter)"
            :key="index"
          >{{ item }}</span>
        </div>
      </div>
      <div>
        <template v-for="(item, index) of Object.keys(cityListByLetter)">
          <div :key="index">
            <div class="city-label" :key="index">
              <span>{{ item }}</span>
            </div>
            <div class>
              <span
                class="city-link"
                v-for="(item, index) in cityListByLetter[item]"
                :key="index"
              >{{ item }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      hotCityList: ["one", "two"],
      latelySearch: [],
      cityListByDistrict: { 广东: ["珠海"] },
      cityListByLetter: { A: ["鞍山", "鞍马"], B: ["北京", "北山"] },
      currentProvince: "省份",
      currentCity: "城市"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/component.css";
.container {
  padding: 10px;
  background-color: #fff;
}
.container > div:not(:last-child) {
  padding: 10px 5px;
  display: flex;
  align-items: center;
}
.container > div:last-child > div {
  display: flex;
  align-items: flex-start;
}
.city-link {
  display: inline-block;
  padding: 10px 15px;
  color: rgb(121, 121, 121);
  cursor: pointer;
}
.city-link:hover {
  color: rgb(37, 37, 37);
}
.city-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  line-height: 1;
  background-color: rgb(16, 205, 230);
  border-radius: 50%;
}
</style>