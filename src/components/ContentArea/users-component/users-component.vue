<template>
  <div :class="$style.content">
    <div>
      <pages v-for="page in pageCount" :key="page" :num="page" :onChangePage="onChangePage"/>
    </div>
    <user-item v-for="user in users" :key="user.id" :name="user.name" :status="user.status"/>
  </div>
</template>

<script>
import userItem from './user-item/user-item.vue'
import { UsersAPI } from '@/api/api'
import { mapActions, mapGetters } from 'vuex'
import pages from '@/components/ContentArea/users-component/pages.vue'

export default {
  name: 'users-component',
  components: {
    userItem,
    pages
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      usersCount: 'getUsersTotalCount',
      pageSize: 'getPageSize',
      currentPage: 'getCurrentPage'
    }),
    pageCount (usersCount, pageSize) {
      const pages = []
      for (let i = 1; i < 50; i++) {
        pages.push(i)
      } // Math.ceil(usersCount / pageSize)
      return pages
    }
  },
  methods: {
    ...mapActions({
      setUsers: 'setUsers',
      setCountUsers: 'setCountUsers',
      setCurrentPage: 'setCurrentPage'
    }),
    getAllUsers (page, count) {
      UsersAPI.getUsers(page, count).then(data => {
        this.setUsers(data.items)
        this.setCountUsers(data.totalCount)
      })
    },
    onChangePage (num) {
      this.setCurrentPage(num)
      this.getAllUsers(num, this.pageSize)
    }
  },
  created () {
    this.getAllUsers(this.currentPage, this.pageSize)
  },
  updated () {
  }
}
</script>

<style module>
.content {
  background-color: rebeccapurple;
  height: 220px;
}
</style>
