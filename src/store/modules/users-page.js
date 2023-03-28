const state = () => ({
  totalCount: null,
  currentPage: 1,
  pageSize: 5,
  users: [],
  isCompletedRequest: []
})
const getters = ({
  getCurrentPage: state => state.currentPage,
  getUsers: state => state.users,
  getUsersTotalCount: state => state.totalCount,
  getPageSize: state => state.pageSize,
  getFollowed: state => state.users.followed,
  getStatusRequest: state => state.isCompletedRequest
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
  toggleSetFollow ({ commit }, userId) {
    commit('toggleSetFollow')
  }, // <--На замену
  setStatusRequest ({ commit }, userId, bool) {
    commit('setStatusRequest', userId, bool)
  }
})

const mutations = ({
  setUsers (state, users) {
    console.log('set users')
    state.users = { ...users }
  },
  setCountUsers (state, count) {
    state.totalCount = count
  },
  setCurrentPage (state, page) {
    state.currentPage = page
  },
  toggleSetFollow (state, userId) {
    state.isCompletedRequest.push({ userId: userId, bool: false })
  }, // <--На замену

  setStatusRequest (state, userId) { // если false => ограничение доступа к функционалу
    console.log('setStatusRequest: ' + userId)
    state.isCompletedRequest = state.isCompletedRequest.includes(userId) ? state.isCompletedRequest.filter(u => u !== userId) : state.isCompletedRequest.concat(userId)
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
