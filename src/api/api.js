import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '92b73b48-65df-4bb9-9263-163693cf0d8a'
  }
})
export const UsersAPI = {
  getUsers: async (page = 1, count = 5) => {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => { return response.data })
  },
  followUser: async (userId) => {
    return instance.post('follow/' + userId)
      .then(response => response.data)
  },
  unfollowUser: async (userId) => {
    return instance.delete('follow/' + userId)
      .then(response => response.data)
  }
}
