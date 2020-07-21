<template>
  <footer>
    <div class="footer-1">
      <div>
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[0]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[1]"
        />
      </div>
      <div>
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[2]"
        />
      </div>
      <div>
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[3]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[4]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[5]"
        />
      </div>
      <div>
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[6]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[7]"
        />
      </div>
      <div>
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[8]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[9]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[10]"
        />
        <Navigation
          class="mt-1"
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[11]"
        />
        <Navigation
          titleClass="foot-title"
          linkClass="nav-link font-size-12 line-height-2"
          :multiLine="true"
          :vertical="true"
          :navList="navList[12]"
        />
      </div>
    </div>
    <hr />
    <div class="footer-2 clear">
      <div class="float-left font-size-12 copyright-left text-muted">
        <span class="p-sm">©美团网团购 meituan.com</span>
        <a class="p-sm" href="#sdkfj">京ICP证070791号</a>
        <a class="p-sm" href="#sdkfj">京ICP备10211739号</a>
        <a class="p-sm" href="#sdkfj">广播电视节目制作经营许可证（京）字第03889号</a>
        <a class="p-sm" href="#sdkfj">食品经营许可证互联网药品信息服务资格证</a>
        <a class="p-sm" href="#sdkfj">医疗器械网络交易服务第三方平台备案：（京）</a>
        <a class="p-sm" href="#sdkfj">网械平台备字[2018]第00004号</a>
      </div>
      <div class="float-right">
        <p class="text-right line-height-2"><a class="font-size-12 line-height-2" href="#akfj">京公网安备11010502025545号</a></p>
        <div class="footer-copyright font-size-0">
          <div class="copyright-1"></div>
          <a class="font-size-12" href="#sdkfj">北京三块科技有限公司</a>
          <div class="copyright-2"></div>
          <div class="copyright-3"></div>
          <div class="copyright-4"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from "./Navigation.vue";
import navList from "../assets/footer-nav-list.js";
export default {
  data() {
    return {
      navList
    };
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 5px 100px;
  background-color: rgba(245, 245, 245, 0.575);
}
.footer-1 {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.footer-1 > div {
  margin: 0 20px;
  width: 200px;
}
.footer2 {
  padding: 10px;
}
.footer-2, .footer-copyright{
  & > * {
    display: inline-block;
    vertical-align: middle;
  }
}
.copyright-left {
  width: 40%;
}
.copyright-left > * {
  display: inline-block;
  white-space: nowrap;
}
.copyright-1, .copyright-2, .copyright-3, .copyright-4 {
  width: 110px;
  height: 38px;
  background-repeat: no-reapt;
  background-size: 100%;
  background-image: url('https://s0.meituan.net/bs/fe-web-meituan/8a39c6b/img/sprites/footer.png');
}
.copyright-1 {
  width: 38px;
  background-image: url('https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e');
}
.copyright-2 {
  background-position: 0 -147px;
}
.copyright-3 {
  background-position: 0 -33px;
}
.copyright-4 {
  background-position: 0 -112px;
}
/deep/ {
  .foot-title .nav-link{
    margin-left: -5px;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>