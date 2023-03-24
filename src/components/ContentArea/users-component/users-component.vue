<template>
  <div :class="$style.content">
    <user-item v-for="user in users" :key="user.id" :name="user.name"/>
  </div>
</template>

<script>
import userItem from './user-item/user-item.vue'
import { UsersAPI } from '@/api/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'users-component',
  components: {
    userItem
  },
  computed: {
    ...mapGetters({ users: 'getUsers' })
  },
  methods: {
    ...mapActions({ getUsersA: 'getUsers' }),
    getAllUsers () {
      UsersAPI.getUsers().then(response => {
        this.getUsersA(response)
      })
    }
  },
  created () {
    this.getAllUsers()
  }
}
</script>

<style module>
.content {
  background-color: rebeccapurple;
  height: 220px;
}
</style>
