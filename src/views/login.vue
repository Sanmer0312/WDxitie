<template>
  <div class="login">
    <div class="login-left">
      <div class="login-left-top">
        <p class="title">会员登录</p>
        <div class="login-left-top-left">
          <a v-for="value in loginAList" :href="value.path">
            <img :src="value.imgSrc" alt="图片加载失败" />
          </a>
        </div>
        <div class="login-left-top-right">
          <form action>
            <label for="user-email">电子邮件</label>
            <br />
            <input type="email" id="user-email" />
            <br />
            <label for="user-password">密码</label>
            <br />
            <input type="password" id="user-password" />
            <br />
            <button type="submit">
              <i></i>登录
            </button>
          </form>
        </div>
      </div>
      <div class="login-left-bottom">
        <p class="title">
          手机号登录
          <small>(免注册)</small>
        </p>
        <div class="login-left-bottom-form-box">
          <form action>
            <input type="tel" id="user-tel" placeholder="请输入你的手机号" />
            <button type="submit">登 录</button>
          </form>
          <ul class="tips-list">
            <li v-for="value in tipsList">{{value}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="login-right">
      <p class="title">需要帮助</p>
      <div class="login-right-enrolment">
        <a href="#/enrolment" class="button">新用户注册</a>
        <br />
        <p v-for="value in enrolmentAList" class="link">
          <a :href="value.path">{{value.value}}</a>
        </p>
        <p>联系客服:</p>
        <a v-for="src in kfList" href="javascript:;">
          <img :src="src" alt="图片加载失败" />
        </a>
        <div class="wechat-active">
          <span>扫一扫加微信</span>
          <div class="qrCode">假装这里是二维码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weiboLogin from "../images/login_with_weibo-f30449569347a3755c7164b4032fcb0ddbc679264717403c96e3fcab0cb593f6.png";
import qqLogin from "../images/login_with_tqq-8ad2fab2e09afa1dd67a11ba67a7c28b82ac7f65645a2738656a0b22ede38106.png";
import qqBoy from "../images/icon-qq-boy.png";
import qqGirl from "../images/icon-qq-girl.png";
import Wechat from "../images/icon-weixin.png";
export default {
  name: "model",
  data() {
    return {
      loginAList: [
        {
          imgSrc: weiboLogin,
          path: "#weiboLogin",
        },
        {
          imgSrc: qqLogin,
          path: "#qqLogin",
        },
      ],
      tipsList: [
        "* 请输入你首次创建应用时候的手机号.",
        "* 请确保你输入的手机号能接收验证码.",
        "* 首次使用手机登录网站不需要验证码.",
      ],
      enrolmentAList: [
        { value: "忘记密码?", path: "#/forget" },
        { value: "查看帮助说明", path: "#/help" },
        { value: "价格说明", path: "#/price" },
        { value: "VIP定制说明", path: "#/vip" },
      ],
      kfList: [qqBoy, qqGirl, Wechat],
    };
  },
  methods: {},
};
</script>


<style>
.login {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 3.75em 0;
  overflow: hidden;
  box-sizing: border-box;
}
.login .title {
  color: #f1678d;
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 1em;
  border-bottom: 0.2em solid #f1678d;
  padding-bottom: 0.75em;
}
.login .login-left {
  width: 65%;
  box-sizing: border-box;
  padding-right: 1em;
}
.login .login-right {
  width: 35%;
  box-sizing: border-box;
  padding-left: 1em;
  border-left: 1px solid #ccc;
}
.login .login-left .login-left-top {
  overflow: hidden;
}
.login .login-left .login-left-top-left,
.login .login-left .login-left-top-right {
  width: 50%;
  height: 270px;
  padding: 1em 0;
}
.login .login-left .login-left-top-left {
  box-sizing: border-box;
  float: left;
}
.login .login-left .login-left-top-left a {
  display: block;
  line-height: 2.3em;
}
.login .login-left .login-left-top-right {
  float: right;
  padding-left: 2em;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
}
.login .login-left .login-left-top-right form label {
  font-weight: 800;
}
.login input {
  width: 70%;
  padding: 0.4em 0.6em;
  font-size: 1em;
  line-height: 1em;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
}
.login input:focus {
  outline: none;
  box-shadow: 0 0px 6px 2px rgba(112, 208, 253, 0.5);
}
.login .login-left .login-left-top-right form label,
.login .login-left .login-left-top-right form input {
  display: inline-block;
  margin-bottom: 0.4em;
}
.login .login-left .login-left-top-right form button {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 0.625em 1.875em;
  border-radius: 3.25em;
  font-size: 1.1em;
  background: #f485a4;
  transition: all 0.3s;
  cursor: pointer;
  margin-top: 1em;
}
.login .login-left .login-left-top-right form button i {
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.5em;
  background: url("../images/bec88887bf6cabf7aeffa039aa0017d8.png") no-repeat;
  background-size: contain;
}
.login .login-left .login-left-top-right form button:hover {
  background: #f1678d;
}
.login .login-left .login-left-bottom .title small {
  color: #333;
  font-weight: 300;
  font-size: 16px;
}
.login .login-left .login-left-bottom form {
  height: 34px;
  display: flex;
  margin-bottom: 1.5em;
}
.login .login-left .login-left-bottom input {
  width: 30%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 100%;
}
.login .login-left .login-left-bottom button {
  display: inline-block;
  background: #d9534f;
  border-radius: 3px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: none;
  margin-left: -3px;
  padding: 0.65em 1em;
  height: 100%;
  color: #fff;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1em;
  cursor: pointer;
}
.login .login-right a.button,
.login .login-left .login-left-bottom .tips-list li,
.login .login-right .link,
.login .login-right .login-right-enrolment > p {
  margin-bottom: 1em;
}
.login .login-right .login-right-enrolment {
  position: relative;
}
.login .login-right .link a {
  color: #f1678d;
}
.login .login-right .link a:hover {
  text-decoration: underline;
}
.login .login-right a img {
  width: 2.9em;
  margin-right: 1em;
}
.login-right-enrolment a:nth-last-child(2):hover + .wechat-active {
  opacity: 1;
}
.login .login-right .wechat-active {
  opacity: 0;
  position: absolute;
  top: 11.1em;
  left: 11.6em;
  width: 9.5em;
  box-sizing: border-box;
  border: 1px solid #ccc;
  box-shadow: 0 0px 6px 2px rgba(0, 0, 0, 0.075);
  border-radius: 3px;
  transition: all 0.3s;
}
.login .login-right .wechat-active::before {
  content: "";
  position: absolute;
  top: 5em;
  left: -0.65em;
  width: 1em;
  height: 1em;
  border: 1px solid #ccc;
  border-right: none;
  border-top: none;
  background: #fff;
  transform: rotate(45deg);
}
.login .login-right .wechat-active span {
  display: block;
  padding: 0.75em;
  background: #f7f7f7;
  border-bottom: 1px solid #ccc;
}
.login .login-right .wechat-active .qrCode {
  padding: 0.75em;
  height: 120px;
  background: #fff;
}
@media (max-width: 1200px) {
  .login {
    width: 970px;
  }
  .login .login-right .wechat-active {
    top: 19.8em;
    left: 1.6em;
  }
  .login .login-right .wechat-active::before {
    top: -0.6em;
    left: 7.35em;
    transform: rotate(135deg);
    background: #f7f7f7;
  }
}
@media (max-width: 992px) {
  .login {
    width: 750px;
  }
}
@media (max-width: 768px) {
  .login {
    width: 100%;
    padding: 3.75em 0.7em;
    flex-direction: column;
  }
  .login .login-left,
  .login .login-right {
    width: 100%;
    padding: 0;
  }
  .login .login-right {
    border: none;
    padding-bottom: 1em;
  }
  .login .login-right .wechat-active {
    top: 11.1em;
    left: 11.6em;
  }
  .login .login-right .wechat-active::before {
    top: 5em;
    left: -0.65em;
    transform: rotate(45deg);
    background: #f7f7f7;
  }
}
@media (max-width: 710px) {
  .login .login-left .login-left-top-left,
  .login .login-left .login-left-top-right {
    float: none;
    border: none;
    height: auto;
    width: 100%;
    padding: 0 2em;
    font-size: 2em;
  }
  .login .login-left .login-left-top-left {
    text-align: center;
    padding-bottom: 0;
  }
  .login .login-left .login-left-top-left a {
    display: inline-block;
  }
  .login .login-left .login-left-top-left a:nth-child(1) {
    margin-right: 1em;
  }
  .login input {
    width: 100%;
  }
  .login .login-left .login-left-top-right form button {
    display: block;
    margin: 1em auto 0;
  }
}
@media (max-width: 454px) {
  .login .login-left .login-left-top-left,
  .login .login-left .login-left-top-right {
    font-size: 1em;
  }
  .login .login-left .login-left-top-left {
    width: 90%;
  }
  .login .login-left .login-left-top-left a:nth-child(1) {
    margin-right: 0;
  }
}
</style>
