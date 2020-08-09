import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/Index.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./components/IndexBody.vue')
                },
                {
                    path: 'selectcity',
                    component: () => import('./components/SelectCity.vue')
                }
            ]
        },
        {
            path: '/signin',
            component: () => import('./components/register/SignIn.vue')
        },
        {
            path: '/register',
            component: () => import('./components/register/Register.vue')
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
});

export default router;