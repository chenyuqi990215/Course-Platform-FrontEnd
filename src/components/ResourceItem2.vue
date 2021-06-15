<template>
  <div class="resource-item-container">
    <div class="resource-information-container">

        <span class="resource-item-title" v-on:click="clickResource" v-html="resource.name"></span>

      <ul class="resource-item-ul" v-if="resource.titleList.length > 0">
        <li class="resource-item-li" v-for="(item,index) in resource.titleList.split('；').slice(0,4)" :key="index" >
          <p class="resource-item-p" v-html="item"></p>
        </li>
      </ul>
      <p class="resource-item-origin" v-if="resource.origin !== ''">来源：{{ resource.origin }}</p>
    </div>
    <div  v-if="resource.cover !== ''">
      <span class="resource-item-cover">博主：{{resource.cover}}</span>
      <span class="resource-item-score">浏览量：{{resource.amount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourceItem2",
  props: {
    resource: {
      type: Object
    },
  },
  methods:{
    clickResource() {

        this.$axios.post('http://1.117.107.95:8080/User/browse?course_id='+this.resource.course_id, {
          headers:{   //设置上传请求头
            'Content-Type':'application/x-www-from-urlencoded',
          },
        }).then((res)=>{
          console.log(res.data)

        })

      this.$router.push({
        name: 'Resource',
        query: {
          id: this.resource.course_id,
          type: '优质资源',
        }
      })
    }
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
.resource-information-container{

}
.resource-item-container {
  margin:30px 4px;
  width:60%;
  background:rgb(240,240,240);
}
p {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.resource-item-title {
  color: black;
  font-size: 1.1em;
  max-width: 500px;
  margin-left: 15px;
  cursor:pointer;
}

.resource-item-ul {

  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin:7px 3px 0;
  width: 250px;
}
.resource-item-li {
  flex:0 0 50%;

}
.resource-item-p {
  width:80px;
  background-color: rgb(231,231,231);
  color: rgb(61,61,61);
  margin:2px 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6em;
}
.resource-item-origin {
  margin: 7px 15px;
  font-size: small;
  color: rgb(61,61,61);

}
.resource-item-cover {
  margin: 7px 15px;
  font-size: small;
  color: rgb(61,61,61);

}
.resource-item-score{
  float:right;
  margin-right:20px;
  font-size: small;
  color: rgb(61,61,61);
}
</style>