/**
 * Created by hekk on 2018/3/6.
 */
'use strict';
import _ from 'lodash/core';
const mutations = {};

// 信息
mutations.setAccountBaofoo = (state, data) => {
    _.forEach(state, (value, key) => {
        if (data.hasOwnProperty(key)) {
            state[key] = data[key];
        }
    });
};
// 个人信息
mutations.setUserInfo = (state, data) => {
    if (data.userUuid) {
        _.forEach(state, (value, key) => {
            if (data.hasOwnProperty(key)) {
                state[key] = data[key];
            }
        });

    }

};
export default  mutations;
