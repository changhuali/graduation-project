import { LOGIN, CHECK_LOGIN, LOGOUT, RESET_INFO, REGIST, RESET_REGIST, GET_CHECK_CODE, CHECK_PWD , CHANGE_PWD} from '../action/userAc';

export default function (state={info: {}, registInfo: {}, checkCode: {}, checkPwd: {}, changePwd: {}}, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {info: action.data});
        case CHECK_LOGIN:
            return Object.assign({}, state, {info: action.data});
        case LOGOUT:
            return Object.assign({}, state, {info: action.data});
        case GET_CHECK_CODE:
            return Object.assign({}, state, {checkCode: action.data});
        case RESET_INFO:
            return Object.assign({}, state, {info: action.data});
        case REGIST:
            return Object.assign({}, state, {registInfo: action.data});
        case RESET_REGIST:
            return Object.assign({}, state, {registInfo: action.data});
        case CHECK_PWD:
            return Object.assign({}, state, {checkPwd: action.data});
        case CHANGE_PWD:
            return Object.assign({}, state, {changePwd: action.data});
        default:
            return state;

    }
}
