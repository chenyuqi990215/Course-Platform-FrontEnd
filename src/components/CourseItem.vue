<template>
  <div class="course-item-container">
    <a :href="course.course.url">
      <img class="course-item-img" referrerpolicy="no-referrer" v-bind:src="course.course.cover" alt="course-item">
    </a>
    <a :href="course.course.url">
      <p class="course-item-title">{{ course.course.name }}</p>
    </a>
    <ul class="course-item-ul">
      <li class="course-item-li" v-for="(item,index) in course.course.titleList.split('；').slice(0,4)" :key="index" >
        <p class="course-item-p">{{item}}</p>
      </li>
    </ul>
    <p class="course-item-origin">来源：{{ course.course.origin }}</p>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    course: {
      type: Object
    },
  },
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
.course-item-container{
  width:250px;
  height:300px;
}
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.course-item-title {
  color: black;
  font-size: 0.8em;
  font-weight: bold;
  max-width: 220px;
  margin-left: 15px;
}
.course-item-img {
  width: 250px;
  border-radius: 5px;
}
.course-item-ul {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.course-item-li {
  flex:0 0 50%;
}
.course-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.course-item-origin {
  margin-left: 20px;
  margin-top: 5px;
  font-size: small;
  color: rgb(61,61,61);
  margin-bottom: 10px;
}
</style>