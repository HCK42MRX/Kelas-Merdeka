import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homepage.vue'
import Login from '../components/loginPage.vue'
import Register from '../components/registerPage.vue'

const routes = [
 { path: '/', component: Home, meta: {header : 1, footer : 1} },
 { path: '/login', component: Login },
 { path: '/register', component: Register },
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router