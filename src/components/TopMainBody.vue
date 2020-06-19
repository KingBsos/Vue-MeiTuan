<template>
  <div class="container">
    <div class="body-left">
      <Navigation
        :navList="navList"
        direction="column"
        :autoHead="true"
        afterEach=">"
        navStyle="main-body-nav"
        linkStyle="main-body-link"
        headStyle="main-body-head"
        beforeEachStyle="iconfont"
        afterEachStyle="main-body-after-each"
        spacerStyle="main-body-spacer"
      />
    </div>
    <div class="body-right">
      <div class="body-right-top">
        <Navigation :navList="rightTopNavlist" linkStyle="linkStyle"/>
      </div>
      <div class="body-right-bottom">
        <div class="carousel-wrapper">
          <el-carousel :style="{height: '100%',width: '100%'}" height="100%">
            <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
              <img class="vc-carousel-img" :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="advert-1">
          <CoverCard :bgImgUrl="img1">
            <div class="advert-text">
              <h2>休闲生活</h2>
              <p>唱歌按摩 乐享预定</p>
            </div>
          </CoverCard>
        </div>
        <div class="user-info">
          <CoverCard>
            <div class="user-info-body">
              <img :src="img4"/>
              <h1>KingBsos</h1>
              <button>注销</button>
              <button>立即登录</button>
            </div>
          </CoverCard>
        </div>
        <div class="advert-wrapper">
          <div class="advert-2">
            <CoverCard :bgImgUrl="img3">
              <div class="advert-text">
                <h2>休闲生活</h2>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
          <div class="advert-3">
            <CoverCard :bgImgUrl="img4">
              <div class="advert-text">
                <h2>休闲生活</h2>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
        </div>
        <div class="advert-4">
          <CoverCard :bgImgUrl="img2">
            <div class="advert-text">
              <h2>休闲生活</h2>
              <p>唱歌按摩 乐享预定</p>
            </div>
          </CoverCard>
        </div>
        <div class="qr-code">
          <CoverCard>
             <div class="qr-info-body">
              <img :src="img2"/>
              <p>美团APP手机版</p>
            </div>
          </CoverCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/pic/1.jpg";
import img2 from "../assets/pic/2.jpg";
import img3 from "../assets/pic/3.jpg";
import img4 from "../assets/pic/4.jpg";
import navList from "../assets/main-body-nav-list.js";
import carouselImg from "../assets/carousel.js";
import Navigation from "./Navigation.vue";
import CoverCard from "./CoverCard.vue";
export default {
  data() {
    return {
      navList,
      carouselImg,
      img1,
      img2,
      img3,
      img4,
      rightTopNavlist: [
        {
          value: '美团外卖',
          url: '#adslfk'
        },
        {
          value: '猫眼电影',
          url: '#adslfk'
        },
        {
          value: '美团酒店',
          url: '#adslfk'
        },
        {
          value: '名宿/公寓',
          url: '#adslfk'
        },
        {
          value: '商家入驻',
          url: '#adslfk'
        },
        {
          value: '美团公益',
          url: '#adslfk'
        }
      ]
    };
  },
  components: {
    Navigation,
    CoverCard
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: -58px;
}
.container > .body-left {
  width: 20%;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 185, 129, 0.808);
}
.container > .body-right {
  width: 80%;
  position: relative;
}
.body-right-top {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 58px;
  padding: 5px;
  padding-left: 30px;
  display: flex;
  align-items: center;
}
.body-right-bottom {
  padding: 58px 10px 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.carousel-wrapper,
.advert-1,
.user-info {
  height: 65%;
  overflow: hidden;
  padding: 5px;
  padding-top: 0;
}
.advert-2,
.advert-3,
.advert-4,
.qr-code {
  height: 35%;
  padding: 5px;
  padding-bottom: 0;
}
.carousel-wrapper,
.advert-wrapper {
  width: 60%;
  display: flex;
  z-index: 0;
}
.advert-1,
.advert-4 {
  width: 15%;
}
.advert-wrapper > div {
  width: 50%;
  height: 100%;
}
.user-info,
.qr-code {
  width: 25%;
}
.advert-text {
  font-weight: 900;
}
.user-info-body, .qr-info-body {
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.user-info-body img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.qr-info-body img {
  width: 80px;
  height: 80px;
}
button {
  border: 1px solid rgba(209, 209, 209, 0.719);
  margin: 10px;
  padding: 10px 20px;
  border-radius: 50px;
}
/deep/ {
  .linkStyle {
    font-size: 16px;
    font-weight: 900;
    color: rgb(0, 0, 0);
  }
  .linkStyle:hover {
    color: rgb(29, 214, 177);
  }
  .main-body-nav {
    justify-content: space-between;
  }
  .main-body-nav:not(:first-child):hover {
    .main-body-link {
      color: #333;
    }
    .iconfont {
      color: #333;
    }
    color: #333;
    background-color: #fff;
  }
  .main-body-link,
  .main-body-after-each {
    padding: 7px 3px;
    color: #fff;
    font-weight: 700;
  }
  .main-body-head {
    padding: 15px 10px;
    font-size: 18px;
    flex: 1;
    background-color: rgba(43, 184, 118, 0.315);
  }
  .main-body-spacer {
    display: flex;
    align-items: center;
  }
}
</style>