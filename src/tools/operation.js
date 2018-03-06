/**
 * Created by hekk on 2018/3/6.
 */
//设置页面标题
export let setTitle = (title) => {
    setTimeout(function () {
        //利用iframe的onload事件刷新页面
        document.title = title || '金疙瘩';
        var iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.onload = function () {
            setTimeout(function () {
                document.body.removeChild(iframe);
            }, 0);
        };
        document.body.appendChild(iframe);
    }, 0);
};


import $api from './api';

import  config from './config';

import $device from './device';
export let logout = () => {
    window.location.replace('/login');
};

let $operation = {
    setTitle
}
export default $operation;
export let remainTime = (end, now) => {
    let remainTime = (end - now) / 1000;
    if (isNaN(remainTime)) {
        return ''
    }
    if (remainTime < 0) {
        return '1分过期'
    }
    let day = Math.floor(remainTime / 3600 / 24);
    if (day > 0) {
        return day + '天过期'
    }
    let hours = Math.floor(remainTime / 60 / 60);
    if (hours > 0) {
        return hours + '小时过期'
    }
    let minutes = Math.floor(remainTime / 60);
    if ((remainTime / 60) < 1) {
        return '1分过期'
    }
    if (minutes > 0) {
        return minutes + '分过期'
    }
    return ''
};
let makeRandom = (len) => {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length = possible.length;
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * length));

    return text;
}
import {local} from './store';
export let getUuid = () => {
    if (local.getItem('randomUuid')) {
        return local.getItem('randomUuid');
    }
    let randomUuid = makeRandom(16);
    local.setItem('randomUuid', randomUuid);
    return randomUuid;

};
export let getDeviceID = () => {
    if (local.getItem('deviceID')) {
        return local.getItem('deviceID');
    }
    let deviceID = makeRandom(32);
    local.setItem('deviceID', deviceID);
    return deviceID;
};
import md5 from 'md5';
export let getAuthKey = (url) => {
    let key = md5(url + 'slat');
    return key;
};


