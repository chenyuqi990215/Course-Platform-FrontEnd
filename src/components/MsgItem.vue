<template>
  <div class="MsgItem-container">
    <p class="msg-title">待评分的{{type}}</p>
    <span class="msg-p">您观看的《{{course.name}}》还未评分。</span>
    <span class="msg-check"  v-on:click="Scoring">点击查看</span>
    <div class="scoring-container" v-if="ToScore">


        <img class="course-item-img" referrerpolicy="no-referrer" v-bind:src="course.cover" alt="course-item" v-on:click="clickCourse">

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
  </div>

</template>

<script>
export default {
name: "MsgItem",
  data(){
    return{
      type:"课程",
      ToScore:false,
      score:0,
    }
  },
  props:{
  course:{
    type:Object,
  }
  },
  methods:{

    Scoring(){
      this.ToScore=true
      this.$emit('scoring',true)
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
      this.ToScore=false
      this.$emit('scoring',false)
    }
  },


}
</script>

<style scoped>


.msg-title {
  margin: 30px 0 15px 0;
  font-size: 1em;
  letter-spacing: 2px;
  color:black;
}
.scoring-container{
  position:fixed;
  background-color: white;
  width: 30%;
  margin-left: 0;
  margin-top: 100px;
  margin-bottom:100px ;
  min-height: 200px;
}
.msg-p{
  margin: 20px 0;
  font-size: 0.9em;
  letter-spacing: 1px;
  color:rgb(170,170,170);
}
.msg-check{
  margin: 20px 0;
  font-size: 0.9em;
  letter-spacing: 1px;
  color: rgb(104, 125, 152);
  cursor:pointer;
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
  margin-left:20%;
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