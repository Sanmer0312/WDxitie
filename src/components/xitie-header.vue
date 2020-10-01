<template>
  <header>
    <h2 v-for="value in h2">{{value}}</h2>
    <div class="p-box">
      <p>只需三步：1.登录/注册 --> 2.选择模板 --> 3.开始制作</p>
      <a href="javascript:;">马上制作</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "xitie-header",
  data() {
    return {
      h2: ["Hey,欢迎使用维斗喜帖", "诗歌，文章，相册，", "微喜帖，邀请函！"],
    };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  width: 100%;
  background: #f1678d;
  color: #fff;
  min-height: 602px;
  box-sizing: border-box;
  border-bottom: 2.5em solid #f9c2d1;
}
h2,
header .p-box {
  position: relative;
}
header h2 {
  animation: h2-created 1s;
}
@keyframes h2-created {
  from {
    opacity: 0;
    left: -100%;
  }
  to {
    opacity: 1;
    left: 0%;
  }
}
header p {
  margin: 1.2em 0;
}
header .p-box {
  animation: p-created 1.1s;
}
@keyframes p-created {
  from {
    opacity: 0;
    top: 13.5em;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
header a {
  font-size: 3em;
  font-weight: 400;
  color: #fce1e8;
  transition: all 0.3s;
}
header a:hover {
  color: #fff;
}
@media (max-width: 768px) {
  header {
    min-height: 642px;
    font-size: 12px;
  }
  header .p-box {
    font-size: 14px;
  }
}
@media (max-width: 514px) {
  header {
    min-height: 90vh;
    font-size: 10px;
  }
  header h2 {
    font-size: 3em;
  }
  header .p-box {
    font-size: 12px;
  }
}
</style>