import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homepage.vue'
import Login from '../components/loginPage.vue'
import Register from '../components/registerPage.vue'
import courseDetail from '../components/detail_course.vue'

const routes = [
 { path: '/', component: Home, meta: {header : 1, footer : 1} },
 { path: '/login', component: Login },
 { path: '/register', component: Register },
 { path: '/detail', component: courseDetail, meta:{header : 1, footer: 1} },
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router