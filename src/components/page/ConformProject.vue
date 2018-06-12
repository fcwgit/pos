<template>
  <div>
    <!-- Hello AwesomePos Demo. -->
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
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
                <el-input v-model="projectDate" :readonly="true" @click.native="showTransfer1">
                </el-input>
              </el-form-item>
              <el-form-item label="组长" >
                <el-input v-model="projectDate" :readonly="true" @click.native="showTransfer2">
                </el-input>
              </el-form-item>
              <el-form-item label="主查" >
                <el-input v-model="projectDate" :readonly="true" @click.native="showTransfer3">
                </el-input>
              </el-form-item>
              <el-form-item label="检查" >
                <el-input v-model="projectDate" :disabled="true" @click.native="showTransfer4">
                </el-input>
              </el-form-item>
            </el-form>

          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div id="transfer1">
          <el-tabs style="padding:5px">
            <el-tab-pane label="检查对象">
              <!-- <el-transfer
                style="text-align: left; display: inline-block;"
                v-model="value3"
                filterable
                  :render-content="renderFunc"
                :titles="['资源库', '备选项']"
                :button-texts="['到左边', '到右边']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                <el-button class="transfer-footer" slot="left-footer" size="small"></el-button>
                <el-button class="transfer-footer" slot="right-footer" size="small" @click="showRender">操作</el-button>
              </el-transfer> -->

              <el-transfer
              style="width:100%"
                filterable
                :filter-method="filterMethod"
                :titles="['资源库', '备选项']"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                height="150"
                size="small"
                :data="data2">
              </el-transfer>


              <el-table :data="tableData" border height="250" style="width: 100%;" size="small">
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
          <el-tabs style="padding:5px">
            <el-tab-pane label="机选" >
              
            </el-tab-pane>
          </el-tabs>
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
          right:1
        }, {
          id: '100002',
          name: '李四',
          post: '股长',
          specialty: 'zookeeper',
          right:1
        }, {
          id: '100003',
          name: '王五',
          post: '局长',
          specialty: 'dubbo',
          right:1
        }, {
          id: '100004',
          name: '赵六',
          post: '科长',
          specialty: 'SpringCloud',
          right:3
        },{
          id: '100001',
          name: '张三',
          post: '科长',
          specialty: 'Java',
          right:1
        }, {
          id: '100002',
          name: '李四',
          post: '股长',
          specialty: 'zookeeper',
          right:1
        }, {
          id: '100003',
          name: '王五',
          post: '局长',
          specialty: 'dubbo',
          right:2
        }, {
          id: '100004',
          name: '赵六',
          post: '科长',
          specialty: 'SpringCloud',
          right:2
        }],
        options: [{
          value: '1',
          label: '低级'
        }, {
          value: '2',
          label: '中级'
        }, {
          value: '3',
          label: '高级'
        }],
        value:''
    }
  },
  methods: {
    showTransfer1(){
      document.getElementById("transfer1").style.display="";
    },
    showTransfer2(){
      document.getElementById("transfer1").style.display="none";
    },
    showTransfer3(){
      document.getElementById("transfer1").style.display="none";
    },
    showTransfer4(){
      document.getElementById("transfer1").style.display="none";
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
      }
  },
  mounted:function(){
    this.projectName = this.$route.params.projectName;
    this.projectDesc = this.$route.params.projectDesc;
    this.projectDate = this.$route.params.projectDate;
  }
    
}
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
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

</style>

