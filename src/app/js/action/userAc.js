export const LOGIN = "LOGIN";
import HttpRequest from 'superagent';

export function login() {
    return dispatch => {
        HttpRequest.get('/api/client/login')
                   .end((err, res)=>{
                       console.log(res)
                       dispatch({
                           type: LOGIN,
                           data: res.body
                       })
                   })
    }
}
