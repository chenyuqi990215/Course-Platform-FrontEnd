<template>
  <div class="post-item-container">
    <div class="upper-container">
      <div class="user-container">
        <img class="user-img" :src="post.portrait_url" alt="user-img">
        <span class="user-name">{{ post.name }}</span>
      </div>
      <div class="type">
        <p>{{post.type}}</p>
      </div>
    </div>

      <div class="title-container">
          <p class="post-item-title">{{post.title}}</p>
      </div>

        <div class="center-part">
          <p class="ov">{{post.content}}</p>
        </div>
        <div class="bottom-part">
          <div class="zan" v-if="!zan_click" v-on:click="change_zan">
            <img class="bottom-img"  src="../assets/zan.png" alt="zan">
            <span class="bottom-img-num">{{post.counter}}</span>
          </div>
          <div class="zan" v-if="zan_click" v-on:click="change_zan">
            <img class="bottom-img"  src="../assets/zan-click.png" alt="zan">
            <span class="bottom-img-num">{{post.counter}}</span>
          </div>
          <div class="cai" v-if="!cai_click" v-on:click="change_cai">
            <img class="bottom-img"  src="../assets/cai.png" alt="cai">
          </div>
          <div class="cai" v-if="cai_click" v-on:click="change_cai">
            <img class="bottom-img"  src="../assets/cai-click.png" alt="cai">
          </div>
          <div class="comment">
            <img class="bottom-img"  src="../assets/talk.png" alt="talk">
            <span class="bottom-img-num">{{post.comment_num}}</span>
          </div>
          <div class="time">
            <span class="bottom-img-num">{{post.post_time}}</span>
          </div>
        </div>
      </div>



</template>

<script>
export default {
  name: "PostItem3.vue",
  data(){
    return {
      zan_click:false,
      cai_click:false,
    }
  },

  props: {
    post: Object,
  },
  methods:{
    change_zan(){
      this.zan_click=!this.zan_click;
      if (this.zan_click) {
        this.$axios.post('http://1.117.107.95:8080/Posting/like?post_id=' + this.post.post_id, {
          headers:{   //设置上传请求头
            'Content-Type':'application/x-www-from-urlencoded',
          },
        }).then((res)=>{
          if (res.data !== "收藏成功") {
            this.$message({
              message: "收藏失败",
              type: 'error',
              duration: 2 * 1000
            })
          }
        })
      }
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
.upper-container{
  display:flex;
}
.type{
  background-color: rgb(230, 230, 230);
  color:#a2a2a2;
  border-radius: 5px;
  font-size: 0.5em;
  width:30%;
  text-align: center;
  margin-right: 5px;
  height:20%;
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
  font-size: 0.7em;
  max-width: 100%;
  font-weight: bold;
  margin-left: 15px;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.title-container{
  height:32px;
}
.user-name {
  margin: 0 10px;
  font-size: small;
  color: rgb(61,61,61);

}
.user-img{
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-top: -20px;
}
.user-container{
  display:flex;
  padding:15px;
}
.center-part{

  height:32px;
  margin:0;
  padding:0;

}
.ov{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-left: 15px;
  font-size: 0.5em;
  line-height: 16px;
}
.bottom-img{
  width:13px;
  height:13px;
  margin:10px 0 10px 7px;
}
.bottom-img-num{
  font-size: 0.5em;
  margin-top:8px;
  margin-left: 4px;
  color: rgb(200,200,200);
}
.bottom-part{
  display:flex;

}
.zan{
  display:flex;
  margin-left:10px;
}
.comment{
  margin:0 auto 0 5px;
  display:flex;
}
.time{
  margin-top: 5px;
  margin-left:10px;
}
</style>