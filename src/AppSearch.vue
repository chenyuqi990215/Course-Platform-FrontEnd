<template>
  <div id="appSearch">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"></Header>
    <div :class="{opacity_container: show_register || show_login || show_option}">
      <Result :courses="courses" :resources="resources" :videos="videos" v-on:show="chooseToShow"> </Result>
      <div class="course-container">
        <div class="notice-header">
          <span class="notice-p">找到如下"</span>
          <span class="notice-p-content">{{search_input}}</span>
          <span class="notice-p">"相关内容</span>
        </div>
        <Course2 v-if="show_course || show_all" :courses="courses"></Course2>
        <Video2 v-if="show_video || show_all" :courses="videos"></Video2>
        <Resource2 v-if="show_resource || show_all" :resources="resources"></Resource2>
      </div>
    </div>
    <Footer></Footer>
    <Register v-if="show_register"
              v-on:closeRegister="closeRegister" v-on:openLogin="openLogin"></Register>
    <Login v-if="show_login"
           v-on:closeLogin="closeLogin" v-on:openRegister="openRegister"
           v-on:successfulLogin="successfulLogin"></Login>
    <Option v-if="show_option" v-on:submitTable="closeOption"></Option>
  </div>
</template>

<script>

import Data from "./entity/Data"
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Option from "./components/Option.vue";
import Result from "./components/Result.vue";
import Video2 from "./components/Video2.vue";
import Resource2 from "@/components/Resource2";
import Course2 from "@/components/Course2";

export default {
  name: 'AppSearch',

  data() {
    return {
      successful_register: false,
      show_register: false,
      show_login: false,
      show_option:false,
      show_all:true,
      show_course:false,
      show_video:false,
      show_resource:false,
      successful_login: false,
      search_input:this.$route.query.search_input,
      imgList: new Data().courses,
      username: new Data().username,
      url: new Data().url,
      courses: new Data().courses,
      videos: new Data().videos,
      resources: new Data().resources,
      hot_question: new Data().resources
    }
  },

  components: {

    Register,
    Footer,
    Header,
    Login,
    Option,
    Result,
    Video2,
    Course2,
    Resource2
  },

  methods: {
    init() {
      if (this.search_input === '机器学习') {
        this.courses = new Data().machine_learning.courses;
        this.videos = new Data().machine_learning.videos;
        this.resources = new Data().machine_learning.resources;
      } else {
        console.log('deep learning')
        this.courses = new Data().deep_learning.courses;
        this.videos = new Data().deep_learning.videos;
        this.resources = new Data().deep_learning.resources;
      }
    },
    searchInput: function (input) {
      this.search_input = input
      if (this.search_input === '机器学习') {
        this.courses = new Data().machine_learning.courses;
        this.videos = new Data().machine_learning.videos;
        this.resources = new Data().machine_learning.resources;
      } else {
        console.log('deep learning')
        this.courses = new Data().deep_learning.courses;
        this.videos = new Data().deep_learning.videos;
        this.resources = new Data().deep_learning.resources;
      }
    },
    attemptLogin: function (input) {
      this.show_login = input
    },
    attemptRegister: function (input) {
      this.show_register = input
    },
    closeRegister: function (input) {
      this.show_register = false
      this.show_option = input;
    },
    openLogin: function (input) {
      this.show_register = !input
      this.show_login = input
    },
    closeLogin: function (input) {
      this.show_login = false
      this.successful_login = input
    },
    openRegister: function (input) {
      this.show_login = !input
      this.show_register = input
    },
    closeOption:function (input) {
      this.show_option=!input
      this.successful_register = input
      this.show_login = input
    },
    chooseToShow:function (input){
      if(input===0)
      {
        this.show_all=true;
        this.show_course=false;
        this.show_video=false;
        this.show_resource=false;
      }
      else if(input===1)
      {
        this.show_all=false;
        this.show_course=true;
        this.show_video=false;
        this.show_resource=false;
      }
      else if(input===2)
      {
        this.show_all=false;
        this.show_course=false;
        this.show_video=true;
        this.show_resource=false;
      }
      else if(input===3)
      {
        this.show_all=false;
        this.show_course=false;
        this.show_video=false;
        this.show_resource=true;
      }
    },
    successfulLogin: function (input) {
      var idx;
      if (input === "Chen Yuqi") {
        idx = 0;
      } else {
        idx = 1;
      }
      this.username = new Data().users[idx].user.name;
      this.url = new Data().users[idx].user.portrait_url;
    },
  },
  created() {
    this.init()
  }
}
</script>

<style>

a {
  text-decoration: none;
}


body{
  padding: 0;
  margin: 0;
}
.notice-p-content{
  color:rgb(143,161,205);
}
.notice-header{
  padding:60px 0 0 120px;
  margin-top: -9px;
}

.opacity_container {
  filter: opacity(50%);
}
</style>
