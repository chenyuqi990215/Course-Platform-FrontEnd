<template>
  <div class="course-container">
    <ul class="course-ul">
      <li class="course-li" v-for="(item,index) in courses" :key="index">
        <CourseItem :course="item"></CourseItem>
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
  margin-left: 80px;
  margin-right: 80px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.course-ul {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

</style>