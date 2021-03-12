<template>
  <div id="home">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"
            v-on:toCenter="toCenter"></Header>
    <div :class="{opacity_container: show_register || show_login || show_option}">
      <div class="tag-container">
        <a href="#"><p>首页</p></a>
        <a href="#"><p>优质课程</p></a>
        <a href="#"><p>优质视频</p></a>
        <a href="#"><p>优质资源</p></a>
        <a href="#"><p v-on:click="toPosting">论坛讨论</p></a>
      </div>
      <div class="bander-container">
        <Swiper class="swiper-outer-container" :width="700" :height="400" :imgList="browse_course" :initIndex="0" :loop="true"
                :autoTime="8000"></Swiper>
        <Hot :width="500" :height="400" :hot_course="hot_course" :hot_posting="hot_posting"></Hot>
      </div>
      <div class="cloud-container">
        <p class="cloud">主题指数</p>
        <div>
          <img src="./assets/cloud.png">
        </div>
      </div>
      <div style="margin-right: 20%">
        <posts3 class="post-outer-container" :postings="postings" :users="users" v-if="successful_login"></posts3>
      </div>

      <Interest :courses="hot_course" :resources="hot_resource" :interests="interests"
                v-if="successful_login"></Interest>

      <Origin></Origin>
    </div>
    <Footer></Footer>
    <Register v-if="show_register"
              v-on:closeRegister="closeRegister" v-on:openLogin="openLogin"></Register>
    <Login v-if="show_login"
           v-on:closeLogin="closeLogin" v-on:openRegister="openRegister"
           v-on:successfulLogin="successfulLogin"></Login>
    <Option v-if="show_option" v-on:submitTable="closeOption" v-on:stepOver="stepOver"></Option>
  </div>
</template>

<script>

import Data from "./entity/Data"
import Header from "./components/Header.vue";
import Swiper from './components/Swiper.vue';
import Footer from "./components/Footer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Option from "./components/Option.vue";
import Hot from "./components/Hot.vue";
import Origin from "./components/Origin";
import Interest from "@/components/Interest";
import Posts3 from "./components/Posts3.vue";


export default {
  name: 'Home',
  data() {
    return {
      successful_register: false,
      show_register: false,
      show_login: false,
      show_option: false,

      search_input: "Search What?",
      successful_login: false,
      browse_course: [],
      username: "",
      url: "",
      cloud_url: "./assets/cloud.png",
      hot_course: [],
      hot_posting: [],
      hot_resource: new Data().resources,
      step_over: false,
      interests: new Data().interests,
      user_id: 0,
      users: new Data().users,
      postings: []
    }
  },
  components: {
    Interest,
    Origin,
    Hot,
    Register,
    Footer,
    Swiper,
    Header,
    Login,
    Option,
    Posts3,
  },
  methods: {
    init() {
      this.$axios.get('http://47.100.79.77:8080/Posting/hot',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.hot_posting = res.data
        this.postings = res.data
      })
      this.$axios.get('http://47.100.79.77:8080/Course/hot',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.hot_course = res.data
      })
      this.$axios.get('http://47.100.79.77:8080/User/getDetail', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        let n = res.data.indexOf("!DOCTYPE html");
        if (n >= 0) {
          this.$axios.get('http://47.100.79.77:8080/Course/hot',{
            headers: {   //设置上传请求头
              'Content-Type': 'application/json',
            },
          }).then((res) => {
            this.browse_course = res.data
          })
        } else {
          this.successful_login = true
          this.username = res.data[0].name
          this.url = res.data[0].portrait_url
          this.successful_login = true
          this.$axios.get('http://47.100.79.77:8080/User/recentBrowse',{
            headers: {   //设置上传请求头
              'Content-Type': 'application/json',
            },
          }).then((res) => {
            this.browse_course = res.data
          })
        }
      })
    },
    searchInput: function (input) {
      this.search_input = input
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
    closeOption: function (input) {
      this.stepOver(true)
      this.show_option = !input
      this.successful_register = input
      this.show_login = !input
    },
    successfulLogin: function (input) {
      this.successful_login = input;
      this.init()
    },
    stepOver: function (input) {
      this.step_over = input;
      this.show_register = !input;
      if (input) {
        this.init();
      }
    },
    toPosting() {
      this.$router.push({
        name: 'Post',
      })
    },
    toCenter() {
      this.$router.push({
        name: 'Center',
        query: {
          id: this.user_id,
        }
      })
    },
  },
  created() {
    this.init()
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
}

.tag-container {
  padding-left: 10%;
  background-color: rgb(231, 231, 231);
  display: flex;
}

.tag-container p {
  color: black;
  margin-right: 50px;
}

body {
  padding: 0;
  margin: 0;
}

.swiper-outer-container {
  border-left: solid 70px;
  border-right: solid 70px;
  border-image: linear-gradient(to left, black 0%, rgb(200, 200, 200) 10%, rgb(200, 200, 200) 90%, black 100%) 60 60 60 60;
}

.bander-container {
  display: flex;
  background-color: black;
  justify-content: center;
}

.cloud-container {
  background-color: white;
  margin: 5% 10%;
}

.cloud-container p {
  font-weight: bold;
  font-size: 1.3em;
}

.cloud-container img {
  padding: 30px;
  width: 600px;
}

.cloud-container div {
  border: 8px solid rgb(128, 168, 245);
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 8px;
}

.post-outer-container {
  margin-top: 50px;
  margin-bottom: 50px;
}

.opacity_container {
  filter: opacity(50%);
}

.post-outer-container {
  width: 100%;
}
</style>
