import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_IMFORMATION_LIST = 'GET_IMFORMATION_LIST';
export const ADD_VIEW_NUM = 'ADD_VIEW_NUM';

export function getImformationList() {
    return dispatch => {
        HttpRequest
        .get('/api/imformation/newsList')
        .end((err, resp) => {
            dispatch({
                type: GET_IMFORMATION_LIST,
                data: resp.body,
            })
        })
    }
}
export function addViewNum(id) {
    return dispatch => {
        HttpRequest
        .put('/api/imformation/viewNum')
        .send({_id: id})
        .end((err, resp) => {
            dispatch({
                type: ADD_VIEW_NUM,
                data: resp.body,
            })
        })
    }
}
