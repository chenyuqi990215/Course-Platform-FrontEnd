<template>
  <div class="resource-detail-container">
    <p class="resource-score-p">评分</p>
    <h2 class="resource-name"> {{ resource.resource.name }}</h2>
    <div class="resource-inner-container">
      <div class="resource-another-container">
        <p class="resource-score-p">评分</p>
        <div class="resource-score-container">
          <h1 class="resource-score-h1"> {{ Math.floor(resource.resource.score) / 10 }}</h1>
          <div class="star-rating">
            <div class="star-rating-top" :style="{width:Math.floor(resource.resource.score)+'%'}">
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
        <p class="resource-amount-p"><span class="resource-amount-span">{{resource.resource.amount}}</span>播放</p>

        <ul class="resource-ul-title" v-if="resource.resource.titleList.length > 0">
          <li class="resource-li-title" v-for="(item,index) in resource.resource.titleList.split('；').slice(0,4)" :key="index" >
            <p class="resource-p-title">{{item}}</p>
          </li>
        </ul>
        <div class="resource-view-container">
          <a :href="resource.resource.url" target=_blank>
            <p class="resource-view-p">立即浏览</p>
          </a>
          <p class="resource-origin">来源：{{resource.resource.origin}}</p>
        </div>
      </div>
    </div>
    <div class="post-outer-container">
      <posts4 class="post-outer-container" :postings="postings" :users="users" :course_title=" resource.resource.name"></posts4>
    </div>

    <div class="resource-relative-container">
      <h3 class="resource-relative-h3">相似课程</h3>
      <Resource class="resource-relative-course" :resources="relative_resources"></Resource>
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

  props: {
    resource: Object,
    relative_resources: Array
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
.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin-top: 5px;
  margin-left: 15px;
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
.resource-ul-university {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.resource-li-university {
  flex:0 0 50%;
}
.resource-p-university {
  width:80px;
  background-color: rgb(143, 161, 205);
  color: white;
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
  margin: 10px;
  display: flex;
}

.resource-relative-container {
  margin: 0;
}
.resource-score-p {
  color: rgb(150,150,150);
  font-size: 1.1em;
}
.resource-score-container {
  display: flex;
  justify-content: flex-start;
}
.resource-score-h1 {
  width: 50px;
  text-align: center;
}
.resource-amount-p{
  margin-top: 10px;
}
.resource-view-container{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
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
.resource-origin{
  color: rgb(150,150,150);
  margin-top: 5px;
  margin-left: 20px;
}
.resource-another-container{
  margin-left: 100px;
}
.post-outer-container{
  width:100%;
  margin-left:0;

}
</style>