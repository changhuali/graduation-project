import {
    GET_IMFORMATION_LIST
} from '../action/imformationAc';

export default function(state = {list: {}}, action) {
    switch (action.type) {
        case GET_IMFORMATION_LIST:
            return Object.assign({}, state, {list: action.data});
        default:
            return state;
    }
}
