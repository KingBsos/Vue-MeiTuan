<template>
  <div>
    <div class="container text-muted font-size-12">
      <div class="w-50 page-left">
        <a href="//index">
          <img
            class="logo"
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png"
          />
        </a>
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" />
        <div class="my-2em">
          <a class="d-ib p-sm" href="#aksdfj">关于美团</a> | 
          <a class="p-sm d-ib" href="#aksdfj">加入我们</a> | 
          <a class="p-sm d-ib" href="#aksdfj">商家入驻</a> | 
          <a class="p-sm d-ib" href="#aksdfj">帮助中心</a> | 
          <a class="p-sm d-ib" href="#aksdfj">美团手机版</a>
        </div>
        <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </div>
      <div class="w-50 page-right">
        <div class="input-container">
          <span class="line-height-2">账号登录</span>
          <a class="float-right line-height-2">手机动态码登陆</a>
          <input class="input" type="text" placeholder="手机号" v-model="accountNum" />
          <input class="input" type="password" placeholder="密码" v-model="password" />
          <p class="text-align-right text-danger line-height-2">忘记密码?</p>
          <router-link class="d-ib login-button font-bold" href="#">登陆</router-link>
          <p class="line-height-2">还没有账号?<a class="text-danger" href="#ksdf">免费注册</a></p>
          <div class="footer">
            <p>用合作网站账号登录</p>
            <img>
            <img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountNum: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  max-width: 1200px;
  padding: 20px;
}
.logo {
  margin: 30px 10px;
  height: 50px;
}
.page-left {
    float: left;
}
.page-right {
  padding-top: 150px;
  float: right;
}
.input-container {
  position: relative;
  width: 250px;
  margin: auto;
  padding: 0 0 10px;
  border-bottom: 2px solid #ddd;
}
.input {
  width: 100%;
  margin: 10px 0px;
  padding: 10px 30px;
  border: 1px solid #ddd;
}
.login-button {
  width: 100%;
  padding: 10px;
  color: #000;
  text-align: center;
  background-color: rgb(255, 187, 0);
}
.login-button {
  color: #000;
}
.footer {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -25%);
  background-color: #fff;
  white-space: nowrap;
  padding: 0 10px;
}
</style>