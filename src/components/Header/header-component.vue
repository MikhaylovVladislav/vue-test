<template>
  <div :class="$style.header">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  props: {
    msg: String
  }
}
</script>

<style module>
.header {
  background-color: blue;
  height: 40px;
}
</style>
