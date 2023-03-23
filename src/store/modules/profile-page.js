const state = () => ({
  name: 'Vladiavle',
  posts: [{
    id: 1,
    postText: 'tttteeesssttt',
    countLike: 15
  }],
  editPost: ''
})
const getters = ({
  getName: state => state.name,
  getEditPost: state => state.editPost,
  getPosts: state => state.posts
})
const actions = ({
  updateEditPost ({ commit }, text) {
    commit('updateEditPost', text)
  }
})
const mutations = ({
  updateEditPost (state, editText) {
    state.editPost = editText
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
