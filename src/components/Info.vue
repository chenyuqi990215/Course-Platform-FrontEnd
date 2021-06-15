<template>
  <div class="info-container">
    <div class="info-navigation">
      <span :class="{nav_text:check_safety,nav_text_click:check_info}" v-on:click="changeInfo">个人资料</span>
      <span :class="{nav_text_click:check_safety,nav_text:check_info}" v-on:click="changeSafety">账号安全</span>
    </div>
    <hr class="nav-hr">
    <hr class="nav-info-hr" v-if="check_info">
    <hr class="nav-safety-hr" v-if="check_safety">
    <div v-if="check_safety">
      <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
      >
        <div class="el-password">
          <div class="set-password">
            <span>原始密码</span>
          </div>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入原始密码"></el-input>
          </el-form-item>
        </div>
        <div class="el-password">
          <div class="set-password">
            <span>新密码</span>
          </div>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入新密码"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="save" v-on:click="submitForm2">
        保存
      </div>
    </div>
    <div v-if="check_info">
      <div class="user-img">
        <img class="picture" v-bind:src="user.portrait_url" alt="uer_img">
        <div class="user-name-ano">
          <p>{{ user.name }}</p>
        </div>
      </div>
      <div class="content">
        <div class="detail-info">
          <p class="detail-info-p">基本信息</p>
          <div class="name">
            <span class="user-name-p">昵称</span>
            <span class="user-name">{{ user.name }}</span>
          </div>
          <div class="choose-gender">
            <div class="choose-gender-p">
              <span>性别</span>
            </div>
            <div id="myGender">
              <input type="radio" :checked="picked_male" @click="changeMale"/>
              <span class="gender-option">男</span>
              <input type="radio" :checked="picked_female" @click="changeFemale"/>
              <span class="gender-option">女</span>
            </div>
          </div>
          <div class="choose-date">
            <div class="choose-date-p">
              <span>出生日期</span>
            </div>
            <div id="myDate">
              <el-select v-model="yearsModel" @change="dateChange(1)" placeholder="请选择" style="width:100px;">
                <el-option
                    v-for="item in years"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
              </el-select>
              <el-select v-model="monthsModel" @change="dateChange(2)" placeholder="请选择" style="width:80px;">
                <el-option
                    v-for="item in months"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
              </el-select>
              <el-select v-model="daysModel" @change="dateChange(3)" placeholder="请选择" style="width:80px;">
                <el-option
                    v-for="item in days"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="choose-edu">
            <div class="choose-edu-p">
              <span>学历</span>
            </div>
            <div id="myEdu">
              <el-select v-model="educationsModel" placeholder="请选择" style="width:100px;">
                <el-option
                    v-for="item in educations"
                    :key="item.edu"
                    :value="item.edu">
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="university">
            <span class="university-p">所在学校</span>
            <span class="university-name">{{ user.school }}</span>
          </div>

          <div class="choose-city">
            <div class="choose-city-p">
              <span>现居</span>
            </div>
            <div id="myCity">
              <el-select v-model="selectedProv" @change="cityChange()" placeholder="请选择" style="width:100px;">
                <el-option
                    v-for="item in listProv"
                    :key="item.key"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>

              <el-select v-model="selectedCity" placeholder="请选择" style="width:100px;">
                <el-option
                    v-for="item in listCity"
                    :key="item.key"
                    :value="item.label">
                </el-option>
              </el-select>


            </div>
          </div>

          <div class="set-signature">
            <div class="set-signature-p">
              <span>个性签名</span>
            </div>
            <div class="my-signature">
              <input class="input-signature" type="text" placeholder="请编辑您的个性签名" v-model="signature">
            </div>
          </div>
        </div>
        <div class="save" v-on:click="submitForm">
          保存
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../entity/Data"
export default {
  name: "Info",
  data() {
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
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass2");
        }
        callback()
      }
    };
    return {
      signature: "",
      picked_male: false,
      picked_female: false,
      gendersModel: "",
      check_info: true,
      check_safety: false,
      yearsModel: null,
      years: [],
      monthsModel: null,
      months: [],
      daysModel: null,
      days: [],
      educations: [
        {'edu': '初中'},
        {'edu': '高中'},
        {'edu': '本科',},
        {'edu': '硕士',},
        {'edu': '博士',},
      ],
      educationsModel: null,
      selectedProv: null,
      selectedCity: null,

      listProv: new Data().provs,
      listCity: [],
      allCity: new Data().cities,
      rules2: {
        pass: [{validator: validatePass, trigger: 'change'}],
        checkPass: [{validator: validatePass2, trigger: 'change'}],
      },
      ruleForm2: {
        pass: "",
        checkPass: "",
      },
    }
  },
  props: {
    user: Object,
  },
  methods: {
    init() {

      var myDate = new Date;
      var year = myDate.getFullYear();//获取当前年
      var month = myDate.getMonth() + 1;//获取当前月
      var day = myDate.getDate();//获取当前日

      this.initSelectYear(year)
      this.initSelectMonth();
      this.initSelectDay(year + "年", month + "月");
      this.yearsModel = year + "年";
      this.monthsModel = month + "月";
      this.daysModel = day + "日";
      this.$axios.get('http://1.117.107.95:8080/User/getDetail', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data[0]);
        let n = res.data.indexOf("!DOCTYPE html");
        if (n >= 0) {
          console.log(n)
        } else {
          if (res.data[0].birth !== null && res.data[0].birth !== "") {
            this.yearsModel = res.data[0].birth.split('/')[0]
            this.monthsModel = res.data[0].birth.split('/')[1]
            this.daysModel = res.data[0].birth.split('/')[2]
          }
          if (res.data[0].education !== null && res.data[0].education !== "") {
            this.educationsModel =  res.data[0].education
          }
          if (res.data[0].city !== null && res.data[0].city !== "") {
            this.selectedProv = res.data[0].city.split('/')[0]
            this.selectedCity = res.data[0].city.split('/')[1]
          }
          if (res.data[0].sex !== null && res.data[0].sex !== "") {
            this.gendersModel = res.data[0].sex
            if (this.gendersModel === "男") {
              this.picked_male = true
              this.picked_female = false
            } else if (this.gendersModel === "女") {
              this.picked_female = true
              this.picked_male = false
            }
          }
          if (res.data[0].signature !== null && res.data[0].signature !== "") {
            this.signature = res.data[0].signature
          }
        }
      })
    },
    changeInfo: function () {
      this.check_info = true;
      this.check_safety = false;
    },
    changeSafety: function () {
      this.check_safety = true;
      this.check_info = false;
    },
    initSelectYear(year) {
      this.years = [];
      for (let i = 0; i < 30; i++) {
        this.years.push({value: (year - i) + "年", label: (year - i) + "年"});
      }
    },
    initSelectMonth() {
      this.months = [];
      this.months.push({value: 0, label: "全部"});
      for (let i = 1; i <= 12; i++) {
        this.months.push({value: i + "月", label: i + "月"});
      }
    },
    initSelectDay(year, month) {
      var maxDay = this.getMaxDay(year, month);
      this.days = [];
      this.days.push({value: 0, label: "全部"});
      for (var i = 1; i <= maxDay; i++) {
        this.days.push({value: i + "日", label: i + "日"});
      }
    },
    cityChange() {
      console.log(this.selectedProv);
      this.listCity = this.allCity.filter(item => item.prov === this.selectedProv);
      console.log(this.listCity);
    },
    getMaxDay(year, month) {
      var new_year = year.slice(0,4);
      var new_month;
      console.log(new_year)
      switch (month) {
        case "1月": new_month = 1;break;
        case "2月": new_month = 2;break;
        case "3月": new_month = 3;break;
        case "4月": new_month = 4;break;
        case "5月": new_month = 5;break;
        case "6月": new_month = 6;break;
        case "7月": new_month = 7;break;
        case "8月": new_month = 8;break;
        case "9月": new_month = 9;break;
        case "10月": new_month = 10;break;
        case "11月": new_month = 11;break;
        case "12月": new_month = 12;break;
        default: new_month = 0;
      }
      if (month > 12) {
        new_month -= 12;
        new_year ++;
      }
      var new_date = new Date(new_year, new_month,1);
      return (new Date(new_date.getTime()-1000*60*60*24)).getDate();
    },
    dateChange(type) {
      if (type === 1 || type === 2) {
        if (this.monthsModel === 0) {
          this.daysModel = 0;
          this.initSelectDay(this.yearsModel, 1);
        } else {
          this.initSelectDay(this.yearsModel, this.monthsModel);
        }
      }
    },
    changeMale() {
      this.picked_male = true;
      this.picked_female = false;
      this.gendersModel = "男";
    },
    changeFemale() {
      this.picked_female = true;
      this.picked_male = false;
      this.gendersModel = "女";
    },
    submitForm() {
      this.$axios.post('http://1.117.107.95:8080/User/update?birth=' + this.yearsModel + '/' +
          this.monthsModel + '/' + this.daysModel + '&sex=' + this.gendersModel + '&education=' +
          this.educationsModel + '&city=' + this.selectedProv + '/' + this.selectedCity + '&signature=' +
          this.signature, {}).then((res) => {
        console.log(res.data)
      })
    },
    submitForm2() {
      this.$axios.post('http://1.117.107.95:8080/User/updatePassword?password=' +
          this.ruleForm2.checkPass, {}).then((res) => {
        console.log(res.data)
      })
    }
  },
  created() {
    this.init()
  }
}

