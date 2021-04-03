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
  margin: 20px;
  min-height: 700px;
}
.msg-ul{
  margin:20px;
}
.msg-li {
  list-style-type: none;
  margin-left: 0;
}

</style>