import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT(state){
      state.count++;
    },
    DECREMENT(state){
      state.count--;
    }
  },
  actions: {
    increment({commit}){
      commit('INCREMENT');
    },
    decrement({commit}){
      commit('DECREMENT');
    },
    //如果是偶数+1
    incrementIfEven({commit,state}){
      if(state.count % 2 == 0){
        commit('INCREMENT');
      }
    },
    //异步+1
    incrementAsync({commit}){
      setTimeout(() => commit('INCREMENT'),1000);
    }
  },
  modules: {
  },
  getters:{
    OddOrEven(state){
      return state.count % 2 == 0 ? '偶数' : '奇数';
    }
  }
})
