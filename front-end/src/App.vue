<template>
  <div id="app">
    <router-view />
    <error-message />
  </div>
</template>

<script>
import ErrorMessage from "./components/error/ErrorMessage.vue";
export default {
  components: { ErrorMessage,
 },
  name: "app",

  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
/* GLOBAL SCSS IMPORT */
@import "./scss/main.scss";
</style>
