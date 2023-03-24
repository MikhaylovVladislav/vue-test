import axios from 'axios'
export const UsersAPI = {
  getUsers: async (page = 1, count = 5) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, { header: { 'API-KEY': '92b73b48-65df-4bb9-9263-163693cf0d8a' } })
      .then(response => { return response.data })
  }
}
