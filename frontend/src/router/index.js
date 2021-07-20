import {createRouter, createWebHistory} from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/UserProfile.vue'
import AdminProfile from '../views/AdminProfile.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: ['/home', '/index']
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/user_profile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/admin_profile',
        name: 'AdminProfile',
        component: AdminProfile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router 