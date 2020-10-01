<template>
  <div class="model">
    <div class="model-box">
      <h2>第一步：选择模板</h2>
      <p>所有的请帖都是基于模板生成，在制作之前，首先选择一个中意的模板.</p>
      <ul class="button-list">
        <li v-for="(value, index) in buttonList" :key="index">
          <a
            :href="value.href"
            class="button"
            :class="{ isMe: value.isMe }"
            @click="buttonClick(index)"
            >{{ value.value }}</a
          >
        </li>
      </ul>
      <transition-group name="caseShow" tag="ul" class="case-list">
        <li v-for="(value, index) in caseList" :key="value.id">
          <img :src="value.imgSrc" alt="图片加载失败" />
          <p class="title">{{ value.title }}</p>
          <div class="case-active-box">
            <p class="type">{{ value.type }}</p>
            <p v-if="value.type == '喜帖'">微信邀请函</p>
            <p v-else>微相册展示</p>
            <a href="javascript:;" class="button">详细介绍</a>
            <i></i>
          </div>
        </li>
      </transition-group>
      <p v-show="!caseList.length">暂时还没有~</p>
    </div>
  </div>
</template>

<script>
import caseListImg0 from "../images/model-case1.jpg";
import caseListImg1 from "../images/model-case2.png";
import caseListImg2 from "../images/model-case3.png";
import caseListImg3 from "../images/model-case4.png";
import caseListImg4 from "../images/model-case5.png";
import caseListImg5 from "../images/model-case6.png";
import caseListImg6 from "../images/model-case7.png";
import caseListImg7 from "../images/model-case8.png";
import caseListImg8 from "../images/model-case9.png";
import caseListImg9 from "../images/model-case10.png";
export default {
  name: "model",
  data() {
    return {
      buttonList: [
        {
          value: "全部",
          isMe: true,
          href: "javascript:;",
        },
        {
          value: "喜帖",
          isMe: false,
          href: "javascript:;",
        },
        {
          value: "微相册",
          isMe: false,
          href: "javascript:;",
        },
        {
          value: "游戏",
          isMe: false,
          href: "javascript:;",
        },
        {
          value: "高级定制",
          isMe: false,
          href: "#/vip",
        },
      ],
      caseList: [
        {
          id: 0,
          type: "喜帖",
          imgSrc: caseListImg0,
          title: "诗歌和文章",
        },
        {
          id: 1,
          type: "微相册",
          imgSrc: caseListImg1,
          title: "滚动音效微相册",
        },
        {
          id: 2,
          type: "喜帖",
          imgSrc: caseListImg2,
          title: "我们结婚啦主题请帖",
        },
        {
          id: 3,
          type: "喜帖",
          imgSrc: caseListImg3,
          title: "挚爱一生.微相册",
        },
        {
          id: 4,
          type: "微相册",
          imgSrc: caseListImg4,
          title: "免费微贺卡",
        },
        {
          id: 5,
          type: "微相册",
          imgSrc: caseListImg5,
          title: "循环翻页微杂志",
        },
        {
          id: 6,
          type: "喜帖",
          imgSrc: caseListImg6,
          title: "真挚的邀请主题喜帖",
        },
        {
          id: 7,
          type: "微相册",
          imgSrc: caseListImg7,
          title: "左刷刷微相册",
        },
        {
          id: 8,
          type: "喜帖",
          imgSrc: caseListImg8,
          title: "卡宴微邀请",
        },
        {
          id: 9,
          type: "喜帖",
          imgSrc: caseListImg9,
          title: "时尚微相册+微请柬",
        },
      ],
      caseListClone: [],
    };
  },
  mounted: function () {
    this.caseListClone = this.caseList.slice(0);
    // console.log(this.caseListClone);
  },
  methods: {
    buttonClick(index) {
      this.caseList = [];
      this.buttonList.forEach((element) => {
        element.isMe = false;
      });
      this.buttonList[index].isMe = true;
      if (index == 0) {
        this.caseList = this.caseListClone;
      } else if (index == 1) {
        this.caseListClone.forEach((element) => {
          if (element.type == "喜帖") {
            this.caseList.push(element);
          }
        });
      } else if (index == 2) {
        this.caseListClone.forEach((element) => {
          if (element.type == "微相册") {
            this.caseList.push(element);
          }
        });
      } else if (index == 3) {
        this.caseListClone.forEach((element) => {
          if (element.type == "游戏") {
            this.caseList.push(element);
          }
        });
      } else if (index == 4) {
      }
    },
  },
};
</script>


