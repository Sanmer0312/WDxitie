<template>
  <div id="app">
    <xitieNav />
    <router-view />
    <xitieFooter />
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
    return {};
  },
  updated: function () {},
  components: {
    xitieNav,
    xitieFooter,
  },
};
</script>
