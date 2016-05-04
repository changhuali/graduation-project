import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_ONLINEDEMO_LIST = 'GET_ONLINEDEMO_LIST';

export function getOnlineDemoList(params) {
    return dispatch => {
        HttpRequest
        .get('/api/onlineDemo/getOnlineDemoList')
        .query(params)
        .end((err, resp) => {
            dispatch({
                type: GET_ONLINEDEMO_LIST,
                data: resp.body,
            })
        })
    }
}
