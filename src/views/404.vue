<template>
  <div class="error">
    <h3>404</h3>
    <p>点击此处</p>
    <a href="#/home" class="button">返回主页</a>
  </div>
</template>

<style>
.error {
  padding: 60px;
  text-align: center;
  color: #f1678d;
  width: 1170px;
  margin: 60px auto;
  box-sizing: border-box;
  background: #f4f4f4;
}
.error h3 {
  font-size: 6em;
  line-height: 1em;
}
.error p {
  font-size: 3em;
  font-weight: 500;
}
.error :nth-last-child(2) {
  margin-bottom: 1.5em;
}
.error .button {
  position: relative;
}
.error .button::before {
  content: "";
  position: absolute;
  top: -4.2em;
  left: 30%;
  width: 3em;
  height: 4em;
  background: url("../images/c8491e5b55f98747bd19e2a29515c52c12.png") no-repeat;
  background-size: contain;
}
@media (max-width: 1200px) {
  .error {
    width: 940px;
  }
}
@media (max-width: 992px) {
  .error {
    width: 750px;
  }
}
@media (max-width: 768px) {
  .error {
    width: 100%;
    margin: 0;
  }
}
</style>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>