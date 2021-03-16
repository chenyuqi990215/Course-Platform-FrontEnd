<template>
  <div class="save-container">
    <img v-if="total_num===0" class="save-img" src="../assets/empty.png">
    <p class="save-p">优质课程</p>
    <Course class="interest-course" :courses="courses"></Course>
    <p class="save-p">优质视频</p>
    <Video class="interest-course" :videos="videos"></Video>
    <p class="save-p">优质资源</p>
    <Resource class="interest-resource" :resources="resources"></Resource>
  </div>
</template>

<script>
import Data from "../entity/Data";
import Course from "../components/Course"
import Resource from "../components/Resource"
import Video from "@/components/Video";
export default {
  name: "Save",
  data(){
    return{
      courses: [],
      videos:new Data().machine_learning.videos,
      resources:new Data().resources,



    }
  },
  methods:{
    init(){
      this.$axios.get('http://47.100.79.77:8080/Course/hot',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.courses = res.data
        console.log("成功")

      })
    },

  },
  components: {
    Course,
    Resource,
    Video
  },
  created(){
    this.init()
  }
}
</script>

<style scoped>
.save-container{
  background-color: white;
  width: 100%;
  margin: 30px 0;
  min-height: 700px;

}
.save-p {
  margin: 30px 0;
  font-size: 1.3em;
  letter-spacing: 2px;
  color:rgb(100,100,100);
}
.save-img {
  margin-top: 70px;
  width: 440px;
  height: 360px;
}
.interest-course {
  margin: 0 100px 0 -20px;
}
.interest-resource {
  margin: 0 100px 0 -20px;
}
</style>