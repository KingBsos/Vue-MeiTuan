import IndexBody from './components/IndexBody.vue';
import SelectCity from './components/SelectCity.vue';

export default {
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: IndexBody
        },
        {
            path: '/select/city',
            component: SelectCity
        }
    ]
};