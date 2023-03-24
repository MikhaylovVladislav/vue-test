<template>
  <span @click="onClickPage">{{ num }}</span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'pages',
  props: {
    num: Number,
    onChangePage: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions(['setCurrentPage']),
    onClickPage () {
      this.onChangePage(this.num)
      /* this.setCurrentPage(this.num) */
    }
  }
}
</script>

<style module>
</style>
