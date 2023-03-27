const state = () => ({
  totalCount: null,
  currentPage: 1,
  pageSize: 5,
  users: []
})
const getters = ({
  getCurrentPage: state => state.currentPage,
  getUsers: state => state.users,
  getUsersTotalCount: state => state.totalCount,
  getPageSize: state => state.pageSize,
  getFollowed: state => state.users.followed
})
const actions = ({
  setUsers ({ commit }, users) {
    commit('setUsers', users)
  },
  setCountUsers ({ commit }, count) {
    commit('setCountUsers', count)
  },
  setCurrentPage ({ commit }, page) {
    commit('setCurrentPage', page)
  },
  toggleSetFollow ({ commit }, bool) {
    commit('toggleSetFollow', bool)
  }
})

const mutations = ({
  setUsers (state, users) {
    state.users = { ...users }
  },
  setCountUsers (state, count) {
    state.totalCount = count
  },
  setCurrentPage (state, page) {
    state.currentPage = page
  },
  toggleSetFollow (state, bool) {
    state.users.followed = bool
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
