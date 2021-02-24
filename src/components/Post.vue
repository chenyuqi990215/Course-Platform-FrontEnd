<template>
  <div class="post-container">
    <p class="post-p"> 我的帖子 </p>
    <img class="post-img" src="../assets/empty.png">
  </div>
</template>

<script>
export default {
  name: "Post"
}
</script>

<style scoped>
.post-container{
  background-color: white;
  width: 70%;
  margin: 30px;
  height: 700px;
  text-align: center;
}
.post-p {
  margin: 30px 0;
  font-size: large;
  font-weight: bold;
}
.post-img {
  width: 300px;
  height: 300px;
}
</style>