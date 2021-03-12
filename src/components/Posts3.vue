<template>
  <div class="post-container">
      <p class="head">论坛讨论</p>
      <ul class="post-ul">
        <li class="post-li" v-for="(item,index) in postings.slice(start_num,start_num+4)" :key="index">
          <PostItem3 class="post-item" :post="item" ></PostItem3>
        </li>
      </ul>

  </div>
</template>

<script>
import PostItem3 from "./PostItem3.vue";

export default {
  name: "Posts3.vue",
  data(){
    return{
      start_num:0,
    }
  },
  props:{
    postings:{
      type:Array
    },
  },
  components: {
    PostItem3,
  },
}
</script>

<style scoped>
.head{
  font-size: 1.4em;
  font-weight: bold;
}
.post-container {
  width:100%;
  margin-left:13%;
  background:white;

}

.post-ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display:flex;
}

.post-li {
  width:25%;
  padding: 0;
  margin: 0;
}
.post-item {
  margin: 0;
  padding: 0;

}
</style>