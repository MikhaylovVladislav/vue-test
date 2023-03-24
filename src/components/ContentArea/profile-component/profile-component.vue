<template>
  <div :class="$style.content">
    <div>Profile</div>
    <profile-info name2="Vladis" location="Ufa" status="good day"/>
    <posts-wall/>
  </div>
</template>

<script>
import ProfileInfo from '@/components/ContentArea/profile-component/profile-info/profile-info.vue'
import PostsWall from '@/components/ContentArea/profile-component/posts-wall/posts-wall.vue'
export default {
  name: 'profile-component',
  components: {
    ProfileInfo,
    PostsWall
  }
}
</script>

<style module>
.content{
  background-color:rebeccapurple;
  height: 220px;
}
</style>
