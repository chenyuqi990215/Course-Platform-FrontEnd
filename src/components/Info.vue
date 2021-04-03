<template>
  <div class="info-container">
    <div class="info-navigation">
      <span :class="{nav_text:check_safety,nav_text_click:check_info}" v-on:click="changeInfo">个人资料</span>
      <span :class="{nav_text_click:check_safety,nav_text:check_info}" v-on:click="changeSafety">账号安全</span>
    </div>
    <hr class="nav-hr">
    <hr class="nav-info-hr" v-if="check_info">
    <hr class="nav-safety-hr" v-if="check_safety">
    <div class="content">
      <div class="user-img">
        <img class="picture" v-bind:src="user.portrait_url" alt="uer_img">

      </div>
      <div class="user-name">
        <p>{{ user.name }}</p>
      </div>
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
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="monthsModel" @change="dateChange(2)" placeholder="请选择" style="width:80px;">
              <el-option
                  v-for="item in months"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="daysModel" @change="dateChange(3)" placeholder="请选择" style="width:80px;">
              <el-option
                  v-for="item in days"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
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
</template>

<script>
import Data from "../entity/Data"
export default {
  name: "Info",
  data() {

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
      allCity: new Data().cities
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
      this.initSelectDay(year, month);
      this.yearsModel = year;
      this.monthsModel = month;
      this.daysModel = day;
      this.$axios.get('http://47.100.79.77:8080/User/getDetail', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        let n = res.data.indexOf("!DOCTYPE html");
        if (n >= 0) {
          console.log(n)
        } else {
          if (res.data[0].birth !== null && res.data[0].birth !== "") {
            this.yearsModel = res.data[0].birth.split('/')[0] + "年"
            this.monthsModel = res.data[0].birth.split('/')[1] + "月"
            this.daysModel = res.data[0].birth.split('/')[2] + "日"
          }
          if (res.data[0].education !== null && this.data[0].education !== "") {
            this.educationsModel =  this.data[0].education
          }
          if (res.data[0].city !== null && this.data[0].city !== "") {
            this.selectedProv = this.data[0].city.split('/')[0]
            this.selectedCity = this.data[0].city.split('/')[1]
          }
          if (res.data[0].sex !== null && this.data[0].sex !== "") {
            this.gendersModel = this.data[0].sex
            if (this.gendersModel === "男") {
              this.picked_male = true
              this.picked_female = false
            } else if (this.gendersModel === "女") {
              this.picked_female = true
              this.picked_male = false
            }
          }
          if (res.data[0].signature !== null && this.data[0].signature !== "") {
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
        this.years.push({value: (year - i), label: (year - i) + "年"});
      }
    },
    initSelectMonth() {
      this.months = [];
      this.months.push({value: 0, label: "全部"});
      for (let i = 1; i <= 12; i++) {
        this.months.push({value: i, label: i + "月"});
      }
    },
    initSelectDay(year, month) {
      var maxDay = this.getMaxDay(year, month);
      this.days = [];
      this.days.push({value: 0, label: "全部"});
      for (var i = 1; i <= maxDay; i++) {
        this.days.push({value: i, label: i + "日"});
      }
    },
    cityChange() {
      console.log(this.selectedProv);
      this.listCity = this.allCity.filter(item => item.prov === this.selectedProv);
      console.log(this.listCity);


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
      this.$axios.post('http://47.100.79.77:8080/User/update?birth=' + this.yearsModel + '/' + this.monthsModel + '/' + this.daysModel + '&sex=' + this.gendersModel + '&education=' + this.educationsModel + '&city=' + this.selectedProv + '/' + this.selectedCity + '&signature=' + this.signature, {}).then((res) => {
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
  margin-left: 0;
  margin-top: -11px;
  height: 1px;
  background-color: black;
}

.nav-safety-hr {
  color: black;
  width: 75px;
  height: 1px;
  margin-left: 109px;
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
</style>