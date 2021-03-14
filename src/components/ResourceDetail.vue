<template>
  <div class="resource-detail-container">
    <h2 class="resource-name"> {{ resource.name }}</h2>
    <div class="resource-inner-container">
      <div class="resource-another-container">
        <div  class="resource-information" v-if="resource.cover !== ''">
          <span class="title">博主：</span><span class="resource-p">{{resource.cover}}</span>
        </div>
          <br>
        <div class="resource-information">
          <span class="title">来源：</span> <span class="resource-p">{{resource.origin}}</span>
        </div>
        <br>
        <div class="resource-information">
        <span class="title">评分:</span>
          <span class="resource-score-h1"> {{ Math.floor(resource.score) / 10 }}</span>
          <div class="star-rating">
            <div class="star-rating-top" :style="{width:Math.floor(resource.score)+'%'}">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="star-rating-bottom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <br>
        <ul class="resource-ul-title" v-if="resource.titleList.length > 0">
          <li class="resource-li-title" v-for="(item,index) in resource.titleList.split('；').slice(0,4)" :key="index" >
            <p class="resource-p-title">{{item}}</p>
          </li>
        </ul>
        <div class="resource-view-container">
          <div v-on:click="submitWatch">
            <a :href="resource.url" target=_blank>
              <p class="resource-view-p">阅读全文</p>
            </a>
          </div>

          <p class="resource-p-amount">{{resource.amount}}点击</p>
        </div>
      </div>
    </div>
    <div class="resource-relative-container">
      <h3 class="resource-relative-h3">相似笔记</h3>
      <Resource class="resource-relative-course" :resources="relative_resource"></Resource>
    </div>

    <div class="post-outer-container">
      <posts4 class="post-outer-container" :postings="postings" :users="users" :course_title=" resource.name"></posts4>
    </div>


  </div>
</template>

<script>
import Resource from "../components/Resource.vue";
import Data from "../entity/Data"
import Posts4 from "../components/Posts4.vue";
export default {
  name: "ResourceDetail",
  data(){
    return{
      postings:new Data().postings,
      users: new Data().users,
    }
  },
  methods:{
    submitWatch(){
      console.log(this.resource.course_id)
      this.$axios.post('http://47.100.79.77:8080/User/watch?course_id='+this.resource.course_id, {
        headers:{   //设置上传请求头
          'Content-Type':'application/x-www-from-urlencoded',
        },
      }).then((res)=>{
        console.log(res.data)
      })
    }
  },
  props: {
    resource: Object,
    relative_resource: Array
  },
  components: {
    Resource,
    Posts4
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
h1 {
  padding: 0;
  margin: 0;
}
p{
  margin: 0;
  padding: 0;
}
.resource-score{
  display:flex;
}
.resource-name{
  margin-bottom:30px;
}
.resource-information{
  margin:0;
  display:flex;
}
.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin-top: -3px;
  margin-left: 5px;
  position: relative;
  display: table;
  padding: 0;
  text-shadow: 0 1px 0 #a2a2a2;
}

.star-rating span {
  padding: 5px;
  font-size: 20px;
}

.star-rating span:after {
  content: "★";
}

.star-rating-top {
  color: #FFD700;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.star-rating-bottom {
  padding: 0;
  display: block;
  z-index: 0;
}
.resource-ul-title {
  margin-left:-10px;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.resource-li-title {
  flex:0 0 50%;
}
.resource-p-title {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:5px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}

.resource-detail-container {
  margin: 30px 150px;
}
.resource-inner-container {
  margin-left: 0;
  margin-top: 10px;
  display: flex;
}

.resource-relative-container {
  margin:50px 0;
}
.title{
  color: black;
  font-size: 1.1em;

}
.resource-p {
  color: rgb(150,150,150);
  font-size: 1.1em;
  margin-left:0;
  padding:0;
}
.resource-p-amount{
  color: rgb(150,150,150);
  font-size: 1.1em;
  margin-left:10px;
  margin-top:10px;
  padding:0;
}
.resource-score-container {
  display: flex;
  justify-content: flex-start;
}
.resource-score-h1 {
  width: 50px;
  text-align: center;
  padding-top: 5px;
}
.resource-amount-p{
  margin-top: 10px;
}
.resource-view-container{
  margin-top: 20px;
  display: flex;

}
.resource-view-p {
  font-weight: bold;
  width: 90px;
  height: 30px;
  background-color: rgb(126,172,231);
  color: white;
  text-align: center;
  font-size: 1.1em;
  border-radius: 5px;
  padding-top: 5px;
}

.resource-another-container{
  margin-left: 0;
}
.post-outer-container{
  width:100%;
  margin-left:0;

}
.resource-relative-course{
  margin-left: -10px;
}

</style>

