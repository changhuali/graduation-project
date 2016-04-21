import { combineReducers } from 'redux';
import userRe from './userRe';
import contactRe from './contactRe';
import promotionRe from './promotionRe';

const rootReducer = combineReducers({
    user: userRe,
    contact: contactRe,
    promotion: promotionRe,
})

export default rootReducer;
