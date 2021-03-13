<template>
  <div class="msg-container">
    <ul class="msg-ul">
      <li class="msg-li" v-for="(item,index) in courses" :key="index">
        <MsgItem :course="item" v-on:scoring="scoring"></MsgItem>
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
      courses:[],

    }
  },
  components:{
    MsgItem,
  },
  methods:{
    init(){
      this.$axios.get('http://47.100.79.77:8080/Course/hot',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.courses = res.data
        console.log(res.data)

      })
    },
    scoring(){
      this.$emit('scoring',true)
    }
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