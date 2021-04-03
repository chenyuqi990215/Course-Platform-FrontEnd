<template>
  <div class="course-detail-container">
    <h2 class="course-name"> {{ course.name }}</h2>
    <div class="course-inner-container">
      <img class="course-cover" :src="course.cover" referrerpolicy="no-referrer" alt="course-img">
      <div class="course-another-container">
        <p class="course-score-p">评分</p>
        <div class="course-score-container">
          <h1 class="course-score-h1"> {{ Math.floor(course.score) / 10 }}</h1>
          <div class="star-rating">
            <div class="star-rating-top" :style="{width:Math.floor(course.score)+'%'}">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="star-rating-bottom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <p class="course-amount-p"><span class="course-amount-span">{{course.counter}}</span>播放</p>
        <ul class="course-ul-university" v-if="course.universityList.length > 0">
          <li class="course-li-university" v-for="(item,index) in course.universityList.split('；').slice(0,4)" :key="index" >
            <p class="course-p-university">{{item}}</p>
          </li>
        </ul>
        <ul class="course-ul-title" v-if="course.titleList.length > 0">
          <li class="course-li-title" v-for="(item,index) in course.titleList.split('；').slice(0,4)" :key="index" >
            <p class="course-p-title">{{item}}</p>
          </li>
        </ul>
        <div class="course-view-container">
          <a :href="course.url" target=_blank>
            <p class="course-view-p" v-on:click="Browse">立即观看</p>
          </a>
          <p class="course-origin">来源：{{course.origin}}</p>
        </div>
      </div>
    </div>
    <div class="post-outer-container">
      <posts4 :course="course"></posts4>
    </div>

    <div class="course-relative-container">
      <h3 class="course-relative-h3">相似视频</h3>
      <Course class="course-relative-course" :courses="relative_course"></Course>
    </div>
  </div>
</template>

<script>
import Course from "../components/Course";
import Data from "../entity/Data"
import Posts4 from "../components/Posts4.vue";
export default {
  name: "VideoDetail",
  data(){
    return{
      users: new Data().users,
      relative_course : [],
    }
  },

  props: {
    course: Object,
  },
  components: {
    Course,
    Posts4
  },
  methods: {
    init() {
      this.$axios.get('http://47.100.79.77:8080/Course/relative?course_id=' + this.course.course_id,{
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        this.relative_course = res.data
      })
    },
    Browse() {
      this.$axios.post('http://47.100.79.77:8080/User/browse?course_id=' + this.course.course_id,{
        headers: {
          'Content-Type': 'application/json',
        }
      })
    }
  },
  created() {
    this.init()
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
h1 {
  padding: 0;
  margin: 0;
}
p{
  margin: 0;
  padding: 0;
}
.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin-top: 5px;
  margin-left: 15px;
  position: relative;
  display: table;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
}

.star-rating span {
  padding: 5px;
  font-size: 20px;
}

.star-rating span:after {
  content: "★";
}

.star-rating-top {
  color: #FFD700;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.star-rating-bottom {
  padding: 0;
  display: block;
  z-index: 0;
}
.course-ul-title {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.course-li-title {
  flex:0 0 50%;
}
.course-p-title {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:5px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.course-ul-university {
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
.course-detail-container {
  margin: 30px 200px 30px 150px;
}
.course-inner-container {
  margin: 10px;
  display: flex;
}
.course-cover {
  width: 400px;
  height: 300px;
}
.course-relative-container {
  margin: 0;
}
.course-score-p {
  color: rgb(150,150,150);
  font-size: 1.1em;
}
.course-score-container {
  display: flex;
  justify-content: flex-start;
}
.course-score-h1 {
  width: 50px;
  text-align: center;
}
.course-amount-p{
  margin-top: 10px;
}
.course-view-container{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}
.course-view-p {
  font-weight: bold;
  width: 90px;
  height: 30px;
  background-color: rgb(126,172,231);
  color: white;
  text-align: center;
  font-size: 1.1em;
  border-radius: 5px;
  padding-top: 5px;
}
.course-origin{
  color: rgb(150,150,150);
  margin-top: 5px;
  margin-left: 20px;
}
.course-another-container{
  margin-left: 100px;
}
.post-outer-container{
  margin: 10px;
}
</style>