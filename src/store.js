import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeFilter: '',
    page: 1
  },
  mutations: {
    setActiveFilter(state, payload) {
      state.activeFilter = payload.filter;
    }
  },
  actions: {}
});
