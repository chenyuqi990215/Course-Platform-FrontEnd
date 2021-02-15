<template>
  <div class="source-container">
    <p>课程来源</p>
    <div class="source-wrapper">
      <img src="../assets/bilibili.png">
      <img src="../assets/mooc.png">
      <img src="../assets/jike.png">
      <img src="../assets/csdn.png">
      <img src="../assets/jianshu.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "Origin"
}
</script>

<style scoped>
img {
  height: 40px;
  margin-right: 10px;
}
.source-container {
  margin: 5% 10%;
}
.source-container p {
  font-size: 1.3em;
  font-weight: bold;
}

</style>