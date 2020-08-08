<template>
  <div>
      <div class="left">
        <a href="//index">
            <img class="logo-pic" src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png">
        </a>
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg">
        <div class="">
            <a class="d-ib p-sm" href="#aksdfj">关于美团</a>
            <a class="p-sm d-ib" href="#aksdfj">加入我们</a>
            <a class="p-sm d-ib" href="#aksdfj">商家入驻</a>
            <a class="p-sm d-ib" href="#aksdfj">帮助中心</a>
            <a class="p-sm d-ib" href="#aksdfj">美团手机版</a>
        </div>
        <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </div><div class="right">
          <div class="input-container">
                <span>账号登录</span>
                <a>手机动态码登陆</a>
                <input class="input" type="text" placeholder="手机号" v-model="accountNum">
                <input class="input" type="password" placeholder="密码" v-model="password">
                <p>忘记密码?</p>
                <a href="#">登陆</a>
                <p>还没有账号?免费注册</p>
                <div></div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            accountNum: '',
            password: ''
        }
    }
}
</script>

<style scoped>
.left, .right {
    display: inline-block;
    width: 50vw;
    height: 100vh;
    padding: 50px;
}
.logo-pic {
    width: 100%;
}
/* .container {
    margin: auto;
    max-width: 1200px;
    padding: 20px;
}
.logo {
    margin-left: 30px;
    height: 50px;
}
.page-right {
    padding-top: 100px;
}
.input-container {
    width: 250px;
}
.input {
    width: 100%;
    padding: 5px 20px;
    border: 1px solid #ddd;
} */
</style>