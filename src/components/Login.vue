<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div id="register">
        <div class="header-container">
          <img class="logo" src="../assets/logo1.svg">
          <p class="title">云享课堂</p>
        </div>
        <img class="close" src="../assets/close.svg" v-on:click="closeLogin">
        <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="0"
            class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input v-model="ruleForm2.name" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">登陆</el-button>
            <p class="register" @click="gotoRegister">去注册></p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    // <!--验证用户名是否合法-->
    let checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback()
      }
    };
    return {
      successfulLogin: false,
      ruleForm2: {
        pass: "",
        name: "",
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        name: [{validator: checkUsername, trigger: 'change'}],
      },
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  },
  methods: {
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.successfulLogin = true;
          this.$emit('closeLogin', true)
          this.$emit('successfulLogin',this.ruleForm2.name)
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    dataFilter(val) {
      this.value = val;
      if (val) { //val存在
        this.stateArr = this.stateArrCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else { //val为空时，还原数组
        this.stateArr = this.stateArrCopy;
      }
    },
    // <!--进入登录页-->
    gotoRegister() {
      this.$emit('openRegister',true)
    },
    closeLogin() {
      this.successfulLogin = false;
      this.$emit('closeLogin', false)
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 340px;
  margin: 60px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  margin: 10px;
  text-align: center;
  width:50px;
}
.el-form-item {
  text-align: center;
}
.register {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
  margin-left: 250px;
}
.register:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
.close {
  position: absolute;
  width: 10px;
  right: 30px;
  top: 40px;
}


.logo {
  width: 60px;
  margin-left: 50px;
}

.title {
  color: rgb(143, 161, 205);
  font-size: 2em;
  letter-spacing: 5px;
  width: 300px;
  font-weight: bolder;
  margin-right: 100px;
}

.header-container {
  display: flex;
  width: 400px;
}

</style>