</script>

<style scoped>
.info-container {
  background-color: white;
  width: 55%;
  margin-top: 30px;
  min-height: 700px;
}

.info-navigation {

  margin-top: 20px;
  margin-left: 40px;
}

.nav_text {
  margin: 0 40px 40px 0;
  color: rgb(180, 180, 180);
  font-size: 1.1em;
  cursor: pointer;
}

.nav_text_click {
  margin: 0 40px 40px 0;
  color: black;
  font-size: 1.1em;
}

.nav-hr {
  color: white;
  width: 100%;
  margin-left: 0;
  height: 2px;
  margin-top: 20px;
  background-color: rgb(230, 230, 230);
}

.nav-info-hr {
  color: black;
  width: 75px;
  margin-left: 40px;
  margin-top: -11px;
  height: 1px;
  background-color: black;
}

.nav-safety-hr {
  color: black;
  width: 75px;
  height: 1px;
  margin-left: 149px;
  margin-top: -12px;
  background-color: black;
}

.user-img {
  border-radius: 50%;
  height: 150px;
  width: 100px;
  margin: 60px auto 0;

}

.picture {
  height: 100px;
  width: 100px;
  border-radius: inherit;
}

.user-name {
  width: 70%;
  margin: -40px auto 0;
  text-align: center;

}
.user-name-ano {
  margin: 0 auto 0;
  text-align: center;
  font-size: large;
}

