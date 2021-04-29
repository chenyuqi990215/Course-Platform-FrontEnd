<template>
  <div class="video-item-container">
    <img class="video-item-img" v-on:click="clickCourse" referrerpolicy="no-referrer" v-bind:src="video.cover" alt="video-item">
    <p class="video-item-title" v-on:click="clickCourse">{{ video.name }}</p>
    <ul class="video-item-ul" v-if="video.titleList.length > 0">
      <li class="video-item-li" v-for="(item,index) in video.titleList.split('；').slice(0,4)" :key="index" >
        <p class="video-item-p">{{item}}</p>
      </li>
    </ul>
    <p class="video-item-origin" v-if="video.origin !== ''">来源：{{ video.origin }}</p>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: {
      type: Object
    },
  },
  methods: {
    clickCourse() {
      this.$router.push({
        name: 'Course',
        query: {
          id: this.video.course_id,
          name: this.video.name,
          type: '优质视频',
        }
      })
    }
  }
}

</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
li {
  padding: 0;
  margin: 0;
}
.video-item-container{
  width:250px;
  height:300px;
}
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.video-item-title {
  color: black;
  font-size: 0.8em;
  font-weight: bold;
  max-width: 220px;
  margin-left: 15px;
}
.video-item-img {
  width: 250px;
  border-radius: 5px;
}
.video-item-ul {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.video-item-li {
  flex:0 0 50%;
}
.video-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.video-item-origin {
  margin-left: 20px;
  margin-top: 5px;
  font-size: small;
  color: rgb(61,61,61);
  margin-bottom: 10px;
}
</style>