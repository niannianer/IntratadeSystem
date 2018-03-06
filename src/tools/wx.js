/**
 * Created by DELL on 2018/3/6.
 */
import wx from 'weixin-js-sdk';
import $api from './api';
const logo = require('../images/logo.png');
let config = (share) => {
    wx.config({
        debug: false,
        appId: share.app_id,
        timestamp: parseInt(share.js_timestamp),
        nonceStr: share.js_nonce_str,
        signature: share.js_signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });
};
import $device from './device';
let getShare = (settings) => {
    let params = {
        url: window.location.href
    }
    if ($device.ios) {
        params.url = window.shareUrl;
    }
    let content = {
        title: settings.title || '分享标题',
        link: settings.link || window.location.href,
        imgUrl: logo,
        desc: settings.desc || '分享内容'
    }
    $api.get('/wechat/shareInfo', params)
        .then(data => {
            if (data.code == 200) {
                config(data.data.shareInfo);
                wx.ready(() => {
                    onMenuShareTimeline(content);
                    onMenuShareAppMessage(content);
                });
            }
        });
};
let onMenuShareTimeline = (content, $fn) => {
    wx.onMenuShareTimeline({
        title: content.title,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn();
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
let onMenuShareAppMessage = (content, $fn) => {
    wx.onMenuShareAppMessage({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn();
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
export  default {
    wx,
    config,
    getShare
}
