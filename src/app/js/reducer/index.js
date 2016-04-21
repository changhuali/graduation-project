import { combineReducers } from 'redux';
import userRe from './userRe';
import contactRe from './contactRe';
import promotionRe from './promotionRe';
import familyCaseRe from './familyCaseRe';

const rootReducer = combineReducers({
    user: userRe,
    contact: contactRe,
    promotion: promotionRe,
    familyCase: familyCaseRe,
})

export default rootReducer;