.detail-info {
  margin-top: 50px;
  margin-left: 10px;
}

.choose-date {
  display: flex;
}

.choose-date-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

.choose-edu {
  margin-top: 30px;
  display: flex;
}

.choose-edu-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

.choose-city {
  margin-top: 30px;
  display: flex;
}

.choose-city-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

.choose-gender {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
}

.choose-gender-p {
  color: rgb(120, 120, 120);
  padding-bottom: 10px;
  margin-right: 30px;
}

.gender-option {
  margin-right: 30px;
  margin-left: 6px;
}

.set-signature {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}

.set-signature-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

input {
  outline: none;
  border: none;
}

.input-signature {
  width: 100%;
  padding: 10px;
  margin-top: 5px;

}

.name {
  height: 50px;
  margin-top: 20px;
  background-color: white;
}

.user-name-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

.university {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}

.university-name {
  margin-top: 10px;
}

.university-p {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
}

.detail-info-p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.save {
  background-color: rgb(169, 191, 248);
  width: 90px;
  height: 26px;
  padding: 8px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.1em;
  letter-spacing: 4px;
  margin-left: 300px;
}
.content {
  margin-left: 50px;
}
.el-password {
  margin: 40px;
}
.set-password {
  color: rgb(120, 120, 120);
  padding-top: 10px;
  margin-right: 30px;
  margin-bottom: 20px;
  font-size: large;
  font-weight: bold;
}
</style>