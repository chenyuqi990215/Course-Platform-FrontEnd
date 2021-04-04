<template>
  <div class="nav-container">
    <img class="portrait_img" :src="user.portrait_url" referrerpolicy="no-referrer" alt="portrait">
    <input
      type="file"
      name="image"
      accept="image/*"
      @change="onchangeImgFun"
      class="header-upload-btn user-header-com"
      style="background:red"/>
    <p class="tip">
      更换头像
    </p>
    <p class="user_name"> {{ user.name }}</p>
    <div class="nav-outer-container">
      <nav class="center-nav">
        <a href="#">
          <div class="nav-div" v-on:click="showInfo">
            <img class="nav-img" src="../assets/info.png" v-if="!show_info">
            <img class="nav-img" src="../assets/info-click.png" v-if="show_info">
            <p :class='{nav_p: !show_info,nav_p_click: show_info}'>用户信息</p>
          </div>
        </a>
        <a href="#">
          <div class="nav-div" v-on:click="showSave">
            <img class="nav-img" src="../assets/save.png" v-if="!show_save">
            <img class="nav-img" src="../assets/save-click.png" v-if="show_save">
            <p :class='{nav_p: !show_save,nav_p_click: show_save}'>我的收藏</p>
          </div>
        </a>
        <a href="#">
          <div class="nav-div" v-on:click="showMsg">
            <img class="nav-img" src="../assets/msg.png" v-if="!show_msg">
            <img class="nav-img" src="../assets/msg-click.png" v-if="show_msg">
            <p :class='{nav_p: !show_msg,nav_p_click: show_msg}'>我的消息</p>
          </div>
        </a>
        <a href="#">
          <div class="nav-div" v-on:click="showPost">
            <img class="nav-img" src="../assets/posting.png" v-if="!show_post">
            <img class="nav-img" src="../assets/posting-click.png" v-if="show_post">
            <p :class='{nav_p: !show_post,nav_p_click: show_post}'>我的帖子</p>
          </div>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: "CenterNav",
  props: {
    user: Object,
    msg_count: Number,
  },
  data() {
    return {
      sign: '',
      show_info: true,
      show_post: false,
      show_msg: false,
      show_save: false,
    }
  },
  methods: {
    init() {
      if (this.msg_count >= 100) {
        this.msg_count = 99
        this.sign = '+'
      }
    },
    showInfo() {
      this.show_info = true;
      this.show_post = false;
      this.show_msg = false;
      this.show_save = false;
      this.$emit('CenterSelect', 'info');
    },
    showMsg() {
      this.show_info = false;
      this.show_post = false;
      this.show_msg = true;
      this.show_save = false;
      this.$emit('CenterSelect', 'msg');
    },
    showPost() {
      this.show_info = false;
      this.show_post = true;
      this.show_msg = false;
      this.show_save = false;
      this.$emit('CenterSelect', 'post');
    },
    showSave() {
      this.show_info = false;
      this.show_post = false;
      this.show_msg = false;
      this.show_save = true;
      this.$emit('CenterSelect', 'save');
    },
    onchangeImgFun(e) {
      let file = e.target.files[0];
      let fd = new FormData();
      fd.append('file', file);
      this.$http.post("http://47.100.79.77:8080/User/updatePortrait",fd,{
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(res => {
        console.log(res)
      })
    }
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
}

.user-header-com{
  width: 1.44rem;
  height: 1.44rem;
  display: inline-block;
}

.header-upload-btn{
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.tip {
  font-size: 0.26rem;
  color: #666;
  text-align: center;
  display: block;
}

.nav-container {
  position: fixed;
  background-color: white;
  margin: 30px;
  text-align: center;
  padding: 0 30px;
  width: 25%;
}

.portrait_img {
  margin-top: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.user_name {
  margin: 30px 0;
  font-weight: bold;
  font-size: large;
}

.center-nav {
  margin: 20px 5px 20px 20px;
  text-align: center;
}

.nav-div {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 30px 0;
}

.nav-img {
  width: 20px;
  height: 20px;
  margin-top: 3px;
}

.nav_p {
  margin-left: 10px;
  color: rgb(180, 180, 180);
}

.nav_p_click {
  margin-left: 10px;
  color: rgb(186, 201, 224);
}

span {
  margin-left: 5px;
  background-color: rgb(347, 143, 136);
  border-radius: 20px;
  padding: 2px 10px;
  color: white;
  font-size: small;
  height: 20px;
  margin-top: 158px;
}

.nav-outer-container{
  display: flex;
  justify-content: center;
}
</style>