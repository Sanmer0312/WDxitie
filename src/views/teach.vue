<template>
  <div class="teach">
    <div class="video-teach">
      <router-link to="/video"><i></i> 点击这里观看视频教程</router-link>
      <a href="javascript:;" id="close">x</a>
    </div>
    <transition-group name="teach-list" tag="ul" class="teach-list">
      <li v-for="(value, index) in pagesList[pagesNum].arr" :key="index">
        <a :href="value.path">{{ value.value }}</a>
      </li>
    </transition-group>
    <span class="pagination">
      <a href="#" @click="PreviousPage" :class="{ isNot: changePages[0] }"
        >←上一页</a
      >
      <a
        v-for="value in pagesList"
        @click="pagesClick(value.id)"
        href="#"
        class="pagination-num"
        :class="{ active: value.isMe }"
      >
        {{ value.id + 1 }}
      </a>
      <a href="#" @click="nextPage" :class="{ isNot: changePages[1] }"
        >下一页→</a
      >
    </span>
  </div>
</template>

<style>
.teach {
  width: 1170px;
  margin: 60px auto;
  text-align: center;
  font-weight: 400;
  overflow: hidden;
}
.teach .video-teach {
  width: 945px;
  padding: 1.25em 0;
  background: #d9edf7;
  margin: 0 auto;
}
.teach .video-teach i {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("../images/4e943fe64f11c124546861791ee7513d.png") no-repeat;
  background-size: cover;
  transform: translateY(2px);
}
.teach .video-teach a {
  position: relative;
  color: #f1678d;
  line-height: 1em;
}
.teach .video-teach a:nth-child(1):hover {
  text-decoration: underline;
}
.teach .video-teach #close {
  float: right;
  margin-right: 1em;
  color: #ccc;
  font-weight: 800;
  transition: all 0.3s;
}
.teach .video-teach #close:hover {
  color: #777;
}
.teach .teach-list {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding-top: 60px;
}
.teach-list-enter,
.teach-list-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.teach-list-enter-to,
.teach-list-leave {
  transform: translateY(30px);
  opacity: 0;
}
.teach .teach-list li {
  width: 33%;
  padding: 0 1em;
  margin-bottom: 3.1em;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.3s;
}
.teach .teach-list li a {
  font-size: 1.125em;
  color: #333;
  transition: all 0.3s;
}
.teach .teach-list li a:hover {
  color: #f1678d;
  text-decoration: underline;
}
.teach .pagination a.isNot {
  background: #ffffff;
  color: #999;
  cursor: not-allowed;
}
.teach .pagination a.isNot:hover {
  background: #ffffff;
  color: #999;
}
.teach .pagination {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 3px;
  height: 1.9em;
}
.teach .pagination a {
  display: inline-block;
  padding: 6px 12px;
  line-height: 1em;
  height: 100%;
  color: #f1678d;
  transition: background-color 0.3s;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-left: -1px;
}
.teach .pagination a:hover {
  background: #eeeeee;
  color: #777;
}
.teach .pagination a.active {
  background: #f1678d;
  color: #fff;
  border: none;
  transform: translateY(-1px);
  z-index: 10;
}
.teach .pagination .pagination-num:nth-child(2) {
  border-right: none;
}
.teach .pagination .pagination-num:nth-last-child(2) {
  border-left: none;
}
.teach .pagination a:nth-child(1) {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.teach .pagination a:nth-last-child(1) {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

@media (max-width: 1200px) {
  .teach {
    width: 940px;
  }
  .teach .video-teach {
    width: 740px;
  }
}
@media (max-width: 992px) {
  .teach {
    width: 750px;
  }
  .teach .video-teach {
    width: 720px;
  }
  .teach .teach-list li {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .teach {
    width: 100%;
  }
  .teach .video-teach {
    width: 90%;
  }
  .teach .teach-list li {
    width: 50%;
  }
}
@media (max-width: 710px) {
  .teach .pagination a {
    line-height: 10px;
  }
}
</style>

<script>
export default {
  name: "teach",
  data() {
    return {
      teachList: [
        {
          value: "介绍一下在维斗喜帖做结婚请柬电子版的制作步骤",
          path: "#/404",
        },
        { value: "最新15种结婚电子喜帖的种类和用法", path: "#/404" },
        { value: "2017.2.17关于维斗喜帖微信无法访问的公告", path: "#/404" },
        { value: "维斗喜帖微信公众号正式上线", path: "#/404" },
        { value: "如何制作免费微信卡片(微卡制作）", path: "#/404" },
        { value: "如何在手机上制作漂亮的电子喜帖", path: "#/404" },
        { value: "如何通过支付宝支付维斗喜帖应用", path: "#/404" },
        { value: "从软件开发讲到微信喜帖", path: "#/404" },
        { value: "维斗喜帖登录和管理应用使用说明", path: "#/404" },
        { value: "图片的处理很重要，简直是太重要了!", path: "#/404" },
        { value: "我创建的应用为什么会在案例中显示？", path: "#/404" },
        { value: "维斗喜帖使用帮助说明", path: "#/404" },
        { value: "如何制作漂亮的宝宝生日宴请柬/百日宴请柬", path: "#/404" },
        { value: "维斗喜帖案例精选", path: "#/404" },
        { value: "制作漂亮电子请柬的三种方法", path: "#/404" },
        { value: "微转盘互动游戏制作教程", path: "#/404" },
        { value: "维斗喜帖的设计美学", path: "#/404" },
        { value: "教你制作漂亮的微信相册（微相册）和婚礼相册", path: "#/404" },
        { value: "最全婚礼筹备流程表---怎样使用婚礼流程表", path: "#/404" },
        { value: "体验维斗喜帖的技术开发之响应式设计", path: "#/404" },
        { value: "制作漂亮的手机微信相册、微信音乐相册", path: "#/404" },
        {
          value: "2014年婚庆行业O2O快速盘点，创业和融资持续升温",
          path: "#/404",
        },
        {
          value:
            "精心收集的2015年100条羊年新春祝福、微信贺卡短语大全，收藏了！",
          path: "#/404",
        },
      ],
      pagesList: [],
      pagesNum: 0,
      changePages: [true, false],
    };
  },
  created: function () {
    let i = Math.ceil(this.teachList.length / 9);
    for (let n = 0; n < i; n++) {
      this.pagesList.push({
        id: n,
        arr: this.teachList.slice(9 * n, 9 * (n + 1)),
        isMe: false,
      });
    }
    this.pagesList[0].isMe = true;
  },
  methods: {
    pagesClick(index) {
      this.pagesNum = index;
    },
    PreviousPage() {
      if (this.changePages[0]) {
        return;
      }
      this.pagesNum--;
      this.pagesList.forEach((element) => {
        element.isMe = false;
      });
    },
    nextPage() {
      if (this.changePages[1]) {
        return;
      }
      this.pagesNum++;
      this.pagesList.forEach((element) => {
        element.isMe = false;
      });
    },
  },
  watch: {
    pagesNum: function (value) {
      if (value == 0) {
        this.changePages[0] = true;
        this.changePages[1] = false;
      } else if (value == this.pagesList.length - 1) {
        this.changePages[0] = false;
        this.changePages[1] = true;
      } else {
        this.changePages.forEach((element, index) => {
          this.changePages[index] = false;
        });
      }
      this.pagesList.forEach((element) => {
        element.isMe = false;
      });
      this.pagesList[value].isMe = true;
    },
  },
};
</script>