<template>
  <div class="left-nav">
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '项目管理',
          children: [{
            label: '新建项目',
            id:'createProject'
          },{
            label: '查询项目',
            id:'queryProject'
          }
          ]
        }, {
          label: '机构管理',
          children: [{
            label: '添加机构',
            id:'addBranch'
          }, {
            label: '查询机构',
            id:'queryBranch'
          }]
        }, {
          label: '用户管理',
          children: [{
            label: '新增管理员',
            id:'addUser'
          }, {
            label: '查询管理员',
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
  width: 10%;
  border: 1px solid #20a0ff;
  margin: 0;
}
</style>
