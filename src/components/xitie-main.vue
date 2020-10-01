<template>
  <main>
    <ul class="make-list">
      <li v-for="value in makeList" :style="value.time" :class="{active:value.active}">
        <img :src="value.imgSrc" alt="图片加载失败" />
        <span>{{value.tip}}</span>
        <a href="javascript:;" class="button">{{value.action}}</a>
      </li>
    </ul>
    <img :src="logoImg" :class="{logoActive:logoActive}" alt="图片加载失败" id="logo" />
    <p>维斗喜帖网是一个微场景应用开发平台，我们通过简单直观的操作步骤，丰富多样的模版，为广大客户提供各方面的微应用，包括电子喜帖，微邀请，微相册，微杂志，微网站，企业微场景等。</p>
    <span>
      <strong>制作个人应用：</strong>结婚、生日宴、活动Party、个人相册。
    </span>
    <span>
      <strong>制作商务英语：</strong>产品宣传、店庆、品牌/形象展示、活动邀请、合作代理、公共号接通微场景。
    </span>
    <ul class="feature-list">
      <li v-for="value in featureList" :style="value.time" :class="{active:value.active}">
        <img :src="value.imgSrc" alt="图片加载失败" />
        <strong>{{value.title}}</strong>
        <p>{{value.tip}}</p>
      </li>
    </ul>
    <div class="How-to-make-box">
      <strong :class="{strongActive:strongActive}">如何制作</strong>
      <p>你只需要准备相关的素材（文章／图片／设计），选择合适的背景音乐；</p>
      <p>在模板中挑选一个中意的喜帖模板，免注册，三步完成制作，过程不到5分钟。</p>
      <a href="javascript:;" class="button">查看教程</a>
      <div class="bottom" :class="{active:bottomActive}">
        <img
          src="../images/chrome-top-5dcc44820f09d67d48fb0e8b1aa290bc7cfbbcc32ff97b7881966ba5dccb1d1b.png"
          alt="图片加载失败"
        />
        <div class="box">
          <img
            src="../images/wedxt800x500-ddc4a03dc3bcb4dd173853200b2b2955d6c73e9fd11b48242c1479bd94d3bbf4.png"
            alt="图片加载失败"
          />
          <a href="javascript:;" class="button">
            制作教程
            <i></i>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import makeListImg0 from "../images/service1-75e52feda87b0f6102c1954d20037cc20ae264d8f2e17d0d64bc6826a614ca2a.png";
