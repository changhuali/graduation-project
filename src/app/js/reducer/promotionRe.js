import {
    GET_PROMOTION_LIST,
    GET_PROMOTION_DETAIL,
} from '../action/promotionAc';

export default function(state = {list: {}, detail: {}}, action) {
    switch (action.type) {
        case GET_PROMOTION_LIST:
            return Object.assign({}, state, {list: action.data});
        case GET_PROMOTION_DETAIL:
            return Object.assign({}, state, {detail: action.data});
        default:
            return state;
    }
}
