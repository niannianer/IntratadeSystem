import Vue from 'vue';
import store from '../store';
import Router from 'vue-router';
import {logout} from '../tools/operation';
Vue.use(Router)



const Index = () => import('../containers/Index');
const Test = () => import('../containers/Test');
const Login = () => import('../containers/Login');


import {setTitle} from '../tools/operation';
let beforeEach = ((to, from, next) => {
    if (store.state.userId) {
        next()
    } else {
        store.dispatch('getAccountBaofoo')
            .then(data => {
                if (data.code == '401') {
                    logout();
                } else {
                    next()
                }
            });
    }
})
let routes = [
    {
        path: '/index',
        name: 'index',
        meta: {
            title: 'index',
            withoutLogin: true

        },
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'login',
            withoutLogin: true
        },
        component: Test,
    },
     {
        path: '/test',
        name: 'test',
        meta: {
            title: 'test',
            withoutLogin: true
        },
        component: Test,
    }
];
routes.map(route => {
    if (route.beforeEnter) {
        return false;
    }
    route.beforeEnter = (to, from, next) => {
        let {meta} = to;
        let {title} = meta;
        setTitle(title);
        if (!route.meta.withoutLogin) {
            return beforeEach(to, from, next);
        } else {
            next();
        }
    };
});

routes.push({
    path: '*',
    redirect: '/index'
});
export default new Router({
    mode: 'history',
    routes
})
