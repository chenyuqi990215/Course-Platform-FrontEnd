<template>
  <div class="post-container">
    <p class="head">相关讨论</p>
    <div class="post-inner-container">
      <div class="upper-half">
        <div class="title-wrapper">
          <p :class="{selector_li:!other,selector_li_click:other}" v-on:click="change_other">全部类型</p>
          <p :class="{selector_li:!comment,selector_li_click:comment}" v-on:click="change_comment">课程推荐</p>
          <p :class="{selector_li:!question,selector_li_click:question}" v-on:click="change_question">课程答疑</p>
          <p :class="{selector_li:!experience,selector_li_click:experience}" v-on:click="change_experience">经验分享</p>

        </div>
        <div class="to-post" v-on:click="show_AddPosting">
          发布帖子
        </div>
      </div>
      <ul class="post-ul">
        <li class="post-li" v-for="(item,index) in postings.slice(start_num,start_num+4)" :key="index">
          <PostItem3 class="post-item" :post="item" :user="users[item.posting.user_id]" ></PostItem3>
        </li>
      </ul>
    </div>
    <AddPosting  class="add-posting" :course_title="course_title" v-if="AddPosting"></AddPosting>
  </div>
</template>

<script>
import PostItem3 from "./PostItem3.vue";
import AddPosting from "./AddPosting.vue"
export default {
  name: "Posts4.vue",
  data() {
    return {
      start_num:0,
      show_course: true,
      show_posting: false,
      all:false,
      comment:true,
      question:true,
      experience:true,
      other:true,
      AddPosting:false,
    }
  },
  methods: {
    showCourse() {
      this.show_course = true;
      this.show_posting = false;
    },
    showQuestion() {
      this.show_posting = true;
      this.show_course = false;
    },
    change_all(){
      this.postings = this.postingsCopy;
      this.all=false;
      this.hot=true;
      this.comment=true;
      this.experience=true;
      this.question=true;
    },

    change_comment(){
      this.postings = this.postingsCopy.filter(item => item.posting.type === "课程推荐");
      this.all=true;
      this.hot=true;
      this.comment=false;
      this.experience=true;
      this.question=true;
    },
    change_experience(){
      this.postings = this.postingsCopy.filter(item => item.posting.type === "经验分享");
      this.all=true;
      this.hot=true;
      this.comment=true;
      this.experience=false;
      this.question=true;
    },
    change_question(){
      this.postings = this.postingsCopy.filter(item => item.posting.type === "课程疑惑");
      this.all=true;
      this.hot=true;
      this.comment=true;
      this.experience=true;
      this.question=false;
    },
    change_other(){
      this.postings = this.postingsCopy;
      this.all=true;
      this.hot=false;
      this.comment=true;
      this.experience=true;
      this.question=true;
    },
    show_AddPosting(){
      this.AddPosting=!this.AddPosting;
    }
  },

  props:{
    postings:{
      type:Array
    },
    users:{
      type:Array
    },
    course_title: {
      type:String
    }
  },
  components: {
    PostItem3,
    AddPosting
  },
  created() {
    this.postingsCopy = this.postings;
  }
}
</script>

<style scoped>
.head{
  font-size: 1.2em;
  font-weight: bold;
}
.upper-half{
  display:flex;
}
.selector_li{
  color: rgb(143, 161, 205);
}
.title-wrapper{
  position: relative;
  display: flex;
  width:80%;
  flex-wrap: wrap;
  background-color: white;
  border-bottom: 3px solid rgb(230,230,230);
  margin:5px 0 30px 1%;
}
.title-wrapper p {
  color: rgb(100,100,100);
  margin: 10px 20px;
  cursor: pointer;
}

.title-wrapper p:hover{
  color: rgb(143, 161, 205);
}
.title-wrapper p::after{
  content:'';
  display:block;
  width:70px;
  height:3px;
  position:absolute;
  bottom:-3px;
  background-color: rgb(143, 161, 205);
  transition:all 0.3s ease-in-out;
  transform:scale3d(0,1,1);
  transform-origin:50% 0;
}
.title-wrapper p:hover::after{
  transform:scale3d(1,1,1);
}
.to-post{
  cursor: pointer;
  background-color: rgb(143, 161, 205) ;
  width:70px;
  text-align: center;
  color:white;
  border-radius: 5px;
  margin-top:32px;
  height:24px;
  margin-left: 10%;
}
.add-posting{
  margin:15px 0 30px 1%;
}
.post-container {
  background:white;

}

.post-ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display:flex;
  justify-content: flex-start;
}

.post-li {
  width:250px;
  padding: 0;
  margin: 0;
}
.post-item {
  margin: 0;
  padding: 0;
}

</style>