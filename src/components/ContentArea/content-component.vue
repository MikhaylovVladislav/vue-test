<template>
  <div :class="$style.content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'content-component'
}
</script>

<style module>
.content{
  background-color:saddlebrown;
  height: 100px;
}
</style>
