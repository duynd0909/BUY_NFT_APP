import LoginRepository from "../../repository/processLogin";
import Vue from "vue";
export default {
  namespaced: true,
  state: {
    userDetail: null
  },
  mutations: {
    processLogin(state, data) {
      state.userDetail = data;
    }
  },
  actions: {
    async processLogin({ commit, dispatch }, form) {
      try {
        let response = await LoginRepository.processLogin(form);
        let userDetail = response.data.userDetail;
        const expiredTime = response.data.expiredTime;
        if (userDetail) {
          commit("processLogin", userDetail);
          Vue.$cookies.set("accessToken", userDetail.accessToken, expiredTime);
          Vue.$cookies.set("username", userDetail.username, expiredTime);
        }
      } catch (error) {
        dispatch("error/setError", error.response.data.message, { root: true });
      }
    }
  },
  getters: {
    userDetail(state) {
      return state.userDetail;
    }
  }
};
