const state = () => ({
  totalCount: null,
  currentPage: 1,
  pageSize: 5,
  users: []
})
const getters = ({
  getCurrentPage: state => state.currentPage,
  getUsers: state => state.users
})
const actions = ({
  getUsers ({ commit }, users) {
    commit('setUsers', users)
  }
})

const mutations = ({
  setUsers (state, users) {
    state.users = { ...users }
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
