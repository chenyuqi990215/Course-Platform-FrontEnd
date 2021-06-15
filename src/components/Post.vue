<template>
  <div class="post-container">
    <div class="post-inner">
      <p class="post-p"> 我的帖子 </p>
      <Posts2 :postings="posting" class="posts"></Posts2>
    </div>
  </div>
</template>

<script>
import Posts2 from "@/components/Posts2"
export default {
  name: "Post",
  data() {
    return {
      posting: []
    }
  },
  components: {
    Posts2,
  },
  methods: {
    init() {
      this.$axios.get('http://1.117.107.95:8080/User/posting',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.posting = res.data
        console.log(res.data)
        console.log("成功")
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
.post-container{
  background-color: white;
  width: 100%;
  margin: 30px;
  min-height: 700px;
}
.post-p {
  margin: 30px 0;
  font-size: 1.3em;
  letter-spacing: 2px;
  color:rgb(100,100,100);
}
.post-inner {
  margin-left: 40px;
}
.posts {
  margin-left: -30px;
  margin-right: -20px;
}
</style>