<template>
  <div class="nav-box">
    <nav :class="{ scrolltop: socrlltop, autoHeight: navHeight }">
      <a href="javascript:;" @click="changeNav"></a>
      <ul>
        <li v-for="value in nav" @click="liClick">
          <router-link :to="{path:value.path}">{{ value.value }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="nav-clone" v-show="socrlltop"></div>
  </div>
</template>

<script>
export default {
  name: "xitie-nav",
  data() {
    return {
      nav: [
        { value: "登录", path: "/login" },
        { value: "模板", path: "/model" },
        { value: "喜帖", path: "/home" },
        { value: "案例", path: "/case" },
        { value: "教程", path: "/teach" },
      ],
      navHeight: false,
      socrlltop:
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset,
      screenWidth: document.body.clientWidth,
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
      //   console.log(this.socrlltop);
    },
    changeNav() {
      this.navHeight = !this.navHeight;
      console.log(this.navHeight);
    },
    liClick() {
      this.navHeight = false;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
nav {
  width: 100%;
  background: #f1678d;
  height: 120px;
  transition: all 0.3s;
  overflow: hidden;
}
nav a {
  color: #fff;
}
nav > a {
  display: none;
}
.scrolltop,
.nav-clone {
  height: 80px;
}
.nav-clone {
  display: block;
}
.scrolltop {
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 0.13em 1.7em 0.3em rgba(0, 0, 0, 0.1);
}
.scrolltop a {
  color: #3a3c4a;
}
.scrolltop ul {
  height: 64px;
  margin: 0.75em auto;
}
nav.scrolltop ul li a {
  color: #7a7c8a;
}
nav.scrolltop ul li:hover a {
  color: #3a3c4a;
}
nav.scrolltop ul li:nth-child(3) a {
  font-size: 3.25em;
  color: #f485a4;
}
nav.scrolltop ul li:nth-child(3):hover a {
  color: #f1678d;
}
nav ul {
  width: 750px;
  margin: 1.25em auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav ul li {
  cursor: pointer;
  font-size: 1.375em;
  color: #fce1e8;
  transition: all 0.3s;
  /* line-height: 2em; */
}
nav ul li a {
  color: #fce1e8;
}
nav ul li:hover a {
  color: #fff;
}
nav ul li:nth-child(3) {
  transition: all 0.3s;
  font-size: 1em;
}
nav ul li:nth-child(3) a {
  line-height: 1em;
  font-size: 4em;
  font-weight: 400;
}
@media (max-width: 768px) {
  nav {
    background: #fff;
    padding: 0.9em 1.25em;
    box-sizing: border-box;
    position: relative;
    height: 80px;
  }
  nav.autoHeight {
    height: 271px;
  }
  nav > a {
    display: block;
    float: right;
    width: 42px;
    height: 32px;
    background: url("../images/3df787d9a4d272b68b3222770c20bb58.png") no-repeat;
    background-size: 1.75em;
    background-position: 6px 1px;
    margin-top: 0.75em;
    transition: all 0.3s;
  }
  .scrolltop a {
    margin-top: 0em;
  }
  nav ul {
    width: 100%;
    justify-content: flex-end;
    flex-direction: column;
    margin: 0;
    margin-top: 4.1em;
  }
  nav.scrolltop ul {
    height: auto;
    margin: 0;
    margin-top: 4.1em;
  }
  .scrolltop,
  .nav-clone {
    height: 60px;
  }
  nav ul li a {
    color: #7a7c8a;
    line-height: 2em;
  }
  nav ul li:hover a {
    color: #f1678d;
  }
  nav ul li:nth-child(3) {
    position: absolute;
    top: 0.85em;
    left: 1em;
    font-size: 2em !important;
  }
  nav ul li:nth-child(3) a {
    font-size: 0em !important;
    display: inline-block;
    width: 120px;
    height: 46px;
    position: relative;
    top: -38px;
    left: -14px;
    background: url("../images/logo-801c4c920fd56386e8993df70d861ad3e9ed900d0f5eaa348e1f223c79e8c9ed.png")
      no-repeat;
    background-size: cover;
  }
  .scrolltop ul li:nth-child(3) {
    top: 0.45em;
  }
}
@media (max-width: 710px) {
  nav {
    height: 65px;
  }
  nav.autoHeight {
    height: 200px;
  }
  .scrolltop a {
    margin-top: 0.5em;
  }
  .scrolltop ul li:nth-child(3) {
    top: 0.75em;
  }
}
</style>