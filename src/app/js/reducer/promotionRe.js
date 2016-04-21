import {
    GET_PROMOTION_LIST,
} from '../action/promotionAc';

export default function(state = {list: {}, detail: {}}, action) {
    switch (action.type) {
        case GET_PROMOTION_LIST:
            return Object.assign({}, state, {list: action.data});
        default:
            return state;
    }
}
