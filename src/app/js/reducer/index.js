import { combineReducers } from 'redux';
import userRe from './userRe';
import contactRe from './contactRe';
import promotionRe from './promotionRe';
import familyCaseRe from './familyCaseRe';
import imformationRe from './imformationRe';

const rootReducer = combineReducers({
    user: userRe,
    contact: contactRe,
    promotion: promotionRe,
    familyCase: familyCaseRe,
    imformation: imformationRe,
})

export default rootReducer;
