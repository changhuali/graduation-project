import {
    GET_IMFORMATION_LIST,
    ADD_VIEW_NUM,
} from '../action/imformationAc';

export default function(state = {list: {}, addInfo: {}}, action) {
    switch (action.type) {
        case GET_IMFORMATION_LIST:
            return Object.assign({}, state, {list: action.data});
        case ADD_VIEW_NUM:
            return Object.assign({}, state, {addInfo: action.data});
        default:
            return state;
    }
}
