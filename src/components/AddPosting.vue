<template>

  <div class="add-container">
    <p class="add-title">
      发布新帖
    </p>
    <div class="add-tag-container">
      <ul class="add-tag-ul">
        <li :class="{add_tag_li: !show_recommend,add_tag_li_click: show_recommend}" v-on:click="clickRecommend">
          <p :class="{add_tag_p: !show_recommend,add_tag_p_click: show_recommend}">课程推荐</p>
        </li>
        <li :class="{add_tag_li: !show_question,add_tag_li_click: show_question}" v-on:click="clickQuestion">
          <p :class="{add_tag_p: !show_question,add_tag_p_click: show_question}">课程答疑</p>
        </li>
        <li :class="{add_tag_li: !show_guide,add_tag_li_click: show_guide}" v-on:click="clickGuide">
          <p :class="{add_tag_p: !show_guide,add_tag_p_click: show_guide}">经验分享</p>
        </li>
        <li :class="{add_tag_li: !show_self,add_tag_li_click: show_self}" v-on:click="clickSelf">
          <p :class="{add_tag_p: !show_self,add_tag_p_click: show_self}">自定义</p>
        </li>
      </ul>
    </div>
    <div class="add-title-container">
      <input class="input-title" type="text" placeholder="标题描述：如我推荐xxx课程" v-model="title" v-if="show_recommend" v-validate="'min:5'" name="title">
      <input class="input-title" type="text" placeholder="标题描述：如我在观看xxx课程过程中遇到了如下问题" v-model="title" v-if="show_question" v-validate="'min:5'" name="title">
      <input class="input-title" type="text" placeholder="标题描述：如我看完了xxx课程之后可以学习什么内容或者我应该如何学习xxx课程" v-model="title" v-if="show_guide" v-validate="'min:5'" name="title">
      <input class="input-title" type="text" placeholder="标题描述：请自己定义帖子标题如我想吐糟xxx课程" v-model="title" v-if="show_self" v-validate="'min:5'" name="title">
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert" v-if="errors.has('title')">{{ errors.first('title') }}</p>
      </transition>
    </div>

    <div class="add-content-container">
      <textarea class="input-content" rows="5" placeholder="内容：推荐理由" v-model="content" v-if="show_recommend"></textarea>
      <textarea class="input-content" rows="5" placeholder="内容：问题详情" v-model="content" v-if="show_question"></textarea>
      <textarea class="input-content" rows="5" placeholder="内容：经验感悟" v-model="content" v-if="show_guide"></textarea>
      <textarea class="input-content" rows="5" placeholder="内容：自定义内容" v-model="content" v-if="show_self"></textarea>
      <picker class="picker-emoji" v-if="show_emoji"
              :include="['people']" :showSearch="false" :showPreview="false" :showCategories="false" @select="addEmoji"
      />
    </div>
    <div class="foot-container">
      <div class="smile-container" v-on:click="show_emoji=!show_emoji">
        <img class="smile" src="../assets/smile.png">
        <p class="smile-p">表情</p>
      </div>
      <button class="add-tag-btn" v-on:click="Post">
        发布
      </button>
    </div>

  </div>
</template>

