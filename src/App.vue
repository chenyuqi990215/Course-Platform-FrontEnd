<template>
  <div id="app">
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
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      username: "Chen Yuqi",
      login_register: false,
      search_input: "Search What?",
      tmp: false,
      url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251219681,3891116775&fm=26&gp=0.jpg"
    }
  },
  components: {
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
</style>