import makeListImg1 from "../images/service2-ee474c3ff8cca1126f03d64c4cc51e141e3edbcbc6a8dcd252d6ab131a36f50b.png";
import makeListImg2 from "../images/service3-4beaf5fcd5d4e22df277e7ac9918c4c457e9ca4ef7a9ccda7ca3179cc887cd73.png";
import makeListImg3 from "../images/service4-1766a620e51a4a3b0a2594db3d072afc80fe81e7ba0682c1f59fadcb2cbff367.png";
import logoImg from "../images/logo-801c4c920fd56386e8993df70d861ad3e9ed900d0f5eaa348e1f223c79e8c9ed.png";
import featureListImg0 from "../images/feature1-cafbd087fcc5e67807155bdf716aab5ac03560ce4d13601a284fcd33ae843e4b.png";
import featureListImg1 from "../images/feature2-02f9a8edb4917cc7fbf9575e9bf9a1095813159908b9f19dd89c256fd491f2ea.png";
import featureListImg2 from "../images/feature3-b7a641d1b49677f3eccf63b5bc99427652aef651f7d8160e137b609131e16b3c.png";
import featureListImg3 from "../images/feature4-dc65308dcb3cf03f2fba0f2d9cf153ea16cc137ac98d76fd71271e1fb756162a.png";
export default {
  name: "xitie-main",
  data() {
    return {
      makeList: [
        {
          imgSrc: makeListImg0,
          tip: "漂亮的微信请柬，同样适用于百日宴请帖、生日请帖、微企邀请函。",
          action: "我要制作",
          time: "transition: all 1s;",
          active: false,
        },
        {
          imgSrc: makeListImg1,
          tip:
            "创建时尚的微相册，婚纱微相册、宝宝微相册、活动相册、旅游微相册。",
          action: "我要制作",
          time: "transition: all 1.4s;",
          active: false,
        },
        {
          imgSrc: makeListImg2,
          tip: "个性化微杂志，可分享到微信/QQ/微博等，借助于社会化媒体传播。",
          action: "我要制作",
          time: "transition: all 1.8s;",
          active: false,
        },
        {
          imgSrc: makeListImg3,
          tip:
            "引爆朋友圈的利器，企业商户微宣传的高效自传播渠道，移动你的生意。",
          action: "发布到公众号",
          time: "transition: all 2.2s;",
          active: false,
        },
      ],
      logoImg,
      logoActive: false,
      featureList: [
        {
          imgSrc: featureListImg0,
          title: "操作简单方便",
          tip:
            "轻，用最直接的方式呈现最震撼的内容；让请帖在最需要的那一刻美丽绽放.",
          time: "transition: all 1s;",
          active: false,
        },
        {
          imgSrc: featureListImg1,
          title: "基于云计算架构",
          tip:
            "维斗喜帖采用云计算+云存储服务，即安全，又能保障应用快速传递和高负载访问.",
          time: "transition: all 1.4s;",
          active: false,
        },
        {
          imgSrc: featureListImg2,
          title: "传递喜庆和祝福",
          tip:
            "为客户制造几分钟喜悦的场景，通过微信请帖、QQ请帖、手机请帖，将你的喜悦传递.",
          time: "transition: all 1.8s;",
          active: false,
        },
        {
          imgSrc: featureListImg3,
          title: "针对高端用户",
          tip:
            "产品是核心，服务是关键。微营销的实质，就是在这短短几分钟时间内牢牢抓住用户.",
          time: "transition: all 2.2s;",
          active: false,
        },
      ],
      strongActive: false,
      bottomActive: false,
      screenWidth: document.body.clientWidth,
      socrlltop:
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.appScroll);
  },
  methods: {
    appScroll() {
      this.socrlltop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    },
  },
  watch: {
    socrlltop: function () {
      if (this.screenWidth > 992) {
        this.socrlltop < 300 ||
          this.makeList.forEach((element) => {
            element.active = true;
          });
        this.socrlltop < 500 || (this.logoActive = true);
        this.socrlltop < 936 ||
          this.featureList.forEach((element) => {
            element.active = true;
          });
        this.socrlltop < 1130 || (this.strongActive = true);
        this.socrlltop < 1680 || (this.bottomActive = true);
      } else if (this.screenWidth <= 992 && this.screenWidth > 768) {
        this.socrlltop < 300 ||
          this.makeList.forEach((element, index) => {
            index <= 1 && (element.active = true);
          });
        this.socrlltop < 560 ||
          this.makeList.forEach((element, index) => {
            index > 1 && (element.active = true);
          });
        this.socrlltop < 760 || (this.logoActive = true);
        this.socrlltop < 1200 ||
          this.featureList.forEach((element, index) => {
            index <= 1 && (element.active = true);
          });
        this.socrlltop < 1444 ||
          this.featureList.forEach((element, index) => {
            index > 1 && (element.active = true);
          });
        this.socrlltop < 1620 || (this.strongActive = true);
        this.socrlltop < 2300 || (this.bottomActive = true);
      } else {
        this.socrlltop < 268 || (this.makeList[0].active = true);
        this.socrlltop < 560 || (this.makeList[1].active = true);
        this.socrlltop < 800 || (this.makeList[2].active = true);
        this.socrlltop < 1060 || (this.makeList[3].active = true);
        this.socrlltop < 1200 || (this.logoActive = true);
        this.socrlltop < 1660 || (this.featureList[0].active = true);
        this.socrlltop < 1940 || (this.featureList[1].active = true);
        this.socrlltop < 2180 || (this.featureList[2].active = true);
        this.socrlltop < 2300 || (this.featureList[3].active = true);
      }
    },
  },
};
</script>

