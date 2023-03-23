<template>
  <div>
    <img alt="check" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP39OTc9h5ih7RH4EytUjjCrtJs0f4XR56vU_nOGTAA&s"/>
  </div>
  <div>{{ getName }}</div>
  <div>{{ location }}</div>
  <div>{{ status }}</div>
</template>
<script>

import { mapGetters } from 'vuex'

export default ({
  computed: { ...mapGetters({ getName: 'getName' }) },
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
