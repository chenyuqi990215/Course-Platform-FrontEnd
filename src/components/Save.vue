<template>
  <div class="save-container">
    <div class="save-inner">
      <p class="save-p">优质课程</p>
      <Course class="interest-course" :courses="courses"></Course>
      <p class="save-p">优质视频</p>
      <Video class="interest-course" :videos="videos"></Video>
      <p class="save-p">优质资源</p>
      <Resource class="interest-resource" :resources="resources"></Resource>
    </div>
  </div>
</template>

<script>
import Course from "../components/Course"
import Resource from "../components/Resource"
import Video from "@/components/Video";
export default {
  name: "Save",
  data(){
    return{
      courses: [],
      videos: [],
      resources: [],
      total_num: 0
    }
  },
  methods:{
    init(){
      this.$axios.get('http://1.117.107.95:8080/User/star',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.courses = res.data.filter((item => item.type === "course"));
        this.videos = res.data.filter((item => item.type === "video"));
        this.resources = res.data.filter((item => item.type === "resource"));
        this.total_num = res.data.length;
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
  margin: 30px;
  min-height: 700px;
}
.save-p {
  margin: 30px 0;
  font-size: 1.3em;
  letter-spacing: 2px;
  color:rgb(100,100,100);
}
.save-inner {
  margin-left: 40px;
}
</style>