<template>
  <footer>
    <div class="QRcode-box">
      <img
        src="../images/qrcode-wedxt-72fe105beceb68a96c3c74a201c4957b6a875cddba5a4ae974b95b6e5ee46ca8.jpg"
        alt="图片加载失败"
        :class="{QRcodeActive:QRcodeActive}"
      />
      <br />
      <span :class="{QRcodeActive:QRcodeActive}">
        关注微信公众号：
        <a href="javascript:;">[维斗喜帖]</a>
      </span>
    </div>
    <img
      src="../images/anquan-68dcd539c86c0414734009a0d23be9744467ab3b8f8c026f3ec04c1d82373066.jpg"
      alt="图片加载失败"
      id="anquan"
    />
    <div class="p-box">
      <span>
        <strong>地址：</strong>成都市二环路东二段龙湖三千星座A座2801号&nbsp;
      </span>
      <span>
        <strong>邮编:</strong>610000
      </span>
    </div>
    <div class="p-box">
      <span>©维斗喜帖-版权所有.</span>
      <span>&nbsp;微喜帖/微相册/微杂志/微邀请.&nbsp;</span>
      <a href="javascript:;">探码科技出品.</a>
      <span>备案号：</span>
      <a href="javascript:;">蜀ICP备xxxxxxxx号-x</a>
      <span>版权归</span>
      <a href="javascript:;">探码科技</a>
      <span>所有</span>
    </div>
  </footer>
</template>

<script>
import makeListImg0 from "../images/service1-75e52feda87b0f6102c1954d20037cc20ae264d8f2e17d0d64bc6826a614ca2a.png";
export default {
  name: "xitie-footer",
  data() {
    return {
      QRcodeActive: false,
      screenWidth: document.body.clientWidth,
      scrolltop:
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset,
      socrllheight: Number,
    };
  },
  props: {
    scrollheight: {
      type: Number,
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.appScroll);
  },
  methods: {
    appScroll() {
      this.scrolltop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    },
  },
  watch: {
    scrolltop: function () {
      console.log(this.scrolltop);
      console.log(this.scrollheight);
      if (this.screenWidth > 992) {
        this.scrolltop < 2210 || (this.QRcodeActive = true);
      } else if (this.screenWidth <= 992 && this.screenWidth > 768) {
        this.scrolltop < 2660 || (this.QRcodeActive = true);
      } else {
        this.scrolltop < 2660 || (this.QRcodeActive = true);
      }
      // this.scrolltop < this.scrollheight || (this.QRcodeActive = true);
    },
  },
};
</script>

<style>
footer {
  text-align: center;
}
footer a {
  color: #f1678d;
}
footer a:hover {
  text-decoration: underline;
}
footer .QRcode-box {
  background: #1d2026;
  padding: 1.25em 0;
  font-size: 0.875em;
}
footer .QRcode-box img,
footer .QRcode-box span {
  position: relative;
  top: 0;
  opacity: 1;
  transition: all 1s;
}
.QRcodeActive {
  animation: QRcodeActive 1s;
}
@keyframes QRcodeActive {
  from {
    top: 4em;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
footer .QRcode-box span {
  display: inline-block;
  margin-top: 0.5em;
  color: #fff;
}
footer .p-box {
  margin-bottom: 0.5em;
}
@media (max-width: 992px) {
  #anquan {
    width: 750px;
  }
  footer .p-box span:nth-child(2) {
    display: none;
  }
}
@media (max-width: 768px) {
  #anquan {
    width: 100%;
  }
  footer .p-box a:nth-child(3) {
    display: none;
  }
}
</style>
