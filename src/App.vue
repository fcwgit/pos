<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <i class="icon iconfont icon-dianpu"></i>
    <i class="icon iconfont icon-gongnengjianyi"></i>
    <i class="icon iconfont icon-shouji"></i> -->
    <leftNav></leftNav>
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  },
  mounted(){
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(w);
    // console.log(h);
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
  /* width: 1200px;
  height: 1000px; */
}
.main{
  float: left;
  width: 95%;
  background-color: #EFF2F7;
  height: 100%;
  overflow: hidden;
  
}
</style>
