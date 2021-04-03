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
        <p>{{user.name}}</p>
      </div>
      <div class="detail-info">
        <p class="detail-info-p">基本信息</p>
        <div class="name">
          <span class="user-name-p">昵称</span>
          <span class="user-name">{{user.name}}</span>
        </div>
        <div class="choose-gender">
          <div class="choose-gender-p">
            <span>性别</span>
          </div>
          <div id="myGender">
            <input  type="radio"  :checked="picked_male"  @click="changeMale" />
            <span class="gender-option">男</span>
            <input  type="radio"  :checked="picked_female"  @click="changeFemale" />
            <span class="gender-option">女</span>
          </div>
        </div>
        <div class="choose-date">
          <div class="choose-date-p">
            <span >出生日期</span>
          </div>
          <div id = "myDate" >
            <el-button icon="el-icon-caret-left"  @click="dateChange(4)" ></el-button>
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
            <el-button icon="el-icon-caret-right"   @click="dateChange(5)"  ></el-button>

          </div>
        </div>

        <div class="choose-edu">
          <div class="choose-edu-p">
            <span >学历</span>
          </div>
          <div id = "myEdu" >
            <el-select v-model="educationsModel"  placeholder="请选择" style="width:100px;">
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
          <span class="university-name">{{user.school}}</span>
        </div>

        <div class="choose-city">
          <div class="choose-city-p">
            <span >现居</span>
          </div>
          <div id = "myCity" >
            <el-select v-model="selectedProv"  @change="cityChange()" placeholder="请选择" style="width:100px;">
              <el-option
                  v-for="item in listProv"
                  :key="item.key"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>

            <el-select v-model="selectedCity"  placeholder="请选择" style="width:100px;">
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
            <span >个性签名</span>
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
export default {
name: "Info",
  data(){

  return{
    signature:"",
    picked_male:false,
    picked_female:false,
    gendersModel:"",
    check_info:true,
    check_safety:false,
    yearsModel:null,
    years:[],
    monthsModel:null,
    months:[],
    daysModel:null,
    days:[],
    educations:[
      {
        'edu':'初中'
      },
      {
        'edu':'高中'
      },
      {
        'edu':'本科',
      },
      {
        'edu':'硕士',
      },
      {
        'edu':'博士',
      },

    ],
    educationsModel:null,
    selectedProv:null,
    selectedCity:null,

    listProv:[
      {key:1,label:"北京市",value:"北京市"},

      {key:2, label:"天津市",value:"天津市"},

      {key:3, label:"河北省",value:"河北省"},

      {key:4, label:"山西省",value:"山西省"},

      {key:5, label:"内蒙古自治区",value:"内蒙古自治区"},

      {key:6, label:"辽宁省",value:"辽宁省"},

      {key:7, label:"吉林省",value:"吉林省"},

      {key:8, label:"黑龙江省",value:"黑龙江省"},

      {key:9, label:"上海市",value:"上海市"},

      {key:10, label:"江苏省",value:"江苏省"},

      {key:11, label:"浙江省",value:"浙江省"},

      {key:12, label:"安徽省",value:"安徽省"},

      {key:13, label:"福建省",value:"福建省"},

      {key:14, label:"江西省",value:"江西省"},

      {key:15, label:"山东省",value:"山东省"},

      {key:16, label:"河南省",value:"河南省"},

      {key:17, label:"湖北省",value:"湖北省"},

      {key:18, label:"湖南省",value:"湖南省"},

      {key:19, label:"广东省",value:"广东省"},

      {key:20, label:"广西壮族自治区",value:"广西壮族自治区"},

      {key:21, label:"海南省",value:"海南省"},

      {key:22, label:"重庆市",value:"重庆市"},

      {key:23, label:"四川省",value:"四川省"},

      {key:24, label:"贵州省",value:"贵州省"},

      {key:25, label:"云南省",value:"云南省"},

      {key:26, label:"西藏自治区",value:"西藏自治区"},

      {key:27, label:"陕西省",value:"陕西省"},

      {key:28, label:"甘肃省",value:"甘肃省"},

      {key:29, label:"青海省",value:"青海省"},

      {key:30, label:"宁夏回族自治区",value:"宁夏回族自治区"},

      {key:31, label:"新疆维吾尔自治区",value:"新疆维吾尔自治区"},

      {key:32, label:"台湾省",value:"台湾省"},

      {key:33, label:"香港特别行政区",value:"香港特别行政区"},

      {key:34, label:"澳门特别行政区",value:"澳门特别行政区"}

    ],
    listCity:[],
    allCity:[
      {
        key:1,

        prov:"北京市",

        label:"北京市"

      },{
        key:2,

        prov:"天津市",

        label:"天津市"

      },{
        key:3,

        prov:"河北省",

        label:"石家庄市"

      },{
        key:4,

        prov:"河北省",

        label:"唐山市"

      },{
        key:5,

        prov:"河北省",

        label:"秦皇岛市"

      },{
        key:6,

        prov:"河北省",

        label:"邯郸市"

      },{
        key:7,

        prov:"河北省",

        label:"邢台市"

      },{
        key:8,

        prov:"河北省",

        label:"保定市"

      },{
        key:9,

        prov:"河北省",

        label:"张家口市"

      },{
        key:10,

        prov:"河北省",

        label:"承德市"

      },{
        key:11,

        prov:"河北省",

        label:"沧州市"

      },{
        key:12,

        prov:"河北省",

        label:"廊坊市"

      },{
        key:13,

        prov:"河北省",

        label:"衡水市"

      },{

        key:14,

        prov:"山西省",

        label:"太原市"

      },{
        key:15,

        prov:"山西省",

        label:"大同市"

      },{
        key:16,

        prov:"山西省",

        label:"阳泉市"

      },{
        key:17,

        prov:"山西省",

        label:"长治市"

      },{
        key:18,

        prov:"山西省",

        label:"晋城市"

      },{
        key:19,

        prov:"山西省",

        label:"朔州市"

      },{
        key:20,

        prov:"山西省",

        label:"晋中市"

      },{
        key:21,

        prov:"山西省",

        label:"运城市"

      },{
        key:22,

        prov:"山西省",

        label:"忻州市"

      },{
        key:23,

        prov:"山西省",

        label:"临汾市"

      },{
        key:24,

        prov:"山西省",

        label:"吕梁市"

      },{
        key:25,

        prov:"内蒙古自治区",

        label:"呼和浩特市"

      },{
        key:26,

        prov:"内蒙古自治区",

        label:"包头市"

      },{
        key:27,

        prov:"内蒙古自治区",

        label:"乌海市"

      },{
        key:28,

        prov:"内蒙古自治区",

        label:"赤峰市"

      },{
        key:29,

        prov:"内蒙古自治区",

        label:"通辽市"

      },{
        key:30,

        prov:"内蒙古自治区",

        label:"鄂尔多斯市"

      },{
        key:31,

        prov:"内蒙古自治区",

        label:"呼伦贝尔市"

      },{
        key:32,

        prov:"内蒙古自治区",

        label:"巴彦淖尔市"

      },{
        key:33,

        prov:"内蒙古自治区",

        label:"乌兰察布市"

      },{
        key:34,

        prov:"内蒙古自治区",

        label:"兴安盟"

      },{
        key:35,

        prov:"内蒙古自治区",

        label:"锡林郭勒盟"

      },{
        key:36,

        prov:"内蒙古自治区",

        label:"阿拉善盟"

      },{
        key:37,

        prov:"辽宁省",

        label:"沈阳市"

      },{
        key:38,

        prov:"辽宁省",

        label:"大连市"

      },{
        key:39,

        prov:"辽宁省",

        label:"鞍山市"

      },{
        key:40,

        prov:"辽宁省",

        label:"抚顺市"

      },{
        key:41,

        prov:"辽宁省",

        label:"本溪市"

      },{
        key:42,

        prov:"辽宁省",

        label:"丹东市"

      },{
        key:43,

        prov:"辽宁省",

        label:"锦州市"

      },{
        key:44,

        prov:"辽宁省",

        label:"营口市"

      },{
        key:45,

        prov:"辽宁省",

        label:"阜新市"

      },{
        key:46,

        prov:"辽宁省",

        label:"辽阳市"

      },{
        key:47,

        prov:"辽宁省",

        label:"盘锦市"

      },{
        key:48,

        prov:"辽宁省",

        label:"铁岭市"

      },{
        key:49,

        prov:"辽宁省",

        label:"朝阳市"

      },{
        key:50,

        prov:"辽宁省",

        label:"葫芦岛市"

      },{
        key:51,

        prov:"吉林省",

        label:"长春市"

      },{
        key:52,

        prov:"吉林省",

        label:"吉林市"

      },{
        key:53,

        prov:"吉林省",

        label:"四平市"

      },{
        key:54,

        prov:"吉林省",

        label:"辽源市"

      },{
        key:55,

        prov:"吉林省",

        label:"通化市"

      },{
        key:56,

        prov:"吉林省",

        label:"白山市"

      },{
        key:57,

        prov:"吉林省",

        label:"松原市"

      },{
        key:58,

        prov:"吉林省",

        label:"白城市"

      },{
        key:59,

        prov:"吉林省",

        label:"延边朝鲜族自治州"

      },{
        key:60,

        prov:"黑龙江省",

        label:"哈尔滨市"

      },{
        key:61,

        prov:"黑龙江省",

        label:"齐齐哈尔市"

      },{
        key:62,

        prov:"黑龙江省",

        label:"鸡西市"

      },{
        key:63,

        prov:"黑龙江省",

        label:"鹤岗市"

      },{
        key:64,

        prov:"黑龙江省",

        label:"双鸭山市"

      },{
        key:65,

        prov:"黑龙江省",

        label:"大庆市"

      },{
        key:66,

        prov:"黑龙江省",

        label:"伊春市"

      },{
        key:67,

        prov:"黑龙江省",

        label:"佳木斯市"

      },{
        key:68,

        prov:"黑龙江省",

        label:"七台河市"

      },{
        key:69,

        prov:"黑龙江省",

        label:"牡丹江市"

      },{
        key:70,

        prov:"黑龙江省",

        label:"黑河市"

      },{
        key:71,

        prov:"黑龙江省",

        label:"绥化市"

      },{
        key:72,

        prov:"黑龙江省",

        label:"大兴安岭地区"

      },{
        key:73,

        prov:"上海市",

        label:"上海市"

      },{
        key:74,

        prov:"江苏省",

        label:"南京市"

      },{
        key:75,

        prov:"江苏省",

        label:"无锡市"

      },{
        key:76,

        prov:"江苏省",

        label:"徐州市"

      },{
        key:77,

        prov:"江苏省",

        label:"常州市"

      },{
        key:78,

        prov:"江苏省",

        label:"苏州市"

      },{
        key:79,

        prov:"江苏省",

        label:"南通市"

      },{
        key:80,

        prov:"江苏省",

        label:"连云港市"

      },{
        key:81,

        prov:"江苏省",

        label:"淮安市"

      },{
        key:82,

        prov:"江苏省",

        label:"盐城市"

      },{
        key:83,

        prov:"江苏省",

        label:"扬州市"

      },{
        key:84,

        prov:"江苏省",

        label:"镇江市"

      },{
        key:85,

        prov:"江苏省",

        label:"泰州市"

      },{
        key:86,

        prov:"江苏省",

        label:"宿迁市"

      },{
        key:87,

        prov:"浙江省",

        label:"杭州市"

      },{
        key:88,

        prov:"浙江省",

        label:"宁波市"

      },{
        key:89,

        prov:"浙江省",

        label:"温州市"

      },{
        key:90,

        prov:"浙江省",

        label:"嘉兴市"

      },{
        key:91,

        prov:"浙江省",

        label:"湖州市"

      },{
        key:92,

        prov:"浙江省",

        label:"绍兴市"

      },{
        key:93,

        prov:"浙江省",

        label:"金华市"

      },{
        key:94,

        prov:"浙江省",

        label:"衢州市"

      },{
        key:95,

        prov:"浙江省",

        label:"舟山市"

      },{
        key:96,

        prov:"浙江省",

        label:"台州市"

      },{
        key:97,

        prov:"浙江省",

        label:"丽水市"

      },{
        key:98,

        prov:"安徽省",

        label:"合肥市"

      },{
        key:99,

        prov:"安徽省",

        label:"芜湖市"

      },{
        key:100,

        prov:"安徽省",

        label:"蚌埠市"

      },{
        key:101,

        prov:"安徽省",

        label:"淮南市"

      },{
        key:102,

        prov:"安徽省",

        label:"马鞍山市"

      },{
        key:103,

        prov:"安徽省",

        label:"淮北市"

      },{
        key:104,

        prov:"安徽省",

        label:"铜陵市"

      },{
        key:105,

        prov:"安徽省",

        label:"安庆市"

      },{
        key:106,

        prov:"安徽省",

        label:"黄山市"

      },{
        key:107,

        prov:"安徽省",

        label:"滁州市"

      },{
        key:108,

        prov:"安徽省",

        label:"阜阳市"

      },{
        key:109,

        prov:"安徽省",

        label:"宿州市"

      },{
        key:110,

        prov:"安徽省",

        label:"六安市"

      },{
        key:111,

        prov:"安徽省",

        label:"亳州市"

      },{
        key:112,

        prov:"安徽省",

        label:"池州市"

      },{
        key:113,

        prov:"安徽省",

        label:"宣城市"

      },{
        key:114,

        prov:"福建省",

        label:"福州市"

      },{
        key:115,

        prov:"福建省",

        label:"厦门市"

      },{
        key:116,

        prov:"福建省",

        label:"莆田市"

      },{
        key:117,

        prov:"福建省",

        label:"三明市"

      },{
        key:118,

        prov:"福建省",

        label:"泉州市"

      },{
        key:119,

        prov:"福建省",

        label:"漳州市"

      },{
        key:120,

        prov:"福建省",

        label:"南平市"

      },{
        key:121,

        prov:"福建省",

        label:"龙岩市"

      },{
        key:122,

        prov:"福建省",

        label:"宁德市"

      },{
        key:123,

        prov:"江西省",

        label:"南昌市"

      },{
        key:124,

        prov:"江西省",

        label:"景德镇市"

      },{
        key:125,

        prov:"江西省",

        label:"萍乡市"

      },{
        key:126,

        prov:"江西省",

        label:"九江市"

      },{
        key:127,

        prov:"江西省",

        label:"新余市"

      },{
        key:128,

        prov:"江西省",

        label:"鹰潭市"

      },{
        key:129,

        prov:"江西省",

        label:"赣州市"

      },{
        key:130,

        prov:"江西省",

        label:"吉安市"

      },{
        key:131,

        prov:"江西省",

        label:"宜春市"

      },{
        key:132,

        prov:"江西省",

        label:"抚州市"

      },{
        key:133,

        prov:"江西省",

        label:"上饶市"

      },{
        key:134,

        prov:"山东省",

        label:"济南市"

      },{
        key:135,

        prov:"山东省",

        label:"青岛市"

      },{
        key:136,

        prov:"山东省",

        label:"淄博市"

      },{
        key:137,

        prov:"山东省",

        label:"枣庄市"

      },{
        key:138,

        prov:"山东省",

        label:"东营市"

      },{
        key:139,

        prov:"山东省",

        label:"烟台市"

      },{
        key:140,

        prov:"山东省",

        label:"潍坊市"

      },{
        key:141,

        prov:"山东省",

        label:"济宁市"

      },{
        key:142,

        prov:"山东省",

        label:"泰安市"

      },{
        key:143,

        prov:"山东省",

        label:"威海市"

      },{
        key:144,

        prov:"山东省",

        label:"日照市"

      },{
        key:145,

        prov:"山东省",

        label:"莱芜市"

      },{
        key:146,

        prov:"山东省",

        label:"临沂市"

      },{
        key:147,

        prov:"山东省",

        label:"德州市"

      },{
        key:148,

        prov:"山东省",

        label:"聊城市"

      },{
        key:149,

        prov:"山东省",

        label:"滨州市"

      },{
        key:150,

        prov:"山东省",

        label:"菏泽市"

      },{
        key:151,

        prov:"河南省",

        label:"郑州市"

      },{
        key:152,

        prov:"河南省",

        label:"开封市"

      },{
        key:153,

        prov:"河南省",

        label:"洛阳市"

      },{
        key:154,

        prov:"河南省",

        label:"平顶山市"

      },{
        key:155,

        prov:"河南省",

        label:"安阳市"

      },{
        key:156,

        prov:"河南省",

        label:"鹤壁市"

      },{
        key:157,

        prov:"河南省",

        label:"新乡市"

      },{
        key:158,

        prov:"河南省",

        label:"焦作市"

      },{
        key:159,

        prov:"河南省",

        label:"濮阳市"

      },{
        key:160,

        prov:"河南省",

        label:"许昌市"

      },{
        key:161,

        prov:"河南省",

        label:"漯河市"

      },{
        key:162,

        prov:"河南省",

        label:"三门峡市"

      },{
        key:163,

        prov:"河南省",

        label:"南阳市"

      },{
        key:164,

        prov:"河南省",

        label:"商丘市"

      },{
        key:165,

        prov:"河南省",

        label:"信阳市"

      },{
        key:166,

        prov:"河南省",

        label:"周口市"

      },{
        key:167,

        prov:"河南省",

        label:"驻马店市"

      },{
        key:168,

        prov:"河南省",

        label:"省直辖县级行政区划"

      },{
        key:169,

        prov:"湖北省",

        label:"武汉市"

      },{
        key:170,

        prov:"湖北省",

        label:"黄石市"

      },{
        key:171,

        prov:"湖北省",

        label:"十堰市"

      },{
        key:172,

        prov:"湖北省",

        label:"宜昌市"

      },{
        key:173,

        prov:"湖北省",

        label:"襄阳市"

      },{
        key:174,

        prov:"湖北省",

        label:"鄂州市"

      },{
        key:175,

        prov:"湖北省",

        label:"荆门市"

      },{
        key:176,

        prov:"湖北省",

        label:"孝感市"

      },{
        key:177,

        prov:"湖北省",

        label:"荆州市"

      },{
        key:178,

        prov:"湖北省",

        label:"黄冈市"

      },{
        key:179,

        prov:"湖北省",

        label:"咸宁市"

      },{
        key:180,

        prov:"湖北省",

        label:"随州市"

      },{
        key:181,

        prov:"湖北省",

        label:"恩施土家族苗族自治州"

      },{
        key:182,

        prov:"湖北省",

        label:"省直辖县级行政区划"

      },{
        key:183,

        prov:"湖北省",

        label:"仙桃市"

      },{
        key:184,

        prov:"湖北省",

        label:"潜江市"

      },{
        key:185,

        prov:"湖北省",

        label:"天门市"

      },{
        key:186,

        prov:"湖北省",

        label:"神农架林区"

      },{
        key:187,

        prov:"湖南省",

        label:"长沙市"

      },{
        key:188,

        prov:"湖南省",

        label:"株洲市"

      },{
        key:189,

        prov:"湖南省",

        label:"湘潭市"

      },{
        key:190,

        prov:"湖南省",

        label:"衡阳市"

      },{
        key:191,

        prov:"湖南省",

        label:"邵阳市"

      },{
        key:192,

        prov:"湖南省",

        label:"岳阳市"

      },{
        key:193,

        prov:"湖南省",

        label:"常德市"

      },{
        key:194,

        prov:"湖南省",

        label:"张家界市"

      },{
        key:195,

        prov:"湖南省",

        label:"益阳市"

      },{
        key:196,

        prov:"湖南省",

        label:"郴州市"

      },{
        key:197,

        prov:"湖南省",

        label:"永州市"

      },{
        key:198,

        prov:"湖南省",

        label:"怀化市"

      },{
        key:199,

        prov:"湖南省",

        label:"娄底市"

      },{
        key:200,

        prov:"湖南省",

        label:"湘西土家族苗族自治州"

      },{
        key:201,

        prov:"广东省",

        label:"广州市"

      },{
        key:202,

        prov:"广东省",

        label:"韶关市"

      },{
        key:203,

        prov:"广东省",

        label:"深圳市"

      },{
        key:204,

        prov:"广东省",

        label:"珠海市"

      },{
        key:205,

        prov:"广东省",

        label:"汕头市"

      },{
        key:206,

        prov:"广东省",

        label:"佛山市"

      },{
        key:207,

        prov:"广东省",

        label:"江门市"

      },{
        key:208,

        prov:"广东省",

        label:"湛江市"

      },{
        key:209,

        prov:"广东省",

        label:"茂名市"

      },{
        key:210,

        prov:"广东省",

        label:"肇庆市"

      },{
        key:211,

        prov:"广东省",

        label:"惠州市"

      },{
        key:212,

        prov:"广东省",

        label:"梅州市"

      },{
        key:213,

        prov:"广东省",

        label:"汕尾市"

      },{
        key:214,

        prov:"广东省",

        label:"河源市"

      },{
        key:215,

        prov:"广东省",

        label:"阳江市"

      },{
        key:216,

        prov:"广东省",

        label:"清远市"

      },{
        key:217,

        prov:"广东省",

        label:"东莞市"

      },{
        key:218,

        prov:"广东省",

        label:"中山市"

      },{
        key:219,

        prov:"广东省",

        label:"潮州市"

      },{
        key:220,

        prov:"广东省",

        label:"揭阳市"

      },{
        key:221,

        prov:"广东省",

        label:"云浮市"

      },{
        key:222,

        prov:"广西壮族自治区",

        label:"南宁市"

      },{
        key:223,

        prov:"广西壮族自治区",

        label:"柳州市"

      },{
        key:224,

        prov:"广西壮族自治区",

        label:"桂林市"

      },{
        key:225,

        prov:"广西壮族自治区",

        label:"梧州市"

      },{
        key:226,

        prov:"广西壮族自治区",

        label:"北海市"

      },{
        key:227,

        prov:"广西壮族自治区",

        label:"防城港市"

      },{
        key:228,

        prov:"广西壮族自治区",

        label:"钦州市"

      },{
        key:229,

        prov:"广西壮族自治区",

        label:"贵港市"

      },{
        key:230,

        prov:"广西壮族自治区",

        label:"玉林市"

      },{
        key:231,

        prov:"广西壮族自治区",

        label:"百色市"

      },{
        key:232,

        prov:"广西壮族自治区",

        label:"贺州市"

      },{
        key:233,

        prov:"广西壮族自治区",

        label:"河池市"

      },{
        key:234,

        prov:"广西壮族自治区",

        label:"来宾市"

      },{
        key:235,

        prov:"广西壮族自治区",

        label:"崇左市"

      },{
        key:236,

        prov:"海南省",

        label:"海口市"

      },{
        key:237,

        prov:"海南省",

        label:"三亚市"

      },{
        key:238,

        prov:"海南省",

        label:"三沙市"

      },{
        key:239,

        prov:"海南省",

        label:"省直辖县级行政区划"

      },{
        key:240,

        prov:"海南省",

        label:"五指山市"

      },{
        key:241,

        prov:"海南省",

        label:"琼海市"

      },{
        key:242,

        prov:"海南省",

        label:"儋州市"

      },{
        key:243,

        prov:"海南省",

        label:"文昌市"

      },{
        key:244,

        prov:"海南省",

        label:"万宁市"

      },{
        key:245,

        prov:"海南省",

        label:"东方市"

      },{
        key:246,

        prov:"海南省",

        label:"定安县"

      },{
        key:247,

        prov:"海南省",

        label:"屯昌县"

      },{
        key:248,

        prov:"海南省",

        label:"澄迈县"

      },{
        key:249,

        prov:"海南省",

        label:"临高县"

      },{
        key:250,

        prov:"海南省",

        label:"白沙黎族自治县"

      },{
        key:251,

        prov:"海南省",

        label:"昌江黎族自治县"

      },{
        key:252,

        prov:"海南省",

        label:"乐东黎族自治县"

      },{
        key:253,

        prov:"海南省",

        label:"陵水黎族自治县"

      },{
        key:254,

        prov:"海南省",

        label:"保亭黎族苗族自治县"

      },{
        key:255,

        prov:"海南省",

        label:"琼中黎族苗族自治县"

      },{
        key:256,

        prov:"重庆市",

        label:"重庆市"

      },{
        key:257,

        prov:"四川省",

        label:"成都市"

      },{
        key:258,

        prov:"四川省",

        label:"自贡市"

      },{
        key:259,

        prov:"四川省",

        label:"攀枝花市"

      },{
        key:260,

        prov:"四川省",

        label:"泸州市"

      },{
        key:261,

        prov:"四川省",

        label:"德阳市"

      },{
        key:262,

        prov:"四川省",

        label:"绵阳市"

      },{
        key:263,

        prov:"四川省",

        label:"广元市"

      },{
        key:264,

        prov:"四川省",

        label:"遂宁市"

      },{
        key:265,

        prov:"四川省",

        label:"内江市"

      },{
        key:266,

        prov:"四川省",

        label:"乐山市"

      },{
        key:267,

        prov:"四川省",

        label:"南充市"

      },{
        key:268,

        prov:"四川省",

        label:"眉山市"

      },{
        key:269,

        prov:"四川省",

        label:"宜宾市"

      },{
        key:270,

        prov:"四川省",

        label:"广安市"

      },{
        key:271,

        prov:"四川省",

        label:"达州市"

      },{
        key:272,

        prov:"四川省",

        label:"雅安市"

      },{
        key:273,

        prov:"四川省",

        label:"巴中市"

      },{
        key:274,

        prov:"四川省",

        label:"资阳市"

      },{
        key:275,

        prov:"四川省",

        label:"阿坝藏族羌族自治州"

      },{
        key:276,

        prov:"四川省",

        label:"甘孜藏族自治州"

      },{
        key:277,

        prov:"四川省",

        label:"凉山彝族自治州"

      },{
        key:278,

        prov:"贵州省",

        label:"贵阳市"

      },{
        key:279,

        prov:"贵州省",

        label:"六盘水市"

      },{
        key:280,

        prov:"贵州省",

        label:"遵义市"

      },{
        key:281,

        prov:"贵州省",

        label:"安顺市"

      },{
        key:282,

        prov:"贵州省",

        label:"毕节市"

      },{
        key:283,

        prov:"贵州省",

        label:"铜仁市"

      },{
        key:284,

        prov:"贵州省",

        label:"黔西南布依族苗族自治州"

      },{
        key:285,

        prov:"贵州省",

        label:"黔东南苗族侗族自治州"

      },{
        key:286,

        prov:"贵州省",

        label:"黔南布依族苗族自治州"

      },{
        key:287,

        prov:"云南省",

        label:"昆明市"

      },{
        key:288,

        prov:"云南省",

        label:"曲靖市"

      },{
        key:289,

        prov:"云南省",

        label:"玉溪市"

      },{
        key:290,

        prov:"云南省",

        label:"保山市"

      },{
        key:291,

        prov:"云南省",

        label:"昭通市"

      },{
        key:292,

        prov:"云南省",

        label:"丽江市"

      },{
        key:293,

        prov:"云南省",

        label:"普洱市"

      },{
        key:294,

        prov:"云南省",

        label:"临沧市"

      },{
        key:295,

        prov:"云南省",

        label:"楚雄彝族自治州"

      },{
        key:296,

        prov:"云南省",

        label:"红河哈尼族彝族自治州"

      },{
        key:297,

        prov:"云南省",

        label:"文山壮族苗族自治州"

      },{
        key:298,

        prov:"云南省",

        label:"西双版纳傣族自治州"

      },{
        key:299,

        prov:"云南省",

        label:"大理白族自治州"

      },{
        key:300,

        prov:"云南省",

        label:"德宏傣族景颇族自治州"

      },{
        key:301,

        prov:"云南省",

        label:"怒江傈僳族自治州"

      },{
        key:302,

        prov:"云南省",

        label:"迪庆藏族自治州"

      },{
        key:303,

        prov:"西藏自治区",

        label:"拉萨市"

      },{
        key:304,

        prov:"西藏自治区",

        label:"昌都地区"

      },{
        key:305,

        prov:"西藏自治区",

        label:"山南地区"

      },{
        key:306,

        prov:"西藏自治区",

        label:"日喀则地区"

      },{
        key:307,

        prov:"西藏自治区",

        label:"那曲地区"

      },{
        key:308,

        prov:"西藏自治区",

        label:"阿里地区"

      },{
        key:309,

        prov:"西藏自治区",

        label:"林芝地区"

      },{
        key:310,

        prov:"陕西省",

        label:"西安市"

      },{
        key:311,

        prov:"陕西省",

        label:"铜川市"

      },{
        key:312,

        prov:"陕西省",

        label:"宝鸡市"

      },{
        key:313,

        prov:"陕西省",

        label:"咸阳市"

      },{
        key:314,

        prov:"陕西省",

        label:"渭南市"

      },{
        key:315,

        prov:"陕西省",

        label:"延安市"

      },{
        key:316,

        prov:"陕西省",

        label:"汉中市"

      },{
        key:317,

        prov:"陕西省",

        label:"榆林市"

      },{
        key:318,

        prov:"陕西省",

        label:"安康市"

      },{
        key:319,

        prov:"陕西省",

        label:"商洛市"

      },{
        key:320,

        prov:"甘肃省",

        label:"兰州市"

      },{
        key:321,

        prov:"甘肃省",

        label:"嘉峪关市"

      },{
        key:322,

        prov:"甘肃省",

        label:"金昌市"

      },{
        key:323,

        prov:"甘肃省",

        label:"白银市"

      },{
        key:324,

        prov:"甘肃省",

        label:"天水市"

      },{
        key:325,

        prov:"甘肃省",

        label:"武威市"

      },{
        key:326,

        prov:"甘肃省",

        label:"张掖市"

      },{
        key:327,

        prov:"甘肃省",

        label:"平凉市"

      },{
        key:328,

        prov:"甘肃省",

        label:"酒泉市"

      },{
        key:329,

        prov:"甘肃省",

        label:"庆阳市"

      },{
        key:330,

        prov:"甘肃省",

        label:"定西市"

      },{
        key:331,

        prov:"甘肃省",

        label:"陇南市"

      },{
        key:332,

        prov:"甘肃省",

        label:"临夏回族自治州"

      },{
        key:333,

        prov:"甘肃省",

        label:"甘南藏族自治州"

      },{
        key:334,

        prov:"青海省",

        label:"西宁市"

      },{
        key:335,

        prov:"青海省",

        label:"海东市"

      },{
        key:336,

        prov:"青海省",

        label:"海北藏族自治州"

      },{
        key:337,

        prov:"青海省",

        label:"黄南藏族自治州"

      },{
        key:338,

        prov:"青海省",

        label:"海南藏族自治州"

      },{
        key:339,

        prov:"青海省",

        label:"果洛藏族自治州"

      },{
        key:340,

        prov:"青海省",

        label:"玉树藏族自治州"

      },{
        key:341,

        prov:"青海省",

        label:"海西蒙古族藏族自治州"

      },{
        key:342,

        prov:"宁夏回族自治区",

        label:"银川市"

      },{
        key:343,

        prov:"宁夏回族自治区",

        label:"石嘴山市"

      },{
        key:344,

        prov:"宁夏回族自治区",

        label:"吴忠市"

      },{
        key:345,

        prov:"宁夏回族自治区",

        label:"固原市"

      },{
        key:346,

        prov:"宁夏回族自治区",

        label:"中卫市"

      },{
        key:347,

        prov:"新疆维吾尔自治区",

        label:"乌鲁木齐市"

      },{
        key:348,

        prov:"新疆维吾尔自治区",

        label:"克拉玛依市"

      },{
        key:349,

        prov:"新疆维吾尔自治区",

        label:"吐鲁番地区"

      },{
        key:350,

        prov:"新疆维吾尔自治区",

        label:"哈密地区"

      },{
        key:351,

        prov:"新疆维吾尔自治区",

        label:"昌吉回族自治州"

      },{
        key:352,

        prov:"新疆维吾尔自治区",

        label:"博尔塔拉蒙古自治州"

      },{
        key:353,

        prov:"新疆维吾尔自治区",

        label:"巴音郭楞蒙古自治州"

      },{
        key:354,

        prov:"新疆维吾尔自治区",

        label:"阿克苏地区"

      },{
        key:355,

        prov:"新疆维吾尔自治区",

        label:"克孜勒苏柯尔克孜自治州"

      },{
        key:356,

        prov:"新疆维吾尔自治区",

        label:"喀什地区"

      },{
        key:357,

        prov:"新疆维吾尔自治区",

        label:"和田地区"

      },{
        key:358,

        prov:"新疆维吾尔自治区",

        label:"伊犁哈萨克自治州"

      },{
        key:359,

        prov:"新疆维吾尔自治区",

        label:"塔城地区"

      },{
        key:360,

        prov:"新疆维吾尔自治区",

        label:"阿勒泰地区"

      },{
        key:361,

        prov:"新疆维吾尔自治区",

        label:"自治区直辖县级行政区划"

      },{
        key:362,

        prov:"新疆维吾尔自治区",

        label:"石河子市"

      },{
        key:363,

        prov:"新疆维吾尔自治区",

        label:"阿拉尔市"

      },{
        key:364,

        prov:"新疆维吾尔自治区",

        label:"图木舒克市"

      },{
        key:365,

        prov:"新疆维吾尔自治区",

        label:"五家渠市"

      },{
        key:366,

        prov:"台湾省",

        label:"台北市"

      },{
        key:367,

        prov:"台湾省",

        label:"高雄市"

      },{
        key:368,

        prov:"台湾省",

        label:"基隆市"

      },{
        key:369,

        prov:"台湾省",

        label:"台中市"

      },{
        key:370,

        prov:"台湾省",

        label:"台南市"

      },{
        key:371,

        prov:"台湾省",

        label:"新竹市"

      },{
        key:372,

        prov:"台湾省",

        label:"嘉义市"

      },{
        key:373,

        prov:"台湾省",

        label:"省直辖"

      },{
        key:374,

        prov:"香港特别行政区",

        label:"香港岛"

      },{
        key:375,

        prov:"香港特别行政区",

        label:"九龙"

      },{
        key:376,

        prov:"香港特别行政区",

        label:"新界"

      },{
        key:377,

        prov:"澳门特别行政区",

        label:"澳门半岛"

      },{
        key:378,

        prov:"澳门特别行政区",

        label:"澳门离岛"

      },{
        key:379,

        prov:"澳门特别行政区",

        label:"无堂区划分区域"

      }
    ],
  }
  },
  props:{
  user:Object,
  },
  methods:{
  init(){

    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var month = myDate.getMonth()+1;//获取当前月
    var day = myDate.getDate();//获取当前日

    this.initSelectYear(year)
    this.initSelectMonth();
    this.initSelectDay(year,month);
    this.yearsModel = year;
    this.monthsModel = month;
    this.daysModel = day;
    let obj ={year:this.yearsModel,month:this.monthsModel,day:this.daysModel }
    this.$parent.dateChange(obj);
  },
  changeInfo:function(){
    this.check_info=true;
    this.check_safety=false;
  },
    changeSafety:function(){
      this.check_safety=true;
      this.check_info=false;
    },
    initSelectYear(year){
      this.years = [];
      for(let i=0;i<30;i++){
        this.years.push({value:(year - i),label:(year - i)+ "年"});
      }
    },
    initSelectMonth(){
      this.months = [];
      this.months.push({value:0,label:"全部"});
      for(let i=1;i<=12;i++){
        this.months.push({value:i,label:i+ "月"});
      }
    },
    initSelectDay(year,month){
      var maxDay = this.getMaxDay(year,month);
      this.days = [];
      this.days.push({value:0,label:"全部"});
      for(var i=1;i<=maxDay;i++){
        this.days.push({value:i,label:i+ "日"});
      }
    },
    cityChange(){
      console.log(this.selectedProv);
      this.listCity = this.allCity.filter(item => item.prov === this.selectedProv);
      console.log(this.listCity);


    },
    dateChange(type){
      //1年 2月 3日 4 左 5右
      if(type === 1||type === 2){
        if(this.monthsModel === 0){
          this.daysModel = 0;
          this.initSelectDay(this.yearsModel,1);
        }else{
          this.initSelectDay(this.yearsModel,this.monthsModel);
        }
      }
      if(type === 4){
        this.dayleft();
      }
      if(type === 5){
        this.dayright();
      }

      //操作父组件方法
      let obj ={year:this.yearsModel,month:this.monthsModel,day:this.daysModel }
      this.$parent.dateChange(obj);

    },
    dayleft(){

      var tmpYear = this.yearsModel;
      var tmpMonth =  this.monthsModel;
      var tmpDay = this.daysModel;
      if(tmpYear ==null){
        var myDate = new Date;
        var year = myDate.getFullYear();//获取当前年
        var month = myDate.getMonth()+1;//获取当前月
        var day = myDate.getDate();//获取当前日
        this.yearsModel = year;
        this.monthsModel = month;
        this.daysModel = day;
        return;
      }
      if(tmpMonth ==null){ tmpMonth = 0}
      if(tmpDay ==null){ tmpDay = 0}

      var yearV = tmpYear;
      var monthV = tmpMonth ;
      var dayV = tmpDay;

      if((tmpMonth === 0||tmpMonth === 1) && (tmpDay === 0||tmpDay === 1)){
        yearV = tmpYear  - 1; monthV = 12;
        dayV = this.getMaxDay(tmpYear,tmpMonth);
      }
      if(!(tmpMonth === 0||tmpMonth === 1) && (tmpDay === 0||tmpDay === 1)){
        monthV = tmpMonth - 1;
        dayV = this.getMaxDay(tmpYear,tmpMonth);
      }
      if((tmpMonth === 0||tmpMonth === 1) && !(tmpDay === 0||tmpDay === 1)){
        dayV = tmpDay - 1;
      }
      if(!(tmpMonth === 0||tmpMonth === 1) && !(tmpDay === 0||tmpDay === 1)){
        dayV = tmpDay - 1;
      }
      this.yearsModel = yearV;
      this.monthsModel = monthV;
      this.daysModel = dayV;
    },
    dayright(){

      var myDate = new Date;
      var year = myDate.getFullYear();//获取当前年
      var month = myDate.getMonth()+1;//获取当前月
      var day = myDate.getDate();//获取当前日

      var tmpYear = this.yearsModel;
      var tmpMonth =  this.monthsModel;
      var tmpDay = this.daysModel;

      if(tmpYear ==null){

        this.yearsModel = year;
        this.monthsModel = month;
        this.daysModel = day;
        return;
      }

      if(tmpMonth ==null){ tmpMonth = 0}
      if(tmpDay ==null){ tmpDay = 0}
      if(tmpYear>year){
        this.yearsModel = year;
        this.monthsModel = month;
        this.daysModel = day;
        return;
      }
      if(tmpYear === year){
        if((tmpMonth > month || tmpMonth ===0 )||(tmpMonth === month )&&(tmpDay >= day || tmpDay ===0)){
          this.yearsModel = year;
          this.monthsModel = month;
          this.daysModel = day;
          return;
        }
      }

      var maxDay = this.getMaxDay(tmpYear,tmpMonth);
      var yearV = tmpYear;
      var monthV = tmpMonth ;
      var dayV = tmpDay;

      if((tmpMonth === 0 || tmpMonth === 12) && (tmpDay === 0 || tmpDay === maxDay)){
        yearV = tmpYear  + 1; monthV = 1;
        dayV = 1;
      }
      if(!(tmpMonth === 0 || tmpMonth === 12) && (tmpDay === 0 || tmpDay === maxDay)){
        monthV = tmpMonth + 1;
        dayV = 1;
      }
      if(!(tmpMonth === 0 || tmpMonth === 12) && !(tmpDay === 0 || tmpDay === maxDay)){
        dayV = tmpDay + 1;
      }

      this.yearsModel = yearV;
      this.monthsModel = monthV;
      this.daysModel = dayV;

    },
    getMaxDay(year,month){
      var new_year = year;  //取当前的年份
      var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
      if(month>12)      //如果当前大于12月，则年份转到下一年
      {
        new_month -=12;    //月份减
        new_year++;      //年份增
      }
      var new_date = new Date(new_year,new_month,1);//取当年当月中的第一天
      return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
    },

    changeMale(){
    this.picked_male=true;
    this.picked_female=false;
    this.gendersModel="男";
    },
    changeFemale(){
      this.picked_female=true;
      this.picked_male=false;
      this.gendersModel="女";
    },
    submitForm() {
      this.$axios.post('http://47.100.79.77:8080/User/update?birth=' + this.yearsModel + '年/' + this.monthsModel + '月/' + this.daysModel + '日&sex=' + this.gendersModel + '&education=' + this.educationsModel + '&city=' + this.selectedProv + '/' + this.selectedCity + '&signature=' + this.signature, {}).then((res) => {
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
.info-container{
  background-color: white;
  width: 55%;
  margin-top: 30px;
  min-height: 700px;
}
.info-navigation{

  margin-top: 20px;
}
.nav_text{
  margin:0 40px 40px 0;
  color: rgb(180, 180, 180);
  font-size: 1.1em;
  cursor:pointer;
}
.nav_text_click{
  margin:0 40px 40px 0;
  color: black;
  font-size: 1.1em;
}
.nav-hr{
  color: white;
  width: 100%;
  margin-left: 0;
  height :2px;
  margin-top: 20px;
  background-color: rgb(230,230,230);
}
.nav-info-hr{
  color: black;
  width: 75px;
  margin-left: 0;
  margin-top: -11px;
  height:1px;
  background-color: black;
}
.nav-safety-hr{
  color: black;
  width: 75px;
  height: 1px;
  margin-left: 109px;
  margin-top: -12px;
  background-color: black;
}
.user-img{
  border-radius: 50%;
  height:150px;
  width:100px;
  margin: 60px auto 0;

}
.picture{
  height:100px;
  width:100px;
  border-radius: inherit;
}
.user-name{
  width:70%;
  margin:-40px auto 0;
  text-align: center;

}
.detail-info{
  margin-top: 50px;
  margin-left: 10px;
}
.choose-date{
  display:flex;
}
.choose-date-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
.choose-edu{
  margin-top: 30px;
  display:flex;
}
.choose-edu-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
.choose-city{
  margin-top: 30px;
  display:flex;
}
.choose-city-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
.choose-gender{
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
}
.choose-gender-p{
  color:rgb(120,120,120);
  padding-bottom: 10px;
  margin-right: 30px;
}
.gender-option{
  margin-right: 30px;
  margin-left: 6px;
}
.set-signature{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}
.set-signature-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
input{
  outline: none;
  border:none;
}
.input-signature{
  width: 100%;
  padding: 10px;
  margin-top: 5px;

}
.name{
  height:50px;
  margin-top: 20px;
  background-color: white;
}
.user-name-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
.university{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}
.university-name{
  margin-top: 10px;
}
.university-p{
  color:rgb(120,120,120);
  padding-top: 10px;
  margin-right: 30px;
}
.detail-info-p{
  font-size: 1.2em;
  margin-bottom: 40px;
}
.save{
  background-color:rgb(169,191,248) ;
  width:90px;
  height:26px;
  padding:8px;
  text-align: center;
  color:white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.1em;
  letter-spacing: 4px;
  margin-left: 300px;
}
</style>