import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Home from '@/components/page/Home'
import CreateProject from '@/components/page/CreateProject'
import Transfer from '@/components/page/Transfer'
import ConformProject from '@/components/page/ConformProject'
import QueryProject from '@/components/page/QueryProject'
import ModifyProject from '@/components/page/ModifyProject'
import DetailProject from '@/components/page/DetailProject'
import Login from '@/components/page/Login'
import Menu from '@/components/page/Menu'
import QueryBranch from '@/components/page/QueryBranch'
import DetailBranch from '@/components/page/DetailBranch'
import ModifyBranch from '@/components/page/ModifyBranch'
import QueryUser from '@/components/page/QueryUser'
import DetailUser from '@/components/page/DetailUser'
import ModifyUser from '@/components/page/ModifyUser';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },{
      path:'/createProject',
      component:CreateProject
    },{
      path:'/transfer',
      component:Transfer
    },{
      path:'/conformProject/:projectName/:projectDesc/:projectDate',
      name:'Parmas',
      component:ConformProject
    },{
      path:'/queryProject',
      component:QueryProject
    },{
      path:'/modifyProject',
      component:ModifyProject
    },{
      path:'/detailProject',
      component:DetailProject
    },{
      path:'/menu',
      component:Menu
    },{
      path:'/',
      component:Login
    },{
      path:'/queryBranch',
      component:QueryBranch
    },{
      path:'/detailBranch',
      component:DetailBranch
    },{
      path:'/modifyBranch',
      component:ModifyBranch
    },{
      path:'/queryUser',
      component:QueryUser
    },{
      path:'/detailUser',
      component:DetailUser
    },{
      path:'/modifyUser',
      component:ModifyUser
    }
  ]
})
