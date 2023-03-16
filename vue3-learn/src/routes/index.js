import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const Dashboard = () => import('../pages/Dashboard');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            title: 'Dashboard',
        },
    },
    {
        path: '/about/:id',
        name: 'About',
        component: About,
        redirect: {
            name: 'About.AuthorProfile'
        },
        // https://router.vuejs.org/guide/essentials/redirect-and-alias.html
        children: [
            {
                alias: '',
                path: 'profile',
                name: 'About.AuthorProfile',
                component: () => import('../pages/AuthorProfile'),
            },
            {
                path: 'posts',
                name: 'About.AuthorPosts',
                component: () => import('../pages/AuthorPosts'),
            }
        ],
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/posts/:cid',
        name: 'Posts',
        component: () => import('../pages/Posts')
    },
    {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: () => import('../pages/NotFound')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes, //same --- > routes:routes
})
export default router
