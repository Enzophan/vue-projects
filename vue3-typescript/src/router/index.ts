import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import PockerRoom from "@/views/PockerRoom.vue"
// lazy-loaded
// const Profile = () => import("./components/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/home",
        redirect: '/'
    },
    {
        path: "/hooks",
        name: 'Hooks',
        component: () => import("@/views/Hooks.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/pocker",
        name: "Pocker",
        component: () => import('@/views/Pocker.vue')
    },
    {
        path: '/pocker/:id',
        name: 'PockerRoom',
        component: PockerRoom,
        beforeEnter: (to, _, next) => {
            const { id } = to.params
            if (Array.isArray(id)) {
                next({ path: '/error' })
                return
            }

            //   const index = parseInt(id)
            //   if (index < 0 || index >= facts.length) {
            //     next({ path: '/error' })
            //     return
            //   }

            next()
        }
    },
    // {
    //     path: "/admin",
    //     name: "admin",
    //     // lazy-loaded
    //     component: BoardAdmin,
    // },
    // {
    //     path: "/mod",
    //     name: "moderator",
    //     // lazy-loaded
    //     component: BoardModerator,
    // },
    // {
    //     path: "/user",
    //     name: "user",
    //     // lazy-loaded
    //     component: BoardUser,
    // },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: () => import('@/views/PageNotFound.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // const publicPages = ['/login', '/', '/register', '/pocker'];
    // const authRequired = !publicPages.includes(to.path);

    const privitePage = ['/profile'];
    const authRequired = privitePage.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;
