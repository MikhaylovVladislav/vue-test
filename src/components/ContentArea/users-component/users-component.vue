<template>
  <div :class="$style.content">
    <div>
      <pages v-for="page in pageCount" :key="page" :num="page" :onChangePage="onChangePage"/>
    </div>
    <user-item v-for="user in users" :key="user.id" :userId="user.id" :name="user.name" :status="user.status"
               :smallPhotos="checkPhoto(user.photos.small)" :isFollowed="user.followed"
               :isFollowMessage="isFollow(user.followed)" :toggleClickFollowBtn="toggleClickFollowBtn"
               :onChangeFollow="onChangeFollow" :statusRequest="test(user.id)"/>
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
      currentPage: 'getCurrentPage',
      followed: 'getFollowed',
      getStatusRequest: 'getStatusRequest'
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
      setCurrentPage: 'setCurrentPage',
      toggleSetFollow: 'toggleSetFollow',
      setStatusRequest: 'setStatusRequest'
    }),
    checkPhoto (photo) {
      const defPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP39OTc9h5ih7RH4EytUjjCrtJs0f4XR56vU_nOGTAA&s'
      return photo !== null ? photo : defPhoto
    },
    getAllUsers (page, count) {
      UsersAPI.getUsers(page, count).then(data => {
        this.setUsers(data.items)
        this.setCountUsers(data.totalCount)
      })
    },
    onChangePage (num) {
      this.setCurrentPage(num)
      this.getAllUsers(num, this.pageSize)
    },
    isFollow (isFollowing = false) {
      return isFollowing ? 'Убрать из друзей' : 'Добавить в друзья'
    },
    toggleClickFollowBtn (userId, isFollowing) {
      this.setStatusRequest(userId)
      if (isFollowing) {
        UsersAPI.unfollowUser(userId)
          .then(data => this.setStatusRequest(userId), this.getAllUsers(this.currentPage, this.pageSize))
      } else {
        UsersAPI.followUser(userId)
          .then(data => this.setStatusRequest(userId), this.getAllUsers(this.currentPage, this.pageSize))
      }
    },
    onChangeFollow () {
      this.getAllUsers(this.currentPage, this.pageSize)
    },
    test (id) {
      return this.getStatusRequest.includes(id)
    }
  },
  created () {
    this.getAllUsers(this.currentPage, this.pageSize)
  }
}
</script>

<style module>
.content {
  background-color: rebeccapurple;
  height: 220px;
}
</style>
