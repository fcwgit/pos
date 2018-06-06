<template>
  <div class="pos">
    <!-- Hello AwesomePos Demo. -->
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs style="padding:5px">
          <el-tab-pane label="点餐">
            <el-table border style="width:100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称">

              </el-table-column>
              <el-table-column prop="count" label="数量" width="50">

              </el-table-column>
              <el-table-column prop="price" label="金额" width="70">

              </el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}}    &nbsp;&nbsp;&nbsp;&nbsp;  <small>金额：</small>{{totalMoney}}元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)" style="cursor: pointer;">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs style="padding:5px">
            <!-- <el-tab-pane disabled="true">
            
            </el-tab-pane> -->
            <el-tab-pane label="汉堡" >
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食" >
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data(){
    return{
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney:0,
      totalCount:0
    }
  },
  mounted:function(){
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height=orderHeight + 'px';

    // document.getElementById("ttttt").style.marginLeft=120+'px';
  },
  created:function(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
      this.oftenGoods=response.data;
    })
    .catch(error=>{
      alert("网络错误，不能访问");
    })

    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      this.type0Goods=response.data[0];
      this.type1Goods=response.data[1];
      this.type2Goods=response.data[2];
      this.type3Goods=response.data[3];
    })
    .catch(error=>{
      alert("网络错误，不能访问");
    })
  },
  methods:{
    addOrderList(goods){
      this.totalMoney = 0;
      this.totalCount = 0;

      let isHave = false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave = true;
        }
      }

      if(isHave){
        let arr = this.tableData.filter(a=>a.goodsId==goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        }
        this.tableData.push(newGoods);
      }
      // this.tableData.forEach((element)=>{
      //   this.totalCount += element.count;
      //   this.totalMoney = this.totalMoney + element.price * element.count;
      // })
      this.getAllMoney();
    },
    delSingleGoods(goods){
      this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    delAllGoods(){
      this.tableData = [];
      this.totalMoney = 0;
      this.totalCount = 0;
    },
    getAllMoney(){
      this.totalMoney = 0;
      this.totalCount = 0;
      if(this.tableData){
        this.tableData.forEach((element)=>{
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
    // 模拟结账
    checkout(){
      if(this.totalCount != 0){
        this.tableData = [];
        this.totalMoney = 0;
        this.totalCount = 0;
        this.$message({
          message:'结账成功',
          type:'success'
        })
      }else{
        this.$message.error('不能空结');
      }
    }
  }
}
</script>

<style scoped>
  .pos-order{
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
  }
  .div-btn{
    margin-top: 10px;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
  }
  .often-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid#E5E9F2;
    padding: 10px;
    margin: 10px;
    background-color: #FFF;
  }
  .o-price{
    color: #58B7FF;
  }
  .goods-type{
    clear: both;
  }
  /* 设置边距 */
  .cookList{
    padding: 2px;
    margin: 2px;
    
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
        cursor: pointer;
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 16px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   .totalDiv{
     background-color: #FFF;
     padding: 10px;
     border-bottom: 1px solid #d3dce6;
   }
</style>
