<template>
  <div :class="$style.header">
    <h1>{{ msg }}</h1>
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
}
</style>
