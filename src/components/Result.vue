<template>
  <div class="course-container">
  <div>
  <ul class="all-results">
    <li v-on:click="showAll" v-bind:class="{choose:all}">
      <span>全部</span>
      <span class="bracket-left">(</span>
      <span>{{courses.length+resources.length+videos.length}}</span>
      <span>)</span>
    </li>
    <li v-on:click="showCourse" v-bind:class="{choose:course}">
      <span>优质课程</span>
      <span class="bracket-left">(</span>
      <span>{{courses.length}}</span>
      <span>)</span>
    </li>
    <li v-on:click="showVideo" v-bind:class="{choose:video}">
      <span>优质视频</span>
      <span class="bracket-left">(</span>
      <span>{{videos.length}}</span>
      <span>)</span>
    </li>
    <li v-on:click="showResource" v-bind:class="{choose:resource}">
      <span>优质资源</span>
      <span class="bracket-left">(</span>
      <span>{{resources.length}}</span>
      <span>)</span>
    </li>

  </ul>
  </div>
    <div class="allResult-container">

    <hr>
  <p class="divide">课程筛选</p>
      <ul class="tags">
        <li class="tags-list" v-for="(data,index) in tag_options " :key='index' v-bind:class="{classes:!tag_states[index].tag,showClasses:tag_states[index].tag}" v-on:click="showOption(index)">
          <p class="tags-p">
            {{data.tag}}
          </p>
        </li>
      </ul>
  </div>
  </div>


</template>

<script>
export default {
name: "Result",
  data(){
    return{
     tag_options:[
       {"tag":"全部"},
       {"tag":"慕课网"},
       {"tag":"bilibili"},
       {"tag":"极客学院"},
       {"tag":"CSDN"},
       {"tag":"简书"}

     ],
      tag_states:[
        {"tag":false},
        {"tag":false},
        {"tag":false},
        {"tag":false},
        {"tag":false},
        {"tag":false}
      ],
      all:false,
      course:false,
      video:false,
      resource:false
    }
  },
  methods:{
    showOption(index){
      this.tag_states[index].tag=true;
      for (let i=0; i<this.tag_states.length; i++) {
        if (i !== index) {
          this.tag_states[i].tag=false;
        }
      }
    },
    showAll(){
      this.all=true;
      this.course=false;
          this.video=false;
          this.resource=false;
      this.$emit('show', 0);
    },
    showCourse(){
      this.all=false;
      this.course=true;
      this.video=false;
      this.resource=false;
      this.$emit('show', 1);
    },
    showVideo(){
      this.all=false;
      this.course=false;
      this.video=true;
      this.resource=false;
      this.$emit('show', 2);
    },
    showResource(){
      this.all=false;
      this.course=false;
      this.video=false;
      this.resource=true;
      this.$emit('show', 3);
    }
  },
  props:{
    courses:{
      type:Array
    },
    resources:{
      type:Array
    },
    videos:{
      type:Array
    },
  }
}

</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0;
}
.course-container{
  background:rgb(230,230,230);
  width:17%;
  height:50%;
  top:20%;
  position: fixed;
  right:8%;
  z-index: 3;
}
.bracket-left{
  margin-left: 10px;
}
.allResult-container{
  background:rgb(230,230,230);
  margin:-5px;
  top:52%;
  width:15%;
  right:10%;
  position: fixed;
  z-index: 2;

}
ul.all-results{
  padding: 0;
  width:15%;
  position:fixed;
  top:20%;
  right:10%;
  background:rgb(230,230,230);
  z-index:1;
  list-style-type: none;
  display:block;
  text-decoration: none;
}
ul.tags{
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display:flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
li.tags-list{
  margin:3px;
  flex:0 0 25%;
  text-align: center;
  border: 2px solid rgb(200,200,200);
  border-radius: 2em;
  font-size:0.5em;
  cursor:pointer;
}
.all-results li{

  font-size:larger;
  color:rgb(78, 78, 78);
  padding:20px 20px 10px 20px;

  display:block;
  text-decoration: none;
  cursor:pointer;
}
.choose{
  background:rgb(143,161,205);
  cursor:pointer;
}
hr{
  width:70%;
  margin:4px 2cm 0 10px;
  color:rgb(144,144,144);
  background:rgb(144,144,144);
}
.all-results li:hover{
  background:rgb(143,161,205);
}
.divide{
  padding:10px 2cm 10px 10px;
}
.classes{
  padding:0;
  margin: 0 ;
  border-radius: 2em;
}
.classes:hover,.classes:active{
  background: rgb(143,161,205);
  border-radius: 2em;
  color: white;
}

.showClasses{
  padding:  0;
  margin: 0 ;
  background: rgb(143,161,205);
  border-radius: 2em;
  color: white;
}
.tags-p {
  margin:5px 2px;
}
</style>