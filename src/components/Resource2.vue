<template>
  <div class="course-container">
    <div class="divider-name">
      <span>优质资源（</span>
      <span>{{resources.length}}</span>
      <span>）</span>
    </div>

    <ul class="resource-ul">
      <li class="resource-li" v-for="(item,index) in resources" :key="index">
        <ResourceItem2 class="resource-item" :resource="item"></ResourceItem2>
      </li>
    </ul>
  </div>
</template>

<script>
import ResourceItem2 from "./ResourceItem2.vue"
export default {
  name: "Resource2",
  components: {
    ResourceItem2
  },
  props: {
    resources: {
      type: Array
    },
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  background:rgb(220,220,220);
  margin:30px 120px;
}
.divider-name{
  margin:10px;
}
p{
  margin:20px;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
span{
  margin:0;
  font-size: larger;
  font-weight: 700;
  font-family: Arila,Verdana,serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.resource-ul {
  padding: 0;
}
.resource-li {

  padding: 0;
  margin:30px 4px;
}
.resource-item {
  margin: 0 20px;
  padding: 20px;
}
</style>