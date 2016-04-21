import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_PROMOTION_LIST = 'GET_PROMOTION_LIST';
export const GET_PROMOTION_DETAIL = 'GET_PROMOTION_DETAIL';

export function getPromotionList() {
    return dispatch => {
        HttpRequest
        .get('/api/promotion/getList')
        .end((err, resp) => {
            console.log(resp.body);
            dispatch({
                type: GET_PROMOTION_LIST,
                data: resp.body,
            })
        })
    }
}

export function getPromotionDetail(id) {
    return dispatch => {
        HttpRequest
        .get('/api/promotion/getDetail?id='+id)
        .end((err, resp) => {
            dispatch({
                type: GET_PROMOTION_DETAIL,
                data: resp.body,
            })
        })
    }
}
