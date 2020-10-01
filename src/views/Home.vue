<template>
  <div class="home">
    <xitieHeader />
    <xitieMain />
  </div>
</template>

<script>
// @ is an alias to /src
import xitieHeader from "@/components/xitie-header.vue";
import xitieMain from "@/components/xitie-main.vue";

export default {
  name: "home",
  components: {
    xitieHeader,
    xitieMain,
  },
};
</script>
