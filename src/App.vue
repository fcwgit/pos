<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <i class="icon iconfont icon-dianpu"></i>
    <i class="icon iconfont icon-gongnengjianyi"></i>
    <i class="icon iconfont icon-shouji"></i> -->
    <!-- <leftNav></leftNav> -->
    <!-- <menu></menu> -->
    <router-view/>
    
  </div>
</template>

<script>  
// import leftNav from '@/components/common/leftNav'
// import menu from '@/components/page/Menu'
export default {
  name: 'App',
  // components:{
  //   leftNav
  // },
  mounted(){
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(h<950){
      h = 950;
    }
    document.getElementById("app").style.width = w + 'px';
    document.getElementById("app").style.height = h + 'px';
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: left; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* width: 1200px;*/
  height: 100%; 
}
.main{
  /* float: left; */
  width: 100%;
  /* background-color: #EFF2F7; */
  height: 100%;
  overflow: hidden;
  
}
</style>
