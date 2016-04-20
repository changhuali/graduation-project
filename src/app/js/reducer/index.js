import { combineReducers } from 'redux';
import userRe from './userRe';
import contactRe from './contactRe';

const rootReducer = combineReducers({
    user: userRe,
    contact: contactRe,
})

export default rootReducer;
