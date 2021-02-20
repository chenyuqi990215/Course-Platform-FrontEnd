<template>
  <div class="post-item-container">
    <div class="upper-half">
      <div class="post-title">
        <a :href="post.posting.url">
          <p class="post-item-title">{{post.posting.title}}</p>
        </a>
        <div class="center-part">
          <p class="ov">{{post.posting.content}}</p>
        </div>
        <div class="bottom-part">
          <div class="zan" v-if="!zan_click" v-on:click="change_zan">
            <img class="bottom-img"  src="../assets/zan.png" alt="zan">
            <span class="bottom-img-num">{{post.posting.counter}}</span>
          </div>
          <div class="zan" v-if="zan_click" v-on:click="change_zan">
            <img class="bottom-img"  src="../assets/zan-click.png" alt="zan">
            <span class="bottom-img-num">{{post.posting.counter}}</span>
          </div>
          <div class="cai" v-if="!cai_click" v-on:click="change_cai">
            <img class="bottom-img"  src="../assets/cai.png" alt="cai">
          </div>
          <div class="cai" v-if="cai_click" v-on:click="change_cai">
            <img class="bottom-img"  src="../assets/cai-click.png" alt="cai">
          </div>
          <div class="comment">
            <img class="bottom-img"  src="../assets/talk.png" alt="talk">
            <span class="bottom-img-num">{{post.posting.comment_num}}</span>
          </div>
          <div class="time">
            <span class="bottom-img-num">{{post.posting.post_time}}</span>
          </div>
        </div>
      </div>

      <div class="user-container">
        <img class="user-img" :src="user.user.portrait_url" alt="user-img">
        <span class="user-name">{{ user.user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem.vue",
  data(){
    return {
      userid:this.post.posting.user_id,
      zan_click:false,
      cai_click:false,
    }
  },

  props: {
    post: Object,
    user: Object
  },
  methods:{
    change_zan(){
      this.zan_click=!this.zan_click;
    },
    change_cai(){
      this.cai_click=!this.cai_click;
    },
  }

}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
li {
  padding: 0;
  margin: 0;
}
.upper-half{
  display:flex;
  justify-content: space-between;
}
.post-item-container {
  margin:30px 0;
  width:90%;
  background:white;
}
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.post-item-title {
  color: black;
  font-size: 1.1em;
  max-width: 600px;
  margin-left: 15px;
}

.post-item-ul {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin:7px 3px 0;
  width: 250px;
}
.post-item-li {
  flex:0 0 50%;

}
.post-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.post-title{

}
.user-name {
  margin: 0 10px;
  font-size: small;
  color: rgb(61,61,61);

}
.user-img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: -5px;
}
.user-container{
  display:flex;
  float:right;
  margin-right:20px;
}
.ov{
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  font-size: smaller;
  width:600px;
  margin:20px 20px;
}
.bottom-img{
  width:15px;
  height:15px;
  margin:10px 0 10px 20px;
}
.bottom-img-num{
  font-size: smaller;
  margin-top:8px;
  color: rgb(200,200,200);
}
.bottom-part{
  display:flex;

}
.zan{
  display:flex;
}
.comment{
  margin:0 auto 0 20px;
  display:flex;
}
</style>