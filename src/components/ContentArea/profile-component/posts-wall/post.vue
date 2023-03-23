<template>
  <div :class="$style.post">
    <div>
      {{ postText }}
    </div>
    <div>
      {{countLike}}
    </div>
  </div>
</template>
<script>
export default ({
  name: 'post',
  props: {
    postText: String,
    countLike: {
      type: Number,
      default: 0
    }
  }
})
</script>
<style module>
.post {
  border-color: rebeccapurple;
  background-color: blue;
}
</style>
