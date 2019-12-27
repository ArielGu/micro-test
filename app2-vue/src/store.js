import Vuex from "vuex";
import Vue from 'vue';

const initialState = {
  count: 0
};
const mutations  = {
  increment(state) {
    console.log('vuex...')
    // 变更状态
    state.count++
  }
};

const actions = {
  increment ({commit}) {
    commit('increment')
  }
}

Vue.use(Vuex);
export const storeInstance = new Vuex.Store({
  state: initialState,
  mutations,
  actions
});