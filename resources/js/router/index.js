import { createWebHistory, createRouter } from 'vue-router';

import LandingPage from '../../views/Landing.vue';
import Complaints from '../../components/user/Complaints.vue';
import LoginComponent from '../../views/Login.vue';

import AdminLayout from '../../Layouts/AdminLayout.vue';
import DashboardPage from'../../components/admin/Dashboard.vue';
const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent,
  },
  {
    path: '/complaintform',
    name: 'complaintform',
    component: Complaints,
  },
  {
    path: '/admin',
    name: 'admin-layout',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard', 
        name: 'dashboard',
        component: DashboardPage,
      },
      
    ],
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
