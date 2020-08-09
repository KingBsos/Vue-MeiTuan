<template>
  <div class="container">
      <div class="left">
        <router-link to="/index">
            <img class="logo" src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png">
        </router-link>
        <img class="logo-pic" src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg">
        <div class="footer-nav">
            <a class="d-ib p-sm" href="#aksdfj">关于美团</a>
            <a class="p-sm d-ib" href="#aksdfj">加入我们</a>
            <a class="p-sm d-ib" href="#aksdfj">商家入驻</a>
            <a class="p-sm d-ib" href="#aksdfj">帮助中心</a>
            <a class="p-sm d-ib" href="#aksdfj">美团手机版</a>
        </div>
        <p class="footer-c p-sm text-muted font-size-12">©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </div>{{
    }}<div class="right">
          <div class="input-container">
                <span>账号登录</span>
                <a href="#" class="font-size-12 text-muted float-right">手机动态码登陆</a>
                <BaseInput class="input1" type="text" placeholder="手机号" v-model="accountNum">
                    <span class="mL-_25R"> +86</span>
                </BaseInput>
                <BaseInput class="input1" type="password" placeholder="密码" v-model="password">
                    <span class="mL-_5R icon">⚛</span>
                </BaseInput>
                <a class="forget" href="#">忘记密码?</a>
                <button class="login-button" @click="loginHandle">登陆</button>
                <p>还没有账号? <a href="#">免费注册</a></p>
                <div class="oauth">
                    <span class="oauth-title">用合作网站账号登录</span>
                    <p class="tA-c">
                        <span class="d-iB pic-1"></span>
                        <span class="d-iB pic-2"></span>
                    </p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import BaseInput from '../base/BaseInput.vue';
import axios from 'axios';

export default {
    data() {
        return {
            accountNum: '',
            password: ''
        }
    },
    components: {
        BaseInput
    },
    methods: {
        loginHandle() {
            let {accountNum, password} = this;
            axios.get(`http://open.duyiedu.com/api/meituan/login?userName=${accountNum}&password=${password}&appkey=KingBsos_1586913878181`).then(({data}) => {
                console.log(data)
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    overflow: hidden;
    padding: 0px 170px;
}
.left, .right {
    display: inline-block;
    padding-top: 50px;
    width: 50%;
    height: 100vh;
    vertical-align: top;
}
.logo {
    max-width: 30%;
}
.logo-pic {
    max-width: 100%;
}
.footer-nav {
    margin-top: 50px;
    font-size: 12px;
}
.footer-c {
    margin-top: 3em;
}
.input-container {
    width: 60%;
    margin: 120px auto;
    font-size: 14px;
}
.forget {
    float: right;
}
.login-button {
    display: inline-block;
    margin: 10px 0px;
    width: 100%;
    padding: 10px;
    border: 0;
    background-color: rgb(255, 217, 0);
    font-weight: bold;
    color: #333;
    cursor: pointer;
}
.login-button:hover {
    background-color: rgb(255, 223, 44);
}
.login-button:active {
    background-color: rgb(223, 189, 0);
}
.oauth {
    position: relative;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
}
.oauth-title {
    position: absolute;
    left: 50%;
    top: 0;
    background-color: #fff;
    padding: 0px 10px;
    transform: translate(-50%, -60%);
    white-space: nowrap;
    color: #777;
}
.pic-1, .pic-2 {
    background-image: url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png');
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    margin: 10px;
}
.pic-1 {
    background-position: -1250px -491px;
}
.pic-2 {
    background-position: -1250px -599px;
}
.pic-1:hover {
    background-position: -1250px -509px;
}
.pic-2:hover {
    background-position: -1250px -545px;
}
.input1 {
    width: 100%;
    padding: 7px 35px;
    margin: 10px 0px;
}
.icon {
    font-size: 16px;
}
</style>