<template>
  <div :class="$style.content">
    <div>ava</div>
    <div :class="$style.info">
      <div>{{ name }}</div>
      <div>{{status}}</div>
      <div><button>Добавить в друзья</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: {
    name: String,
    status: String
  }
}
</script>

<style module>
.content {
  background-color: antiquewhite;
}
.info{
  background-color: silver;
  padding: 10px;
  color: saddlebrown;
}
</style>
