<template>
  <div class="msg-container">
    <ul class="msg-ul">
      <li class="msg-li" v-for="(item,index) in courses" :key="index">
        <MsgItem :course="item" v-on:scoring="Scoring" v-on:scoring_course="showScoringCourse"></MsgItem>
      </li>
    </ul>

  </div>
</template>

<script>

import MsgItem from "@/components/MsgItem";

export default {
  name: "Msg",
  data(){
    return{

    }
  },
  components:{
    MsgItem,
  },
  methods:{
    init(){

    },
    Scoring:function (input){
      this.$emit('scoring',input)
    },
    showScoringCourse:function(input){
      this.$emit('show_scoring_course',input)
    }
  },
  props:{
    courses:{
      type:Array
    },
  },
  created(){
    this.init()
  }
}
</script>

<style scoped>
.msg-container{
  background-color: white;
  width: 100%;
  margin-left: 0;
  min-height: 700px;
}
.msg-ul{
  margin-top: 60px;
  margin-left: -40px;
}
.msg-li {
  background:rgb(249,249,249);
  list-style-type: none;
  margin-left: 0;
}

</style>