<script>
import { Picker } from "emoji-mart-vue";
export default {
  name: "AddPosting",
  data() {
    return {
      title : "",
      content : "",
      show_recommend: true,
      show_question: false,
      show_guide: false,
      show_self: false,
      show_emoji: false,
    }
  },
  components: {
    Picker
  },
  props: {
    course_title: {
      type: String,
      default: ""
    },
    course_id: {
      type: Number,
      default: -1
    }
  },
  methods: {
    init() {
      if (this.course_title.length > 0) {
        this.title = "我推荐《" + this.course_title + "》课程";
      }
    },
    Post() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var type="";
          if (this.show_recommend) type="课程推荐";
          if (this.show_guide) type="经验分享";
          if (this.show_self) type="自定义";
          if (this.show_question) type="课程答疑";
          if (this.course_id !== -1) {
            this.$axios.post('http://47.100.79.77:8080/Course/post/insert?course_id=' + this.course_id +
          "&type=" + type + "&title=" + this.title + "&content=" + this.content, {
              headers:{   //设置上传请求头
                'Content-Type':'application/x-www-from-urlencoded',
              },
            }).then((res)=>{
              if (res.data !== "发布成功") {
                this.$message({
                  message: "发布失败",
                  type: 'error',
                  duration: 2 * 1000
                })
              }
            })
          } else {
            this.$axios.post('http://47.100.79.77:8080/Post/insert?type='
                + type + "&title=" + this.title + "&content=" + this.content, {
              headers:{   //设置上传请求头
                'Content-Type':'application/x-www-from-urlencoded',
              },
            }).then((res)=>{
              if (res.data !== "发布成功") {
                this.$message({
                  message: "发布失败",
                  type: 'error',
                  duration: 2 * 1000
                })
              }
            })
          }
        } else {
          console.log('Not valid');
        }
      })
    },
    clickRecommend() {
      if (this.course_title.length > 0) {
        this.title = "我推荐《" + this.course_title + "》课程";
      }
      this.show_recommend = true;
      this.show_question = false;
      this.show_self = false;
      this.show_guide = false;
    },
    clickQuestion() {
      if (this.course_title.length > 0) {
        this.title = "我在观看《" + this.course_title + "》课程过程中遇到了如下问题";
      }
      this.show_recommend = false;
      this.show_question = true;
      this.show_self = false;
      this.show_guide = false;
    },
    clickSelf() {
      this.title = "";
      this.show_recommend = false;
      this.show_question = false;
      this.show_self = true;
      this.show_guide = false;
    },
    clickGuide() {
      this.title = "";
      this.show_recommend = false;
      this.show_question = false;
      this.show_self = false;
      this.show_guide = true;
    },
    addEmoji(e) {
      this.content += e.native;
      this.show_emoji = !this.show_emoji;
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.emoji-mart[data-v-7bc71df8] {
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100px;
  color: #ffffff;
  border-radius: 5px;
  background: #fff;
  left: 300px;
}
input {
  outline: none;
  border: none;
}
textarea {
  outline: none;
  border: none;
}
div {
  padding: 0;
  margin: 0;
}
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.add-container{
  background-color: rgb(239,239,239);
  padding:25px 25px 50px 25px;
}
.add-title{
  font-size: 1.3em;
  font-weight: bold;
}
.add-tag-container{
  margin: 10px 0;
}
.add-tag-ul {
  display: flex;
  justify-content: flex-start;
}
.add_tag_li {
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: white;
}
.add_tag_p {
  text-align: center;
  padding-top: 5px;
}
.add_tag_li:hover {
  background-color: rgb(149,190,255);
}
.add_tag_p:hover {
  color: white;
  text-align: center;
}
.add_tag_li_click {
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: rgb(149,190,255);
}
.smile {
  width: 20px;
  height: 20px;
}
.smile-container {
  display: flex;
  padding: 10px;
  width: 80px;
  justify-content: center;
  background-color: white;
}
.smile-p{
  color: rgb(150,150,150);
  letter-spacing: 3px;
  margin-left: 5px;
  margin-top: -2px;
}
.add_tag_p_click {
  text-align: center;
  padding-top: 5px;
  color: white;
}
.add-title-container{
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input-title{
  width: 100%;
  padding: 10px;
}
.input-content {
  width: 100%;
  padding: 10px;
}
.add-content-container{
  margin-right: 20px;
  margin-bottom: 20px;
}
.add-tag-btn{
  margin-left: 80%;
  outline:none;
  background-color: rgb(180,208,255);
  color: white;
  padding: 5px 20px;
  font-size: 1.2em;
  border: none;
}
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.alert {
  background: rgb(180,208,255);
  display: inline-block;
  padding: 5px;
  font-size: .8em;
}
.foot-container {
  display: flex;
}

</style>