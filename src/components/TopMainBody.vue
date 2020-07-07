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
        childNavStyle="main-body-child-nav"
      >
        <template #1>
          <h1>sdf</h1>
        </template>
      </Navigation>
    </div>
    <div class="body-right">
      <div class="body-right-top">
        <Navigation :navList="rightTopNavlist" linkStyle="linkStyle" />
      </div>
      <div class="body-right-bottom">
        <div class="advert-top">
          <div class="carousel-wrapper">
            <el-carousel :style="{height: '100%',width: '100%'}" height="100%">
              <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
                <img class="vc-carousel-img" :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="advert-top-1">
            <CoverCard :imgUrl="img1">
              <div class="advert-text">
                <h4>休闲生活</h4>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
          <div class="user-info">
            <CoverCard>
              <div class="user-info-body">
                <img :src="img4" />
                <h1>KingBsos</h1>
                <button>注销</button>
                <button>立即登录</button>
              </div>
            </CoverCard>
          </div>
        </div>
        <div class="advert-bottom">
          <div class="advert-bottom-1">
            <CoverCard :imgUrl="img3">
              <div class="advert-text">
                <h4>休闲生活</h4>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
          <div class="advert-bottom-2">
            <CoverCard :imgUrl="img4">
              <div class="advert-text">
                <h4>休闲生活</h4>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
          <div class="advert-bottom-3">
            <CoverCard :imgUrl="img2">
              <div class="advert-text">
                <h4>休闲生活</h4>
                <p>唱歌按摩 乐享预定</p>
              </div>
            </CoverCard>
          </div>
          <div class="qr-code">
            <CoverCard>
              <div class="qr-info-body">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
                <p>美团APP手机版</p>
              </div>
            </CoverCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/pic/9.jpg";
import img2 from "../assets/pic/9.jpg";
import img3 from "../assets/pic/10.jpg";
import img4 from "../assets/pic/11.jpg";
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
          value: "美团外卖",
          url: "#adslfk"
        },
        {
          value: "猫眼电影",
          url: "#adslfk"
        },
        {
          value: "美团酒店",
          url: "#adslfk"
        },
        {
          value: "名宿/公寓",
          url: "#adslfk"
        },
        {
          value: "商家入驻",
          url: "#adslfk"
        },
        {
          value: "美团公益",
          url: "#adslfk"
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
  padding-bottom: 30px;
}
.container > .body-left {
  width: 20%;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 185, 129, 0.671);
  z-index: 1;
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
  padding: 0 0px 15px 30px;
  display: flex;
  align-items: center;
}
.body-right-bottom {
  position: absolute;
  padding: 58px 0px 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.advert-top,
.advert-bottom {
  display: flex;
}
.advert-top {
  height: 65%;
}
.advert-bottom {
  height: 35%;
}
.carousel-wrapper,
.advert-top-1,
.user-info,
.advert-bottom-1,
.advert-bottom-2,
.advert-bottom-3,
.qr-code {
  height: 100%;
  padding: 5px;
}
.carousel-wrapper,
.advert-top-1,
.user-info {
  padding-top: 0;
}
.advert-bottom-1,
.advert-bottom-2,
.advert-bottom-3,
.qr-code {
  padding-bottom: 0;
}
.carousel-wrapper {
  width: 60%;
}
.advert-bottom-1,
.advert-bottom-2 {
  width: 30%;
}
.advert-top-1,
.advert-bottom-3 {
  width: 20%;
}
.user-info,
.qr-code {
  width: 30%;
}
.advert-text {
  padding: 5px;
  color: rgb(0, 0, 0);
}
.user-info-body,
.qr-info-body {
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
  .main-body-head {
    flex: 1;
    padding: 15px 10px;
    font-weight: 300;
    background-color: rgba(43, 184, 118, 0.185);
  }
  .main-body-nav {
    position: static;
  }
  .main-body-link {
    padding: 4px 3px;
    font-size: 14px;
    color: #fff;
  }
  .main-body-spacer {
    margin: 0 -1px;
  }
  .main-body-nav:not(:first-child):hover {
    .main-body-link {
      color: rgb(26, 26, 26);
    }
    color: #333;
    background-color: #fff;
  }
  .main-body-child-nav {
    top: 56px;
  }
}
</style>