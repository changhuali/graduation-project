export const LOGIN      = "LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const LOGOUT     = "LOGOUT";
export const RESET_INFO  = "RESET_INFO";
export const REGIST     = "REGIST";
export const RESET_REGIST = "RESET_REGIST"
import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';

export function login(params) {
    return dispatch => {
        HttpRequest
        .post('/api/client/login')
        .send(params)
        .end((err, resp) => {
            console.log(resp, "login()");
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
            console.log(resp, "logout");
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
            console.log(resp, "regist()");
            var data = interceptorAction(err, resp);
            dispatch({
               type: REGIST,
               data: data
            })
        })
    }
}
export function resetRegistInfo() {
    return dispatch => {
        dispatch({
            type: RESET_REGIST,
            data: {},
        })
    }
}
