import App from './App.vue';
import IndexBody from './components/IndexBody.vue';
import SelectCity from './components/SelectCity.vue';
import Register from './components/register/Register.vue';
import SignIn from './components/register/SignIn.vue';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/北京/index'
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/:city',
            component: App,
            props: true,
            children: [
                {
                    path: 'index',
                    component: IndexBody
                },
                {
                    path: '/select/city',
                    component: SelectCity
                }
            ]
        }
    ]
};