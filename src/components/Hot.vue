<template>
  <div class="hot-container" :style="{'width': width+'px','height': height+'px'}">
    <div class="title-wrapper">
      <p v-on:mouseover="showCourse">热门课程</p>
      <p v-on:mouseover="showQuestion">热门回答</p>
    </div>
    <div class="hot-wrapper" v-if="show_course">
      <ul>
        <li v-for="(data, index) in hot_course.slice(0,3)" :key='index'>
          <a href="#">
            <span class="span-index">{{ index+1 }}、</span>
            <span class="span-content">{{ data.course.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="hot-wrapper" v-if="show_posting">
      <ul>
        <li v-for="(data, index) in hot_posting.slice(0,3)" :key='index'>
          <a href="#">
            <span class="span-index">{{ index+1 }}、</span>
            <span class="span-content">{{ data.posting.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Hot",
  data() {
    return {
      show_course: true,
      show_posting: false,
    }
  },
  methods: {
    showCourse() {
      this.show_course = true;
      this.show_posting = false;
    },
    showQuestion() {
      this.show_posting = true;
      this.show_course = false;
    }
  },
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    hot_course: {
      type: Array
    },
    hot_posting: {
      type: Array
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

div {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
}
.hot-container {
  width: 400px;
  height: 150px;
}
.title-wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(131,131,131);
}
.title-wrapper p {
  color: white;
  font-weight: bold;
  margin: 20px 50px;
}

.title-wrapper p::after{
  content:'';
  display:block;
  width:70px;
  height:3px;
  position:absolute;
  bottom:0;
  background:rgb(108,179,74);
  transition:all 0.3s ease-in-out;
  transform: scale3d(0,1,1);
  transform-origin:50% 0;
}
.title-wrapper p:hover::after{
  transform:scale3d(1,1,1);
}
.hot-wrapper {
  background-color: rgb(61,61,61);
  padding: 40px;
  height: 250px;
}

.hot-wrapper ul {
  list-style-type: none;
}

.hot-wrapper li {
  padding-top: 20px;
}

.span-index {
  color: rgb(231,195,140);
  font-size: 20px;
}

.span-content {
  color: rgb(198,198,198);
  font-size: 20px;
}

</style>