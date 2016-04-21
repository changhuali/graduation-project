import {
    GET_FAMILYCASE_LIST,
} from '../action/familyCaseAc';

export default function(state = {list: {}}, action) {
    switch (action.type) {
        case GET_FAMILYCASE_LIST:
            return Object.assign({}, state, {list: action.data});
        default:
            return state;
    }
}
