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
  getPageSize: state => state.pageSize
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
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
