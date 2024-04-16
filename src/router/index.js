import { createRouter, createWebHistory } from 'vue-router';
import { HomeView } from '@/views/HomeView.vue';

const router = createRouter( {
    history: createWebHistory(),
    routers: [
        { 
            path: "/", 
            component: HomeView
        }
    ]
});

export default router;