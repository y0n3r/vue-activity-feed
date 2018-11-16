import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeFilter: '',
    page: 1,
    results: 0
  },
  mutations: {
    incrementPage(state) {
      state.page++;
    },
    resetPage(state) {
      state.page = 1;
    },
    setActiveFilter(state, payload) {
      state.activeFilter = payload.filter;
    },
    updateResults(state, payload) {
      state.results = payload.results;
    }
  },
  actions: {}
});
