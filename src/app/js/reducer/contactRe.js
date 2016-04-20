import {
    CONTACT_US
} from '../action/contactAc';

export default function(state = {contactUs: {}}, action) {
    switch (action.type) {
        case CONTACT_US:
            return Object.assign({}, state, {contactUs: action.data});
        default:
            return state;
    }
}
