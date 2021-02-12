<template>
  <div id="app">
    <!--
    <Header v-bind:login="tmp" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:loginRegister="loginRegister">
    "loginRegister"></Header>
    <div>
      <button v-on:click="tmp=true">login</button>
      {{ tmp }}
    </div>
    <div>
      <p>{{ search_input }}</p>
      <p>{{ login_register }}</p>
    </div>
    !-->
    <div>
      <Swiper class="swiper-outer-container" :width="300" :height="300" :imgList="imgList" :initIndex="0" :loop="true" :autoTime="8000"></Swiper>
    </div>

    </div>
</template>

<script>

import Course from './entity/Course'
import Swiper from './components/Swiper.vue'

export default {
  name: 'App',
  data() {
    return {
      username: "Chen Yuqi",
      login_register: false,
      search_input: "Search What?",
      tmp: false,
      url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251219681,3891116775&fm=26&gp=0.jpg",
      imgList:[
        {
          'course': new Course(1,'pika','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251219681,3891116775&fm=26&gp=0.jpg')
        },
        {
          'course': new Course(2,'pika','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F05%2F20180905224158_bhexz.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615610456&t=9c1fdc23cdbb130dd82376a8a931a9c4')
        },
        {
          'course': new Course(3,'pika','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F08%2F11%2F147089479765239481.JPEG&refer=http%3A%2F%2Fn1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615610456&t=38fd7379f1f5adba999fd8c2b8950c09')
        }
      ]
    }
  },
  components: {
    Swiper
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
  border-left: solid 60px;
  border-right: solid 60px;
  border-image: linear-gradient(to left, black 0%, rgb(200,200,200) 15%, rgb(200,200,200) 85%, black 100%) 50 50 50 50;
}
</style>
