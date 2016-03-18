import { LOGIN } from '../action/userAc';

export default function (state={info: {}}, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {info: action.data});
        default:
            return state;

    }
}
