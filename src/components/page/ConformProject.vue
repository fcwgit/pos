<template>
  <div class="content">
    <!-- Hello AwesomePos Demo. -->
    <el-row>
      <el-col :span='13' class="pos-order" id="order-list">
        <el-tabs style="padding:5px"> 
          <el-tab-pane label="项目信息">
            <el-form label-width="120px" class="demo-ruleForm">
              <el-form-item label="检查项目名称" >
                <el-input v-model="projectName" :disabled="true">
                </el-input>
              </el-form-item>
              <el-form-item label="检查项目描述" >
                <!-- <el-input v-model="projectDesc" :disabled="true">
                </el-input> -->
                <el-input type="textarea" :rows="6" :disabled="true" v-model="projectDesc">
                </el-input>
              </el-form-item>
              <el-form-item label="检查年份" >
                <el-input v-model="projectDate" :disabled="true">
                </el-input>
              </el-form-item>
              <el-form-item label="检查对象" >
                <el-input v-model="projectTarget" :readonly="true" @click.native="showTransfer1">
                </el-input>
              </el-form-item>
              <el-form-item label="组长" >
                <el-input v-model="projectLeader" :readonly="true" @click.native="showTransfer2">
                </el-input>
              </el-form-item>
              <el-form-item label="主查" >
                <el-input v-model="projectMaster" :readonly="true" @click.native="showTransfer3">
                </el-input>
              </el-form-item>
              <el-form-item label="检查人员" >
                <el-input v-model="projectSlaver" :readonly="true" @click.native="showTransfer4">
                </el-input>
              </el-form-item>
            </el-form>

          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="11">
        <div style="width: 91 %;">
        <div id="transfer1">
          <el-tabs style="padding:5px">
            <el-tab-pane label="检查对象">
              <el-transfer
                filterable
                :filter-method="filterMethod"
                :titles="['资源库', '备选项']"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                height="150"
                size="small"
                :data="data2">1
              </el-transfer>


              <el-table :data="tableData" height="250" size="small">
                <!-- <el-table-column fixed prop="id" label="日期" width="150">
                </el-table-column> -->
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="post" label="职务" width="120">
                </el-table-column>
                <el-table-column prop="specialty" label="专长" width="120">
                </el-table-column>
                <el-table-column prop="right"
                  fixed="right"
                  label="权重"
                  >
                  <template  slot-scope="scope">
                    <el-select v-model="scope.row.right" placeholder="请选择" size="small" @click.native="handleClick(scope.row)" >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table>


            <div class="totalDiv" > 
              <small>数量：</small>{{value2.length}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>数量：</small><input size="mini" style=”width:5px;”></input>
            </div>
            <div class="div-btn" center>
              <el-button type="success" @click="checkout()">确认</el-button>
            </div>
            </el-tab-pane>
            
          </el-tabs>
          
          
          
        </div>



        <div id="transfer2">
          <el-tabs style="padding:5px">
            <el-tab-pane label="组长">
              <el-transfer
                filterable
                :filter-method="filterMethod"
                :titles="['资源库', '备选项']"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                height="150"
                size="small"
                :data="data2">
              </el-transfer>


              <el-table :data="tableData" height="250" size="small">
                <!-- <el-table-column fixed prop="id" label="日期" width="150">
                </el-table-column> -->
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="post" label="职务" width="120">
                </el-table-column>
                <el-table-column prop="specialty" label="专长" width="120">
                </el-table-column>
                <el-table-column prop="right"
                  fixed="right"
                  label="权重"
                  >
                  <template  slot-scope="scope">
                    <el-select v-model="scope.row.right" placeholder="请选择" size="small" @click.native="handleClick(scope.row)" >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <!-- <el-tabs style="padding:5px">
            <el-tab-pane label="机选" >
              
            </el-tab-pane>
          </el-tabs> -->
        </div>




        <div id="transfer3">
          <el-tabs style="padding:5px">
            <el-tab-pane label="主查">
              <el-transfer
                filterable
                :filter-method="filterMethod"
                :titles="['资源库', '备选项']"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                height="150"
                size="small"
                :data="data2">
              </el-transfer>


              <el-table :data="tableData" height="250" size="small">
                <!-- <el-table-column fixed prop="id" label="日期" width="150">
                </el-table-column> -->
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="post" label="职务" width="120">
                </el-table-column>
                <el-table-column prop="specialty" label="专长" width="120">
                </el-table-column>
                <el-table-column prop="right"
                  fixed="right"
                  label="权重"
                  >
                  <template  slot-scope="scope">
                    <el-select v-model="scope.row.right" placeholder="请选择" size="small" @click.native="handleClick(scope.row)" >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <!-- <el-tabs style="padding:5px">
            <el-tab-pane label="机选" >
              
            </el-tab-pane>
          </el-tabs> -->
        </div>


        <div id="transfer4">
          <el-tabs style="padding:5px">
            <el-tab-pane label="检查人员">
              <el-transfer
                filterable
                :filter-method="filterMethod"
                :titles="['资源库', '备选项']"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                height="150"
                size="small"
                :data="data2">
              </el-transfer>


              <el-table :data="tableData" height="250" size="small">
                <!-- <el-table-column fixed prop="id" label="日期" width="150">
                </el-table-column> -->
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="post" label="职务" width="120">
                </el-table-column>
                <el-table-column prop="specialty" label="专长" width="120">
                </el-table-column>
                <el-table-column prop="right"
                  fixed="right"
                  label="权重"
                  >
                  <template  slot-scope="scope">
                    <el-select v-model="scope.row.right" placeholder="请选择" size="small" @click.native="handleClick(scope.row)" >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <!-- <el-tabs style="padding:5px">
            <el-tab-pane label="机选" >
              
            </el-tab-pane>
          </el-tabs> -->
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
  name: "pos",
  data() {
    const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
    return {
      projectName: '',
      projectDesc: '',
      projectDate:'',
      projectTarget:'',
      projectLeader:'',
      projectMaster:'',
      projectSlaver:'',
      input11:'',
      input12:'',
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      tableData: [{
          id: '100001',
          name: '张三',
          post: '科长',
          specialty: 'Java',
          right:''
        }, {
          id: '100002',
          name: '李四',
          post: '股长',
          specialty: 'zookeeper',
          right:''
        }, 
        // {
        //   id: '100003',
        //   name: '王五',
        //   post: '局长',
        //   specialty: 'dubbo',
        //   right:''
        // }, {
        //   id: '100004',
        //   name: '赵六',
        //   post: '科长',
        //   specialty: 'SpringCloud',
        //   right:''
        // },{
        //   id: '100005',
        //   name: '张三',
        //   post: '科长',
        //   specialty: 'Java',
        //   right:''
        // }, {
        //   id: '100006',
        //   name: '李四',
        //   post: '股长',
        //   specialty: 'zookeeper',
        //   right:''
        // }, {
        //   id: '100007',
        //   name: '王五',
        //   post: '局长',
        //   specialty: 'dubbo',
        //   right:''
        // }, {
        //   id: '100008',
        //   name: '赵六',
        //   post: '科长',
        //   specialty: 'SpringCloud',
        //   right:''
        // }
        ],
        options: [{
          value: 1,
          label: '低级'
        }, {
          value: 2,
          label: '中级'
        }, {
          value: 3,
          label: '高级'
        }],
        value:''
    }
  },
  methods: {
    showTransfer1(){
      document.getElementById("transfer1").style.display="";
      document.getElementById("transfer2").style.display="none";
      document.getElementById("transfer3").style.display="none";
      document.getElementById("transfer4").style.display="none";
    },
    showTransfer2(){
      document.getElementById("transfer1").style.display="none";
      document.getElementById("transfer2").style.display="";
      document.getElementById("transfer3").style.display="none";
      document.getElementById("transfer4").style.display="none";
    },
    showTransfer3(){
      document.getElementById("transfer1").style.display="none";
      document.getElementById("transfer2").style.display="none";
      document.getElementById("transfer3").style.display="";
      document.getElementById("transfer4").style.display="none";
    },
    showTransfer4(){
      document.getElementById("transfer1").style.display="none";
      document.getElementById("transfer2").style.display="none";
      document.getElementById("transfer3").style.display="none";
      document.getElementById("transfer4").style.display="";
    },
    handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      showRender(){
        // console.log(this.value3.length);
        // console.log(this.value3);
        // console.log(this.value3[0]);
        // console.log(this.value3[1]);
        // console.log(this.value3[2]);
      },
      handleClick(row) {
        console.log(row);
        console.log(row.id);
        console.log(row.name);
      },
      checkout(){
      alert("成功");
    }
  },
  mounted:function(){
    this.projectName = this.$route.params.projectName;
    this.projectDesc = this.$route.params.projectDesc;
    this.projectDate = this.$route.params.projectDate;
    this.showTransfer1();
  }
    
}
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.content{
  /* padding: 2px; */
  /* margin: 2px; */
  border:1px solid #d3dce6;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}

.goods-type {
  clear: both;
}
/* 设置边距 */
.cookList {
  padding: 2px;
  margin: 2px;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv{
     background-color: #FFF;
     padding: 15px;
     border-bottom: 1px solid #d3dce6;
   }
.div-btn{
    margin-top: 10px;
    align-content: center;
  }

</style>

