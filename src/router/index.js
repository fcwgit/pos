import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Home from '@/components/page/Home'
import CreateProject from '@/components/page/CreateProject'
import Transfer from '@/components/page/Transfer'
import ConformProject from '@/components/page/ConformProject'
import QueryProject from '@/components/page/QueryProject'
import ModifyProject from '@/components/page/ModifyProject'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },{
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
    }
  ]
})
