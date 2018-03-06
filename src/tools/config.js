/**
 * Created by DELL on 2017/6/5.
 */
let protocol = window.location.protocol;
export const telNumber = '400-640-3606';
export let appUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.zjinv.kingold&fromcase=40002';
let encrypt = false;
/*dev env*/
let apiUrl = 'http://weixin-act.zj-hf.cn:6620';
let baofooUrl = 'https://paytest.baofoo.com/baofoo-custody/custody/';
let baofooCallUrl = `${protocol}//notify-test.zj-hf.cn`;
let apiNode = `${protocol}//market-test.zj-hf.cn`;
let merchant_id = '100000675';
let terminal_id = '100000701';
let logUrl = 'http://39.106.42.180:50000';

/*test env*/
if (process.env.kingold == 'test'||1) {
    apiUrl = `${protocol}//weixin-test.zj-hf.cn`;
    baofooUrl = 'https://paytest.baofoo.com/baofoo-custody/custody/';
    baofooCallUrl = `${protocol}//notify-test.zj-hf.cn`;
    apiNode = `${protocol}//market-test.zj-hf.cn`;
    logUrl = 'https://ul-test.zj-hf.cn';
}
/*test2 env*/
if (process.env.kingold == 'test2') {
    apiUrl = `${protocol}//weixin-test2.zj-hf.cn`;
    baofooUrl = 'https://paytest.baofoo.com/baofoo-custody/custody/';
    baofooCallUrl = `${protocol}//notify-test2.zj-hf.cn`;
    apiNode = `${protocol}//market-test.zj-hf.cn`;
    logUrl = 'https://ul-test.zj-hf.cn';
}
/*stage env*/
if (process.env.kingold == 'stage') {
    apiUrl = `${protocol}//pre-zj-weixin.zj-hf.cn`;
    baofooUrl = 'https://pm.baofoo.com/custody/';
    baofooCallUrl = `${protocol}//pre-callme.zj-hf.cn`;
    apiNode = `${protocol}//market.zj-hf.cn`;
    logUrl = 'https://ul.zj-hf.cn';
    merchant_id = '1172380';
    terminal_id = '34865';
    encrypt = true;
}
/*prod env*/
if (process.env.kingold == 'production') {
    apiUrl = `${protocol}//zj-weixin.zj-hf.cn`;
    baofooUrl = 'https://pm.baofoo.com/custody/';
    baofooCallUrl = `${protocol}//callme.zj-hf.cn`;
    apiNode = `${protocol}//market.zj-hf.cn`;
    logUrl = 'https://ul.zj-hf.cn';
    merchant_id = '1177929';
    terminal_id = '35265';
    encrypt = true;
}
/* 兼容zj-wm.cn*/
let host = window.location.host;
if (host.indexOf('zj-wm.cn') > -1) {
    apiUrl = apiUrl.replace('zj-hf.cn', 'zj-wm.cn');
    window.localStorage.setItem('registerChannelCode', 'H5_market');
}
export default {
    apiUrl,
    baofooUrl,
    baofooCallUrl,
    apiNode,
    logUrl,
    merchant_id,
    terminal_id
}
/*
 * kingold key & IV
 * */
/* key 和 iv 密文*/
export const encryptKey = '6318cceeee91c45a7647faf7089623b32ac8e6bcb85b35dbaa5a5b1ef5baa2d12e7aa5c224012fadd7fd02866fd95626';
export const encryptIV = '00df13f4e31ded1854bbd9d23985f95e5f50e6e91711900221f8ab3be6bc6a35';
export let doEncrypt = encrypt;
