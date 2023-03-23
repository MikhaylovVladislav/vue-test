<template>
  <div>
    <div>Мои посты</div>
    <div>
      <textarea @input='updateText' v-model="postText"></textarea>
      <button>Отправить</button>
      <p>{{postText}} </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default ({
  name: 'posts-wall',
  computed: {
    ...mapGetters({ postText: 'getEditPost' })
  },
  methods: {
    ...mapActions(['updateEditPost']),
    updateText (event) {
      const edText = event.target.value
      this.updateEditPost(edText)
    }
  }
})
</script>
<style>

</style>