<style>
main {
  width: 100%;
  text-align: center;
  overflow: hidden;
}
main {
  padding-top: 3.75em;
}
main .make-list,
main .feature-list {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.875em;
}
main .feature-list {
  margin-top: 5em;
}
main .make-list li,
main .feature-list li {
  width: 25%;
  padding: 0.9em;
  box-sizing: border-box;
  position: relative;
  top: 4em;
  opacity: 0;
}
main .make-list li img,
main .feature-list li img {
  width: 7.5em;
  margin-bottom: 1.3em;
  position: relative;
  top: 0;
  transition: all 0.3s;
}
main .make-list li:hover img,
main .feature-list li:hover img {
  top: -0.7em;
}
main .make-list li span,
main .feature-list li strong {
  display: block;
  margin-bottom: 1.25em;
}
main #logo {
  display: block;
  margin: 0 auto;
  margin-top: 3.75em;
  margin-bottom: 1.25em;
}
.logoActive {
  animation: logoActive 1s;
}
@keyframes logoActive {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
main > p {
  max-width: 1172px;
  margin: 0 auto;
}
main > span {
  display: block;
  margin: 0.5em 0;
}
main .How-to-make-box {
  background: #f2f2f2;
  padding-top: 3.75em;
}
main .How-to-make-box strong {
  display: inline-block;
  font-size: 3em;
  font-weight: 400;
  line-height: 1em;
}
.strongActive {
  animation: strongActive 1s;
}
@keyframes strongActive {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
main .How-to-make-box p {
  line-height: 1.75em;
}
main .How-to-make-box .button {
  margin-top: 2.5em;
  margin-bottom: 5em;
}
main .How-to-make-box .bottom.active {
  top: 0.25em !important;
}
main .How-to-make-box .bottom {
  position: relative;
  top: 6em;
  opacity: 0;
  transition: all 1s;
}
main .How-to-make-box .bottom .box {
  display: inline-block;
  margin-top: -0.25em;
}
main .How-to-make-box .bottom img:nth-child(2) {
  transition: all 0.3s;
}
main .How-to-make-box .bottom .box:hover img:nth-child(1) {
  opacity: 0.6;
}
main .How-to-make-box .bottom .button {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 35%;
  display: inline-flex;
  align-items: center;
  margin: 0;
}
main .How-to-make-box .bottom .box:hover .button {
  opacity: 1;
  left: 45%;
}
main .How-to-make-box .bottom .button i {
  display: inline-block;
  width: 1.2em;
  height: 1em;
  line-height: 1em;
  background: url("../images/c8491e5b55f98747bd19e2a29515c52c.png") no-repeat;
  background-size: 1em;
  background-position: 0.25em 0.125em;
}
@media (max-width: 1200px) {
  main .make-list,
  main .feature-list {
    width: 970px;
  }
  main > p {
    max-width: 970px;
  }
}
@media (max-width: 992px) {
  main .make-list,
  main .feature-list {
    width: 750px;
  }
  main .make-list li,
  main .feature-list li {
    width: 50%;
  }
  main > p {
    max-width: 750px;
  }
  main .How-to-make-box .bottom img {
    width: 750px;
  }
}
@media (max-width: 768px) {
  main {
    width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
  }
  main .make-list,
  main .feature-list {
    width: 100%;
  }
  main .make-list li,
  main .feature-list li {
    width: 100%;
  }
  main .feature-list li strong {
    font-size: 22px;
  }
  main .How-to-make-box {
    display: none;
  }
}
</style>
