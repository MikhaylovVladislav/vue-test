import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'Vladds'
  },
  mutations: {
    incriment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('incriment')
    }
  },
  getters: {
    count: state => state.count,
    name: state => state.name
  }
})

export default store
