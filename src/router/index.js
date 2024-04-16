import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { 
            path: "/home", 
            redirect: "/"
        },
        { 
            path: "/", 
            component: HomeView
        },
        { 
            path: "/about", 
            component: AboutView
        },
        { 
            path: "/products", 
            component: ProductsView
        },
        {
            path: '/products/:price',
            name: 'productParams',
            component: ProductsView
        },
        {
            path: '/cart',
            component: CartView
        },
        {
            path: '/contact',
            component: ContactView
        },
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        }
    ]
});

export default router;