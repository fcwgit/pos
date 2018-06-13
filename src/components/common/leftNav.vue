<template>
    <div class="left-nav">
        <ul>
            <li @click="goHome">
                <!-- <i class="el-icon-news"></i> -->
                <div class="iconfont">
                    首页
                </div>
            </li>
            <li @click="queryProject">
                <!-- <i class="el-icon-search"></i> -->
                <div class="iconfont">查询</div>
            </li>
            <li @click="createProject">
                <!-- <i class="el-icon-plus"></i> -->
                <div class="iconfont">新增</div>
            </li>
            <li @click="transfer">
                <!-- <i class="el-icon-document"></i> -->
                <div class="iconfont">统计</div>
            </li>
            <li>
                <!-- <i class="el-icon-setting"></i> -->
                <div class="iconfont">设置</div>
            </li>
        </ul>
    </div>
</template>
 <script>
 export default {
     methods:{
         goHome(){
             this.$router.push('/home');
         },
         queryProject(){
             this.$router.push('/queryProject');
         },
         createProject(){
             this.$router.push('/createProject');
         },
         transfer(){
             this.$router.push('/transfer');
         }
     }
 }
 </script>
 <style>
    .left-nav{
        color: #fff;
        font-size: 10px;;
        height: 100%;
        background-color:#1D8CE0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-family: "Microsoft YaHei";
        font-size: 14px;
    }
    .left-nav ul{
        padding: 0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
        cursor: pointer;
    }
 </style>
 