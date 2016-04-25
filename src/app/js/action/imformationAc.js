import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const GET_IMFORMATION_LIST = 'GET_IMFORMATION_LIST';

export function getImformationList() {
    return dispatch => {
        HttpRequest
        .get('/api/imformation/list')
        .end((err, resp) => {
            dispatch({
                type: GET_IMFORMATION_LIST,
                data: resp.body,
            })
        })
    }
}
