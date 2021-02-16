<template>
  <div class="course-container">
    <ul class="course-ul">
      <li class="course-li" v-for="(item,index) in courses" :key="index">
        <CourseItem class="course-item" :course="item"></CourseItem>
      </li>
    </ul>
  </div>
</template>

<script>
import CourseItem from "./CourseItem.vue"
export default {
  name: "Course",
  components: {
    CourseItem
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
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.course-ul {
  display: flex;
  flex-flow: row wrap;
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