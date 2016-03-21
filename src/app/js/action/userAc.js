export const LOGIN = "LOGIN";
import HttpRequest from 'superagent';

export function login() {
    return dispatch => {
        HttpRequest.post('/api/client/login')
                .send({user: "1234"})
                   .end((err, resp)=>{
                       console.log(resp, "--")
                       dispatch({
                           type: LOGIN,
                           data: resp.body
                       })
                   })
    }
}
