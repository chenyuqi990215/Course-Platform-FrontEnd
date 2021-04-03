<template>
  <div class="scoring-container" >
    <img class="course-item-img" referrerpolicy="no-referrer" v-if="type!=='资源'" v-bind:src="course.cover" alt="course-item" v-on:click="clickCourse">

    <div class="course-item-title">
      <p  v-on:click="clickCourse">{{ course.name }}</p>
    </div>
    <div class="scoring">
      <div class="cue">请给此{{type}}打分：</div>
      <div class="star-rating">
        <div class="star-rating-top" :style="{width:Math.floor(score)+'%'}">
          <span v-on:click="score2"></span>
          <span v-on:click="score4"></span>
          <span v-on:click="score6"></span>
          <span v-on:click="score8"></span>
          <span v-on:click="score10"></span>
        </div>
        <div class="star-rating-bottom">
          <span v-on:click="score2"></span>
          <span v-on:click="score4"></span>
          <span v-on:click="score6"></span>
          <span v-on:click="score8"></span>
          <span v-on:click="score10"></span>
        </div>
      </div>
    </div>
    <div class="submit" v-on:click="submitTable">
      提交
    </div>

  </div>
</template>

<script>
export default {
name: "Scoring",
  data(){
    return{
      score:0,
      type:"课程"
    }
  },
  props:{
    course:{
      type:Object,
    }
  },
  methods:{
    init(){
      if(this.course.type==='course')
        this.type='课程'
      else if(this.course.type==='video')
        this.type='视频'
      else if(this.course.type==='resource')
        this.type='资源'
    },
    clickCourse() {
      this.$router.push({
        name: 'Course',
        query: {
          id: this.course.id,
          name: this.course.name,
          type: '优质课程',
        }
      })
    },
    score2(){
      this.score=20;
    },
    score4(){
      this.score=40;
    },
    score6(){
      this.score=60;
    },
    score8(){
      this.score=80;
    },
    score10(){
      this.score=100;
    },
    submitTable(){
      this.$axios.post("http://47.100.79.77:8080/Rate/insert?course_id=" + this.course.course_id + "&score=" + this.score, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(()=>{
        this.$emit('scoringFinished',true)
      })
    }
  },
  created(){
  this.init()
  }

}
</script>

<style scoped>



.scoring-container{
  position:fixed;
  background-color: white;
  width: 40%;
  margin-left: 30%;
  margin-top: -40%;
  min-height: 200px;
}

.scoring{
  display:flex;
}
.course-item-img {
  width: 40%;
  border-radius: 5px;
  margin:20px 30% 0;
}
.course-item-title {
  margin-top: -10px;
  color: black;
  font-size: 1em;
  width: 100%;
  text-align: center;

}
.cue{
  margin-left:27%;
  font-size: 1.1em;
}

.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin-top: 0;
  margin-left: 15px;
  position: relative;
  display: table;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
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
.submit {
  width: 2cm;
  border: 2px solid rgb(200, 200, 200);
  background: rgb(135, 170, 249);
  padding: 3px 0;
  margin: 20px auto;
  border-radius: 2em;
  color: white;
  text-align: center;
  cursor: pointer;
}

</style>