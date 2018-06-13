<template>
  <div>
    <el-row>
      <el-col :span="23">
        <div class="often-goods">
          <div class="title">创建项目</div>
          <div class="often-goods-list">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="检查项目名称" prop="name">
                <el-col :span="24">
                  <el-input v-model="ruleForm.name" ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="检查项目简介" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item label="检查年份" required>
                  <el-col :span="7">
                  <el-form-item prop="date1">
                      <!-- <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker> -->
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
                  </el-form-item>
                  </el-col>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "createProject",
  data() {
    return {
      ruleForm: {
        name: "",
        date1: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入项目名称", trigger: "blur" },
          { min: 3, max: 50, message: "长度在 3 到 50 个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写项目简介", trigger: "blur" }],
        author:[
          { required: true, message: "请重新登录", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          // console.log(this.ruleForm.name);
          this.$router.push('/conformProject/' + this.ruleForm.name + "/" + this.ruleForm.desc + "/" + this.ruleForm.date1);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  // mounted: function() {
  //   var orderHeight = document.body.clientHeight;
  //   document.getElementById("order-list").style.height = orderHeight + "px";

  //   // document.getElementById("ttttt").style.marginLeft=120+'px';
  // }
};
</script>

<style scoped>

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  /* text-align: left; */
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid#E5E9F2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}



</style>
