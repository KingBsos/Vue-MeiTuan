<template>
  <div class="container">
      <a class="head-brand" hrer="#sdf">
          <img :src="imgUrl">
      </a>
      <div class="head-search">
          <div class="search">
              <input type="text" placeholder="搜索商家或地点" v-model="search">
              <button>搜索</button>
              <div class="active-search">
                  <Navigation :navList="hotSearch"/>
              </div>
          </div>
          <div class="static-hotsearch">
              <Navigation :navList="hotSearch"/>
          </div>
      </div>
  </div>
</template>

<script>
import imgUrl from '../assets/pic/meituan.jpg';
import Navigation from './Navigation.vue';

export default {
    data(){
        return {
            search: '',
            imgUrl,
            hotSearch: [{value: '1',url: '#asdfs'},{value: '2',url: '#asdfs'},{value: '3',url: '#asdfs'}]
        }
    },
    components: {
        Navigation
    }
}
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 15px 50px;
    z-index: 0;
    font-size: 14px;
}
.head-brand img {
    width: 80px;
    height: 50px;
    margin-top: 10px;
    border-radius: 15px;
}
.head-search {
    position: relative;
    margin: auto;
    z-index: 0;
}
.search {
    display: flex;
    border: 1px solid rgb(19, 235, 152);
    overflow: hidden;
    border-radius: 5px;
}
.head-search input {
    font-size: 14px;
    padding: 5px 10px;
    border: 0;
}
.head-search button {
    padding: 5px 20px;
    border: 0;
    color: #fff;
    background-color: rgb(19, 235, 152);
}
.active-search {
    position: absolute;
    top: 100%;
    width: 100%;
    margin-top: -3px;
    margin-left: -1px;
    padding: 10px;
    border: 1px solid #ccc;
    border-top: 0;
    background-color: #fff;
    z-index: 1;
    transition: opacity 0.3s;
}
input:not(:focus) ~ .active-search {
    width: 0px;
    opacity: 0;
}
.static-hotsearch {
    position: absolute;
    top: 100%;
}
</style>