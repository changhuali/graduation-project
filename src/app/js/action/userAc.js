export const LOGIN = "LOGIN";
import HttpRequest from 'superagent';
import interceptorAction from './interceptorAction';

export function login(params) {
    return dispatch => {
        HttpRequest.post('/api/client/login')
                .send(params)
                   .end((err, resp)=>{
                       console.log(resp, "--")
                       var data = interceptorAction(err, resp);
                       dispatch({
                           type: LOGIN,
                           data: data
                       })
                   })
    }
}
