const state = () => ({
  name: 'Vladiavle',
  posts: [{
    id: 1,
    postText: 'tttteeesssttt',
    countLike: 15
  }, {
    id: 2,
    postText: 'asdasd',
    countLike: 10
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
  },
  addNewPost ({ commit }) {
    commit('addNewPost')
  }
})
const mutations = ({
  updateEditPost (state, editText) {
    state.editPost = editText
  },
  addNewPost (state) {
    state.posts.push({
      id: state.posts.length + 1,
      postText: state.editPost,
      countLike: 0
    })
    state.editPost = ''
  }
})
export default {
  state,
  getters,
  actions,
  mutations
}
