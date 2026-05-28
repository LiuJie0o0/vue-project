import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router