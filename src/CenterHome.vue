<template>
  <div id="post" class="post">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"></Header>
    <div :class="{opacity_container: show_register || show_login || show_option}">
      <div class="tag-container">
        <a href="#"><p>首页</p></a>
        <a href="#"><p>优质课程</p></a>
        <a href="#"><p>优质视频</p></a>
        <a href="#"><p>优质资源</p></a>
        <a href="#"><p v-on:click="toPosting">论坛讨论</p></a>
      </div>
      <div class="center-container">
        <CenterNav v-on:CenterSelect="CenterSelect" :user="user" :msg_count="msg_count"></CenterNav>
        <Info class="info-outer-container" v-if="type === 'info'"></Info>
        <Save class="info-outer-container" v-if="type === 'save'"></Save>
        <Msg class="info-outer-container" v-if="type === 'msg'"></Msg>
        <Post class="info-outer-container" v-if="type === 'post'"></Post>
      </div>
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
import Data from "./entity/Data";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Option from "./components/Option.vue";
import CenterNav from "@/components/CenterNav";
import Info from "@/components/Info";
import Save from "@/components/Save";
import Post from "@/components/Post";
import Msg from "@/components/Msg"


export default {
  name: 'CenterHome',
  data() {
    return {
      successful_register: false,
      show_register: false,
      show_login: false,
      show_option: false,
      search_input: "机器学习",
      successful_login: false,
      username: new Data().username,
      url: new Data().url,
      step_over: false,
      users: new Data().users,
      user: new Data().users[0].user,
      type: 'info',
      msg_count: 100,
    }
  },
  components: {
    CenterNav,
    Register,
    Footer,
    Header,
    Login,
    Option,
    Info,
    Save,
    Msg,
    Post
  },
  methods: {
    init() {
      console.log("init");
      this.$axios.get('http://47.100.79.77:8080/User/getDetail', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        let n = res.data.indexOf("!DOCTYPE html");
        if (n >= 0) {
          console.log(n)
        } else {
          this.successful_login = true
          this.username = res.data[0].name
          this.url = res.data[0].portrait_url
          this.successful_login = true
          this.user = res.data[0]
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
    stepOver: function (input) {
      this.step_over = input;
      this.show_register = !input;
      if (input) {
        this.init();
      }
    },
    successfulLogin: function (input) {
      this.successful_login = input;
      this.init()
    },
    toPosting() {
      this.$router.push({
        name: 'Post',
      })
    },
    CenterSelect(input) {
      this.type = input
    },
  },

  created() {
    this.init()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
body{
  padding: 0;
  margin: 0;
}
.center-container {
  display: flex;
  background-color: rgb(250,250,250);
}
.opacity_container {
  filter: opacity(50%);
}
.info-outer-container {
  margin-left: 40%;
}
</style>