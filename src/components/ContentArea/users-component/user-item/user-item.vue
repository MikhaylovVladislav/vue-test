<template>
  <div :class="$style.content">
    <div>{{name}}</div>
    <div>assa</div>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: {
    name: String
  }
}
</script>

<style module>
.content{
  background-color:rebeccapurple;
  height: 220px;
}
</style>
