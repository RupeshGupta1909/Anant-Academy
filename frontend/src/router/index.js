import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DemoRequestPage from '../views/DemoRequestPage.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import RefundPolicy from '../views/RefundPolicy.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import JoinAsTutor from '../views/JoinAsTutor.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/book-demo', name: 'book-demo', component: DemoRequestPage },
  { path: '/join-as-tutor', name: 'join-as-tutor', component: JoinAsTutor },
  { path: '/about-us', name: 'about-us', component: AboutUs },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy },
  { path: '/terms-of-service', name: 'terms-of-service', component: TermsOfService },
  { path: '/refund-policy', name: 'refund-policy', component: RefundPolicy },
  { path: '/admin/login', name: 'admin-login', component: AdminLogin },
  { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router


