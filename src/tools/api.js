/*
 * Created by hekk on 2018/3/6.
 **/
import Promise from 'promise-polyfill'
import axios from 'axios'
import Vue from 'vue'
import {Indicator} from 'mint-ui';


// add to window
if (!window.Promise){
    window.Promise = Promise

}
//opreation
import {getDeviceID, getAuthKey } from './operation';
import  {logout} from './operation';


import 'whatwg-fetch';
import {local, session} from './store';
import $device from './device';
import config from './config';
let serverUrl = config.apiUrl;
let query = data => {
    let str = [];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] != 'object') {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent((data[key])));
            } else {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent((JSON.stringify(data[key]))));
            }
        }
    }
    return str.join('&');
};

let get = (path, data = {}, source = {}) => {
    data.t = new Date().getTime();
    data.deviceID = getDeviceID();
    data.callSystemID = '1003';
    let url = `${path}`;
    url = `${serverUrl + url}`;

    return axios({
        url,
        method: 'get',
        cancelToken: source.token || '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    }).then(response => {
        if (response.status == 200) {
            return response.data;
        }
        if (response.status == 503) {
            return {};
        }
        return {};
    }).then(data => {
        console.log(url);
        console.log(data);
        return data;

    }).catch(err => {
        console.error('error,--->', err);
        return {};
    });
};

let post = (path, data = {}, indicator = '') => {
    data.callSystemID = '1003';
    let url = `${serverUrl + path}`;
    Indicator.open(indicator);
    return axios({
        url,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params:{
            deviceID: getDeviceID()
        },
        withCredentials: true,
        data: query(data)
    }).then(response => {
        Indicator.close();
        if (response.status == 200) {
            return response.data
        }
        if (response.status == 503) {
            return {};
        }
        return {};
    }).then(data => {
        if (data.code == 401) {
            logout();
        }
        console.log(url);
        console.log(data);
        return data;
    }).catch(err => {
        Indicator.close();
        console.error('error,--->', err);
    });
};

const $api = {
    get,
    post,
    serverUrl
};
export default $api;
