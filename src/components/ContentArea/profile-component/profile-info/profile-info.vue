<template>
  <div>{{name}}</div>
  <div>{{location}}</div>
  <div>{{status}}</div>
</template>
<script>

export default ({
  name: 'profile-info',
  props: {
    name: String,
    location: String,
    status: String
  }
})
</script>
<style>
</style>
