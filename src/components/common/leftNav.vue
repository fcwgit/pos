<template>
  <div class="left-nav">
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
      class="tree">
    </el-tree>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '检查项目管理',
          children: [{
            label: '新建检查项目',
            id:'createProject'
          },{
            label: '管理检查项目',
            id:'queryProject'
          }
          ]
        }, {
          label: '检查机构库管理',
          children: [{
            label: '批量上传检查机构',
            id:'addBranch'
          }, {
            label: '管理检查机构库',
            id:'queryBranch'
          }]
        }, {
          label: '检查人员管理',
          children: [{
            label: '批量上传检查人员',
            id:'addUser'
          }, {
            label: '管理检查人员库',
            id:'queryUser'
          }]
        },{
          label: '系统用户管理',
          children: [{
            label: '新建用户',
            id:'addUser'
          }, {
            label: '修改用户',
            id:'queryUser'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        if(data.id != undefined){
          this.$router.push("/" + data.id);
        }
      }
    }
  };
</script>

<style>

.left-nav{
  color: #fff;
  font-size: 10px;;
  height: 100%;
  /* background-color:#1D8CE0; */
  float: left;
  width: 10%;
  border: 1px solid #20a0ff;
}

/* .tree{
  color: rgb(14, 13, 13);
  font-size: 10px;;
  background-color:#1D8CE0;
}
.el-tree-node__content{
  background-color: #1D8CE0;
}
.el-tree-node__content:hover{
  background-color: #1D8CE0;
}
.el-tree-node__label{
  background-color: #1D8CE0;
}
.el-tree-node__expand-icon{
  background-color: #1D8CE0;
} 
.el-icon-caret-right{
  background-color: #1D8CE0;
} 
.expanded{
  background-color: #1D8CE0;
} */
</style>
