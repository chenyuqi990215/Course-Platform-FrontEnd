<template>
  <div class="register-container">
    <div class="register-wrapper">
      <div id="register">
        <p class="title">新用户注册</p>
        <img class="close" src="../assets/close.svg" v-on:click="closeRegister">
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
          <el-form-item prop="tel">
            <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="smscode" class="code">
            <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
            <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{ buttonText }}</el-button>
          </el-form-item>
          <el-form-item prop="school">
            <el-select v-model="ruleForm2.school" placeholder="请选择，若无请选择其他" style="width: 100%" filterable
                       :filter-method="dataFilter">
              <el-option v-for="item in stateArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../entity/Data"

export default {
  name: "Register",
  data() {
    // <!--验证用户名是否合法-->
    let checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    // <!--验证学校是否合法-->
    let checkSchool = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择学校'))
      } else {
        callback()
      }
    }
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
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
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      successful_login: false,
      successfulRegister: false,
      stateArr: new Data().schools,
      stateArrCopy: new Data().schools,
      username: "",
      url: "",
      ruleForm2: {
        pass: "",
        checkPass: "",
        tel: "",
        smscode: "",
        name: "",
        school: ""
      },
      rules2: {
        pass: [{validator: validatePass, trigger: 'change'}],
        checkPass: [{validator: validatePass2, trigger: 'change'}],
        tel: [{validator: checkTel, trigger: 'change'}],
        smscode: [{validator: checkSmscode, trigger: 'change'}],
        name: [{validator: checkUsername, trigger: 'change'}],
        school: [{validator: checkSchool, trigger: 'change'}]
      },
      buttonText: '发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  },
  methods: {
    // <!--发送验证码-->
    sendCode() {
      let tel = this.ruleForm2.tel
      if (this.checkMobile(tel)) {
        console.log(tel)
        let time = 60
        this.buttonText = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + ' 秒'
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = '重新获取'
              this.isDisabled = false
              this.flag = true;
            }
          }, 1000)
        }
      }
    },
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.successfulRegister = true;
          this.$emit('closeRegister', true);
          this.$axios.post('http://1.117.107.95:8080/User/insert?name=' + this.ruleForm2.name + '&password=' + this.ruleForm2.pass + '&school=' + this.ruleForm2.school + '&telephone=' + this.ruleForm2.tel, {
            headers: {   //设置上传请求头
              'Content-Type': 'application/x-www-from-urlencoded',
            },
            withCredentials: true,
          }).then((res) => {
            console.log(res.data)
            if (res.data === "注册失败") {
              this.$message({
                message: "用户名重复",
                type: 'error',
                duration: 2 * 1000
              })
            } else {
              this.successfulRegister = true;
              this.$emit('closeRegister', true);
              this.$emit('openLogin', false);

              this.$axios.post('http://1.117.107.95:8080/signIn?username=' + this.ruleForm2.name + '&password=' + this.ruleForm2.pass, {
                headers: {   //设置上传请求头
                  'Content-Type': 'application/x-www-from-urlencoded',
                },
                transformRequest: [function (data, headers) {
                  let ret = ''
                  for (let it in data) {
                    if (ret !== '') ret += '&'
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]);
                    console.log(headers)
                  }
                  return ret;
                }],
                withCredentials: true,
              }).then((res) => {
                console.log(res.data)
                if (res.data === 1) {
                  this.$message({
                    message: "登录失败",
                    type: 'error',
                    duration: 2 * 1000
                  })
                } else {
                  console.log("登录成功")
                  this.$emit('closeRegister', true);
                }
              })
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$emit('openLogin', true)
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
    closeRegister() {
      this.successfulRegister = false;
      this.$emit('closeRegister', false)
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

.register-wrapper img {
  position: absolute;
  z-index: 1;
}

.register-wrapper {
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
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}

.el-form-item {
  text-align: center;
}

.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}

.login:hover {
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

</style>
