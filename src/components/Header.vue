<template>
  <div class="header-container">
    <header>
      <div class="container">
        <img class="logo" src="../assets/logo1.svg" alt="Logo">
        <p class="title">云享课堂</p>
        <div class="search-container">
          <form @submit.prevent="Search">
            <input class="input-box" type="text" placeholder="求知是人类的本性" v-model="search_input">
          </form>
          <img class="search-logo" src="../assets/search.svg" alt="Search Img" v-on:click="Search">
        </div>
        <div class="self-center-container">
          <p class="text" v-if="login">个人中心</p>
        </div>
        <div class="self-container">
          <p class="text" v-if="!login" v-on:click="LoginRegister"> 登录/注册</p>
          <p class="text" v-if="login"> {{ username }}</p>
          <img class="portrait" v-if="!login" src="../assets/portrait.svg" alt="Demo Portrait">
          <img class="portrait" v-if="login" v-bind:src="portrait_url" alt="My Portrait">
        </div>
      </div>
    </header>
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    login: Boolean,
    username: String,
    portrait_url: String
  },
  data() {
    return {
      search_input: "",
    }
  },
  methods: {
    Search() {
      this.$emit('searchInput', this.search_input)
    },
    LoginRegister() {
      this.$emit('loginRegister', true)
    }
  }
}
</script>

<style scoped>

div {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.header-container {
  background-color: rgb(78, 78, 78);
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.search-container {
  display: flex;
  margin-left: 15%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

.search-container:before {
  content: "";
  width: 20px;
  height: 30px;
  left: 150px;
  background-color: white;
  position: absolute;
}

.self-container {
  margin-top: 15px;
  width: 200px;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
}

.self-center-container {
  margin-top: 15px;
  width: 100px;
  margin-left: 5%;
}

.logo {
  width: 4%;
  padding: 10px 20px 10px 10%;
}

.title {
  color: rgb(143, 161, 205);
  font-size: 1.4em;
  padding-top: 10px;
  letter-spacing: 5px;
}

input {
  outline: none;
}

input:focus {
  outline: none;
}

.input-box {
  padding: 0;
  height: 30px;
  width: 150px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 0;
  text-indent: 10px;
}

.search-logo {
  height: 30px;
  z-index: 3;
}

.text {
  color: white;
  font-size: .9em;
  margin: 0 10px;
  font-weight: bold;
}

.portrait {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: -5px;
}

</style>
