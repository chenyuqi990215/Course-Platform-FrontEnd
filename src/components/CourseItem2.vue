<template>
  <div class="course-item-container">
    <div class="course-img-container">

        <img class="course-item-img" referrerpolicy="no-referrer" v-bind:src="course.course.cover" alt="course-item" v-on:click="clickCourse">

    </div>
    <div class="course-information-container">
        <span class="course-item-title" v-on:click="clickCourse">{{ course.course.name }}</span>
      <ul class="course-item-ul" v-if="course.course.titleList.length > 0">
        <li class="course-item-li" v-for="(item,index) in course.course.titleList.split('；').slice(0,4)" :key="index" >
          <p class="course-item-p">{{item}}</p>
        </li>
      </ul>
      <ul class="course-ul-university" v-if="course.course.univerityList.length > 0">
        <li class="course-li-university" v-for="(item,index) in course.course.univerityList.split('；').slice(0,4)" :key="index" >
          <p class="course-p-university">{{item}}</p>
        </li>
      </ul>
      <p class="course-item-origin" v-if="course.course.origin !== ''">来源：{{ course.course.origin }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CourseItem2",
  props: {
    course: {
      type: Object
    },
  },
  methods:{
    clickCourse() {
      this.$router.push({
        name: 'Course',
        query: {
          id: this.course.course.id,
          name: this.course.course.name,
          type: '优质课程',
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
.course-information-container{
  margin:0 4px;

}
.course-item-container {
  width:60%;
  height:200px;
  display:flex;
}
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.course-item-title {
  color: black;
  font-size: 1.1em;
  max-width: 500px;
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
  margin:7px 3px 0;
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
  margin: 7px 15px;
  font-size: small;
  color: rgb(61,61,61);

}

.course-ul-university {
  margin:7px 3px 0;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.course-li-university {
  flex:0 0 50%;
}
.course-p-university {
  width:80px;
  background-color: rgb(143, 161, 205);
  color: white;
  margin:5px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
</style>