<template>
  <div class="save-container">
    <p class="save-p"> 我的收藏 </p>
    <img class="save-img" src="../assets/empty.png">
  </div>
</template>

<script>
export default {
  name: "Save"
}
</script>

<style scoped>
.save-container{
  background-color: white;
  width: 70%;
  margin: 30px;
  height: 700px;
  text-align: center;
}
.save-p {
  margin: 30px 0;
  font-size: large;
  font-weight: bold;
}
.save-img {
  width: 300px;
  height: 300px;
}
</style>