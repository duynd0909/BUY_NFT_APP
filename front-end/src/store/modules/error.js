export default {
  namespaced: true,
  state: {
    error: ""
  },
  mutations: {
    postError: (state, payload) => {
      state.error = payload;
    }
  },
  actions: {
    setError: ({ commit }, errorMsg) => {
      commit("postError", errorMsg);
    }
  },
  getters: {
    getError: state => {
      return state.error;
    }
  }
};
