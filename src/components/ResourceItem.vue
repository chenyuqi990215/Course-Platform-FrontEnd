<template>
  <div class="resource-item-container">
    <div v-on:click="submitForm">
      <a :href="resource.url">
        <p class="resource-item-title">{{resource.name}}</p>
      </a>
    </div>


    <ul class="resource-item-ul">
      <li class="resource-item-li" v-for="(item,index) in resource.titleList.split('；').slice(0,4)" :key="index" >
        <p class="resource-item-p">{{item}}</p>
      </li>
    </ul>
    <p class="resource-item-origin">来源：{{ resource.origin }}</p>
  </div>
</template>

<script>
export default {
  name: "ResourceItem",
  props: {
    resource: Object
  },
  methods:{
    submitForm(){
      this.$axios.post('http://47.100.79.77:8080/User/browse?course_id='+this.resource.course_id, {
        headers:{   //设置上传请求头
          'Content-Type':'application/x-www-from-urlencoded',
        },
      }).then((res)=>{
        console.log(res.data)
      })
    },
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
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.resource-item-title{
  color: black;
  margin: 10px;
  text-decoration: underline;
  font-weight: bold;
}
.resource-item-container {
  width: 250px;
  height: 150px;
}
.resource-item-ul {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 250px;
}
.resource-item-li {
  flex:0 0 50%;
}
.resource-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 5px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.resource-item-origin {
  margin-left: 20px;
  margin-top: 5px;
  font-size: small;
  color: rgb(61,61,61);
  margin-bottom: 10px;
}
</style>