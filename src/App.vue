<template>
  <div id="app">
    <Header v-bind:login="tmp" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:loginRegister="loginRegister"></Header>
    <div class="bander-container">
      <Swiper class="swiper-outer-container" :width="700" :height="400" :imgList="imgList" :initIndex="0" :loop="true" :autoTime="8000"></Swiper>
    </div>
    <div class="cloud-container">
      <p class="cloud">主题指数</p>
      <div>
        <img src="./assets/cloud.png">
      </div>
    </div>
    <div>
      <button v-on:click="tmp=true">login</button>
      {{ tmp }}
    </div>
    <div>
      <p>{{ search_input }}</p>
      <p>{{ login_register }}</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Data from "./entity/Data"
import Header from "./components/Header.vue";
import Swiper from './components/Swiper.vue';
import Footer from "@/components/Footer";


export default {
  name: 'App',
  data() {
    return {
      login_register: false,
      search_input: "Search What?",
      tmp: false,
      imgList: new Data().imgList,
      username: new Data().username,
      url: new Data().url,
      cloud_url: "./assets/cloud.png",
    }
  },
  components: {
    Footer,
    Swiper,
    Header
  },
  methods: {
    searchInput: function (input) {
      this.search_input = input
    },
    loginRegister: function (input) {
      this.login_register = input
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
</style>
