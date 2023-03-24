import { createStore } from 'vuex'
import profilePage from './modules/profile-page'
import usersPage from './modules/users-page'
const store = createStore({
  modules: {
    profilePage,
    usersPage
  }
})
export default store
