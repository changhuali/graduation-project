import { LOGIN, CHECK_LOGIN, LOGOUT, RESET_INFO, REGIST, RESET_REGIST } from '../action/userAc';

export default function (state={info: {}, registInfo: {}}, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {info: action.data});
        case CHECK_LOGIN:
            return Object.assign({}, state, {info: action.data});
        case LOGOUT:
            return Object.assign({}, state, {info: action.data});
        case RESET_INFO:
            return Object.assign({}, state, {info: action.data});
        case REGIST:
            return Object.assign({}, state, {regist: action.data});
        case RESET_REGIST:
            return Object.assign({}, state, {regist: action.data});
        default:
            return state;

    }
}
