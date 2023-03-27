<template>
  <div :class="$style.content">
    <div><img :class="$style.smallAva" :src=smallPhotos alt="Photo"/></div>
    <div :class="$style.info">
      <div>{{ name }}</div>
      <div>{{ status }}</div>
      <div>
        <button @click="clickFollowBtn">{{ isFollowMessage }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: {
    name: String,
    status: String,
    smallPhotos: String,
    isFollowMessage: String,
    userId: Number,
    isFollowed: Boolean,
    toggleClickFollowBtn: {
      type: Function
    },
    onChangeFollow: {
      type: Function
    }
  },
  computed: {
    clickFollowBtn () {
      return this.toggleClickFollowBtn(this.userId, this.isFollowed)
    }
  },
  updated () {
  }
}
</script>

<style module>
.content {
  background-color: antiquewhite;
}

.info {
  background-color: silver;
  padding: 10px;
  color: saddlebrown;
}

.smallAva {
  width: 80px;
  height: 80px;
}
</style>
