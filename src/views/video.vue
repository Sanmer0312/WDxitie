<template>
  <div class="xitie-video">
    <ul>
      <li v-for="value in videoList">
        <div class="icon">
          <router-link :to="value.path">
            <img :src="value.imgSrc" alt="图片加载失败" />
          </router-link>
        </div>
        <router-link :to="value.path">{{ value.content }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.xitie-video {
  padding: 3.75em 0;
}
.xitie-video ul {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}
.xitie-video ul li {
  width: 33%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 3.2em;
}
.xitie-video ul li .icon {
  padding: 0 1em;
  transition: all 0.3s;
}
.xitie-video ul li:hover .icon {
  transform: translateY(-1em);
}
.xitie-video ul li .icon a {
  display: inline-block;
  width: 100%;
  padding: 0.625em;
  padding-bottom: 0;
  border: 2px solid #eee;
  margin-bottom: 1.9em;
  box-sizing: border-box;
}
.xitie-video ul li .icon a img {
  width: 100%;
  transform: translateY(5px);
}
.xitie-video ul li > a {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.xitie-video ul li > a:hover {
  text-decoration: underline;
  color: #f1678d;
}
@media (max-width: 1200px) {
  .xitie-video ul {
    width: 940px;
  }
}
@media (max-width: 992px) {
  .xitie-video ul {
    width: 750px;
  }
  .xitie-video ul li {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .xitie-video ul {
    width: 100%;
  }
}
@media (max-width: 592px) {
  .xitie-video ul li {
    width: 100%;
  }
}
</style>

<script>
import img01 from "../images/thumb1.png";
import img02 from "../images/thumb2.png";
import img03 from "../images/thumb3.png";
import img04 from "../images/thumb4.png";
export default {
  name: "xitie-video",
  data() {
    return {
      videoList: [
        {
          content: "如何制作商务邀请函之视频教程",
          imgSrc: img01,
          path: "",
        },
        {
          content: "视频：如何使用维斗喜帖制作微应用",
          imgSrc: img02,
          path: "",
        },
        {
          content: "视频：如何在手机上使用维斗喜帖",
          imgSrc: img03,
          path: "",
        },
        {
          content: "微喜帖制作过程视频教程",
          imgSrc: img04,
          path: "",
        },
      ],
    };
  },
};
</script>