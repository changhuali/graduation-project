import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_FAMILYCASE_LIST = 'GET_FAMILYCASE_LIST';

export function getFamilyCaseList() {
    return dispatch => {
        HttpRequest
        .get('/api/family/caseList')
        .end((err, resp) => {
            dispatch({
                type: GET_FAMILYCASE_LIST,
                data: resp.body,
            })
        })
    }
}
