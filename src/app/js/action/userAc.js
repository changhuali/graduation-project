export const LOGIN       = "LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const LOGOUT      = "LOGOUT";
export const RESET_INFO  = "RESET_INFO";
export const REGIST      = "REGIST";
export const RESET_REGIST   = "RESET_REGIST";
export const GET_CHECK_CODE = 'GET_CHECK_CODE';
export const CHECK_PWD   = 'CHECK_PWD';
import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';

export function login(params) {
    return dispatch => {
        HttpRequest
        .post('/api/client/login')
        .send(params)
        .end((err, resp) => {
            var data = interceptorAction(err, resp);
            dispatch({
               type: LOGIN,
               data: data
            })
        })
    }
}

export function resetInfo() {
    return dispatch => {
        dispatch({
            type: RESET_INFO,
            data: {},
        })
    }
}

export function checkInfo () {
    return dispatch => {
        HttpRequest
        .get('/api/client/info')
        .end((err, resp) => {
            var data = interceptorAction(err, resp);
            dispatch({
                type: CHECK_LOGIN,
                data: data
            })
        })
    }
}

export function logout() {
    return dispatch => {
        HttpRequest
        .del('/api/client/logout')
        .end((err, resp) => {
            if(resp.ok) {
                message.success('退出成功');
            }else{
                message.error('退出失败')
            }
            dispatch({
                type: LOGOUT,
                data: {}
            })
            location.href = '/login';
        })
    }
}

export function regist(params) {
    return dispatch => {
        HttpRequest
        .post('/api/client/regist')
        .send(params)
        .end((err, resp) => {
            if (resp.ok) {
                message.success("注册成功");
            } else {
                message.error(resp.body.message);
            }
            var data = interceptorAction(err, resp);
            dispatch({
               type: REGIST,
               data: data
            })
        })
    }
}

export function getCheckCode(phone) {
    return dispatch => {
        HttpRequest
        .post('/api/client/checkCode')
        .send({phone: phone})
        .end((err, resp) => {
            dispatch({
                type: GET_CHECK_CODE,
                data: resp.body,
            });
        });
    };
}

export function checkPwd(pwd) {
    return dispatch => {
        HttpRequest
        .post('/api/client/checkpwd')
        .send({userPwd: pwd})
        .end((err, resp) => {
            dispatch({
                type: CHECK_PWD,
                data: resp.body,
            });
        });
    };
}

export function resetRegistInfo() {
    return dispatch => {
        dispatch({
            type: RESET_REGIST,
            data: {},
        })
    }
}
