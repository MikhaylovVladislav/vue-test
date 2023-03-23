<template>
  <div>{{getName}}</div>
  <div>{{location}}</div>
  <div>{{status}}</div>
</template>
<script>

import { mapGetters } from 'vuex'

export default ({
  computed: { ...mapGetters(['getName']) },
  props: {
    name2: String,
    location: String,
    status: String
  },
  name: 'profile-info'
})
</script>
<style>
</style>
