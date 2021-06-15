<template>
  <div class="course-detail-container">
    <h2 class="course-name"> {{ course.name }}</h2>
    <div class="course-inner-container">
      <img class="course-cover" :src="course.cover" referrerpolicy="no-referrer" alt="course-img">
      <div class="course-another-container">
        <p class="course-score-p">评分</p>
        <div class="course-score-container">
          <h1 class="course-score-h1"> {{ Math.floor(course.score)}}</h1>
          <div class="star-rating">
            <div class="star-rating-top" :style="{width:Math.floor(course.score * 10)+'%'}">
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
          <div v-on:click="submitForm">
            <a :href="course.url" target=_blank >
              <p class="course-view-p">立即观看</p>
            </a>
          </div>
          <p class="course-origin">来源：{{course.origin}}</p>
        </div>
        <div class="course-star-container" v-on:click="clickStar">
          <p class="course-star-p">点击收藏</p>
          <img v-if="staring === 0" src="../assets/save.png" class="course-star-img">
          <img v-if="staring === 100" src="../assets/save-click.png" class="course-star-img">
        </div>
      </div>
    </div>
    <div class="post-outer-container">
      <posts4 :course="course"></posts4>
    </div>

    <div class="course-relative-container">
      <h3 class="course-relative-h3">相似课程</h3>
      <Course class="course-relative-course" :courses="relative_course"></Course>
    </div>
  </div>
</template>

<script>
import Course from "../components/Course";
import Posts4 from "../components/Posts4.vue";
export default {
  name: "CourseDetail",
  data(){
    return{
      relative_course: [],
      staring: 0,
    }
  },
  methods:{
    init() {
      if (this.course.type === "course") {
        this.$axios.get('http://1.117.107.95:8080/Course/relative?course_id=' + this.course.course_id,{
          headers: {   //设置上传请求头
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          console.log(res.data)
          this.relative_course = res.data
        })
      } else {
        this.$axios.get('http://1.117.107.95:8080/Video/relative?course_id=' + this.course.course_id,{
          headers: {   //设置上传请求头
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          console.log(res.data)
          this.relative_course = res.data
        })
      }
    },
    clickStar() {
      this.$axios.post('http://1.117.107.95:8080/Course/star?course_id='+this.course.course_id,{
        headers:{   //设置上传请求头
          'Content-Type':'application/x-www-from-urlencoded',
        },
      }).then((res)=>{
        if (res.data === "收藏成功") {
          this.staring = 100;
        }
      })
    },
    submitForm() {
      this.$axios.post('http://1.117.107.95:8080/User/watch?course_id='+this.course.course_id, {
        headers:{   //设置上传请求头
          'Content-Type':'application/x-www-from-urlencoded',
        },
      }).then((res)=>{
        console.log(res.data)
      })
    },
  },
  props: {
    course: Object
  },
  components: {
    Course,
    Posts4
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

.course-star-container {
  display: flex;
  margin: 20px;
}
.course-star-p {
  margin-top: 3px;
  font-weight: bold;
  color: rgb(23,23,23);
}
.course-star-img {
  height: 30px;
  margin-left: 20px;
}
</style>