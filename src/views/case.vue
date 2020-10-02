<template>
  <div class="case">
    <a href="javascript:;" class="case-header">网友们的最新作品</a>
    <div class="boxsbox">
      <a v-for="value in caseList" :href="value.path" class="case-img-box">
        <img :src="value.imgSrc" alt="图片加载失败" />
      </a>
    </div>
  </div>
</template>

<script>
import caseListImg0 from "../images/case1.jpg";
import caseListImg1 from "../images/case2.jpg";
import caseListImg2 from "../images/case3.jpg";
import caseListImg3 from "../images/case4.jpg";
import caseListImg4 from "../images/case5.jpg";
import caseListImg5 from "../images/case6.jpg";
import caseListImg6 from "../images/case7.jpg";
import caseListImg7 from "../images/case8.jpg";
import caseListImg8 from "../images/case9.jpg";
export default {
  name: "case",
  data() {
    return {
      caseList: [
        {
          imgSrc: caseListImg0,
          path: "#/404",
        },
        {
          imgSrc: caseListImg1,
          path: "#/404",
        },
        {
          imgSrc: caseListImg2,
          path: "#/404",
        },
        {
          imgSrc: caseListImg3,
          path: "#/404",
        },

        {
          imgSrc: caseListImg4,
          path: "#/404",
        },
        {
          imgSrc: caseListImg5,
          path: "#/404",
        },
        {
          imgSrc: caseListImg6,
          path: "#/404",
        },
        {
          imgSrc: caseListImg7,
          path: "#/404",
        },
        {
          imgSrc: caseListImg8,
          path: "#/404",
        },
        {
          imgSrc: caseListImg0,
          path: "#/404",
        },
        {
          imgSrc: caseListImg1,
          path: "#/404",
        },
        {
          imgSrc: caseListImg2,
          path: "#/404",
        },
        {
          imgSrc: caseListImg3,
          path: "#/404",
        },

        {
          imgSrc: caseListImg4,
          path: "#/404",
        },
        {
          imgSrc: caseListImg5,
          path: "#/404",
        },
        {
          imgSrc: caseListImg6,
          path: "#/404",
        },
        {
          imgSrc: caseListImg7,
          path: "#/404",
        },
        {
          imgSrc: caseListImg8,
          path: "#/404",
        },
        {
          imgSrc: caseListImg0,
          path: "#/404",
        },
        {
          imgSrc: caseListImg1,
          path: "#/404",
        },
        {
          imgSrc: caseListImg2,
          path: "#/404",
        },
        {
          imgSrc: caseListImg3,
          path: "#/404",
        },

        {
          imgSrc: caseListImg4,
          path: "#/404",
        },
        {
          imgSrc: caseListImg5,
          path: "#/404",
        },
        {
          imgSrc: caseListImg6,
          path: "#/404",
        },
        {
          imgSrc: caseListImg7,
          path: "#/404",
        },
        {
          imgSrc: caseListImg8,
          path: "#/404",
        },
      ],
    };
  },
};
</script>

<style>
.case {
  margin: 60px auto;
  width: 1170px;
}
.case .case-header {
  display: block;
  background: #f1678d;
  color: #fff;
  font-size: 2.3em;
  line-height: 2em;
  font-weight: 400;
  text-align: center;
}
.case .boxsbox {
  display: flex;
  flex-wrap: wrap;
  width: 1180px;
}
.case .case-img-box {
  display: inline-block;
  width: 16.31%;
  height: 200px;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 3px;
  margin-bottom: 3px;
  transition: all 0.3s;
}
.case .case-img-box:hover {
  transform: scale(1.2);
}
.case .case-img-box:hover img {
  width: 95%;
}
.case .case-img-box img {
  width: 100%;
  transition: all 0.3s;
}
@media (max-width: 1200px) {
  .case {
    width: 940px;
  }
  .case .boxsbox {
    width: 950px;
  }
}
@media (max-width: 992px) {
  .case {
    width: 750px;
  }
  .case .boxsbox {
    width: 760px;
  }
  .case .case-img-box {
    width: 32.65%;
  }
}
@media (max-width: 768px) {
  .case {
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
  .case .boxsbox {
    width: 103%;
    padding: 0 1em;
    box-sizing: border-box;
  }
  .case .case-img-box {
    width: 47%;
    margin-top: 2%;
    margin-right: 3%;
  }
}
</style>