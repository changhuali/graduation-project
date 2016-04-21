import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';
import {message} from 'antd';
import __has from 'lodash/has';

export const CONTACT_US = 'CONTACT_US';

export function contactUs(params) {
    return dispatch => {
        HttpRequest
        .post('/api/contact/contactUs')
        .send(params)
        .end((err, resp) => {
            if(resp.ok) {
                message.success(resp.body.message);
            }else if(__has(resp.body, 'errorCode')) {
                message.error(resp.body.message);
            }
            dispatch({
                type: CONTACT_US,
                data: resp.body,
            })
        })
    }
}
