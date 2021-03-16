<template>
  <div class="video-container">
    <ul class="video-ul">
      <li class="video-li" v-for="(item,index) in videos" :key="index">
        <VideoItem class="video-item" :video="item"></VideoItem>
      </li>
    </ul>
  </div>
</template>

<script>
import VideoItem from "./VideoItem.vue"
export default {
  name: "Video",
  components: {
    VideoItem
  },
  props: {
    videos: {
      type: Array
    },
  }
}
</script>

<style scoped>
div {
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.video-ul {
  display: flex;
  flex-flow: row wrap;
}
.video-li {
  margin: 0;
  padding: 0;
}
.video-item {
  margin: 0 20px;
  padding: 0;
}
</style>