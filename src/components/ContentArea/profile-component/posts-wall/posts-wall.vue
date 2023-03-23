<template>
  <div>
    <div>Мои посты</div>
    <div>
      <textarea @input='updateText' v-model="postText"></textarea>
      <button @click='onAddPost'>Отправить</button>
      <p>{{postText}} </p>
    </div>
    <post v-for="post in posts" :key="post.id" :postText="post.postText" :countLike="post.countLike"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Post from '@/components/ContentArea/profile-component/posts-wall/post.vue'
export default ({
  name: 'posts-wall',
  components: { Post },
  computed: {
    ...mapGetters({ postText: 'getEditPost', posts: 'getPosts' })
  },
  methods: {
    ...mapActions(['updateEditPost', 'addNewPost']),
    updateText (event) {
      const edText = event.target.value
      this.updateEditPost(edText)
    },
    onAddPost () {
      this.addNewPost()
    }
  }
})
</script>
<style>

</style>
