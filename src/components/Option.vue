<template>
  <div class="Option-container">
    <div class="head1">
      <h3>请选择你感兴趣的领域
        <span class="number-limit">（已选{{ option_num.option }}个）</span></h3>
      <hr>
    </div>
    <ul>
      <li v-for="(data,index) in options_classes" :key='index'>
        <p v-bind:class="{classes:!options_states[index].option,showClasses:options_states[index].option}"
           v-on:click="showOption(index)">
          {{ data.option }}
        </p>
      </li>
    </ul>

    <div class="head2">
      <h3>请选择你擅长的语言
        <span class="number-limit">（已选{{ lan_num.option }}个）</span></h3>
      <hr>
    </div>
    <ul>
      <li v-for="(data,index) in options_lan" :key='index'>
        <p v-bind:class="{classes:!lan_states[index].option,showClasses:lan_states[index].option}"
           v-on:click="showLan(index)">
          {{ data.option }}
        </p>
      </li>
    </ul>
    <div class="submit" v-on:click="submitTable">
      选好了
    </div>
  </div>
</template>

<script>
export default {
  name: "Option",
  data() {
    return {
      option_num: {"option": 0},
      lan_num: {"option": 0},
      options_states: [
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false}
      ],
      lan_states: [
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false},
        {"option": false}

      ],
      options_classes: [
        {"option": "数据结构"},
        {"option": "算法"},
        {"option": "操作系统"},
        {"option": "概率论"},
        {"option": "计算机系统"},
        {"option": "数据挖掘"},
        {"option": "信息检索"},
        {"option": "机器学习"},
        {"option": "深度学习"},
        {"option": "网络安全"},
        {"option": "计算机网络"},
        {"option": "linux编程"},

      ],
      options_lan: [
        {"option": "C语言"},
        {"option": "C++"},
        {"option": "java"},
        {"option": "python"},
        {"option": "Visual Basic"},
        {"option": "java script"},
        {"option": "html"},
      ]
    }
  },
  methods: {
    showOption(index) {
      this.options_states[index].option = !(this.options_states[index].option);
      if (this.options_states[index].option) {
        this.option_num.option = this.option_num.option + 1;

      } else this.option_num.option = this.option_num.option - 1;
    },
    showLan(index) {
      this.lan_states[index].option = !(this.lan_states[index].option);
      if (this.lan_states[index].option) {
        this.lan_num.option = this.lan_num.option + 1;

      } else this.lan_num.option = this.lan_num.option - 1;
    },
    submitTable() {
      var tag="";
      for (var i = 0;i < this.options_states.length;  i++) {
        if (this.options_states[i].option === true) {
          tag += this.options_classes[i].option;
          tag += "；";
        }
      }
      this.$axios.post('http://1.117.107.95:8080/User/tag?tag=' + tag,{
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log(res)
      })
      this.$emit('stepOver',true)
      this.$emit('submitTable', true)
    }
  }

}
</script>

<style scoped>
div.Option-container {
  position: fixed;
  width: 20cm;
  margin: 0 auto;
  top: 50px;
  left: 10cm;
  padding: 5px 40px;
  background: white;
  color: rgb(78, 78, 78);
  letter-spacing: 2px;
}

span.number-limit {
  color: rgb(141, 141, 141);
  font-size: smaller;
}

hr {
  color: rgb(250, 250, 250);
  height: 1px;
  background-color: rgb(200, 200, 200);

}

ul {
  width: 20cm;
  margin: 0 auto;
  padding: 0 35px 0 0;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

}

li {
  margin: 10px;
  flex: 0 0 16.6%;
  text-align: center;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 2em;
  font-size: smaller;
  cursor: pointer;
}

.classes {
  padding: 7px 0;
  margin: 0;
}

.classes:hover, .classes:active {
  background: rgb(135, 170, 249);
  border-radius: 2em;
  color: white;
}

.showClasses {
  padding: 7px 0;
  margin: 0;
  background: rgb(135, 170, 249);
  border-radius: 2em;
  color: white;
}

.submit {
  width: 3cm;
  border: 2px solid rgb(200, 200, 200);
  background: rgb(135, 170, 249);
  padding: 7px 0;
  margin: 0 auto;
  border-radius: 2em;
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>