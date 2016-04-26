import {
    GET_ONLINEDEMO_LIST
} from '../action/onlineDemoAc';

export default function(state = {list: {}}, action) {
    switch (action.type) {
        case GET_ONLINEDEMO_LIST:
            return Object.assign({}, state, {list: action.data});
        default:
            return state;
    }
}
