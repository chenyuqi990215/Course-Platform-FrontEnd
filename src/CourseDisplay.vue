<template>
  <div id="display">
    <Header v-bind:login="successful_login" v-bind:username="username" v-bind:portrait_url="url"
            v-on:searchInput="searchInput" v-on:login="attemptLogin" v-on:attemptRegister="attemptRegister"></Header>
    <div :class="{opacity_container: show_register || show_login || show_option}">
      <div class="tag-container">
        <p>
          首页  >  <span>{{ type }}</span> >  <span>{{ course.course.name }}</span>
        </p>
      </div>
      <CourseDetail :course="course" :relative_course="relative_course"></CourseDetail>
    </div>
    <Footer :class="{opacity_container: show_register || show_login || show_option}"></Footer>
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
import CourseDetail from "@/components/CourseDetail";
export default {
  name: 'CourseDisplay',
  data() {
    return {
      successful_register: false,
      show_register: false,
      show_login: false,
      show_option:false,
      search_input: "Search What?",
      successful_login: false,
      username: new Data().username,
      url: new Data().url,
      course_id: this.$route.params.id,
      course_name: this.$route.params.name,
      relative_course: new Data().relative_course,
      course : new Data().total_courses[0],
      type: this.$route.params.type
    }
  },
  components: {
    CourseDetail,
    Register,
    Footer,
    Header,
    Login,
    Option,
  },
  methods: {
    init() {
      this.course = new Data().total_courses[this.course_id];
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
    closeOption:function (input) {
      this.show_option=!input
      this.successful_register = input
      this.show_login = input
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
    }
  },
  created() {
    console.log('created Event  --> Goto init()')
    this.init()
  }
}
</script>

<style>
#courseDetail {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
body{
  padding: 0;
  margin: 0;
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
.opacity_container {
  filter: opacity(50%);
}
</style>