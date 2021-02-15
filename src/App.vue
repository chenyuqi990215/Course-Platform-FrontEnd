<template>
  <div id="app">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"
            :class="{opacity_container: show_register || show_login||show_option}"></Header>
    <div class="bander-container" :class="{opacity_container: show_register || show_login||show_option}">
      <Swiper class="swiper-outer-container" :width="700" :height="400" :imgList="imgList" :initIndex="0" :loop="true" :autoTime="8000"></Swiper>
    </div>
    <div class="cloud-container" :class="{opacity_container: show_register || show_login||show_option}">
      <p class="cloud">主题指数</p>
      <div>
        <img src="./assets/cloud.png">
      </div>
    </div>

    <Footer :class="{opacity_container: show_register || show_login||show_option}"></Footer>
    <Register v-if="show_register"
              v-on:closeRegister="closeRegister" v-on:openLogin="openLogin"></Register>
    <Login v-if="show_login"
           v-on:closeLogin="closeLogin" v-on:openRegister="openRegister"></Login>
    <Option v-if="show_option" v-on:submitTable="closeOption"></Option>
    {{show_option}}
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


export default {
  name: 'App',
  data() {
    return {
      successful_register: false,
      show_register: false,
      show_login: false,
      show_option:true,

      search_input: "Search What?",
      successful_login: false,
      imgList: new Data().imgList,
      username: new Data().username,
      url: new Data().url,
      cloud_url: "./assets/cloud.png",
    }
  },
  components: {
    Register,
    Footer,
    Swiper,
    Header,
    Login,
    Option
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
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  padding: 0;
  margin: 0;
}
.swiper-outer-container {
  margin-left: 10%;
  border-left: solid 70px;
  border-right: solid 70px;
  border-image: linear-gradient(to left, black 0%, rgb(200,200,200) 10%, rgb(200,200,200) 90%, black 100%) 60 60 60 60;
}
.bander-container {
  background-color: black;
}
.cloud-container {
  background-color: white;
  margin: 5% 10%;
}
.cloud-container p{
  font-weight: bold;
  font-size: 1.3em;
}
.cloud-container img {
  padding: 30px;
  width: 600px;
}
.cloud-container div {
  border: 8px solid rgb(128,168,245);
  padding-left: 20%;
  padding-right: 20%;
  border-radius:8px;
}
.opacity_container {
  filter: opacity(50%);
}
</style>
