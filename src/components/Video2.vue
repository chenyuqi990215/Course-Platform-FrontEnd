<template>
  <div class="course-container">
    <div class="divider-name">
      <span>优质视频（</span>
      <span>{{courses.length}}</span>
      <span>）</span>
    </div>

    <ul class="course-ul">
      <li class="course-li" v-for="(item,index) in courses" :key="index">
        <VideoItem2 class="course-item" :course="item"></VideoItem2>
      </li>
    </ul>
  </div>
</template>

<script>
import VideoItem2 from "@/components/VideoItem2";
export default {
  name: "Video2",
  components: {
    VideoItem2,
  },
  props: {
    courses: {
      type: Array
    },
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  background:rgb(220,220,220);
  margin:30px 120px;
}
.divider-name{
  margin:10px;
}
p{
  margin:20px;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
span{
  margin:0;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.course-ul {
  padding: 0;
}
.course-li {
  margin: 0;
  padding: 0;
}
.course-item {
  margin: 0 20px;
  padding: 0;
}
</style>