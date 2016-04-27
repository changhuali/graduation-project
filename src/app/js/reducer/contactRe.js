import {
    CONTACT_US,
    APPLY
} from '../action/contactAc';

export default function(state = {contactUs: {}, applyInfo: {}}, action) {
    switch (action.type) {
        case CONTACT_US:
            return Object.assign({}, state, {contactUs: action.data});
        case APPLY:
            return Object.assign({}, state, {applyInfo: action.data});
        default:
            return state;
    }
}
