import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_PROMOTION_LIST = 'GET_PROMOTION_LIST';

export function getPromotionList() {
    return dispatch => {
        HttpRequest
        .get('/api/promotion/promotionList')
        .end((err, resp) => {
            console.log(resp.body);
            dispatch({
                type: GET_PROMOTION_LIST,
                data: resp.body,
            })
        })
    }
}
