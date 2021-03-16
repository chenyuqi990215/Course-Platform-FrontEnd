<template>
  <div class="MsgItem-container">
    <p class="msg-title">待评分的{{type}}</p>
    <span class="msg-p">您观看的《{{course.name}}》还未评分。</span>
    <span class="msg-check"  v-on:click="Scoring">点击查看</span>
  </div>

</template>

<script>
export default {
  name: "MsgItem",
  data(){
    return{
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
    Scoring(){
      this.$emit('scoring',true)
      this.$emit('scoring_course',this.course)
    },

  },
  created(){
    this.init()
  }


}
</script>

<style scoped>


.msg-title {
  margin: 30px 0 15px 0;
  font-size: 1em;
  letter-spacing: 2px;
  color:black;
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
</style>