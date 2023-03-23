import { createStore } from 'vuex'

const store = createStore({
  modules: {
    profilePage: {
      state: {
        count: 0,
        name: 'Vladds'
      },
      getters: {
        count: state => state.count,
        getName: state => state.name
      }
    }
  }
})

export default store
