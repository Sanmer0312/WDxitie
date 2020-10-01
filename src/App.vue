<template>
  <div id="app">
    <xitieNav />
    <router-view />
    <xitieFooter :scrollheight="scrollheight" />
  </div>
</template>

<style>
</style>
<script>
// @ is an alias to /src

import xitieNav from "@/components/xitie-nav.vue";
import xitieFooter from "@/components/xitie-footer.vue";

export default {
  data() {
    return {
      scrollheight: document.body.scrollHeight,
    };
  },
  updated: function () {
    this.scrollheight = document.body.scrollHeight;
  },
  components: {
    xitieNav,
    xitieFooter,
  },
};
</script>
