import { combineReducers } from 'redux';
import userRe from './userRe';
import contactRe from './contactRe';
import promotionRe from './promotionRe';
import familyCaseRe from './familyCaseRe';
import imformationRe from './imformationRe';
import onlineDemoRe from './onlineDemoRe';

const rootReducer = combineReducers({
    user: userRe,
    contact: contactRe,
    promotion: promotionRe,
    familyCase: familyCaseRe,
    imformation: imformationRe,
    onlineDemo: onlineDemoRe,
})

export default rootReducer;
