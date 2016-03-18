import { combineReducers } from 'redux';
import testRe from './testRe';
import userAc from './userRe';

const rootReducer = combineReducers({
    test: testRe,
    user: userAc,
})

export default rootReducer;
