<template>
  <div id="post" class="post">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"></Header>
    <div :class="{opacity_container: show_register || show_login || show_option}">
      <nav>
        <span class="goToHome">首页</span>
        <span>></span>
        <span class="here">论坛讨论</span>
      </nav>
      <div class="posting-container">
        <div class="selector">
          <ul class="selector-ul">
            <li :class="{selector_li:all,selector_li_click:!all}" v-on:click="change_all">
              看帖
            </li>
            <li  :class="{selector_li:hot,selector_li_click:!hot}" v-on:click="change_hot" >
              热门
            </li>
            <li :class="{selector_li:comment,selector_li_click:!comment}" v-on:click="change_comment">
              推荐
            </li>
            <li :class="{selector_li:question,selector_li_click:!question}" v-on:click="change_question">
              答疑
            </li>
            <li :class="{selector_li:experience,selector_li_click:!experience}" v-on:click="change_experience">
              经验
            </li>
          </ul>
        </div>
        <Posts2 class="post-outer-container" :postings="postings" :users="users"></Posts2>
        <AddPosting :course_title="''"></AddPosting>
      </div>
    </div>
    <Footer></Footer>
    <Register v-if="show_register"
              v-on:closeRegister="closeRegister" v-on:openLogin="openLogin"></Register>
    <Login v-if="show_login"
           v-on:closeLogin="closeLogin" v-on:openRegister="openRegister"></Login>
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
import Posts2 from "./components/Posts2.vue";
import AddPosting from "./components/AddPosting.vue";

export default {
  name: 'Posts',

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
      postings:new Data().postings,
      users: new Data().users,
      all:false,
      hot:true,
      comment:true,
      question:true,
      experience:true
    }
  },
  components: {
    Posts2,
    Register,
    Footer,
    Header,
    Login,
    Option,
    AddPosting
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
    change_all(){
      this.all=false;
      this.hot=true;
      this.comment=true;
      this.experience=true;
      this.question=true;
    },
    change_hot(){
      this.all=true;
      this.hot=false;
      this.comment=true;
      this.experience=true;
      this.question=true;
    },
    change_comment(){
      this.all=true;
      this.hot=true;
      this.comment=false;
      this.experience=true;
      this.question=true;
    },
    change_experience(){
      this.all=true;
      this.hot=true;
      this.comment=true;
      this.experience=false;
      this.question=true;
    },
    change_question(){
      this.all=true;
      this.hot=true;
      this.comment=true;
      this.experience=true;
      this.question=false;
    }
  }
}
</script>

<style>
.post{
  background:whitesmoke;
}
a {
  text-decoration: none;
}

.post-outer-container {
  width: 100%;
}

body{
  padding: 0;
  margin: 0;
}


.opacity_container {
  filter: opacity(50%);
}
span{
  color: rgb(120,120,120);
  margin:4px;
}
nav{
  background:rgb(220,220,220);
  padding:20px 10%;
}
.goToHome{
  cursor:pointer;
}
.here{
  cursor:pointer;
}
.posting-container{
  margin:0 10%;
}
.selector{
  background: rgb(230,230,230);
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}
.selector-ul{
  display:flex;
  margin:20px 0 0;
  padding:0;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}
.selector_li{
  font-size:larger;
  color:rgb(78, 78, 78);
  padding:15px 30px 15px 30px;
  display:block;
  text-decoration: none;
  cursor:pointer;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}
.selector_li_click{
  font-size:larger;
  color:white;
  padding:15px 30px 15px 30px;
  display:block;
  background:rgb(143,161,205);
  text-decoration: none;
  cursor:pointer;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}
</style>
