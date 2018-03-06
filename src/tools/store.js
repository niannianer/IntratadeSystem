/**
 * Created by DELL on 2018/3/6.
 */
let session = {};
let local = {};
session.getItem = (key) => {
    if (window.sessionStorage.getItem(key)) {
        let val = window.sessionStorage.getItem(key);
        try {
            return JSON.parse(val);
        }
        catch (e) {
            return val;
        }

    }
    return '';

};
session.setItem = (key, value = '') => {
    if (typeof value === 'object') {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    else {
        window.sessionStorage.setItem(key, value);
    }
    return '';
};
session.removeItem = (key) => {
    if (!key) {
        return false;
    }
    window.sessionStorage.removeItem(key);
};
session.clear = () => {
    window.sessionStorage.clear();
};


local.getItem = (key) => {
    if (window.localStorage.getItem(key)) {
        let val = window.localStorage.getItem(key);
        try {
            return JSON.parse(val);
        }
        catch (e) {
            return val;
        }

    }
    return '';

};
local.setItem = (key, value = '') => {
    if (typeof value === 'object') {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    else {
        window.localStorage.setItem(key, value);
    }
    return '';
};
local.removeItem = (key) => {
    if (!key) {
        return false;
    }
    window.localStorage.removeItem(key);
};

local.clear = () => {
    window.localStorage.clear();
};
export {
    session,
    local
};
let store = {
    session,
    local
};
export  default store;
