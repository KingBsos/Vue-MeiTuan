<template>
  <div v-if="allNav && advertPics" class="container">
    <div class="body-left">
      <div class="all-nav">全部分类</div>

      <Navigation
        class="position-relative"
        :navList="allNav"
        :vertical="true"
        spacer="/"
        postSymbol=">"
        itemClass="main-body-nav"
        linkClass="main-body-link"
        spacerClass="main-body-spacer"
        :frontSymbolClass="['iconfont', 'custom-font']"
        :extraFrontSymbolClass="['icon-bijiben', 'icon-huangguan', 'icon-bianzu129',
        'icon-liwu','icon-pinglun','icon-shanchu','icon-weizhi','icon-shijian','icon-shouye','icon-yinhangka',
        'icon-shoucang','icon-tupian','icon-zuanshi','icon-zhibo','icon-qianbao','icon-rili']"
        childNavClass="child-nav-style"
      >
        <template #[i-1]="{childNav, current}" v-for="i in allNav.length">
          <div :key="i">
            <div v-for="(item, index) in childNav" :key="index">
              <h6 class="inner-head">
                {{ current[index].value }}
                <a
                  class="float-right text-size-12 text-muted"
                  :href="current[index].url"
                >更多&raquo;</a>
              </h6>
              <hr />
              <Navigation :navList="item" :multiLine="true" linkClass="child-nav-link font-size-12"></Navigation>
            </div>
          </div>
        </template>
      </Navigation>
    </div>
    <div class="body-right">
      <div class="body-right-bottom">
        <div class="advert-top">
          <div class="carousel-wrapper">
            <el-carousel class="h-100" height="100%">
              <el-carousel-item v-for="(item,index) in carouselPics" :key="index">
                <img class="h-100" :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="advert-top-1">
            <CoverCard :imgUrl="advertPics[2]"></CoverCard>
          </div>
          <div class="user-info">
            <CoverCard>
              <div class="user-info-body">
                <img :src="headImg" />
                <p>KingBsos</p>
                <router-link class="button" to="/register">注册</router-link>
                <router-link class="button" to="/signin">立即登录</router-link>
              </div>
            </CoverCard>
          </div>
        </div>
        <div class="advert-bottom">
          <div class="advert-bottom-1">
            <CoverCard :imgUrl="advertPics[0]"></CoverCard>
          </div>
          <div class="advert-bottom-2">
            <CoverCard :imgUrl="advertPics[1]"></CoverCard>
          </div>
          <div class="advert-bottom-3">
            <CoverCard :imgUrl="advertPics[3]"></CoverCard>
          </div>
          <div class="qr-code">
            <CoverCard>
              <div class="qr-info-body">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
                <p>美团APP手机版</p>
                <p class="font-size-12">
                  <span class="text-danger">1元起</span>吃喝玩乐
                </p>
              </div>
            </CoverCard>
          </div>
        </div>
      </div>
      <div class="body-right-top">
        <Navigation :navList="rightTopNav" itemClass="itemStyle" linkClass="linkStyle" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import CoverCard from "./CoverCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    Navigation,
    CoverCard,
  },
  computed: {
    ...mapState("allDisplayData", [
      "allNav",
      "advertPics",
      "headImg",
      "rightTopNav",
      "carouselPics",
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/font/iconfont.css";
.all-nav {
  height: 58px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 15px;
  font-weight: 700;
}
.container {
  position: relative;
  display: flex;
  margin-top: -58px;
  padding-bottom: 30px;
  z-index: 0;
}
.container > .body-left {
  width: 20%;
  border: 1px solid rgb(221, 221, 221);
  background-color: #fff;
  z-index: 1;
}
.container > .body-right {
  width: 80%;
  position: relative;
  z-index: 0;
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
.inner-head {
  margin: 10px 0px 5px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
}
/deep/ {
  .linkStyle {
    font-size: 16px;
    font-weight: 700;
    padding: 5px 20px;
    color: rgb(0, 0, 0);
  }
  .itemStyle:hover .linkStyle {
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
  .main-body-nav {
    position: static;
  }
  .main-body-nav:hover {
    background-color: rgba(255, 150, 0, 0.08);
    .main-body-link,
    .main-body-spacer {
      color: #222222;
    }
  }
  .main-body-link,
  .main-body-spacer {
    font-size: 13px;
    color: #646464;
    padding: 4px 0;
  }
  .main-body-spacer {
    padding: 0 7px;
  }
  .custom-font {
    width: 30px;
    text-align: center;
    font-size: 12px;
  }
  .child-nav-style {
    top: 0;
    bottom: 0;
    left: 100%;
    width: 400px;
    padding: 15px;
  }
  .child-nav-link {
    padding: 3px 5px;
  }
}
</style>