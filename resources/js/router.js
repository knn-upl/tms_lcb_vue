
import {createRouter,createWebHistory} from 'vue-router';


const routes = [
  {
    path:'/',
    name:'jobmain',
    component: ()=>import('./components/Job/Index.vue'),
  }  ,
  {
    path:'/job',
    name:'job',
    component: ()=>import('./components/Job/Job.vue'),
  }  ,
  
  {
    path:'/profit',
    name:'profit',
    component:()=>import('./components/profit/Profit.vue'),
  }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;