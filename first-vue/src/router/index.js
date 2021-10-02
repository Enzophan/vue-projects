import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/jobs', name: 'Jobs', component: Jobs },
    { path: '/jobs/:id', name: 'JobDetails', component: JobDetails, props: true },
    //redirect
    { path: '/all-jobs', redirect: '/jobs' },
    //catch all 44
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router