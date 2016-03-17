import { combineReducers } from 'redux';
import testRe from './testRe';
const rootReducer = combineReducers({
    test: testRe,
})

export default rootReducer;
