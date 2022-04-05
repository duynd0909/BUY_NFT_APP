import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import error from "./modules/error";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user,
    error: error
  },
  strict: process.env.NODE_ENV !== "production"
});
