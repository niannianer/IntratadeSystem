import Vue from 'vue';
import App from './App';
import router from './router';
import * as filters from './filters';
import FastClick from 'fastclick';
import _ from 'lodash/core';
import store from './store';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import 'flex.css/dist/flex.css';
import ZH from './translate/zh.js';
import EN from './translate/en.js';
import './less/base.less';

const i18n = new VueI18n({
    locale: 'en',    // 语言标识
    messages: {
        zh : ZH,
        en : EN
    }
});

_.forEach(filters, (fun, key) => {
    Vue.filter(key, fun);
});
new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
});
//store.dispatch('getBankInfo');

window.onload = () => {
    FastClick.attach(document.body);
};

