
import {createRouter,createWebHistory} from 'vue-router';


const routes = [
  {
    path:'/',
    name:'job',
    component: ()=>import('./components/Job.vue'),
  }  ,
  {
    path:'/profit',
    name:'profit',
    component:()=>import('./components/Profit.vue'),
  }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;