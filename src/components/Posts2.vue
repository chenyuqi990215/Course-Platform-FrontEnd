<template>
<div class="post-container">
  <div class="divider-name">
    <ul class="post-ul">
      <li class="post-li" v-for="(item,index) in postings" :key="index">
        <PostItem class="post-item" :post="item" :user="users[item.posting.user_id]"></PostItem>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  name: "Posts2.vue",
  props:{
    postings:{
      type:Array
    },
    users:{
      type:Array
    },
  },
  components: {
    PostItem,
  },
}
</script>

<style scoped>
.post-container {

  background:white;
  margin:0;
}

p{
  margin:20px;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
span{
  margin:0;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.post-ul {
  margin:0;
  padding: 0;
}
.post-li {

  padding: 0;

}
.post-item {
  margin: 0;
  padding: 20px;
}
</style>