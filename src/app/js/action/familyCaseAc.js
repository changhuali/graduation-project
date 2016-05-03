import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_FAMILYCASE_LIST = 'GET_FAMILYCASE_LIST';

export function getFamilyCaseList(params) {
    return dispatch => {
        HttpRequest
        .get('/api/family/caseList')
        .query(params)
        .end((err, resp) => {
            dispatch({
                type: GET_FAMILYCASE_LIST,
                data: resp.body,
            })
        })
    }
}
