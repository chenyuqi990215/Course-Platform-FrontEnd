<template>
  <div class="info-container">
    <p class="info-p"> 我的信息 </p>
    <img class="info-img" src="../assets/empty.png">
  </div>
</template>

<script>
export default {
name: "Info"
}
</script>

<style scoped>
.info-container{
  background-color: white;
  width: 70%;
  margin: 30px;
  height: 700px;
  text-align: center;
}
.info-p {
  margin: 30px 0;
  font-size: large;
  font-weight: bold;
}
.info-img {
  width: 300px;
  height: 300px;
}
</style>