<style>
.model {
  width: 100%;
  text-align: center;
}
.model .model-box {
  margin: 3.75em auto;
  margin-bottom: 0;
  width: 1140px;
  background: #f4f4f4;
  padding: 3.75em;
  box-sizing: border-box;
}
.model .model-box h2 {
  font-size: 3em;
  font-weight: 400;
  animation: h2Active 1s;
}
@keyframes h2Active {
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
.model .model-box > p {
  margin: 1.25em 0;
}
.model .model-box .button-list {
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  margin-bottom: 2.5em;
}
.model .model-box .button-list li {
  margin-right: 0.5em;
}
.model .model-box .button-list li a {
  background: #fff;
  color: #333;
}
.model .model-box .button-list li:hover a {
  background: #f1678d;
  color: #fff;
}
.model .model-box .button-list li a.isMe {
  background: #f1678d;
  color: #fff;
}
.model .model-box .case-list {
  display: flex;
  flex-wrap: wrap;
}
.caseShow-enter-to,
.caseShow-leave {
  opacity: 1;
  transform: scale(1);
}
.caseShow-enter,
.caseShow-leave-to {
  opacity: 0;
  transform: scale(0);
}
.model .model-box .case-list li {
  width: 33%;
  box-sizing: border-box;
  margin-bottom: 1.6em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}
.model .model-box .case-list li img {
  position: relative;
  transition: all 0.3s;
  left: 0;
  width: 90%;
}
.model .model-box .case-list li:hover img {
  left: 16em;
}
.model .model-box .case-list li .title {
  font-size: 1.875em;
  color: #f1678d;
  font-weight: 400;
}
.model .model-box .case-list li .case-active-box {
  position: absolute;
  top: 0;
  left: -100%;
  width: 90%;
  height: 100%;
  background: #94daf0;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.model .model-box .case-list li:hover .case-active-box {
  left: -1em;
}
.model .model-box .case-list li .case-active-box p {
  font-weight: 600;
}
.model .model-box .case-list li .case-active-box .type {
  color: #fff;
  font-size: 1.3em;
  margin-bottom: 0.3em;
}
.model .model-box .case-list li .case-active-box p:nth-child(2) {
  color: #f1678d;
}
.model .model-box .case-list li .case-active-box a {
  margin-top: 1em;
}
.model .model-box .case-list li .case-active-box i {
  display: block;
  width: 1.6em;
  height: 1.2em;
  background: url("../images/c8491e5b55f98747bd19e2a29515c52c.png") no-repeat;
  background-size: 1.2em;
  background-position: 0.25em 0.125em;
  position: relative;
  bottom: -3em;
}
@media (max-width: 1200px) {
  .model .model-box {
    width: 940px;
  }
  .model .model-box .case-list li {
    width: 50%;
  }
}
@media (max-width: 992px) {
  .model .model-box {
    width: 750px;
    padding-left: 1em;
    padding-right: 1em;
  }
}
@media (max-width: 768px) {
  .model .model-box {
    width: 100%;
    margin-top: 0;
  }
}
@media (max-width: 710px) {
  .model .model-box {
    font-size: 14px;
  }
  .model .model-box .button-list .button {
    white-space: nowrap;
  }
  .model .model-box .case-list {
    flex-direction: column;
  }
  .model .model-box .case-list li {
    width: 70%;
    margin: 0 auto 1.6em;
    box-sizing: content-box;
  }
}
@media (max-width: 446px) {
  .model .model-box {
    font-size: 12px;
  }
  .model .model-box .button-list {
    justify-content: flex-start;
    white-space: nowrap;
    overflow-y: auto;
  }
}
</style>
