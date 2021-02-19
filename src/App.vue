<template>
  <div id="app">
    <router-view></router-view>
    <AddPosting course_title=""></AddPosting>
  </div>
</template>

<script>

import AddPosting from "@/components/AddPosting";
export default {
  name: 'App',
  components: {
    AddPosting
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
