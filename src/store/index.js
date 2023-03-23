import { createStore } from 'vuex'
import profilePage from './modules/profile-page'
const store = createStore({
  modules: {
    profilePage
  }
})

export default store
