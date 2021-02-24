<template>
  <div class="msg-container">
    <p class="msg-p"> 我的信息 </p>
    <img class="msg-img" src="../assets/empty.png">
  </div>
</template>

<script>
export default {
  name: "Msg"
}
</script>

<style scoped>
.msg-container{
  background-color: white;
  width: 70%;
  margin: 30px;
  height: 700px;
  text-align: center;
}
.msg-p {
  margin: 30px 0;
  font-size: large;
  font-weight: bold;
}
.msg-img {
  width: 300px;
  height: 300px;
}
</style>