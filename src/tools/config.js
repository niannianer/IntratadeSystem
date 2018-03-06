/**
 * Created by DELL on 2018/3/6.
 */
let protocol = window.location.protocol;
/*dev env*/
let apiUrl = 'http://weixin-act.zj-hf.cn:6620';

/*test env*/
if (process.env.kingold == 'test'||1) {
    apiUrl = `${protocol}//weixin-test.zj-hf.cn`;
}

/*stage env*/
if (process.env.kingold == 'stage') {
    apiUrl = `${protocol}//pre-zj-weixin.zj-hf.cn`;
}
/*prod env*/
if (process.env.kingold == 'production') {
    apiUrl = `${protocol}//zj-weixin.zj-hf.cn`;
}

export default {
    apiUrl
}

