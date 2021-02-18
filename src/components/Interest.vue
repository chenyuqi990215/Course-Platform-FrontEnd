<template>
  <div class="interest-container">
    <div class="interest-header">
      <p class="interest-p">可能感兴趣的内容</p>
      <ul class="interest-item-ul">
        <li class="interest-item-li" v-for="(item,index) in interests.slice(0,4)" :key="index" >
          <p class="interest-item-p">{{item.label}}</p>
        </li>
      </ul>
    </div>
    <Course class="interest-course" :courses="courses"></Course>
    <Resource class="interest-resource" :resources="resources"></Resource>
  </div>
</template>

<script>
import Course from "@/components/Course";
import Resource from "@/components/Resource";
export default {
  name: "Interest",
  components: {Resource, Course},
  props:{
    courses: Array,
    resources: Array,
    interests: Array
  },
  comments: {
    Resource,
    Course
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
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.interest-header {
  display: flex;
  margin-left: 150px;
  margin-bottom: 30px;
}
.interest-p {
  font-size: 1.3em;
  font-weight: bold;
}
.interest-item-ul {
  margin-left: 20px;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.interest-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.interest-course {
  margin: 0 120px 0 120px;
}
.interest-resource {
  margin: 0 120px 0 120px;
}
</style>