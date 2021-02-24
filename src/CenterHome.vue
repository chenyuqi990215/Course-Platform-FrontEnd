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
    <Option v-if="show_option" v-on:submitTable="closeOption"></Option>
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
      show_option:false,
      search_input: "机器学习",
      successful_login: false,
      username: new Data().username,
      url: new Data().url,
      users: new Data().users,
      user: new Data().users[0].user,
      type: 'info',
      user_id: this.$route.query.id,
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
    closeOption:function (input) {
      this.show_option=!input
      this.successful_register = input
      this.show_login = input
    },
    successfulLogin: function (input) {
      if (input === "Chen Yuqi") {
        this.user_id = 0;
      } else {
        this.user_id = 1;
      }
      this.username = new Data().users[this.user_id].user.name;
      this.url = new Data().users[this.user_id].user.portrait_url;
    },
    toPosting() {
      this.$router.push({
        name: 'Post',
      })
    },
    CenterSelect(input) {
      this.type= input
    }
  },
  created() {
    this.user = this.users[this.user_id].user;
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