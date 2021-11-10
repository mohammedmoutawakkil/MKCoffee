import { createRouter, createWebHistory } from "vue-router";
import index from '../layouts/index.vue'

const routes = [{
    path: '/',
    name: 'index',
    component: index,
    children: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('../views/Home')
        }, {
            path: '/About',
            name: 'About',
            component: () =>
                import ('../views/About')
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: () =>
                import ('../views/Contact')
        }
    ]
}, ];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;