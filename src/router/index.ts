import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DataPage from '../components/DataPage.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', 
    component: HomePage },
    { path: '/data/:data', 
    component: DataPage,
     props: true }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;