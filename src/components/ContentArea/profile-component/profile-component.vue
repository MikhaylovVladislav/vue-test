<template>
  <div :class="$style.content">
    <div>Profile</div>
    <profile-info name="Vladis" location="Ufa" status="good day"/>
  </div>
</template>

<script>
import ProfileInfo from '@/components/ContentArea/profile-component/profile-info/profile-info.vue'
export default {
  name: 'content-component',
  components: {
    ProfileInfo
  }
}
</script>

<style module>
.content{
  background-color:rebeccapurple;
  height: 220px;
}
</style>
