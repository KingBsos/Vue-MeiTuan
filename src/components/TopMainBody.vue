<template>
  <div class="container">
    <div class="body-left">
      <Navigation
        :navList="navList"
        :vertical="true"
        itemClass="main-body-nav"
        linkClass="main-body-link"
      ></Navigation>
    </div>
    <div class="body-right">
      <div class="body-right-bottom">
        <div class="advert-top">
          <div class="carousel-wrapper">
            <el-carousel class="h-100" height="100%">
              <el-carousel-item v-for="(item,index) in $root.allData.carouselPics || []" :key="index">
                <img class="h-100" :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="advert-top-1">
            <CoverCard :imgUrl="$root.allData.advertPics && $root.allData.advertPics[2]"></CoverCard>
          </div>
          <div class="user-info">
            <CoverCard>
              <div class="user-info-body">
                <img :src="$root.allData.headImg" />
                <p>KingBsos</p>
                <a class="button" href="#ksdf">注销</a>
                <a class="button" href="#ksdfj">立即登录</a>
              </div>
            </CoverCard>
          </div>
        </div>
        <div class="advert-bottom">
          <div class="advert-bottom-1">
            <CoverCard :imgUrl="$root.allData.advertPics && $root.allData.advertPics[0]"></CoverCard>
          </div>
          <div class="advert-bottom-2">
            <CoverCard :imgUrl="$root.allData.advertPics && $root.allData.advertPics[1]"></CoverCard>
          </div>
          <div class="advert-bottom-3">
            <CoverCard :imgUrl="$root.allData.advertPics && $root.allData.advertPics[3]"></CoverCard>
          </div>
          <div class="qr-code">
            <CoverCard>
              <div class="qr-info-body">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
                <p>美团APP手机版</p>
                <p class="text-size-12"><span class="text-danger">1元起</span>吃喝玩乐</p>
              </div>
            </CoverCard>
          </div>
        </div>
      </div>
      <div class="body-right-top">
        <Navigation :navList="rightTopNavlist" itemClass="itemStyle" linkClass="linkStyle" />
      </div>
    </div>
  </div>
</template>

<script>
import navList from "../assets/main-body-nav-list.js";
import Navigation from "./Navigation.vue";
import CoverCard from "./CoverCard.vue";
export default {
  data() {
    return {
      navList,
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
@import '../assets/css/index.css';
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.user-info-body img {
  width: 55px;
  height: 55px;
  margin-top: 30px;
  margin-bottom: 5px;
  border-radius: 50%;
}
.user-info-body .button {
  display: inline-block;
  width: 60%;
  margin: 10px 0;
  padding: 5px 0;
  color: #333;
  text-align: center;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 24px;
  transition: all 0.3s;
}
.user-info-body .button:hover {
  background-color: rgb(207, 207, 207);
}
.qr-info-body img {
  height: 70%;
}
/deep/ {
  .linkStyle {
    font-size: 16px;
    font-weight: 700;
    padding: 5px 20px;
    color: rgb(0, 0, 0);
  }
  .itemStyle:hover .linkStyle{
    color: #ed1e24;
  }
  .itemStyle:nth-child(1):hover .linkStyle {
    color: #fbc700;
  }
  .itemStyle:nth-child(4):hover .linkStyle {
    color: #fbc700;
  }
  .itemStyle:nth-child(5):hover .linkStyle {
    color: #fe8c00;
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