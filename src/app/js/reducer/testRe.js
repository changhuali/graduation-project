import { TEST } from '../action/testAc';
import __assign from 'lodash/assign';

export default function (state={}, action) {
    switch(action.type) {
        case TEST:
            return Object.assign({}, state, {key: action.data});
        default:
            return state;

    }
}
