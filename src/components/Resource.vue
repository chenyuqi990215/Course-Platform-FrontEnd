<template>
  <div class="resource-container">
    <ul class="resource-ul">
      <li class="resource-li" v-for="(item,index) in resources" :key="index">
        <ResourceItem class="resource-item" :resource="item"></ResourceItem>
      </li>
    </ul>
  </div>
</template>

<script>
import ResourceItem from "./ResourceItem";

export default {
  name: "Resource",
  components: {
    ResourceItem
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
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.resource-ul {
  display: flex;
  flex-flow: row wrap;
}
.resource-li {
  margin: 0;
  padding: 0;
}
.resource-item {
  margin: 0 20px;
  padding: 0;
}
</style>